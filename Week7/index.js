const express = require("express");
const { UserModel, TodoModel } = require("./db");
const {z} = require("zod");
const JWT = require("jsonwebtoken");
const app = express();
const JWT_SECRECT = "manikmaity";
const bcrypt = require("bcrypt");
const saltRound = 5;


app.use(express.json());

app.post("/signup", async (req, res) => {
  try {

    // schema of the data using zod
    const requiredBody = z.object({
      username: z.string().min(1).max(100),
      name: z.string().min(1).max(100),
      password: z.string().min(1).max(100)
   });
   

    const parseDataWithSuccess = await requiredBody.safeParse(req.body);
    if (!parseDataWithSuccess.success){
      throw new Error(`${parseDataWithSuccess.error.errors[0].message}`);
      
    }
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;

    const alreadyExit = await UserModel.findOne({
      username,
    });
    if (alreadyExit) {
      throw new Error("User already exits, use diff username");
    }

    // This will create a new user
    const salt = bcrypt.genSaltSync(saltRound);
    await UserModel.create({
      username,
      password : bcrypt.hashSync(password, salt),
      salt,
      name
    });
    res.json({ msg: "You are logged in" });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
});

app.post("/signin", async (req, res) => {
  try{
    const username = req.body.username;
  const password = req.body.password;
  const user = await UserModel.findOne({
    username,
  });

  if (user) {
    if (!await bcrypt.compareSync(password, user.password)){
      throw new Error("Password is incorrect");
      
    }
    const token = JWT.sign({ id: user._id }, JWT_SECRECT);
    res.json({
        msg : `Welcome ${user.username}`,
        token
    });
  } else {
    res.status(404).json({ msg: "Bad request, user not found" });
  }
  }
  catch(err){
    res.status(404).json({error : err.message});

  }
  
});

async function auth(req, res, next) {
  try {
    const token = req.headers.token;
    const idObj = JWT.verify(token, JWT_SECRECT);
    const user = await UserModel.findById(idObj.id);
    if (user) {
        req.user = user;
      next();
    }
    else {
        throw new Error ("User not found");
    }
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
}

app.post("/todo", auth, async (req, res) => {
    try {
        const userId = req.user._id;
        const des = req.body.des;
        await TodoModel.create({
          des,
          done : false,
          userId
        })
        res.json({msg : "Todo added"});
    }
    catch(err){
        res.status(404).json({error : err.message});
    }
  
  
});

app.get("/todos", auth, async (req, res) => {
    try{
        const userId = req.user._id;
        const todos = await TodoModel.find({
            userId
        });
        res.json(todos);
    }
    catch(err){
        res.status(404).json({error : err.message});
    }
});

app.get("/", (req, res) => {
  res.json({ msg: "Working" });
});

app.listen(3000);
