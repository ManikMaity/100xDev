const fs = require("fs");

// db fuction 
function addTaskToDB(taskname) {
    if (taskname.trim() == "") return;
    let taskObj = {
        id : makeRandomID(),
        task : taskname,
        isComplete : false,
        time : getTaskTime()
    };
    fs.readFile("./db/db.json", "utf8", (err, data) => {
        if (err) {
            console.log(err);
        }
        else{
            const allTaskObj = JSON.parse(data);
            allTaskObj.push(taskObj);
            const jsonTaskObj = JSON.stringify(allTaskObj, null, 3);
            fs.writeFileSync("./db/db.json", jsonTaskObj);
            console.log("Task Added");
        }
    })
}


function getAllTasks (){
    const allTasks = fs.readFileSync("./db/db.json");
    return JSON.parse(allTasks);
}


function deleteTask (id){
    try{
        const tasks = getAllTasks();
        const filteredTasks = tasks.filter(task => task.id !== id);
        fs.writeFileSync("./db/db.json", JSON.stringify(filteredTasks, null, 3));
        console.log("Task deleted from db");
        return filteredTasks;
    }
    catch (err) {
        console.log(err);
    }
}


function editTask (id, newText) {
    if (newText.trim() == "") return;
    
}

module.exports = {
    addTaskToDB,
    getAllTasks,
    deleteTask
};




// util functions
function makeRandomID (){
    return Math.floor(Math.random()*1000000);
}

function getTaskTime(){
    const time = new Date();
    return time.toLocaleString();
}