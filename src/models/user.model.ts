// import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";
// import { nanoid } from "nanoid";
// import mongoose from "mongoose";

// enum Gender {
//   MALE = "male",
//   FEMALE = "female",
// }
// enum SubscriptionType {
//   FREE = "free",
//   PREMIUM = "premium",
// }

// @modelOptions({ schemaOptions: { collection: "users" } })
// export class UserSchema {
//   @prop({ default: () => nanoid(9) })
//   _id: string;

//   @prop({
//     type: () => String,
//     default: () => ["cash"],
//   })
//   accounts: string[];

//   @prop({
//     type: () => String,
//     required: true,
//   })
//   firstName: string;

//   @prop({
//     type: () => String,
//     required: true,
//   })
//   lastName: string;

//   @prop({
//     type: () => String,
//     required: () => true,
//   })
//   email: string;

//   @prop({
//     type: () => String,
//   })
//   password: string;

//   @prop({
//     type: () => Date,
//   })
//   dateOfBirth: Date;

//   @prop({
//     enum: Gender,
//     type: () => String,
//   })
//   gender: Gender;

//   @prop({
//     type: () => String,
//   })
//   avatarUrl: string;

//   @prop({
//     enum: SubscriptionType,
//     type: () => String,
//     default: () => SubscriptionType.FREE,
//   })
//   subscription: SubscriptionType;

//   @prop({
//     type: () => Date,
//   })
//   subscriptionExpiryDate: Date;

//   @prop({ default: () => new Date() })
//   createdAt: Date;
// }

import { Document, Schema } from "mongoose";

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
