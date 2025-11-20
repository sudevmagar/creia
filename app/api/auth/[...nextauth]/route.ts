import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import { PrismaClient } from "@prisma/client"
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
    }
  }
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials: Record<"email" | "password", string> | undefined, req: any) {
                if (!credentials) {
                    return null
                }
                const email = credentials.email.toLowerCase()
                const password = credentials.password

                if(!email || !password) {
                    throw new Error("Email and Password are required")
                }

                const user = await prisma.user.findUnique({
                    where: { email },
                })

                if (!user) {
                    throw new Error("No user found with the given email")
                }

                // const decryptedPassword = decipherPassword(user.password, 3)
                const isValid = await bcrypt.compare(password, user.password);


                if (!isValid) {
                  throw new Error("Invalid email or password");
                }
                return { id: user.id.toString(), email }
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.email = user.email
            }
            return token
        },

        async session({ session, token }) {
            if (token) {
                session.user.id = token.id as string
                session.user.email = token.email as string
            }
            return session
        },
    },
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
        maxAge: 14 * 24 * 60 * 60,
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }