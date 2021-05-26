console.dir(window.document);
window.document.querySelector("button").textContent;
document.querySelector(".btn");

// var buttonEl = document.querySelector("#save-task");
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function (event) {
  event.preventDefault();

  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task. ";
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");
// give it a class name
taskInfoEl.className = "task-info";
// add HTML content to div
taskInfoEl.innerHTML =
  "<h3 class='task-name'>" +
  taskNameInput +
  "</h3><span class='task-type'>" +
  taskTypeInput +
  "</span>";

listItemEl.appendChild(taskInfoEl);

// add entire list item to list
