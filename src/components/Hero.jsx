import { motion } from "framer-motion";
import { FaDownload, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b0618] via-[#1a1036] to-[#09070f] text-white px-6"
    >
      <div className="max-w-6xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-purple-300 text-xl mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="font-extrabold leading-tight mb-6"
        >
          <span
            className="
              text-white
              text-5xl
              md:text-6xl
              lg:text-7xl
              whitespace-nowrap
            "
          >
            Anusha{" "}
            <span className="text-purple-400">
              Tippabathini
            </span>
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-3xl text-gray-300 font-semibold mb-6"
        >
          Aspiring Software Tester | Python | SQL | Manual Testing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto text-gray-400 text-lg leading-9 mb-10"
        >
          Passionate about Software Testing, Quality Assurance, Python and SQL.
          Interested in identifying bugs, improving software quality and
          continuously learning new testing methodologies.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-5">

          <a
            href="#projects"
            className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-xl font-semibold transition duration-300 flex items-center gap-2"
          >
            View Projects <FaArrowRight />
          </a>

          <a
            href="#contact"
            className="border-2 border-purple-500 hover:bg-purple-600 px-8 py-4 rounded-xl font-semibold transition duration-300"
          >
            Contact Me
          </a>

          <a
            href="/RESUME.pdf"
            download
            className="border border-gray-500 hover:bg-white hover:text-black px-8 py-4 rounded-xl font-semibold transition duration-300 flex items-center gap-2"
          >
            <FaDownload />
            Resume
          </a>

        </div>

      </div>
    </section>
  );
}