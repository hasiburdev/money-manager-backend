import { z } from "zod";

export const createRecordSchema = z.object({
  amount: z.number(),
});
