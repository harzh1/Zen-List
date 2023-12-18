import "@fortawesome/fontawesome-free/js/all.js";
import allTasksImage from "./inbox.png";
import todayImage from "./today1.png";
import thisWeekImage from "./week2.png";
import importantImage from "./star.png";
import newToDo from "./newToDo";
import allTasks from "./allTasks";
import today from "./today";
import thisWeek from "./thisWeek";

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

  homeItem1.textContent = "All Tasks";
  homeItem1.innerHTML = `<img class="list-icon"src="${allTasksImage}" alt="All Tasks"> <a class="list-name"  href="#">All Tasks</a>`;
  homeItem1.onclick = () => {
    const contentDiv = document.getElementById("main-content");
    contentDiv.innerHTML = "";
    allTasks();
  };

  homeItem2.textContent = "Today";
  homeItem2.innerHTML = `<img class="list-icon"src="${todayImage}" alt="Today"> <a  class="list-name" href="#">Today</a>`;
  homeItem2.onclick = () => {
    const contentDiv = document.getElementById("main-content");
    contentDiv.innerHTML = "";
    today();
  };

  homeItem3.textContent = "Next 7 Days";
  homeItem3.innerHTML = `<img class="list-icon"src="${thisWeekImage}" alt="Next 7 Days"> <a  class="list-name" href="#">Next 7 Days</a>`;
  homeItem3.onclick = () => {
    const contentDiv = document.getElementById("main-content");
    contentDiv.innerHTML = "";
    thisWeek();
  };

  homeList.appendChild(homeItem1);
  homeList.appendChild(homeItem2);
  homeList.appendChild(homeItem3);

  const container = document.createElement("div");
  container.appendChild(homeTitle);
  container.appendChild(addTaskButton);
  container.appendChild(homeList);

  return container;
}
