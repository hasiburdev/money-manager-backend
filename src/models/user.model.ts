import { Schema, model } from "mongoose";

const userSchema = new Schema({
  accounts: [String],
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  dateOfBirth: Date,
  gender: String,
  avatarUrl: String,
  subscription: String,
  subsciptionExpiryDate: Date,
});

export const UserModel = model("user", userSchema);
