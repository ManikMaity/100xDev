const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json()); // its a middleware to parse json data

app.use(cors()); // cors is a middleware to handle cross-origin requests. 
//so we can send request from different origin.
// We can specify which frontend we want to allow to access our server.

app.post("/add", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const result = Number(a) + Number(b);
    res.json({
        result
    })
})


app.listen(3001);