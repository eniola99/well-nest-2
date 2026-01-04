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
      if (req.body._id) {
        const newPosition = {
          // id: req.body._id,
          title: req.body.title,
          type: req.body.type,
          salary: req.body.salary,
          lineManager: req.body.lineManager,
          role: req.body.role,
          keyResponsibilities: req.body.keyResponsibilities,
          jobRequirement: req.body.jobRequirement,
        };
        const updatePosition = await Position.findOneAndUpdate(
          { _id: req.body?._id },
          newPosition,
          { new: true }
        );
        res.status(200).json({
          success: true,
          status: 200,
          message: "Position updated successfully",
          data: updatePosition,
        });
        return;
      } else {
        const newPosition = new Position({
          title: req.body.title,
          type: req.body.type,
          salary: req.body.salary,
          lineManager: req.body.lineManager,
          role: req.body.role,
          keyResponsibilities: req.body.keyResponsibilities,
          jobRequirement: req.body.jobRequirement,
        });
        const updatePosition = await newPosition.save();
        res.status(200).json({
          success: true,
          status: 200,
          message: "New Position added successfully",
          data: updatePosition,
        });
      }
      break;
    case "GET":
      try {
        const list = await Position.find({});

        res.status(200).json({
          success: true,
          data: list,
        });
      } catch (error) {
        res.status(400).json({
          success: false,
          data: error,
          error: "Failed to fetch open jobs, Try again later.",
        });
      }
      break;
    case "DELETE":
      try {
        const deleteJob = await Position.findByIdAndDelete(req.query.id);

        res.status(200).json({
          success: true,
          data: deleteJob,
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
