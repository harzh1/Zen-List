import todo from "./todo";

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

  const todo1 = todo({
    title:
      "Trip to Nepal to see the Himalayas and the beautiful scenery of the country",
    description:
      "Nepal is a beautiful country with a lot of mountains, rivers and lakes. It is a great place to visit for a vacation. The people are very friendly and the food is delicious. I would love to go there again someday. I hope you enjoy your trip to Nepal as much as I did!",
    dueDate: new Date(),
    check: false,
    priority: "red",
  });

  const todo2 = todo({
    title:
      "Trip to India to see the Himalayas and the beautiful scenery of the country",
    description:
      "Nepal is a beautiful country with a lot of mountains, rivers and lakes. It is a great place to visit for a vacation. The people are very friendly and the food is delicious. I would love to go there again someday. I hope you enjoy your trip to Nepal as much as I did!",
    dueDate: new Date(),
    check: true,
    priority: "yellow",
  });

  allTasksDiv.appendChild(todo1);
  allTasksDiv.appendChild(todo2);
  contentDiv.appendChild(allTasksDiv);
}
