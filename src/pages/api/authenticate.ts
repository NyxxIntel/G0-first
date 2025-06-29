import { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/pages/api/authdb";
import User from "@/app/models/User";
import * as cookie from "cookie";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, password } = req.body;

  try {
    await connectDB();
    const user = await User.findOne({ email });

    if (!user) {
      console.error("User not found:", email);
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    if (user.password !== password) {
      console.error("Password mismatch for:", email);
      return res.status(401).json({ message: "Incorrect email or password" });
    }

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("authToken", "authenticated", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60, // 1 hour
        sameSite: "strict",
        path: "/",
      })
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
