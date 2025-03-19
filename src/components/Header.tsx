
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/5 border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-mono font-light tracking-wider">
          NAMISH<span className="text-gray-400">//</span>
        </Link>
        <nav className="flex items-center space-x-8">
          <Link
            to="/"
            className="text-sm font-mono text-white/80 hover:text-white transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="text-sm font-mono text-white/80 hover:text-white transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm font-mono text-white/80 hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
