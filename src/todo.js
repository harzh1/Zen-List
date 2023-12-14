import { format, parseISO } from "date-fns";
import deleteImg from "./delete.png";
import editImg from "./edit.png";
import expandImg from "./expand.png";
import collapseImg from "./collapse.png";

const todoTemplate = (title, description, check, priority, dueDate) => `
<div class="todo-container">
  <div class="todo" style="border-top: 5px solid ${priority};">
  <div class="todo-header">
    <input type="checkbox" class="todo-checkbox" checked=${check}>
    <h3 class="todo-title">${title}</h3>
    </div>
    <div class ="todo-options">
    <div class="todo-date">${format(dueDate, "dd/MM/yyyy")}</div>
    <img  id="expandImg" class="todo-img" src=${collapseImg} alt="Expand" class="expand-button">
    <img id="editImg" class="todo-img" src=${editImg} alt="Edit" class="edit-button">
    <img id="deleteImg" class="todo-img" src=${deleteImg} alt="Delete" class="delete-button">
    </div>
  </div>
  <div class="todo-description hidden">${description}</div>
</div>
`;

export default function todo({ title, description, check, priority, dueDate }) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.innerHTML = todoTemplate(
    title,
    description,
    check,
    priority,
    dueDate
  );

  todoDiv.addEventListener("click", function (event) {
    if (event.target.matches("#expandImg")) {
      event.target.src = event.target.src.match(collapseImg)
        ? expandImg
        : collapseImg;

      const descVisibilty = todoDiv.querySelector(".todo-description");
      descVisibilty.classList.toggle("hidden");
    }

    if (event.target.matches("#deleteImg")) {
      if (confirm("Are you sure you want to delete this task?")) {
        todoDiv.remove();
      }
    }
  });

  todoDiv.addEventListener("change", function (event) {
    if (event.target.matches(".todo-checkbox")) {
      const todo = event.target.closest(".todo");
      todo.style.opacity = event.target.checked ? "1" : "0.5";
      const todoTitle = todoDiv.querySelector(".todo-title");
      const todoDescription = todoDiv.querySelector(".todo-description");

      if (!todoTitle.classList.contains("completed")) {
        todoTitle.classList.add("completed");
        todoDescription.classList.add("completed");
      } else {
        todoTitle.classList.remove("completed");
        todoDescription.classList.remove("completed");
      }
    }
  });

  return todoDiv;
}
