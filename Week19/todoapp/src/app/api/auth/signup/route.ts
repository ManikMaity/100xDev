import { createUser, User } from "@/repository/user.repo";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { SALT_ROUND } from "@/config/server.config";

export function handleError(res: any, err: any) {
  if (err.status) {
    return NextResponse.json(
      {
        message: err.message,
        error: err.error || {},
      },
      { status: err.status }
    );
  }
  return NextResponse.json(
    {
      message: "Something went wrong",
      error: err || {},
    },
    { status: 500 }
  );
}

export async function POST(req: NextRequest) {
  try {
    const body: User = await req.json();

    if (!body.username || !body.email || !body.password) {
      return handleError(NextResponse, {
        status: 400,
        message: "Missing required fields",
      });
    }
    const hashedPassword = await bcrypt.hash(body.password, SALT_ROUND);
    body.password = hashedPassword;

    const user = await createUser(body);

    return NextResponse.json({
      message: "User created successfully",
      data: user,
    });
  } catch (err: any) {
    return handleError(NextResponse, err);
  }
}
