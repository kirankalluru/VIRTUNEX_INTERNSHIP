const tasks = document.querySelectorAll(".task");
const columns = document.querySelectorAll(".task-container");

let draggedTask = null;

tasks.forEach((task) => {
  task.addEventListener("dragstart", dragStart);
  task.addEventListener("dragend", dragEnd);
});

columns.forEach((column) => {
  column.addEventListener("dragover", dragOver);
  column.addEventListener("dragenter", dragEnter);
  column.addEventListener("dragleave", dragLeave);
  column.addEventListener("drop", dragDrop);
});

function dragStart() {
  draggedTask = this;
  this.classList.add("opacity-50");
  setTimeout(() => (this.style.display = "none"), 0);
}

function dragEnd() {
  this.classList.remove("opacity-50");
  this.style.display = "block";
  draggedTask = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("bg-gray-200");
}

function dragLeave() {
  this.classList.remove("bg-gray-200");
}

function dragDrop() {
  this.classList.remove("bg-gray-200");
  this.appendChild(draggedTask);
}
