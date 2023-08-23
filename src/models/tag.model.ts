import { Schema, model } from "mongoose";

const tagSchema = new Schema({
  name: String,
  color: String,
});

export const TagModel = model("tag", tagSchema);
