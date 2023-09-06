import { getModelForClass, prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class RecordSchema {
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
  date: Date;

  @prop()
  status: string;

  @prop()
  note: string;

  @prop()
  place: string;

  @prop()
  uid: string;

  @prop({ default: () => new Date() })
  createdAt: Date;

  @prop({ default: new Date() })
  updatedAt: Date;
}

export const RecordModel = getModelForClass(RecordSchema);
