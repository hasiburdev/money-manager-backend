import mongoose, { Document, Model, Schema } from "mongoose";

export interface UserSchemaType extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accounts: string[];
  gender: "male" | "female";
}

export const userSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    accounts: {
      type: [String],
    },
    gender: {
      type: String,
    },
    dateOfBirth: {
      type: Date,
    },
    avatarUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
