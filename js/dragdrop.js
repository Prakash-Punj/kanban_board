
import { saveTasks, loadTasks } from "./storage.js";
import { render } from "./render.js";

export const drag = (el) => {
  el.draggable = true;
  el.addEventListener("dragstart", e => {
    e.dataTransfer.setData("id", el.dataset.id);
    el.classList.add("dragging");
  });
  el.addEventListener("dragclose", () => el.classList.remove("dragging"));
};

export const drop = () =>
  document.querySelectorAll(".task-list").forEach(a => {
    a.ondragover = e => e.preventDefault();
    a.ondrop = e => {
      e.preventDefault();
      const id = e.dataTransfer.getData("id");
      if (!id) return;
      const tasks = loadTasks();
      const task = tasks.find(t => t.id === id);
      if (task) {
        task.status = a.id;
        saveTasks(tasks);
        render(tasks);
        drop();
      }
    };
  });


