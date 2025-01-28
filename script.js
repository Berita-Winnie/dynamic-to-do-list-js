//Setup Event LIstener for Page Load
document.addEventListener('DOMContentLoaded', function(){

//Select all DOM Elements
const addButton =  document.getElementById("add-task-btn");
const taskInput =  document.getElementById("task-input");
const taskList  = document.getElementById("task-list");

//Create the add task Function;
const addTask = function(){
const taskText = taskInput.value.trim();

if (taskText === "")
    alert("Please enter a task");

//Task Creation and removal
if (!taskText === ""){
    const liElement = document.createElement("li");
    liElement.textContent = taskText;
    const buttonElement = document.createElement("button");
    buttonElement.textContent = "Remove";
    buttonElement.className = "remove-btn";

//Assign an onclick event to the remove button
removeButton.onclick = function () {
    taskList.removeChild(liElement);
}

liElement.appendChild("button");
taskList.appendChild("liElement");
taskInput.value="";

//Attach Event Listeners
addButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
    if(event.key === "Enter"){
        addTask();
    }
});

}
}
});

document.addEventListener('DOMContentLoaded', addTask);
   