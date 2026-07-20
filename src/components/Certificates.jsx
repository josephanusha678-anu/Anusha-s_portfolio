import { motion } from "framer-motion";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const certificates = [
  {
    title: "Human Computer Interaction",
    issuer: "NPTEL",
    level: "Elite + Gold",
    file: "/certificates/hci.pdf",
  },
  {
    title: "Joy of Computing Using Python",
    issuer: "NPTEL",
    level: "Elite",
    file: "/certificates/python.pdf",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    level: "Certificate",
    file: "/certificates/cisco1.pdf",
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    level: "Certificate",
    file: "/certificates/cisco2.pdf",
  },
  {
    title: "Generative AI",
    issuer: "Infosys Springboard",
    level: "Certificate",
    file: "/certificates/infosys-genai.pdf",
  },
  {
    title: "CodeChef DSA",
    issuer: "CodeChef",
    level: "Certificate",
    file: "/certificates/codechef.pdf",
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="min-h-screen bg-[#130b1f] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          My{" "}
          <span className="text-purple-400">
            Certificates
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {certificates.map((cert, index) => (

            <motion.a
              key={index}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
                y: -8,
              }}
              transition={{ duration: 0.3 }}
              className="block bg-[#221335] border border-purple-700 rounded-3xl p-8 hover:border-purple-400 hover:shadow-[0_0_35px_rgba(168,85,247,0.45)] duration-300"
            >

              <FaAward
                className="text-purple-400 mb-6"
                size={45}
              />

              <h3 className="text-2xl font-bold mb-3">
                {cert.title}
              </h3>

              <p className="text-gray-300 mb-2">
                <span className="font-semibold text-purple-300">
                  Issuer:
                </span>{" "}
                {cert.issuer}
              </p>

              <p className="text-gray-300 mb-8">
                <span className="font-semibold text-purple-300">
                  Achievement:
                </span>{" "}
                {cert.level}
              </p>

              <div className="flex items-center gap-3 text-purple-400 font-semibold">
                View Certificate
                <FaExternalLinkAlt />
              </div>

            </motion.a>

          ))}

        </div>

      </div>
    </section>
  );
}