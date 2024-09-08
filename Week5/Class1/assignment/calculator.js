const express = require("express");
const app = express();


app.get("/add", (req, res) => {
    const num1 = req.query.a;
    const num2 = req.query.b;
    const result = Number(num1) + Number(num2);
    res.json({result});  
})

app.get("/multiply", (req, res) => {
    const num1 = req.query.a;
    const num2 = req.query.b;
    const result = Number(num1)*Number(num2);
    res.json({result});  
})


app.get("/devide", (req, res) => {
    const num1 = req.query.a;
    const num2 = req.query.b;
    const result = Number(num1)/Number(num2);
    res.json({result});  
})

app.get("/subtract", (req, res) => {
    const num1 = req.query.a;
    const num2 = req.query.b;
    const result = Number(num1)-Number(num2);
    res.json({result});  
})

app.listen(3100);