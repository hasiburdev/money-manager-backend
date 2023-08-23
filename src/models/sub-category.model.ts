import { Schema, model } from "mongoose";

const subCategorySchema = new Schema({
  name: String,
  color: String,
  icon: String,
  mainCategory: String,
});

export const SubCategoryModel = model("sub-category", subCategorySchema);
