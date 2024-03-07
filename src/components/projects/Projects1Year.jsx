import React from "react";

const projectsData = [
  {
    title: "Rainyday",
    image: "/src/assets/rainyday.jpeg",
    description: "This is my cross-course project",
    technologies: ["Adobe XD", "HTML", "CSS", "JavaScript", "Wordpress Headless CMS (REST API)"],
    liveLink: "https://rainydayjackets.netlify.app/",
    repoLink: "https://github.com/Noroff-FEU-Assignments/cross-course-project-CamillaHorneland.git",
  },
  {
    title: "Community Science Museum",
    image: "/src/assets/museum.jpeg",
    description: "This is my semester project",
    technologies: ["Adobe XD", "HTML", "CSS"],
    liveLink: "https://communitysciencemuseumbergen.netlify.app/",
    repoLink: "https://github.com/CamillaHorneland/Semester-project-1.git",
  },
  {
    title: "Slime-Care",
    image: "/src/assets/slime-care.jpeg",
    description: "This is my project exam.",
    technologies: ["Adobe XD", "HTML", "CSS", "Wordpress Headless CMS (REST API)"],
    liveLink: "https://slime-care.netlify.app/",
    repoLink: "https://github.com/Noroff-FEU-Assignments/project-exam-1-CamillaHorneland.git",
  },
 
];

function Projects1Year() {
  return (
    <>
      <h1>Projects</h1>
      <section className="cards">
        {projectsData.map((project, index) => (
          <div key={index} className={`card card${index + 1}`}>
            <img src={project.image} alt={`image of ${project.title} site`} style={{ width: "20%" }} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Built with: {project.technologies.join(", ")}</p>
            <div className="go_to">
              <button className="btn2">
                <a href={project.liveLink} title="link">
                  See project live
                </a>
              </button>
              <button className="btn2">
                <a href={project.repoLink} title="link">
                  Go to GitHub repo
                </a>
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Projects1Year;