import { connectDB } from "@/lib/connect-db";
import { comparePassword, hashPassword } from "@/lib/hash-password";
import { UserModel } from "@/models";
import { UserRegistrationSchemaType } from "@/validators/registration.validator";

export const createUser = async (user: UserRegistrationSchemaType) => {
  try {
    await connectDB();
    const existingUser = await UserModel.findOne({ email: user.email });
    if (existingUser) {
      return "User already exists";
    }
    const hashedPassword = await hashPassword(user.password);
    const databaseUser = await UserModel.create({
      ...user,
      password: hashedPassword,
    });
    return databaseUser;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    await connectDB();
    const dbUser = await UserModel.findOne({ email });
    if (!dbUser) {
      throw new Error("User not found!");
    }
    const matchPassword = await comparePassword(password, dbUser.password);
    console.log(matchPassword);
    if (!matchPassword) {
      throw new Error("Password did not match!");
    }
    return dbUser;
  } catch (error) {
    throw error;
  }
};
