let tasks = [];

let taskInput = document.getElementById("taskInput");
let priority = document.getElementById("priority");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let allBtn = document.getElementById("allBtn");
let completedBtn = document.getElementById("completedBtn");
let pendingBtn = document.getElementById("pendingBtn");

addBtn.addEventListener("click", addTask);
allBtn.addEventListener("click", showAll);
completedBtn.addEventListener("click", showCompleted);
pendingBtn.addEventListener("click", showPending);

function addTask() {
  let text = taskInput.value;

  if (text === "") {
    alert("Enter a task");
    return;
  }

  let task = {
    text: text,
    priority: priority.value,
    completed: false,
  };

  tasks.push(task);

  taskInput.value = "";

  displayTasks(tasks);
}

function displayTasks(arr) {
  taskList.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = arr[i].completed;

    checkbox.addEventListener("click", function () {
      arr[i].completed = !arr[i].completed;
      displayTasks(tasks);
    });

    let span = document.createElement("span");
    span.innerText = arr[i].text + " (" + arr[i].priority + ") ";

    if (arr[i].completed) {
      span.style.textDecoration = "line-through";
    }

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.addEventListener("click", function () {
      tasks.splice(i, 1);
      displayTasks(tasks);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    taskList.appendChild(li);
  }
}

function showAll() {
  displayTasks(tasks);
}

function showCompleted() {
  let completed = [];

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      completed.push(tasks[i]);
    }
  }

  displayTasks(completed);
}

function showPending() {
  let pending = [];

  for (let i = 0; i < tasks.length; i++) {
    if (!tasks[i].completed) {
      pending.push(tasks[i]);
    }
  }

  displayTasks(pending);
}
