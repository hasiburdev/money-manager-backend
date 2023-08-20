import { Schema, model } from "mongoose";

const recordSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
});

export const RecordModel = model("record", recordSchema);
