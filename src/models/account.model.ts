import { Schema, model } from "mongoose";

const accountSchema = new Schema({
  name: String,
  icon: String,
  includeInMainBalance: Boolean,
  amount: Number,
  accountType: String,
});

export const AccountModel = model("account", accountSchema);
