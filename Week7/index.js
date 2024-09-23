const express = require("express");
const { UserModel, TodoModel } = require("./db");
const JWT = require("jsonwebtoken");
const app = express();
const JWT_SECRECT = "manikmaity";

app.use(express.json());

app.post("/signup", async (req, res) => {
  try {
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
    await UserModel.create({
      username,
      password,
      name,
    });
    res.json({ msg: "You are logged in" });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
});

app.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await UserModel.findOne({
    username,
    password,
  });

  console.log(user);
  if (user) {
    const token = JWT.sign({ id: user._id }, JWT_SECRECT);
    res.json({
        msg : `Welcome ${user.username}`,
        token
    });
  } else {
    res.status(404).json({ msg: "Bad request, user not found" });
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
