// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
let nextId = JSON.parse(localStorage.getItem("nextId")) || 1;

function generateTaskId() {
    return nextId++;
}

function createTaskCard(task) {
    return `
        <div class="task-card card mb-3" id="task-${task.id}" data-id="${task.id}">
            <div class="card-body">
                <h5 class="card-title">${task.title}</h5>
                <p class="card-text">${task.description}</p>
                <p class="card-text"><small class="text-muted">Due: ${task.dueDate}</small></p>
                <button class="btn btn-danger delete-task" onclick="handleDeleteTask(event)">Delete</button>
            </div>
        </div>
    `;
}

function renderTaskList() {
    const lanes = {
        todo: document.getElementById("todo-cards"),
        inProgress: document.getElementById("in-progress-cards"),
        done: document.getElementById("done-cards")
    };


    for (let lane in lanes) {
        lanes[lane].innerHTML = "";
    }

   
    if (taskList) {
        taskList.forEach(task => {
            const taskCard = createTaskCard(task);
            lanes[task.status].insertAdjacentHTML('beforeend', taskCard);
        });

   
        $(".task-card").draggable({
            revert: "invalid",
            zIndex: 100
        });
    }
}


function handleAddTask(event) {
    event.preventDefault();

    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const dueDate = document.getElementById("task-due-date").value;

    const newTask = {
        id: generateTaskId(),
        title,
        description,
        dueDate,
        status: "todo"
    };

    taskList.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    localStorage.setItem("nextId", JSON.stringify(nextId));
    renderTaskList();
    $('#formModal').modal('hide');
}

function handleDeleteTask(event) {
    const taskId = $(event.target).closest('.task-card').data('id');
    taskList = taskList.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTaskList();
}

function handleDrop(event, ui) {
    const taskId = ui.draggable.data('id');
    const newStatus = event.target.id.replace('-cards', '');

    taskList = taskList.map(task => {
        if (task.id === taskId) {
            task.status = newStatus;
        }
        return task;
    });

    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTaskList();
}

$(document).ready(function () {

    renderTaskList();

    $('#add-task-form').submit(handleAddTask);

    $(".lane").droppable({
        accept: ".task-card",
        drop: handleDrop
    });

    $('#task-due-date').datepicker();
});

