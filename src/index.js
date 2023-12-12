import "./style.css";
import sidebar from "./sideBar";
import bg from "./bg.jpg";

const container = document.getElementById("content");
container.style.backgroundImage = `url(${bg})`;

const content = document.createElement("div");
content.classList.add("content");
content.appendChild(sidebar());
const mainContent = document.createElement("div");
mainContent.classList.add("main-content");
content.appendChild(mainContent);
container.appendChild(content);
