import { useState } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  // State to manage "Show More" functionality
  const [showMore, setShowMore] = useState(false);

  // Show only the first 4 projects initially
  const projectsToShow = showMore ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {projectsToShow.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
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
            </motion.div>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button with Motion */}
      {PROJECTS.length > 4 && (
        <div className="text-center mt-8">
          <motion.button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 bg-transparent text-white border border-white rounded-md"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.6)" }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {showMore ? "Show Less" : "Show More"}
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default Projects;
