import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IJobs extends Document {
  title: string;
  description: string;
  createdAt: Date;
}

const JobSchema = new Schema<IJobs>({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Jobs = models.Jobs || model<IJobs>("Jobs", JobSchema);

export default Jobs;
