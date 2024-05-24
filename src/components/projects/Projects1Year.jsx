import React from "react";

const projectsData = [
  {
    title: "Rainyday",
    image: "/rainyday.jpeg",
    description: "This is my cross-course project. This was the first big project during the first year. We had new assignments to add or change this project. Go to repolink and readme file to see more details.",
    technologies: ["Adobe XD", "HTML", "CSS", "JavaScript", "Wordpress Headless CMS (REST API)"],
    liveLink: "https://rainydayjackets.netlify.app/",
    repoLink: "https://github.com/Noroff-FEU-Assignments/cross-course-project-CamillaHorneland.git",
  },
  {
    title: "Community Science Museum",
    image: "/museum.jpeg",
    description: "This is my semester project from my first year. The goal was to be creative and show the technical knowledge and skills based on the first semester curriculum. This includes design principles, project management, communication technology, and developing with HTML/CSS.",
    technologies: ["Adobe XD", "HTML", "CSS"],
    liveLink: "https://communitysciencemuseumbergen.netlify.app/",
    repoLink: "https://github.com/CamillaHorneland/Semester-project-1.git",
  },
  {
    title: "Slime-Care",
    image: "/slime-care.jpeg",
    description: "This is my exam from my first year as a Font-end Developer student. The goal for this exam was to put into practice the skilles I have learned over my first year as a student.",
    technologies: ["Adobe XD", "HTML", "CSS", "Wordpress Headless CMS (REST API)"],
    liveLink: "https://slime-care.netlify.app/",
    repoLink: "https://github.com/Noroff-FEU-Assignments/project-exam-1-CamillaHorneland.git",
  },
  {
    title: "Portfolio",
    image: "/portifolio1.jpeg",
    description: "This is my portfolio assignment from my first year as a Font-end Developer student. The goal was to document the big assignements from this year.",
    technologies: ["Adobe XD", "HTML", "CSS", "JavaScript"],
    liveLink: "https://portfoliocamillahorneland.netlify.app/",
    repoLink: "git clone https://github.com/CamillaHorneland/Portfolio-1.git",
  }, 
];

function Projects1Year() {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-400 font-sans m-10">Projects first year of school</h2>
      <section className="mb-15 m-5">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-white shadow-2xl transition-all  hover:shadow-pink-500 p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-bold text-gray-500 font-mono mb-2">{project.title}</h3>
            <div className="flex sm:flex-row flex-col">
              <div className="sm:w-2/3 w-full">
                <img src={project.image} alt={`image of ${project.title} site`} className="w-max h.fit mb-2 border" />
                <p className="mb-10 mt-10">{project.description}</p>
              </div>
              <div className="w-1/3 sm:ml-20 m-5 mt-0">
                <p className="text-gray-600 font-bold">Built with:</p>
                <ul className="list-disc leading-loose">
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="text-gray-600">{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="text-center">
              <button className="text-gray-500 py-2 px-8 rounded bg-pink-200 cursor-pointer hover:bg-pink-300 m-4">
                <a href={project.liveLink} title="link">
                  See project live
                </a>
              </button>
              <button className="text-gray-500 py-2 px-6 rounded bg-pink-200 cursor-pointer hover:bg-pink-300 m-4">
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


            

