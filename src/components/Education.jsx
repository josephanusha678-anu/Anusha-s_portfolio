import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const education = [
  {
    icon: <FaGraduationCap />,
    title: "Bachelor of Technology",
    subtitle: "Computer Science Engineering",
    institute: "Vignan's Nirula Institute of Technology and Science for Women",
    year: "2023 - 2027",
    score: "CGPA : 8.1",
  },
  {
    icon: <FaSchool />,
    title: "Intermediate (MPC)",
    subtitle: "Board of Intermediate Education",
    institute: "Andhra Pradesh",
    year: "2021 - 2023",
    score: "85.4%",
  },
  {
    icon: <FaSchool />,
    title: "Secondary School (SSC)",
    subtitle: "Board of Secondary Education",
    institute: "Andhra Pradesh",
    year: "2020 - 2021",
    score: "83%",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-[#0d0618] text-white py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My <span className="text-purple-400">Education</span>
        </motion.h2>

        <div className="relative">

          {/* Timeline */}
          <div className="hidden md:block absolute left-7 top-0 bottom-0 w-[3px] bg-purple-700 rounded-full"></div>

          <div className="space-y-6">

            {education.map((edu, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -60 : 60,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                whileHover={{
                  scale: 1.03,
                  y: -6,
                }}
                transition={{ duration: 0.4 }}
                className="relative flex gap-6 items-start"
              >

                {/* Icon */}

                <div className="hidden md:flex w-14 h-14 rounded-full bg-purple-600 text-white text-2xl items-center justify-center z-10 shadow-[0_0_15px_rgba(168,85,247,0.6)]">
                  {edu.icon}
                </div>

                {/* Card */}

                <div className="flex-1 bg-[#1b1030] border border-purple-700 rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] cursor-pointer">

                  <div className="flex flex-wrap justify-between items-center gap-3">

                    <div>

                      <h3 className="text-2xl font-bold">
                        {edu.title}
                      </h3>

                      <p className="text-purple-400 mt-1">
                        {edu.subtitle}
                      </p>

                    </div>

                    <span className="bg-purple-600 px-4 py-2 rounded-full text-sm font-semibold">
                      {edu.year}
                    </span>

                  </div>

                  <p className="text-gray-300 mt-4 leading-7">
                    {edu.institute}
                  </p>

                  <div className="mt-5">

                    <span className="bg-purple-500/20 border border-purple-500 text-purple-300 px-4 py-2 rounded-lg font-semibold">
                      {edu.score}
                    </span>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}