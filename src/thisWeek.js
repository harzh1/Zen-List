import todo from "./todo";
import { parseISO } from "date-fns";

export default function thisWeek() {
  const contentDiv = document.getElementById("main-content");

  const title = document.createElement("p");
  title.id = "this-week-title";
  title.textContent = "Next 7 Days";
  contentDiv.appendChild(title);

  const line = document.createElement("hr"); // Create a solid line element
  contentDiv.appendChild(line); // Append the line element to the contentDiv

  const thisWeekDiv = document.createElement("div");
  thisWeekDiv.id = "this-week-div";
  thisWeekDiv.classList.add("this-week");

  let todoId = localStorage.getItem("todoId");
  for (let i = 1; i <= Number(todoId); i++) {
    const todoItem = JSON.parse(localStorage.getItem(`todo-${i}`));
    if (todoItem) {
      const dueDate = parseISO(todoItem.dueDate);
      const currentDate = new Date();
      const diffTime = Math.abs(dueDate - currentDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays <= 7) {
        // Parse the dueDate back into a Date object
        todoItem.dueDate = dueDate;
        const todoElement = todo(todoItem);
        thisWeekDiv.appendChild(todoElement);
      }
    }
  }

  contentDiv.appendChild(thisWeekDiv);
}
