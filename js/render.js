
import { drag } from "./dragdrop.js";

export function render(tasks) {
  document.querySelectorAll(".task-list").forEach((list) => {
    list.innerHTML = "";
  });

  tasks.forEach((task) => {
    const taskEl = document.createElement("div");
    taskEl.className = "task";
    taskEl.dataset.id = task.id;
    taskEl.textContent = task.title;

    taskEl.innerHTML = `
      <strong>${task.title}</strong>
      ${task.description ? `<p>${task.description}</p>` : ""}
    `;

    drag(taskEl);

    const column = document.getElementById(task.status);
    if (column) {
      column.appendChild(taskEl);
    }
  });
}


