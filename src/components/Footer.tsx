
import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, Link, ExternalLink } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={18} />,
      url: "https://linkedin.com",
    },
    {
      name: "Instagram",
      icon: <Instagram size={18} />,
      url: "https://instagram.com",
    },
    {
      name: "Twitter",
      icon: <Twitter size={18} />,
      url: "https://twitter.com",
    },
    {
      name: "Behance",
      icon: <ExternalLink size={18} />,
      url: "https://behance.net",
    },
    {
      name: "Linktree",
      icon: <Link size={18} />,
      url: "https://linktr.ee",
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="py-8 border-t border-white/10 backdrop-blur-sm bg-black/30"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          <p className="text-xs font-mono text-white/50">
            © {new Date().getFullYear()} NAMISH// All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
