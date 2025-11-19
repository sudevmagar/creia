import { hashPassword } from "@/lib/hash";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try{
        const {name,email,password} = await req.json();

        // Validate required fields
        if(!name || !email || !password){
            return NextResponse.json({message:"Missing required fields"}, {status:400});
        }

        //Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where:{
                email:email
            }
        });

        if(existingUser){
            return NextResponse.json({message:"User already exists"}, {status:409});
        }

        // Hash password
        const hashedPassword = await hashPassword(password);

        // Create new user
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        })

        return NextResponse.json({message:"User created successfully", userId: newUser.id}, {status:201});
    } catch (error){
        console.error("Error during signup:", error);
        return NextResponse.json({message:"Internal Server Error"}, {status:500});
    }
}