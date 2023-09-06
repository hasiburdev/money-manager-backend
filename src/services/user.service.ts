import { connectDB } from "@/app/lib/connect-db";
import { CreateUser } from "@/interfaces/user";
// import { UserModel } from "@/models";
import { UserModel } from "@/models";

export const createUser = async (user: CreateUser) => {
  try {
    await connectDB();
    const existingUser = await UserModel.findOne({ email: user.email });
    if (existingUser) {
      return "User already exists";
    }
    const databaseUser = await UserModel.create(user);
    return databaseUser;
  } catch (error) {
    console.error(error);
    throw new Error("User creation failed!");
  }
};

// export const loginUser = async (user) => {
//   try {
//     await connectDB();
//   } catch (error) {}
// };
