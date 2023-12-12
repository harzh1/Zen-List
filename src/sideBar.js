import Home from "./home.js";
import showAllProjects from "./showAllProjects.js";
import icon from "./icon.png";

export default function showSideBar() {
  const sideBarDiv = document.createElement("div");
  sideBarDiv.classList.add("side-bar");

  const sideBarTitle = document.createElement("h2");
  sideBarTitle.textContent = " Zen List";
  const sideBarTitleIcon = document.createElement("img");
  sideBarTitleIcon.classList.add("title-icon");
  sideBarTitleIcon.src = icon;
  sideBarTitle.prepend(sideBarTitleIcon);

  // Call the functions to display the side bar options
  sideBarDiv.appendChild(sideBarTitle);
  sideBarDiv.appendChild(Home());
  sideBarDiv.appendChild(showAllProjects());

  return sideBarDiv;
}
