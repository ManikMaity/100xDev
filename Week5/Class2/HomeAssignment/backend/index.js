const express = require("express");
const {addTaskToDB, getAllTasks, deleteTask} = require("./db/index")
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());


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
    addTaskToDB(taskText);
    res.json({
        "msg" : "Task Added"
    })
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
    const taskId = req.body.id;
    const text = req.body.text;
    
    
})


app.delete("/delete/:id", (req, res) => {
    const taskId = req.params.id;
    if (!Number(taskId)) res.status(404).json({"msg" : "Not a valid task id"});
    const filteredTask = deleteTask(Number(taskId));
    res.json(filteredTask);
    
})

app.listen(port);