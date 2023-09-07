import { z } from "zod";

export const UserLoginSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().trim(),
});

export type UserLoginSchemaType = z.infer<typeof UserLoginSchema>;
