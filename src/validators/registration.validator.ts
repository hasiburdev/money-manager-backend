import { z } from "zod";

export const UserRegistrationSchema = z.object({
  firstName: z.string().trim(),
  lastName: z.string().trim(),
  email: z.string().trim().email(),
  password: z.string().trim(),
});

export type UserRegistrationSchemaType = z.infer<typeof UserRegistrationSchema>;
