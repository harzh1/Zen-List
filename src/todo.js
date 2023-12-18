import { format, parseISO } from "date-fns";
import deleteImg from "./delete.png";
import editImg from "./edit.png";
import expandImg from "./expand.png";
import collapseImg from "./collapse.png";
import checkedImg from "./checked.png";
import uncheckedImg from "./unchecked.png";

const todoTemplate = (title, description, check, priority, dueDate, key) => `
<div class="todo-container">
  <div class="${
    check === false ? "todo" : "todo checked"
  }" style="border-top: 5px solid ${priority};">
  <div class="todo-header">
  <img  id="checkImg" class="check-img" src="${
    check === false ? uncheckedImg : checkedImg
  }" alt="Checked" class="todo-checkbox">
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
  <div class="todo-key">${key}</div>
</div>
`;

export default function todo({
  title,
  description,
  check,
  priority,
  dueDate,
  key,
}) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.innerHTML = todoTemplate(
    title,
    description,
    check,
    priority,
    dueDate,
    key
  );

  todoDiv.addEventListener("click", function (event) {
    const todoItem = JSON.parse(localStorage.getItem(`todo-${key}`));
    todoItem.dueDate = parseISO(todoItem.dueDate);

    if (event.target.matches("#checkImg")) {
      const updatedTodo = {
        key: key,
        title: todoItem.title,
        description: todoItem.description,
        check: !todoItem.check,
        dueDate: todoItem.dueDate,
        priority: todoItem.priority,
      };
      localStorage.setItem(`todo-${key}`, JSON.stringify(updatedTodo));

      // Update UI

      const todoDiv = event.target.closest(".todo");
      todoDiv.classList.toggle("checked");
      event.target.src = event.target.src.match(uncheckedImg)
        ? checkedImg
        : uncheckedImg;

      check = !check;
    }

    if (event.target.matches("#expandImg")) {
      event.target.src = event.target.src.match(collapseImg)
        ? expandImg
        : collapseImg;

      const descVisibilty = todoDiv.querySelector(".todo-description");
      descVisibilty.classList.toggle("hidden");
    }

    if (event.target.matches("#deleteImg")) {
      if (confirm("Are you sure you want to delete this task?")) {
        // Remove from localStorage
        // Retrieve the key from the data attribute
        localStorage.removeItem(`todo-${key}`);
        console.log(key);
        todoDiv.remove(); // Remove the item from localStorage
      }
    }

    if (event.target.matches("#editImg")) {
      const backgroundDiv = document.createElement("div");
      backgroundDiv.classList.add("new-todo-background");
      document.body.appendChild(backgroundDiv);

      const form = document.createElement("form");
      backgroundDiv.appendChild(form);

      // Add input fields to the form
      const titleLabel = document.createElement("label");
      titleLabel.textContent = "Title:";
      form.appendChild(titleLabel);

      const titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.value = title;
      form.appendChild(titleInput);

      const descriptionLabel = document.createElement("label");
      descriptionLabel.textContent = "Description:";
      form.appendChild(descriptionLabel);

      const descriptionInput = document.createElement("textarea");
      descriptionInput.value = description;
      form.appendChild(descriptionInput);

      const dueDateLabel = document.createElement("label");
      dueDateLabel.textContent = "Due Date:";
      form.appendChild(dueDateLabel);

      const dueDateInput = document.createElement("input");
      dueDateInput.value = format(dueDate, "dd/MM/yyyy");
      dueDateInput.type = "date";
      form.appendChild(dueDateInput);

      const priorityLabel = document.createElement("label");
      priorityLabel.textContent = "Priority:";
      form.appendChild(priorityLabel);

      const prioritySelect = document.createElement("select");
      form.appendChild(prioritySelect);

      const lowOption = document.createElement("option");
      lowOption.value = "green";
      lowOption.textContent = "Low";
      prioritySelect.appendChild(lowOption);

      const mediumOption = document.createElement("option");
      mediumOption.value = "yellow";
      mediumOption.textContent = "Medium";
      prioritySelect.appendChild(mediumOption);

      const highOption = document.createElement("option");
      highOption.value = "red";
      highOption.textContent = "High";
      prioritySelect.appendChild(highOption);

      // Add a submit button to the form
      const submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.textContent = "Submit";
      form.appendChild(submitButton);

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const updatedTitle = titleInput.value;
        const updatedDescription = descriptionInput.value;
        const updatedDueDate = dueDateInput.value;
        const updatedPriority = prioritySelect.value;

        console.log(key); // Retrieve the key from the data attribute

        // Update localStorage
        const updatedTodo = {
          key: key,
          title: updatedTitle,
          description: updatedDescription,
          check: check,
          dueDate: new Date(updatedDueDate), // Updated dueDate assignment
          priority: updatedPriority,
        };
        localStorage.setItem(`todo-${key}`, JSON.stringify(updatedTodo));

        // Update UI
        key = key;
        title = updatedTitle;
        description = updatedDescription;
        dueDate = new Date(updatedDueDate); // Updated dueDate assignment
        priority = updatedPriority;

        todoDiv.innerHTML = todoTemplate(
          title,
          description,
          check,
          priority,
          dueDate,
          key
        );

        backgroundDiv.remove();
      });
    }
  });

  return todoDiv;
}
