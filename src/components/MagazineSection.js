import { motion } from "framer-motion"; // Importing motion from framer-motion for animations
import Promo1 from "../media/1.png"; // Importing image for the December issue
import Promo2 from "../media/2.png"; // Importing image for the January issue
import Promo3 from "../media/3.png"; // Importing image for the February issue

// Functional component for displaying the magazine section
const MagazineSection = () => {
  // Array containing the details of each magazine issue
  const magazineIssues = [
    {
      title: "December Issue, 2024", // Title of the December issue
      imageUrl: Promo1, // Image URL for the December issue
      description: "Coming Soon!", // Description for the December issue
    },
    {
      title: "January Issue, 2025", // Title of the January issue
      imageUrl: Promo2, // Image URL for the January issue
      description: "Coming Soon!", // Description for the January issue
    },
    {
      title: "February Issue, 2025", // Title of the February issue
      imageUrl: Promo3, // Image URL for the February issue
      description: "Coming Soon!", // Description for the February issue
    },
  ];

  return (
    <section id="magazine" className="py-16 px-6 md:px-9 bg-softPink">
      {/* Section Title with animation */}
      <motion.h2
        className="text-3xl sm:text-4xl text-center font-bold text-hotPink"
        initial={{ x: -100 }} // Initial position for animation
        animate={{ x: 0 }} // Final position after animation
        transition={{ duration: 1 }} // Duration of the animation
      >
        Grab The Latest Issue of Twenty One Magazine Today!
      </motion.h2>

      {/* Grid layout for the magazine issues */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mapping through the magazineIssues array to create each issue card */}
        {magazineIssues.map((issue, index) => (
          <motion.div
            key={index} // Using index as the key for each issue
            className="bg-gray-100 p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
            initial={{ opacity: 0 }} // Initial opacity for fade-in effect
            animate={{ opacity: 1 }} // Final opacity after animation
            transition={{ duration: 1 }} // Duration of the fade-in effect
          >
            {/* Displaying the magazine image */}
            <img
              src={issue.imageUrl} // Image URL from the current issue
              alt="Magazine Cover" // Alt text for the image
              className="w-full h-64 object-cover rounded-lg" // Making the image cover its container with rounded corners
            />
            {/* Displaying the title of the magazine issue */}
            <h3 className="mt-4 text-xl font-semibold">{issue.title}</h3>
            {/* Displaying the description of the magazine issue */}
            <p className="text-gray-600 mt-2">{issue.description}</p>
            {/* Button for downloading the magazine issue */}
            <button className="mt-4 bg-hotPink text-white py-2 px-4 rounded-lg hover:bg-white hover:text-hotPink hover:border-2 hover:border-hotPink">
              Download
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MagazineSection;
