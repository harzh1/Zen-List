import todo from "./todo";
import allTasks from "./allTasks";
// Create a div element for the blurred background

export default function newToDo() {
  const backgroundDiv = document.createElement("div");
  backgroundDiv.classList.add("new-todo-background");
  document.body.appendChild(backgroundDiv);

  // Create a form element for user input
  const form = document.createElement("form");
  backgroundDiv.appendChild(form);

  // Add input fields to the form
  const titleLabel = document.createElement("label");
  titleLabel.textContent = "Title:";
  form.appendChild(titleLabel);

  const titleInput = document.createElement("input");
  titleInput.type = "text";
  form.appendChild(titleInput);

  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "Description:";
  form.appendChild(descriptionLabel);

  const descriptionInput = document.createElement("textarea");
  form.appendChild(descriptionInput);

  const dueDateLabel = document.createElement("label");
  dueDateLabel.textContent = "Due Date:";
  form.appendChild(dueDateLabel);

  const dueDateInput = document.createElement("input");
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

  // Add event listeners to the form
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTitle = titleInput.value;
    const newDescription = descriptionInput.value;
    const newDueDate = dueDateInput.value;
    const newPriority = prioritySelect.value;

    // Update localStorage
    let key = Number(localStorage.getItem("todoId")) + 1;
    if (!key) {
      localStorage.setItem("todoId", "1");
      key = 1;
    }

    const todo1 = {
      key: key,
      title: newTitle,
      description: newDescription,
      check: false,
      dueDate: new Date(newDueDate),
      priority: newPriority,
    };

    const newToDo = todo({
      key: key,
      title: newTitle,
      description: newDescription,
      check: false,
      dueDate: new Date(newDueDate),
      priority: newPriority,
    });

    if (!localStorage.getItem("todoId")) {
      localStorage.setItem("todoId", "1");
      let todoId = localStorage.getItem("todoId");
      newToDo.dataset.key = `todo-${todoId}`;
      localStorage.setItem(`todo-${todoId}`, JSON.stringify(todo1));
    } else {
      localStorage.setItem(
        "todoId",
        Number(localStorage.getItem("todoId")) + 1
      );
      let todoId = localStorage.getItem("todoId");
      newToDo.dataset.key = `todo-${todoId}`;
      localStorage.setItem(`todo-${todoId}`, JSON.stringify(todo1));
    }

    const contentDiv = document.getElementById("all-tasks-div");
    contentDiv.appendChild(newToDo);
    backgroundDiv.remove();
  });

  // Add a cancel button to the form
  const cancelButton = document.createElement("button");
  cancelButton.type = "button";
  cancelButton.textContent = "Cancel";
  form.appendChild(cancelButton);

  // Add event listeners to the cancel button
  cancelButton.addEventListener("click", () => {
    backgroundDiv.remove();
  });
}
