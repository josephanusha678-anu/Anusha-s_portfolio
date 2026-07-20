import { motion } from "framer-motion";
import { FaUserGraduate, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0f051d] text-white flex items-center py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          About <span className="text-purple-400">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Hi, I'm <span className="text-purple-400">Anusha Tippabathini</span>
            </h3>

            <p className="text-gray-300 text-lg leading-9">
              I'm a B.Tech Computer Science Engineering student at
              <span className="text-purple-300">
                {" "}Vignan's Nirula Institute of Technology and Science for Women
              </span>.
            </p>

            <p className="text-gray-400 mt-6 text-lg leading-9">
              I am passionate about Software Testing, Manual Testing,
              Python and SQL. I enjoy identifying bugs, improving
              software quality, learning new technologies and building
              practical projects.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-[#1b1030] rounded-3xl p-10 border border-purple-700 shadow-2xl"
          >

            <h3 className="text-3xl font-bold text-purple-400 mb-8">
              Personal Information
            </h3>

            <div className="space-y-6 text-lg">

              <div className="flex items-center gap-4">
                <FaUserGraduate className="text-purple-400 text-2xl" />
                <span><b>Degree:</b> B.Tech - CSE</span>
              </div>

              <div className="flex items-center gap-4">
                <FaUserGraduate className="text-purple-400 text-2xl" />
                <span><b>Passout:</b> 2027</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-purple-400 text-2xl" />
                <span><b>Location:</b> Guntur, Andhra Pradesh</span>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-purple-400 text-2xl" />
                <span><b>Email:</b> josephanusha678@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-purple-400 text-2xl" />
                <span><b>Phone:</b> +91 7780321395</span>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}