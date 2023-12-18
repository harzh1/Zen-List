import todo from "./todo";
import { parseISO } from "date-fns";

export default function today() {
  const contentDiv = document.getElementById("main-content");

  const title = document.createElement("p");
  title.id = "today-title";
  title.textContent = "Today";
  contentDiv.appendChild(title);

  const line = document.createElement("hr"); // Create a solid line element
  contentDiv.appendChild(line); // Append the line element to the contentDiv

  const todayDiv = document.createElement("div");
  todayDiv.id = "today-div";
  todayDiv.classList.add("today");

  let todoId = localStorage.getItem("todoId");
  for (let i = 1; i <= Number(todoId); i++) {
    const todoItem = JSON.parse(localStorage.getItem(`todo-${i}`));
    if (
      todoItem &&
      parseISO(todoItem.dueDate).toDateString() === new Date().toDateString()
    ) {
      // Parse the dueDate back into a Date object
      todoItem.dueDate = parseISO(todoItem.dueDate);
      const todoElement = todo(todoItem);
      todayDiv.appendChild(todoElement);
    }
  }

  contentDiv.appendChild(todayDiv);
}
