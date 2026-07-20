import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0d0618] text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14"
        >
          Contact <span className="text-purple-400">Me</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#1b1030] border border-purple-700 rounded-2xl p-8 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition duration-500"
          >

            <h3 className="text-3xl font-bold mb-8">
              Let's Connect
            </h3>

            <div className="space-y-8">

              <div className="flex items-center gap-5">
                <FaEnvelope className="text-purple-400 text-2xl" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="font-semibold">
                    josephanusha678@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaPhone className="text-purple-400 text-2xl" />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <p className="font-semibold">
                    +91 7780321395
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaLinkedin className="text-purple-400 text-2xl" />
                <div>
                  <p className="text-gray-400">LinkedIn</p>

                  <a
                    href="https://www.linkedin.com/in/anusha-tippabathini-aaa8a0361/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-purple-300"
                  >
                    View Profile
                  </a>

                </div>
              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-[#1b1030] border border-purple-700 rounded-2xl p-8 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition duration-500"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-5 p-4 rounded-xl bg-[#2a1848] outline-none border border-transparent focus:border-purple-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full mb-5 p-4 rounded-xl bg-[#2a1848] outline-none border border-transparent focus:border-purple-400"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full mb-6 p-4 rounded-xl bg-[#2a1848] outline-none border border-transparent focus:border-purple-400"
            />

            <button
              className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-xl font-semibold flex justify-center items-center gap-3 transition"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}