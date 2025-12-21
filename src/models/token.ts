import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IToken extends Document {
  token: string;
}

const TokenSchema = new Schema<IToken>(
  {
    // token: {
    token: String,
    // required: true,
    // },
  },
  { timestamps: true }
);

export const Token = models.Token || model<IToken>("Token", TokenSchema);
