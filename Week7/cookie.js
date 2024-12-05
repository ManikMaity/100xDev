const express = require("express");
const { UserModel, TodoModel, connect } = require("./db");
const JWT = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());
const PORT = 8000;
const JWT_SECRECT = "manikmaity";
const salt = 10;

app.get("/", (req, res) => {
    res.json({msg : "Hello World"});
})

app.post("/signup", async (req, res) => {
    try {
        const {email, password} = req.body;
        const encryptedPass = bcrypt.hashSync(password, salt);
        UserModel.create({
            email,
            password : encryptedPass
        })
        res.json({msg : "Account is created."});
    }
    catch(err){
        res.status(404).json({error : err.message});
    }
});

app.post("/login", async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
        console.log(user)
        if (user && bcrypt.compareSync(password, user.password)){
            res.json({msg : "Logged in"});
        }
        else{
            throw new Error("Wrong credendial");
        }
    }
    catch(err){
        res.status(404).json({error : err.message});
    }
})

app.post("/todo",  async(req, res) => {
    try{
        const email = req.body.email;
        const des = req.body.des;
        const user = await UserModel.findOne({email});
        const todo = await TodoModel.create({
            des,
            done : false,
            userId : user._id
        })
        res.json({msg : "Todo added"});
    }
    catch(err){
        res.status(404).json({error : err.message});
    }
})


app.get("/todos", async (req, res) => {
    try{
        const email = req.body.email;
        const user = await UserModel.findOne({email});
        const userId = user._id;
        const todos = await TodoModel.find({
            userId
        });
        res.json(todos);
    }
    catch(err){
        res.status(404).json({error : err.message});
    }
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    connect();
})



