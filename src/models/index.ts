// import { getModelForClass } from "@typegoose/typegoose";
// import { UserSchema } from "./user.model";

import { NODE_ENV } from "@/app/lib/env";
import { model } from "mongoose";
import { userSchema } from "./user.model";

// export const UserModel = getModelForClass(UserSchema);

if (NODE_ENV === "development") {
  // @ts-ignore
  mongoose.models = {};
}
export const UserModel = model("user", userSchema);
