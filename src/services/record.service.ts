import { connectDB } from "@/lib/connect-db";
import { RecordModel } from "../models/record.model";
export const getAllRecords = async (record: any) => {
  await connectDB();
  const dbRecords = await RecordModel.find({});
  console.log(dbRecords);
};
