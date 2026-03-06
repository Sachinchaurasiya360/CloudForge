import { z } from "zod";

export const loginValidator = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
});

export const signupValidator = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email(),
  password: z.string().min(6).max(20),
});
