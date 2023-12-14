import { format } from "date-fns";
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
    <img class="todo-img" src=${collapseImg} alt="Expand" class="expand-button">
    <img class="todo-img" src=${editImg} alt="Edit" class="edit-button">
    <img class="todo-img" src=${deleteImg} alt="Delete" class="delete-button">
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

  return todoDiv;
}
