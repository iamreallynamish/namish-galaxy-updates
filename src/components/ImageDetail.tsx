
import React from "react";
import { motion } from "framer-motion";

interface ImageDetailProps {
  image: {
    title: string;
    description: string;
    tags: string[];
    date: string;
    location: string;
    software: string;
    about: string;
  };
}

const ImageDetail: React.FC<ImageDetailProps> = ({ image }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="mt-6 space-y-6"
    >
      <div>
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-5xl font-mono font-light tracking-wide"
        >
          {image.title}
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-6"
      >
        <div className="grid grid-cols-1 gap-6">
          <div>
            <h4 className="text-sm font-mono text-white/40 uppercase tracking-wider mb-2">About the Project</h4>
            <p className="text-sm font-mono text-white/80 mb-6">{image.about}</p>
            
            <h3 className="text-sm font-mono text-white/40 uppercase tracking-wider mb-4">PROJECT DETAILS</h3>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {image.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-mono rounded-full backdrop-blur-sm bg-white/10 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-1 gap-2 text-sm font-mono">
              <div className="flex justify-between">
                <span className="text-white/40">Date</span>
                <span>{image.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Location</span>
                <span>{image.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Software</span>
                <span>{image.software}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageDetail;
