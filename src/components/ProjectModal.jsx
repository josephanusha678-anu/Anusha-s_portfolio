import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-[#1b1030] border border-purple-600 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative"
          >
            {/* Close Button */}

            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-2xl text-gray-400 hover:text-red-500 transition"
            >
              <FaTimes />
            </button>

            {/* Title */}

            <h2 className="text-4xl font-bold text-white mb-2">
              {project.title}
            </h2>

            <p className="text-purple-400 mb-8 text-lg">
              {project.subtitle}
            </p>

            {/* Overview */}

            <Section title="📖 Overview">
              {project.overview}
            </Section>

            {/* Problem */}

            {project.problem && (
              <Section title="⚠ Problem Statement">
                {project.problem}
              </Section>
            )}

            {/* Objective */}

            <Section title="🎯 Objective">
              {project.objective}
            </Section>

            {/* Technologies */}

            <Section title="⚙ Technologies Used">

              <div className="flex flex-wrap gap-3 mt-4">

                {project.technologies.map((tech, index) => (

                  <span
                    key={index}
                    className="bg-purple-700 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </Section>

            {/* Hardware */}

            {project.hardware && (
              <Section title="💻 Hardware Used">

                <ul className="list-disc ml-6 mt-3 space-y-2">

                  {project.hardware.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}

                </ul>

              </Section>
            )}

            {/* Software */}

            {project.software && (
              <Section title="🖥 Software Used">

                <ul className="list-disc ml-6 mt-3 space-y-2">

                  {project.software.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}

                </ul>

              </Section>
            )}

            {/* Modules */}

            {project.modules && (
              <Section title="📦 Modules">

                <ul className="list-disc ml-6 mt-3 space-y-2">

                  {project.modules.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}

                </ul>

              </Section>
            )}

            {/* Workflow */}

            <Section title="🔄 Workflow">

              <ol className="list-decimal ml-6 mt-3 space-y-2">

                {project.workflow.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}

              </ol>

            </Section>

            {/* Features */}

            <Section title="✨ Features">

              <ul className="list-disc ml-6 mt-3 space-y-2">

                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}

              </ul>

            </Section>

            {/* Advantages */}

            {project.advantages && (
              <Section title="✅ Advantages">

                <ul className="list-disc ml-6 mt-3 space-y-2">

                  {project.advantages.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}

                </ul>

              </Section>
            )}

            {/* Future */}

            <Section title="🚀 Future Scope">
              {project.futureScope}
            </Section>

            {/* Conclusion */}

            <Section title="📌 Conclusion">
              {project.conclusion}
            </Section>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h3 className="text-2xl font-semibold text-purple-400 mb-3">
        {title}
      </h3>

      <div className="text-gray-300 leading-8">
        {children}
      </div>
    </div>
  );
}