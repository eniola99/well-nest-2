import { NextApiResponse, NextApiRequest } from "next";

import dbConnect from "@/src/lib/mongoose";
import { Position } from "@/src/models/position";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { method } = req;

  console.log(req.body);
  switch (method) {
    case "POST":
      const newPosition = new Position({
        title: req.body.title,
        type: req.body.type,
        salary: req.body.salary,
        lineManager: req.body.lineManager,
        role: req.body.role,
        // req.body.keyResponsibilities.map((item) => (
        keyResponsibilities: req.body.keyResponsibilities,
        // ))

        jobRequirement: req.body.jobRequirement,
        additionalTraining: req.body.additionalTraining,
        joinUs: req.body.joinUs,
      });
      await newPosition.save();
      res.status(200).json({
        success: true,
        status: 200,
        message: "New Position added successfully",
      });
      break;
    case "GET":
      try {
        const list = await Position.find({});

        res.status(200).json({
          success: true,
          data: list,
        });
      } catch (error) {
        res.status(400).json({ success: false, error: error });
      }
      break;
    default:
      res
        .status(400)
        .json({ success: false, message: "Failed to add position, Try again" });
      break;
  }
}
