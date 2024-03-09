import Projects2Year from "../components/projects/Projects2Year";
import Projects1Year from "../components/projects/Projects1Year";



function ProjectsPage() {
	return (
		<>
            <h1 className="text-4xl font-bold font-cursive text-gray-500 m-10">My Projects</h1>
		    <Projects2Year />
			<Projects1Year />

		</>
	);
}

export default ProjectsPage;