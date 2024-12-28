import { z } from "zod";

export const createUserSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
      invalid_type_error: "Username must be a string",
    })
    .min(3, "Username must be at least 3 characters long")
    .max(20, "Username must be at most 20 characters long"),

  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email("Invalid email address"),
    
  password: z.string({
    required_error: "Password is required",
    invalid_type_error: "Password must be a string",
  }),
});
