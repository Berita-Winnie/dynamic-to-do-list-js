//Setup Event LIstener for Page Load
document.addEventListener('DOMContentLoaded', function(){

//Select all DOM Elements
const addButton =  document.getElementById("add-task-btn");
const taskInput =  document.getElementById("task-input");
const taskList  = document.getElementById("task-list");

//Load tasks from Local Storage on page load
function loadTasks(){
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEaach(taskText => {
        addTask(taskText, false); // pass `false` to avoid saving duplicates
    });
}

//Create the add task Function;
const addTask = function(){
const taskText = taskInput.value.trim();

if (taskText === ""){
    alert("Please enter a task");
    return; //stop further execution
}
//Task Creation and removal

    const liElement = document.createElement("li");
    liElement.textContent = taskText;
    liElement.classList.add("task-item");

    const buttonElement = document.createElement("button");
    buttonElement.textContent = "Remove";
    buttonElement.className = "remove-btn";

//Assign an onclick event to the remove button
buttonElement.onclick = function () {
    taskList.removeChild(liElement);
}

//Append the button to the li and the li to the tasklist
liElement.appendChild(buttonElement);
taskList.appendChild(liElement);

//Clear input field after adding the task
taskInput.value="";
}

//Attach Event Listeners
addButton.addEventListener("click", addTask);

//Event listener for pressing "Enter"to add a task
taskInput.addEventListener("keypress", function (event) {
    if(event.key === "Enter"){
        addTask();
    }
});



});

document.addEventListener('DOMContentLoaded', function(){
    loadTasks();
});
   