import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import projectData from "../Data/projectData";
import ProjectModal from "./ProjectModal";

export default function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  return (

    <section
      id="projects"
      className="bg-[#0d0618] text-white py-16 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My <span className="text-purple-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projectData.map((project) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.03,
                y: -8,
              }}
              transition={{ duration: 0.4 }}
              className="bg-[#1b1030] border border-purple-700 rounded-2xl p-7 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-500"
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-purple-300 text-sm mb-4">
                {project.subtitle}
              </p>

              <p className="text-gray-300 leading-7">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">

                {project.technologies.slice(0,4).map((tech,index)=>(

                  <span
                    key={index}
                    className="bg-purple-700/40 text-purple-200 px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <button

                onClick={() => setSelectedProject(project)}

                className="mt-8 flex items-center gap-2 text-purple-400 hover:text-white font-semibold transition"
              >

                View Details

                <FaArrowRight />

              </button>

            </motion.div>

          ))}

        </div>

      </div>

      <ProjectModal

        project={selectedProject}

        onClose={() => setSelectedProject(null)}

      />

    </section>

  );

}