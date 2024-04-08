// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 8; // Length of the task ID
    let taskId = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      taskId += characters.charAt(randomIndex);
    }
  
    return taskId;
  }
  const taskIDnumber = generateTaskId();
  console.log("Task ID:", taskId);


// Todo: create a function to create a task card
// Generate a random task ID
const taskIDnumbr = generateTaskId(); {

const card = document.createElement('div');
card.classList.add('card');

const cardBody = document.createElement('div');
cardBody.classList.add('card-body');

const taskIdElement = document.createElement('h5');
taskIdElement.classList.add('card-title');
taskIdElement.textContent = 'Task ID: ' + taskId;

const taskNameElement = document.createElement('p');
taskNameElement.classList.add('card-text');
taskNameElement.textContent = 'Task Name: ' + taskName;

cardBody.appendChild(taskIdElement);
cardBody.appendChild(taskNameElement);
card.appendChild(cardBody);

return card;
}


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const container = document.getElementById('task-container');
    container.innerHTML = ''; 


    taskList.forEach(function(task) {
        const card = createTaskCard(task.name, task.description, task.dueDate);
        container.appendChild(card);
    });


    const cards = document.querySelectorAll('.task-card');
    cards.forEach(function(card) {
        card.draggable = true;
        card.addEventListener('dragstart', function(event) {
            event.dataTransfer.setData('text/plain', card.id)};
        

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    let card = document.getElementById(generateTaskId);
    if (card) {
        card.parentNode.removeChild(card);
    }
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
