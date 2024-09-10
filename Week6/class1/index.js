const express = require("express");
const { v4: uuidv4 } = require('uuid');

const app = express();

// express.json() middleware is used to parse JSON data from the request body.
app.use(express.json());

const users = []; // we will store the users data in this array.

app.get("/", (req, res) => {
    res.json({
        msg : "Working"
    })
});


app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const foundUser = users.find(user => (user.username == username && user.password == `${password}`));
    if (foundUser == undefined) res.status(404).json({msg : "You dont have a account"});
    else {
        const token = uuidv4();
        foundUser.token = token;
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