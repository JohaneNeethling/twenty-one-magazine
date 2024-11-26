const Footer = () => {
  return (
    <footer className="bg-hotPink py-6 text-white font-bold text-center font-serif">
      {/* Footer container with background color, padding, and centered text */}
      <p className="text-sm sm:text-base">
        {/* Text size adjusts based on screen width. Small screens have a smaller text size, larger screens will have a slightly bigger text */}
        &copy; 2024 {/* Copyright symbol followed by the year */}
        {/* Anchor element linking to the Neethling Development website */}
        <a
          href="https://your-digital-architect.onrender.com"
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Improves security by preventing potential malicious behavior in new tabs
          className="underline hover:text-gray-300" // Underlines the link and adds a hover effect for accessibility
        >
          Neethling Development
        </a>{" "}
        {/* Closing text indicating rights are reserved */}
        All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
