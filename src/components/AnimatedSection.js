import React from "react";
import { motion } from "framer-motion";

/**
 * AnimatedSection Component
 *
 * This component provides a simple wrapper for animating its child content using Framer Motion.
 * It ensures that the animation plays when the section scrolls into view and makes it suitable for responsive designs.
 *
 * Props:
 * - children: React elements to be displayed and animated within the section.
 */
const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      // Initial animation state: starts with opacity 0 and positioned 100px below
      initial={{ opacity: 0, y: 100 }}
      // Animation state when the element comes into view: fades in and moves to original position
      whileInView={{ opacity: 1, y: 0 }}
      // Smooth transition for the animation
      transition={{ duration: 0.6 }}
      // Ensures the animation triggers only once when the section is in view
      viewport={{ once: true }}
      // Default padding to maintain spacing on all screen sizes
      className="p-4"
    >
      {children} {/* Render the child elements */}
    </motion.div>
  );
};

export default AnimatedSection;
