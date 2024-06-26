document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.getElementById("projects");

  projects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className = "project";

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = project.title;
    projectElement.appendChild(projectTitle);

    const projectDescription = document.createElement("p");
    projectDescription.textContent = project.description;
    projectElement.appendChild(projectDescription);

    const projectTechnologies = document.createElement("p");
    projectTechnologies.textContent = `Technologies: ${project.technologies.join(
      ", "
    )}`;
    projectElement.appendChild(projectTechnologies);

    const projectRole = document.createElement("p");
    projectRole.textContent = `Role: ${project.role}`;
    projectElement.appendChild(projectRole);

    projectsContainer.appendChild(projectElement);
  });
});
