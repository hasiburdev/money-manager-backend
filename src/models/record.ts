import { Schema, model } from "mongoose";

const recordSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    default: "Other",
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  note: {
    type: String,
    default: "",
  },
  tags: {
    type: [String],
    default: [],
  },
  status: {
    type: String,
    required: true,
    default: "cleared",
  },
  place: {
    type: String,
  },
  attachments: {
    type: String,
  },
  userId: {
    type: String,
  },
});

export const RecordModel = model("record", recordSchema);
