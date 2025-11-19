import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { NextAuthOptions } from "next-auth"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

// const decipherPassword = (hashedPassword: string, shift: number) => {
//      let result = "";
//   shift = shift % 128; // Keep shift within ASCII range

//   for (let char of hashedPassword) {
//     // Reverse shift within printable ASCII range (32-126)
//     let asciiVal = char.charCodeAt(0);
//     let newAscii = ((asciiVal - 32 - shift + 95) % 95) + 32;
//     result += String.fromCharCode(newAscii);
//   }

//   return result;
// }

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