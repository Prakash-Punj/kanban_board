
import { loadTasks, saveTasks } from "./storage.js";
import { render } from "./render.js";
import { drop } from "./dragdrop.js";

document.addEventListener("DOMContentLoaded", () => {
  let tasks = loadTasks();
  render(tasks);
  drop();

  const form = document.getElementById("task-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("task-title").value.trim();
    const desc = document.getElementById("task-desc").value.trim();

    if (!title) return;

    const newTask = {
      id: Date.now().toString(),
      title,
      description: desc,
      status: "todo"
    };

    tasks.push(newTask);
    saveTasks(tasks);
    render(tasks);
    drop();

    form.reset();
  });
});
