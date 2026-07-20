import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#090312] border-t border-purple-900 py-6 text-center">

      <h2 className="text-white text-xl font-bold">
        Anusha<span className="text-purple-400">.</span>
      </h2>

      <p className="text-gray-400 mt-3">
        Aspiring Software Tester | Python | SQL | Manual Testing
      </p>

      <p className="text-gray-500 mt-5 flex justify-center items-center gap-2">
        Made with <FaHeart className="text-red-500" /> by Anusha Tippabathini
      </p>

      <p className="text-gray-600 mt-3 text-sm">
        © 2026 All Rights Reserved.
      </p>

    </footer>
  );
}