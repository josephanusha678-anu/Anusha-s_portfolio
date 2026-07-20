import { motion } from "framer-motion";
import {
  FaPython,
  FaBug,
  FaClipboardCheck,
  FaSearch,
} from "react-icons/fa";

import {
  SiMysql,
  SiTestinglibrary,
} from "react-icons/si";

const skills = [
  {
    name: "Python",
    icon: <FaPython className="text-yellow-400 text-6xl" />,
  },
  {
    name: "SQL",
    icon: <SiMysql className="text-blue-400 text-6xl" />,
  },
  {
    name: "Manual Testing",
    icon: <SiTestinglibrary className="text-green-400 text-6xl" />,
  },
  {
    name: "Bug Detection",
    icon: <FaBug className="text-red-400 text-6xl" />,
  },
  {
    name: "Test Case Design",
    icon: <FaClipboardCheck className="text-purple-400 text-6xl" />,
  },
  {
    name: "Defect Reporting",
    icon: <FaSearch className="text-pink-400 text-6xl" />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0d0618] text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          My <span className="text-purple-400">Skills</span>
        </motion.h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.08,
                y: -10,
              }}
              transition={{ duration: 0.35 }}
              className="bg-[#1b1030] border border-purple-700 rounded-3xl p-10 flex flex-col items-center justify-center shadow-xl hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] transition-all duration-500 cursor-pointer"
            >

              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                {skill.icon}
              </motion.div>

              <h3 className="text-2xl font-semibold mt-6 text-center">
                {skill.name}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}