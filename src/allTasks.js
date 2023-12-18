import todo from "./todo";
import { parseISO } from "date-fns";

export default function allTasks() {
  const contentDiv = document.getElementById("main-content");

  const title = document.createElement("p");
  title.id = "all-tasks-title";
  title.textContent = "All Tasks";
  contentDiv.appendChild(title);

  const line = document.createElement("hr"); // Create a solid line element
  contentDiv.appendChild(line); // Append the line element to the contentDiv

  const allTasksDiv = document.createElement("div");
  allTasksDiv.id = "all-tasks-div";
  allTasksDiv.classList.add("all-tasks");

  if (!localStorage.getItem("todoId")) {
    const todo1 = {
      key: 1,
      title: "Example Task",
      description:
        "This is an example task. It is not real. It is just an example. I am just typing to make this description longer. I hope this is long enough. I guess I will just keep typing.",
      check: false,
      dueDate: new Date(),
      priority: "red",
    };

    const todo2 = {
      key: 2,
      title: "Example Completed Task",
      description:
        "This is an example completed task. It is not real. It is just an example. I am just typing to make this description longer. I hope this is long enough. I guess I will just keep typing.",
      check: true,
      dueDate: new Date(),
      priority: "yellow",
    };

    const todoElement1 = todo(todo1);
    const todoElement2 = todo(todo2);

    allTasksDiv.appendChild(todoElement1);
    allTasksDiv.appendChild(todoElement2);

    localStorage.setItem("todoId", "2");
    localStorage.setItem(`todo-1`, JSON.stringify(todo1));
    localStorage.setItem(`todo-2`, JSON.stringify(todo2));
  } else {
    let todoId = localStorage.getItem("todoId");
    for (let i = 1; i <= Number(todoId); i++) {
      const todoItem = JSON.parse(localStorage.getItem(`todo-${i}`));
      if (todoItem) {
        // Parse the dueDate back into a Date object
        todoItem.dueDate = parseISO(todoItem.dueDate);
        const todoElement = todo(todoItem);
        allTasksDiv.appendChild(todoElement);
      }
    }
  }

  contentDiv.appendChild(allTasksDiv);
}
