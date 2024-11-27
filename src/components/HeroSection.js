import { motion } from "framer-motion";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import Jade1 from "../media/Jade1.jpeg";
import BGMag from "../media/BGMag.png";

const HeroSection = () => {
  return (
    <section
      className="relative pt-20 pb-24 bg-cover bg-center flex items-center justify-center border-b-8 border-hotPink"
      style={{ backgroundImage: `url(${BGMag})` }} // Background image
    >
      {/* Fade-in overlay to darken the background image */}
      <motion.div
        className="absolute inset-0 opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center text-pink-700 sm:px-10 md:px-20 w-full">
        {/* Image Section */}
        <motion.div
          className="flex-shrink-0 mb-6 lg:mb-0 lg:mr-8"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Hero image with circular border */}
          <img
            src={Jade1}
            alt="Hero"
            className="w-72 h-72 sm:w-96 sm:h-96 rounded-full object-cover border-8 border-hotPink"
          />

          {/* Social Media Links under the Image */}
          <div className="mt-4 space-x-8 flex justify-center">
            {/* Social media icons */}
            <a
              href="https://www.facebook.com/profile.php?id=100088384988621"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-800 hover:text-yellow-400"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.instagram.com/jadesphoneisbroken.again/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-800 hover:text-yellow-400"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://www.tiktok.com/@roasted_coffeegirl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-800 hover:text-yellow-400"
            >
              <SiTiktok size={30} />
            </a>
            <a
              href="https://forms.gle/55Uccz8YuXyp3x4A7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-800 hover:text-yellow-400"
            >
              <FaGoogle size={30} />
            </a>
          </div>
        </motion.div>

        {/* Text Section */}
        <div className="flex flex-col items-center lg:items-start lg:text-left bg-hotPink text-white font-serif p-6 sm:p-11 text-center mb-8 ">
          {/* Main Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            Hey, Little Sis!
          </motion.h1>
          {/* Subtext / Description */}
          <p className="mt-4 text-lg sm:text-xl leading-8 sm:leading-10">
            Welcome to your safe space where we talk all things life, love, and
            growing into the amazing YOU! Whether you need advice, a pep talk,
            or just a little inspiration, I’ve got your back. From confidence
            tips to style hacks, think of me as your go-to big sis, here to help
            you shine. 🌟 Got questions? Ask away! Ready to dive in? Let’s make
            magic happen together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
