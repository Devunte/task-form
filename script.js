// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 8; // Length of the task ID
    let taskIDnumber = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      taskIDnumber += characters.charAt(randomIndex);
    }
  
    return taskId;
  }
  const taskIDnumber = generateTaskId();
  console.log("Task ID:", taskIDnumber);


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
            event.dataTransfer.setData('text/plain', card.id)});
        

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;
  
    // Validate if task name is provided
    if (taskName.trim() === '') {
      alert('Task name cannot be empty!');
      return;
    }
  
    // Do something with taskName and dueDate (e.g., add to task list)
    console.log("New task:", taskName);
    console.log("Due date:", dueDate);
  
    // Clear the form fields
    document.getElementById('taskName').value = '';
    document.getElementById('dueDate').value = '';
  }
  
  // Add event listener to the task form for form submission
  const taskForm = document.getElementById('taskForm');
  taskForm.addEventListener('submit', addTask);
    });

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    let card = document.getElementById(generateTaskId);
    if (card) {
        card.parentNode.removeChild(card);
    }
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const taskId = event.dataTransfer.getData("text/plain");
  
    // Get the dragged task element by its ID
    const task = document.getElementById(taskId);
    
    // Find the closest status lane to drop the task into
    const statusLane = event.target.closest('.status-lane');
    
    // Append the task to the status lane
    statusLane.appendChild(task);
    
    // Update the task's status attribute (you may want to do this in a real scenario)
    task.dataset.status = statusLane.id;
  }
  
  // Add event listeners to all task elements for drag start event
  const tasks = document.querySelectorAll('.task');
  tasks.forEach(task => {
    task.addEventListener('dragstart', handleDragStart);
  });
  
  // Add event listeners to all status lanes for drag over and drop events
  const statusLanes = document.querySelectorAll('.status-lane');
  statusLanes.forEach(statusLane => {
    statusLane.addEventListener('dragover', handleDragOver);
    statusLane.addEventListener('drop', handleDrop);
  });
 
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    const todoLane = document.getElementById('todo');
    const inProgressLane = document.getElementById('inprogress');
    const doneLane = document.getElementById('done');
  
    // Example tasks
    const tasks = [
      { id: 'task1', name: 'Task 1', status: 'todo' },
      { id: 'task2', name: 'Task 2', status: 'inprogress' },
      { id: 'task3', name: 'Task 3', status: 'done' }
    ];
  
    tasks.forEach(task => {
      const taskElement = createTaskElement(task);
      if (task.status === 'todo') {
        todoLane.appendChild(taskElement);
      } else if (task.status === 'inprogress') {
        inProgressLane.appendChild(taskElement);
      } else if (task.status === 'done') {
        doneLane.appendChild(taskElement);
      }
    });
  });
