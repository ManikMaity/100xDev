import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function GET(req: NextRequest) {
  try {

    const token = req.headers.get("token");

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const data = jwt.decode(token, "manikmaity");


    return NextResponse.json({
      name: "Manik Maity",
      image: "https://placehold.co/200x200?text=Profile",
      email : data?.email
    });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
