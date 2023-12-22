// Task array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    if (taskValue !== '') {
        tasks.push(taskValue);
        renderTasks();
        taskInput.value = ''; // Clear input field
    }
}

// Function to render tasks in the UI
function renderTasks() {
    const taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = ''; // Clear existing tasks

    tasks.forEach((task, index) => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskContainer.appendChild(taskElement);
    });
}

// Function to edit a task
function editTask(index) {
    const newTask = prompt('Edit task:', tasks[index]);
    if (newTask !== null) {
        tasks[index] = newTask.trim();
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(index) {
    const isConfirmed = confirm('Are you sure you want to delete this task?');
    if (isConfirmed) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Initial rendering of tasks
renderTasks();
