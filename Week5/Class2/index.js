const express = require("express");
const app = express();
// Commonly used middleware -
// 1. express.json() - for parsing application/json
// 2. Cross-Origin Resource Sharing (CORS) - for handling cross-origin requests.
// If we getting request from different origin we need to block it.

// In express if we want to send json data we need to use express.json() middleware to parse json data.
app.use(express.json());



app.post("/add", (req, res) => {
    const num1 = req.body["a"];
    const num2 = req.body["b"];
    const result = Number(num1) + Number(num2);
    res.json({result});  
})


app.listen(3000);