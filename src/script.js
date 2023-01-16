let btn = document.getElementById("btn");
let task = document.getElementById("task");
let newTask = document.getElementById("newTask");

function logging() {
  newTask.innerHTML = `<h1>${task.value}</h1>`;
  task.value = "";
}
