import { z } from "zod";

export const schema = z.object({
  subject: z
    .string()
    .min(4, { message: "Title must have at least 4 characters" }),
  status: z.string().min(1, { message: "Required" }),
  description: z.string(),
  priority: z.number().min(1, { message: "Required" }),
});
