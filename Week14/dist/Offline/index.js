"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const userSchema = zod_1.z.object({
    name: zod_1.z
        .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    })
        .min(3, "Name must be at least 3 characters long")
        .max(40, "Name must be at most 40 characters long"),
    email: zod_1.z
        .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    })
        .email("Email must be a valid email address"),
    password: zod_1.z
        .string({
        required_error: "Password is required",
    })
        .min(6, "Password must be at least 6 characters long"),
    age: zod_1.z
        .number()
        .min(18, "Age must be at least 18")
        .max(100, "Age must be at most 100")
        .optional(),
});
app.post("/", (req, res) => {
    const userBody = req.body;
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
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
