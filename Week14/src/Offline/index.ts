import express from "express";
import { infer, z } from "zod";

const app = express();
app.use(express.json());

const userSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(3, "Name must be at least 3 characters long")
    .max(40, "Name must be at most 40 characters long"),

  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email("Email must be a valid email address"),

  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, "Password must be at least 6 characters long"),

  age: z
    .number()
    .min(18, "Age must be at least 18")
    .max(100, "Age must be at most 100")
    .optional(),
});

type UserBodyType = z.infer<typeof userSchema>;

app.post("/", (req, res) => {

const userBody : UserBodyType = req.body;
  const sucess = userSchema.safeParse(userBody);
  if (!sucess) {
    res.status(400).json({
      sucess: false,
    });
  }
  res.status(200).json({
    sucess: true,
  });
});

app.listen(3000, (): void => {
  console.log("Listening on port 3000");
});
