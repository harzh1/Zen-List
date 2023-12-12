import "@fortawesome/fontawesome-free/js/all.js";
import project from "./project.png";

export default function showAllProjects() {
  // TODO: Implement logic to show tasks for all projects
  const projectsContainer = document.createElement("div");
  projectsContainer.id = "all-projects";

  const projectsTitle = document.createElement("p");
  projectsTitle.textContent = "Projects";
  projectsContainer.appendChild(projectsTitle);

  const addProjectButton = document.createElement("button");
  addProjectButton.innerHTML = '<i class="fas fa-plus-circle"></i> Add Project';
  addProjectButton.classList.add("list-name");
  projectsContainer.appendChild(addProjectButton);

  const projectsList = document.createElement("ul");

  // TODO: Replace these with actual project names from your data
  const projectNames = ["Project 1", "Project 2", "Project 3"];

  projectNames.forEach((projectName) => {
    const projectItem = document.createElement("li");
    projectItem.innerHTML = `<img class="list-icon"src="${project}"alt="Projects"><a class="list-name" href="#"> ${projectName}</a>`;

    projectsList.appendChild(projectItem);
  });

  projectsContainer.appendChild(projectsList);
  return projectsContainer;
}
