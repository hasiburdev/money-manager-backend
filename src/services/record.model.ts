// import { Schema, model } from "mongoose";

// const recordSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//     default: "Other",
//   },
//   amount: {
//     type: Number,
//     required: true,
//   },
//   currency: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//   },
//   note: {
//     type: String,
//     default: "",
//   },
//   tags: {
//     type: [String],
//     default: [],
//   },
//   status: {
//     type: String,
//     required: true,
//     default: "cleared",
//   },
//   place: {
//     type: String,
//   },
//   attachments: {
//     type: String,
//   },
//   userId: {
//     type: String,
//   },
// });

// export const RecordModel = model("record", recordSchema);

import { getModelForClass, prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class Record {
  @prop({ default: () => nanoid(9) })
  _id: string;

  @prop()
  title: string;

  @prop()
  category: string;

  @prop()
  amount: string;

  @prop()
  tags: string;

  @prop()
  currency: string;

  @prop()
  date: string;

  @prop({ default: false })
  completed: boolean;

  @prop({ default: () => new Date() })
  createdAt: Date;
}

export const RecordModel = getModelForClass(Record);
