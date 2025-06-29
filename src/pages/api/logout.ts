import { NextApiRequest, NextApiResponse } from "next";
import * as cookie from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("authToken", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 0, // Expire immediately
      sameSite: "strict",
      path: "/",
    })
  );

  return res.status(200).json({ success: true });
}
