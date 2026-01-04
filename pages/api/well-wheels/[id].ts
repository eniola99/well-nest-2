import { NextApiResponse, NextApiRequest } from "next";

import dbConnect from "@/src/lib/mongoose";
import { Position } from "@/src/models/position";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "DELETE":
      try {
        const { id } = req.query;
        const deletedJob = await Position.findByIdAndDelete(id);

        if (!deletedJob) {
          return res
            .status(404)
            .json({ success: false, error: "Job not found" });
        }
        res.status(200).json({
          success: true,
          data: deletedJob,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          data: error,
          error: "Failed to delete jobs, Try again later.",
        });
      }
      break;
    default:
      res
        .status(400)
        .json({ success: false, message: "Failed to add position, Try again" });
      break;
  }
}
