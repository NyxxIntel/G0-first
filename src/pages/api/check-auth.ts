import { NextApiRequest, NextApiResponse } from "next";
import * as cookie from "cookie";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const cookies = req.headers.cookie ? cookie.parse(req.headers.cookie) : {};
  const authToken = cookies.authToken;

  if (!authToken) {
    return res.status(401).json({ isAuthenticated: false });
  }

  return res.status(200).json({ isAuthenticated: true });
}
