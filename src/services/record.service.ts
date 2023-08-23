import { connectDB } from "@/app/lib/connect-db";
import { RecordModel } from "./record.model";
export const getAllRecords = async () => {
  await connectDB();
  const dbRecords = await RecordModel.find({});
  console.log(dbRecords);
};
