import { NextResponse } from "next/server";
import { MONGODB_URI } from "../lib/env";
import { getAllRecords } from "@/services/record.service";

export const GET = async () => {
  await getAllRecords();
  console.log(MONGODB_URI);
  return NextResponse.json({ message: "Hello" });
};
