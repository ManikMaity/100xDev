const express = require("express");
const { UserModel, TodoModel } = require("./db");
const JWT = require("jsonwebtoken");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
    try{
        const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;

    // This will create a new user
    await UserModel.insert({
        username,
        password,
        name
    })
    res.json({msg : "You are logged in"});
    }
    catch(err){
        res.json({msg : err.message})
    }
    
    

})

app.post("/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await UserModel.findOne({
        username,
        password
    })
    console.log(user);
    if (user) {
        const token = JWT.sign({id : user._id});
        res.json(token);
    }
    else {
        res.status(404).json({msg : "Bad request, user not found"});
    }
})

app.post("/todo", (req, res) => {

})

app.get("/todos", (req, res) => {

})

app.get("/", (req, res) => {
    res.json({msg : "Working"});
})


app.listen(3000);