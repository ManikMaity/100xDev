const express = require("express");
const fs = require('fs');
const app = express();
app.use(express.json());


// get user todo data done 
app.get("/:user", (req, res) => {
    const username = req.params.user;
    fs.readFile("./TodoData.json", (err, data) => {
        if (err) res.status(404).json({"error" : err});
        else {
            const dataArr = JSON.parse(data);
            const userData = dataArr.find(user => user?.username == username);
            if (userData == undefined) res.status(404).json({"message" : `user ${username} not found`})
            res.json(userData);
        }
    })
    
})

// add todo
app.get("/:user/:todoText", (req, res) => {
    const username = req.params.user;
    const text = req.params.todoText;
    let todosData;
    try {
         todosData = fs.readFileSync("./TodoData.json");
    }
    catch(err){
        res.status(404).json({"error" : err});
    }
    const dataArr = JSON.parse(todosData);
    const userData = dataArr.find(user => user?.username == username);
    if (userData == undefined) res.status(404).json({"message" : `user ${username} not found`})
    userData.todos.push({id : makeARandomID(), text : text, time : getCurrentTime(), isCompleted : false});
    const jsonTodos = JSON.stringify(dataArr, null, 2);
    fs.writeFile("./TodoData.json", jsonTodos, (err) => {
        if (err) res.status(404).json({"message" : err});
        res.json({"message" : "Todo Saved"});
    })
})







const makeARandomID = () => {
    return Math.floor(Math.random() * 1000000);
}

const getCurrentTime = () => {
    const time = new Date();
    return time.toLocaleString();
}

app.listen(3000);