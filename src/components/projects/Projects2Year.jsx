import React from "react";

const projectsData = [
  {
    title: "Semester project 2",
    image: "/src/assets/semesterproject2.jpeg",
    description: "This is my semester project 2. The goal was to take the skills learned over the past three semesters and create an auction website.",
    technologies: ["Adobe XD", "HTML", "SASS", "JavaScript", "Bootstrap", "Noroff API"],
    liveLink: "https://norauctionoff.netlify.app/",
    repoLink: "https://github.com/CamillaHorneland/Semester-Project-2",
  },
  {
    title: "The Online Store",
    image: "/src/assets/theonliestore.jpeg",
    description: "This is my JavaScript Frameworks Course Assignement. The goal was to apply knowledge of React to build an eCom store. ",
    technologies: ["React+Vite", "Noroff API", "CSS Modules"],
    liveLink: "https://xtheonlinestorex.netlify.app/",
    repoLink: "https://github.com/CamillaHorneland/online-shop.git",
  },
  {
    title: "Holidaze",
    image: "/src/assets/holidayz.jpeg",
    description: "This is my project exam 2. The goal was to take the skills learned over the last two years and take on an extensive project where the finished product should reflect the candidate’s general development capabilities, in addition to visual and technical skills.",
    technologies: ["Adobe XD", "React+Vite", "Tailwind", "Yup", "Zustand", "Noroff API"],
    liveLink: "https://holidaze-camilla-horneland.netlify.app/",
    repoLink: "https://github.com/CamillaHorneland/Holidaze",
  },
];

function Projects2Year() {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-400 font-sans m-10">Projects second year of school</h2>
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

export default Projects2Year;
