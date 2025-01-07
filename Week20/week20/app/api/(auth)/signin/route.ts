import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req : NextRequest) {
    try {
        const {email, password} = await req.json();
        if (!email || !password) {
            throw {
                message : "Email and Password is required"
            }
        }
        const token = jwt.sign({email}, "manikmaity", {expiresIn : "1d"});
        return NextResponse.json({
            status : 200,
            message : "Signin successful",
            data : {token}
        })
    }
    catch(error : any) {
        return NextResponse.json({
            status : 500,
            message : error.message,
            data : null
        }, {status : 500})
    }
}