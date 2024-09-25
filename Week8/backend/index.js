const express = require("express");
const JWT = require("jsonwebtoken");
const { UserModel, CourseModel } = require("./db");
const bcrypt = require("bcrypt");
const { z } = require("zod");

const app = express();
app.use(express.json());

// **************************** Constant values *************************
const saltRound = 5;
const JWT_SECRECT = "manikmaity";

// ************************* input validations ******************************
// signup validation
const requireSignupBody = z.object({
  username: z.string().min(1).max(100),
  email: z.string().min(1).max(100),
  password: z.string().min(1).max(100),
});

const requireLoginBody = z.object({
  email: z.string().min(1).max(100),
  password: z.string().min(1).max(100),
});

// ************************ Middleware ******************************

async function auth(req, res, next) {
  try {
    const token = req.headers.token;
    if (!token) {
      throw new Error("Token is not provided");
    }

    const decodedData = JWT.verify(token, JWT_SECRECT);
    const user = await UserModel.findOne({
      email: decodedData?.email,
    });
    if (user) {
    req.user = user;
      next();
    } else {
      throw new Error("User not found");
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// ***************************** User routes ********************************

app.post("/user/signup", async (req, res) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // Input validation
    const inputValidated = requireSignupBody.safeParse(req.body);
    if (!inputValidated.success) {
      throw new Error(`${inputValidated.error.errors[0].message}`);
    }

    // User already exits
    const user = await UserModel.findOne({
      email,
    });
    if (user) {
      throw new Error("User already exits");
    }

    await UserModel.create({
      username,
      email,
      password: bcrypt.hashSync(password, saltRound),
      isAdmin: false,
    });

    res.json({ msg: "User created😊" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/user/login", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    const inputValidated = requireLoginBody.safeParse(req.body);
    if (!inputValidated.success) {
      throw new Error(`${inputValidated.error.errors[0].message}`);
    }

    const user = await UserModel.findOne({
      email,
    });

    if (!user) {
      throw new Error("Email is incorrect");
    }
    if (!bcrypt.compareSync(password, user.password)) {
      throw new Error("Password is incorrect");
    }

    const token = JWT.sign({ email: email }, JWT_SECRECT);
    res.json({ token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});

// All courses
app.get("/user/courses", auth, async (req, res) => {
    try{
        const allCourses = await CourseModel.find();
        res.json(allCourses);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
      }

});

// Purchase a course
app.post("/user/courses/:courseId", (req, res) => {
    
});

// All purchase courses
app.get("/users/purchasedCourses", (req, res) => {});

// ************************ Admin routes ******************************

app.post("/admin/signup", (req, res) => {});

app.post("/admin/login", (req, res) => {});

// Create a course
app.post("/admin/courses/add", (req, res) => {});

// Edit course
app.put("/admin/courses/:courseId", (req, res) => {});

// Get all courses
app.get("/admin/courses", (req, res) => {});

app.listen(3000);
