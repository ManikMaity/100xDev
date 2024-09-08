const express = require("express");
const app = express();
let totalRequestCount = 0;


// assignemnt 1 middleware
app.use((req, res, next) => {
    console.log(req.url);
    console.log(req.method);
    console.log(new Date().toLocaleTimeString());
    next();
})

// assignment 2 middleware
app.use((req, res, next) => {
    totalRequestCount++;
    next();
})



app.get("/user", (req, res) => {
    const userName = req.query.name;
    res.json({
        "msg" : `Hi, ${userName} : ${userName.length}, How are you?`
    })
})

app.get("/", (req, res) => {
    res.json({
        "msg" : "server running"
    })
})

app.get("/count", (req, res) => {
    res.json({
        totalRequestCount
    })
})

app.listen(3000);