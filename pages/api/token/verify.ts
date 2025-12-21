import { NextApiResponse, NextApiRequest } from "next";

import dbConnect from "@/src/lib/mongoose";
import { Token } from "@/src/models/token";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "POST":
      const savedTokens = await Token.find().sort({ _id: -1 }).limit(1);
      if (savedTokens && savedTokens[0].token == req.body) {
        res
          .status(200)
          .json({ success: true, message: "Authentication Code Successful" });
      } else {
        res
          .status(200)
          .json({ success: false, message: "Invalid Authentication Code" });
      }
      break;
    default:
      res
        .status(400)
        .json({ success: false, message: "Failed verify code, Try again" });
      break;
  }
}
