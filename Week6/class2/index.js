const express = require("express");
const { v4: uuidv4 } = require('uuid');
const JWT = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "manikmaity";


app.use(express.json());






const users = [];


// This middleware is used to authenticate the user. and pass the username.
// We can modify the request object in this middleware.
function auth(req, res, next) {
    const token = req.headers.token;
    const decodedInfo = JWT.verify(token, JWT_SECRET);
    const username = decodedInfo.username;
    const found = users.find(user => user.username == username);
    if (found == undefined) res.json({msg : "User not found."});
    else {
        req.username = username;
        next();
    }
}

app.get("/", (req, res) => {
    res.json({
        msg : "Working"
    })
});

app.get("/me", auth, (req, res) => {
    try{
        const username = req.username;
        const user = users.find(user => user.username == username);
        res.json({
            name : user.username,
            pass : user.password
        })
    }
    catch(err){
        res.status(404).json({msg : err})
    }
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const foundUser = users.find(user => (user.username == username && user.password == `${password}`));
    if (foundUser == undefined) res.status(404).json({msg : "You dont have a account"});
    else {
        const token = JWT.sign({
            username : username
        }, JWT_SECRET);
        console.log(users);
        res.json({token});
    }


});


app.post("/signup", (req, res) => {
   const username = req.body.username;
   const password = req.body.password;

   const userExits = users.findIndex(user => user.username == username);

   if (username.trim() !== "" && password.trim() !== "" && userExits == -1){
    users.push({username, password : `${password}`});
    console.log(users)
    res.json({
        msg : "Signed up"
    })
   }
   else{
    res.status(404).json({
        msg : "Cant sign up"
    })
   }
})

app.listen(3000);