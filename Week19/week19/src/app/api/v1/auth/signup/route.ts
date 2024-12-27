import prisma from "@/app/api/config/db.config";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req : NextRequest) {
    try{
        const {email, password} = await req.json();

        const user = await prisma.user.create({
            data: {
                email : email,
                password : password
            }
        })
        
        return NextResponse.json({
            message: "User created successfully",
            data: user
        });
    }
    catch(error){
        return NextResponse.json({
            message: "Error creating user",
            error: error
        },
        {status: 500}
    
    );
    }
    
}