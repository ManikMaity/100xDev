const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");




app.get("/files", (req, res) => {
    try{
        const files = fs.readdirSync("./files");
        res.json({
            "files" : files
        })
    }
    catch(err){
        res.status(400).json({
            "message" : "Cant read file"
        })
    }
})

app.get("/:route", (req, res) => {
    res.status(400).json({
        "message" : "This route not vaiable"
    })
})


app.get("/files/:fileName", (req, res) => {
    const filename = req.params.fileName;
    fs.readFile(`./files/${filename}`, "utf8", (err, data) => {
        if (err) {
            res.status(400).json({
                "message" : `${err.name}`
            })
        }
        else {
            const jsonData = JSON.stringify(data);
            res.json({
                "data" : data
            })
        }
    })
})





app.listen(3000);