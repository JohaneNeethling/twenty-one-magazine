import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="bg-hotPink p-6 text-white font-serif"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header title with toggle button */}
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Twenty One Magazine</h1>
        <button
          className="text-3xl lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>
      </div>

      {/* Navigation menu */}
      <nav>
        <ul
          className={`mt-4 lg:flex lg:space-x-10 text-xl font-bold transition-all duration-300 ${
            menuOpen ? "block" : "hidden lg:block"
          }`}
        >
          <li>
            <Link to="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/magazines" className="hover:text-yellow-400">
              Magazine
            </Link>
          </li>
          <li>
            <Link to="/ask" className="hover:text-yellow-400">
              Ask Big Sister
            </Link>
          </li>
          <li>
            <Link to="/meetme" className="hover:text-yellow-400">
              Meet Me
            </Link>
          </li>
          <li>
            <Link to="/quiz" className="hover:text-yellow-400">
              Quiz
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
