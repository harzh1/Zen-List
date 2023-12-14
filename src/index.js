import "./style.css";
import sidebar from "./sideBar";
import bg from "./bg.jpg";
import newToDo from "./newToDo";
import allTasks from "./allTasks";

const container = document.getElementById("content");
container.style.backgroundImage = `url(${bg})`;

const content = document.createElement("div");
content.classList.add("content");
content.appendChild(sidebar());
const mainContent = document.createElement("div");
mainContent.classList.add("main-content");
mainContent.id = "main-content";
content.appendChild(mainContent);
container.appendChild(content);
//newToDo();

allTasks();
