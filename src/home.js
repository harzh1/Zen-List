import "@fortawesome/fontawesome-free/js/all.js";
import allTasksImage from "./inbox.png";
import todayImage from "./today1.png";
import thisWeekImage from "./week2.png";
import importantImage from "./star.png";
import newToDo from "./newToDo";

export default function Home() {
  // TODO: Implement logic to show tasks for home

  const homeTitle = document.createElement("p");
  homeTitle.textContent = "Home";

  const addTaskButton = document.createElement("button");
  addTaskButton.innerHTML = '<i class="fas fa-plus-circle"></i> Add Task';
  addTaskButton.classList.add("list-name");
  addTaskButton.onclick = newToDo;

  const homeList = document.createElement("ul");
  homeList.id = "home";
  homeList.classList.add("list");

  const homeItem1 = document.createElement("li");
  const homeItem2 = document.createElement("li");
  const homeItem3 = document.createElement("li");
  const homeItem4 = document.createElement("li");

  homeItem1.textContent = "All Tasks";
  homeItem1.innerHTML = `<img class="list-icon"src="${allTasksImage}" alt="All Tasks"> <a class="list-name"  href="#">All Tasks</a>`;

  homeItem2.textContent = "Today";
  homeItem2.innerHTML = `<img class="list-icon"src="${todayImage}" alt="Today"> <a  class="list-name" href="#">Today</a>`;

  homeItem3.textContent = "This Week";
  homeItem3.innerHTML = `<img class="list-icon"src="${thisWeekImage}" alt="This Week"> <a  class="list-name" href="#">This Week</a>`;

  homeItem4.textContent = "Important";
  homeItem4.innerHTML = `<img class="list-icon"src="${importantImage}" alt="Important"> <a  class="list-name" href="#">Important</a>`;

  homeList.appendChild(homeItem1);
  homeList.appendChild(homeItem2);
  homeList.appendChild(homeItem3);
  homeList.appendChild(homeItem4);

  const container = document.createElement("div");
  container.appendChild(homeTitle);
  container.appendChild(addTaskButton);
  container.appendChild(homeList);

  return container;
}
