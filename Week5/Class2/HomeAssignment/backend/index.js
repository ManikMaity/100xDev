const express = require("express");
const cors = require("cors");
const {addTaskToDB, getAllTasks, deleteTask, editTask, markTaskCompleted} = require("./db/index")
const app = express();
const port = process.env.PORT || 3100;
app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
    res.json({
        "msg" : "Working" ,
    })
})

app.post("/add", (req, res) => {
    const taskText = req.body.task;
    if (taskText == undefined) {
        res.status(404).json({
            "msg" : "task text not given"
        })
    }
    const updatedTasks = addTaskToDB(taskText);
    res.json(updatedTasks);
});


app.get("/allTasks", (req, res) => {
    try{
        const tasks = getAllTasks();
        res.json(tasks);
    }
    catch(err){
        res.status(404).json({
            "msg" : err
        })
    }
})

app.put("/edit", (req, res) => {
    try{
        const taskId = req.body.id;
        const text = req.body.text;
        const a = editTask(Number(taskId), text);
        res.json(a);
    }
    catch(err) {
        res.status(404).json({
            "msg" : err.message
        })
    }
    
})


app.put("/mark/:id", (req, res) => {
    try{
        const taskId = req.params.id;
        const updatedTasks = markTaskCompleted(taskId);
        res.json(updatedTasks);
    }
    catch(err) {
        res.status(404).json({
            "msg" : err.message
        })
    }
})


app.delete("/delete/:id", (req, res) => {
    const taskId = req.params.id;
    if (!Number(taskId)) res.status(404).json({"msg" : "Not a valid task id"});
    const filteredTask = deleteTask(Number(taskId));
    res.json(filteredTask);
    
})

app.listen(port);