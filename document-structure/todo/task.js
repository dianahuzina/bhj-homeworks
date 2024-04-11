const taskList = document.getElementById("tasks__list");
const inputTask = document.getElementById("task__input");
const addTask = document.getElementById("tasks__add");

addTask.addEventListener('click', (event) => {
  event.preventDefault();

  if (inputTask.value.trim()) {
    const task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `<div class="task__title">${inputTask.value}</div>`;
    taskList.insertAdjacentElement("beforeend", task);

    task.innerHTML += '<a href="#" class="task__remove">&times;</a>';
    inputTask.value = "";

    const remove = task.querySelector(".task__remove");
    remove.addEventListener('click', (elem) => {
      elem.target.closest(".task").remove();
    })
  }
})