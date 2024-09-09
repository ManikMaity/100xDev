const taskContainerEle = document.querySelector(".tasks-container");
const spinnerEle = document.querySelector(".spinner-ele");
const taskInputEle = document.getElementById("taskInput");
const taskInputBtn = document.getElementById("taskInputBtn");

async function getAllTasks() {
    const tasks = await axios.get("http://localhost:3100/allTasks");
    return tasks.data;
}

async function renderAllTasks() {
    const allTasks = await getAllTasks();
    renderTask(allTasks);
}


function renderTask(allTasks){
    spinnerEle.classList.remove("d-none");
    spinnerEle.classList.add("d-none");
    taskContainerEle.innerHTML = "";
    allTasks.forEach(task => {
        let taskEle = document.createElement("tr");
        taskEle.id = task.id;
        taskEle.innerHTML = `<th scope="row">
                        <input type="checkbox" name="" id="" ${task.isComplete ? "checked" : ""}/>
                      </th>
                      <td>${task?.task}</td>
                      <td>${task?.time}</td>`

        const controlsTd = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "btn-danger");
        deleteBtn.textContent = "Delete";

        const editBtn = document.createElement("button");
        editBtn.classList.add("btn", "btn-success", "ms-1");
        editBtn.textContent = "Edit";

        controlsTd.insertAdjacentElement("beforeend", deleteBtn);
        controlsTd.insertAdjacentElement("beforeend", editBtn);
        taskEle.insertAdjacentElement("beforeend", controlsTd);
        taskContainerEle.insertAdjacentElement("beforeend", taskEle);
    })
}


taskInputBtn.addEventListener("click", async(e) => {
    e.preventDefault();
    if (taskInputEle.value.trim() == "") return;
    const updatedTasks = await axios.post("http://localhost:3100/add", {
        "task" : taskInputEle.value
    })
    console.log(updatedTasks);
})



renderAllTasks();