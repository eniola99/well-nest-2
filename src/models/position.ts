import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IJobs extends Document {
  title: string;
  type: string;
  salary: string;
  lineManager: string;
  role: string;
  keyResponsibilities: string[];
  jobRequirement: string[];
  additionalTraining: string[];
  joinUs: string[];
  createdAt: Date;
}

const PositionSchema = new Schema<IJobs>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  lineManager: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  keyResponsibilities: {
    type: [String],
    required: true,
  },
  jobRequirement: {
    type: [String],
    required: true,
  },
  additionalTraining: {
    type: [String],
    required: true,
  },
  joinUs: {
    type: [String],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Position =
  models.Position || model<IJobs>("Position", PositionSchema);
