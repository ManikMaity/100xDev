import { getUserByEmail } from "@/repository/user.repo";
import { compareSync } from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@/config/server.config";
import { handleError } from "../signup/route";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        if (!body.email || !body.password) {
            return NextResponse.json({
                message: "Missing required fields",
                error: {},
            });
        }

        const user = await getUserByEmail(body.email);

        if (!user) {
            throw {
                status: 400,
                message: "User not found",
                error: {},
            }
        }

        if (!compareSync(body.password, user.password)) {
            throw {
                status: 400,
                message: "Invalid password",
                error: {},
            }
        }

        const token = jwt.sign({id: user.id, email : user.email}, JWT_SECRET, {expiresIn: "30d"});
        const {password, ...rest} = user;

        return NextResponse.json({
            message: "User logged in successfully",
            data: {
                ...rest,
                token
            },
        })

    }
    catch(err){
        console.log(err);
        return handleError(NextResponse, err);
    }
}