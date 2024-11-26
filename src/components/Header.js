import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="bg-hotPink p-6 text-white font-serif"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header title */}
      <h1 className="text-4xl font-bold">Twenty One Magazine</h1>

      {/* Navigation menu */}
      <nav className="mt-4">
        {/* The menu items are wrapped in an unordered list */}
        <ul className="flex flex-wrap justify-center space-x-12 text-xl font-bold">
          {/* Each list item has a link to different sections */}
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
