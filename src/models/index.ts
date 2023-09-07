import { Model, model, models } from "mongoose";
import { UserSchemaType, userSchema } from "./user.model";

export const UserModel = (models.user ||
  model("user", userSchema)) as Model<UserSchemaType>;
