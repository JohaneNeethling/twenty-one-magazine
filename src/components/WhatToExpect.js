import React from "react";
import { motion } from "framer-motion";

const WhatToExpect = () => {
  return (
    <section id="what-to-expect" className="py-16 bg-softPink">
      <div className="max-w-7xl mx-auto mt-8 bg-white p-8 rounded-lg shadow-lg">
        {/* Section Title */}
        <p className="text-3xl text-center text-hotPink font-extrabold">
          Twenty One Magazine is packed with fun, informative, and inspiring
          content to help you grow, learn, and feel empowered every month.
          <br />
          Here's what you can look forward to in every issue:
        </p>

        {/* Content Blocks */}
        <div className="mt-8 space-y-8">
          {/* Life Lessons & Advice */}
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-4 md:space-y-0">
            <motion.div
              className="w-12 h-12 bg-hotPink rounded-full flex items-center justify-center text-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <i className="fas fa-lightbulb"></i>
            </motion.div>
            <div>
              <h3 className="text-2xl font-semibold text-hotPink">
                Life Lessons & Advice
              </h3>
              <p className="text-lg text-black">
                Each issue brings practical advice on navigating life’s
                challenges, from school to friendships to self-love and
                everything in between.
              </p>
            </div>
          </div>

          {/* Self-Love & Confidence Boosters */}
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-4 md:space-y-0">
            <motion.div
              className="w-12 h-12 bg-hotPink rounded-full flex items-center justify-center text-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <i className="fas fa-heart"></i>
            </motion.div>
            <div>
              <h3 className="text-2xl font-semibold text-hotPink">
                Self-Love & Confidence Boosters
              </h3>
              <p className="text-lg text-black">
                Learn how to love yourself, boost your confidence, and embrace
                your uniqueness. We’re all about building a positive self-image!
              </p>
            </div>
          </div>

          {/* Community Stories & Experiences */}
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-4 md:space-y-0">
            <motion.div
              className="w-12 h-12 bg-hotPink rounded-full flex items-center justify-center text-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <i className="fas fa-comments"></i>
            </motion.div>
            <div>
              <h3 className="text-2xl font-semibold text-hotPink">
                Community Stories & Experiences
              </h3>
              <p className="text-lg text-black">
                Read inspiring stories from other girls in the community. Share
                your experiences, and find comfort in knowing you’re not alone.
              </p>
            </div>
          </div>

          {/* Fun Challenges & Activities */}
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-4 md:space-y-0">
            <motion.div
              className="w-12 h-12 bg-hotPink rounded-full flex items-center justify-center text-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <i className="fas fa-puzzle-piece"></i>
            </motion.div>
            <div>
              <h3 className="text-2xl font-semibold text-hotPink">
                Fun Challenges & Activities
              </h3>
              <p className="text-lg text-black">
                Engage with fun, interactive challenges designed to help you
                grow, explore, and stay connected with your creative side.
              </p>
            </div>
          </div>

          {/* Book & Movie Recommendations */}
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-x-4 md:space-y-0">
            <motion.div
              className="w-12 h-12 bg-hotPink rounded-full flex items-center justify-center text-white"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <i className="fas fa-book"></i>
            </motion.div>
            <div>
              <h3 className="text-2xl font-semibold text-hotPink">
                Book & Movie Recommendations
              </h3>
              <p className="text-lg text-gray-700">
                Get recommendations for books, movies, and shows that inspire
                and empower. Each issue will help you discover something new to
                dive into.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
