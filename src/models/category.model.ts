import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  name: String,
  type: String,
  color: String,
  icon: String,
});

export const CategoryModel = model("category", categorySchema);
