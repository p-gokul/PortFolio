import { PROJECTS } from "../constants";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"; // Import icons from react-icons

const Projo = () => {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className=" mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                >
                  {tech}
                </span>
              ))}
              <div className="mt-4">
                {/* Live Link */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4 inline-flex items-center text-blue-500"
                >
                  <FaExternalLinkAlt className="mr-2" /> Live Demo
                </a>
                {/* GitHub Link */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-500"
                >
                  <FaGithub className="mr-2 text-white size-5" /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projo;
