import todo from "./todo";

export default function allTasks() {
  const contentDiv = document.getElementById("main-content");

  const title = document.createElement("h1");
  title.textContent = "All Tasks";
  contentDiv.appendChild(title);

  const line = document.createElement("hr"); // Create a solid line element
  contentDiv.appendChild(line); // Append the line element to the contentDiv

  const allTasksDiv = document.createElement("div");
  allTasksDiv.classList.add("all-tasks");

  const todo1 = todo({
    title:
      "Trip to Nepal to see the Himalayas and the beautiful scenery of the country",
    description: "Harsh",
    dueDate: new Date(),
    check: true,
    priority: "red",
  });

  allTasksDiv.appendChild(todo1);
  contentDiv.appendChild(allTasksDiv);
}
