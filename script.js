document.addEventListener("DOMContentLoaded", (event) => {
const addButton = document.getElementById("add-task-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

function addTask(){
    taskTest = taskInput.value.trim();
    
    if (taskTest === "") {
      alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskTest;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    removeBtn.onclick =() => {
        taskList.removeChild(li);
    };
    
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    taskInput.value = "";

}
    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    })

});