const taskContainerEle = document.querySelector(".tasks-container");
const spinnerEle = document.querySelector(".spinner-ele");
const taskInputEle = document.getElementById("taskInput");
const taskInputBtn = document.getElementById("taskInputBtn");
const signupContainerEle = document.querySelector(".signup-container");
const todoMainContianerEle = document.querySelector(".todo-main-container");
const isSignedIn = false;


async function getUserData (){
    const token = localStorage.getItem("token");
    const userData = await axios.get("http://localhost:3100/me", {
        headers : {
            token 
        }
    })
    if (userData.status == 200){
        isSignedIn = true;
        console.log(userData.data);
    }
    else {
        isSignedIn = false;
    }
}

getUserData();
showScreen();
function showScreen (){
    if (isSignedIn){
        signupContainerEle.style.display = "none";
        todoMainContianerEle.style.display = "auto";
    }
    else {
        signupContainerEle.style.display = "flex";
        todoMainContianerEle.style.display = "none";
    }
}



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
                      </th>
                      <td>
                      <p id="text-${task.id}">${task?.task}</p>
                      <input type="text" name="" id="edit-${task.id}" class="form-control d-none" value="${task?.task}"/>
                      </td>
                      <td>${task?.time}</td>`


        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.isComplete;
        checkbox.addEventListener("change", (e) => {
            handleMarkChange(task.id, e);
        })
        taskEle.insertAdjacentElement("afterbegin", checkbox);
        

        const controlsTd = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "btn-danger");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            handleDelete(task.id);
        })

        const editBtn = document.createElement("button");
        editBtn.classList.add("btn", "btn-success", "ms-1");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", function editTask(e){
            handleEdit(task.id, e);
        })

        controlsTd.insertAdjacentElement("beforeend", deleteBtn);
        controlsTd.insertAdjacentElement("beforeend", editBtn);
        taskEle.insertAdjacentElement("beforeend", controlsTd);
        taskContainerEle.insertAdjacentElement("beforeend", taskEle);
    })
}


async function handleMarkChange(id, e){
    const updatedTasks  = await await axios.put(`http://localhost:3100/mark/${id}`);
    renderTask(updatedTasks.data);
}

async function handleDelete (id) {
    const updatedTasks = await axios.delete(`http://localhost:3100/delete/${id}`);
    renderTask(updatedTasks.data);
}

function handleEdit(id, e){
    const editBoxEle = document.getElementById(`edit-${id}`);
    const textEle = document.getElementById(`text-${id}`);
    editBoxEle.classList.toggle("d-none");
    textEle.classList.toggle("d-none");

    editBoxEle.addEventListener("keyup", async(e) => {
        if (e.key == "Enter") {
            const updatedTasks = await axios.put(`http://localhost:3100/edit`, {
                "text" : editBoxEle.value,
                "id" : id
            })
            renderTask(updatedTasks.data);
            editBoxEle.classList.toggle("d-none");
            textEle.classList.toggle("d-none");
        }
    })

}

taskInputBtn.addEventListener("click", async(e) => {
    e.preventDefault();
    if (taskInputEle.value.trim() == "") return;
    const updatedTasks = await axios.post("http://localhost:3100/add", {
        "task" : taskInputEle.value
    })
    renderAllTasks();
    taskInputEle.value = "";
})



renderAllTasks();