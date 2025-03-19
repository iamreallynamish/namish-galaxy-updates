
import React from "react";
import { motion } from "framer-motion";

interface ImageDetailProps {
  image: {
    title: string;
    description: string;
    tags: string[];
    date: string;
    location: string;
    camera: string;
    lens: string;
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
          className={`text-4xl ${image.title === "Morning Light" ? "text-5xl" : "text-4xl"} font-light tracking-wide`}
        >
          {image.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-2 text-white/70 max-w-2xl"
        >
          {image.description}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm text-white/40 uppercase tracking-wider mb-4">Info & Tags</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {image.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs rounded-full backdrop-blur-sm bg-white/10 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex justify-between">
                <span className="text-white/40">Date</span>
                <span>{image.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Location</span>
                <span>{image.location}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm text-white/40 uppercase tracking-wider mb-4">Technical</h3>
            <div className="grid grid-cols-1 gap-2">
              <div className="flex justify-between">
                <span className="text-white/40">Camera</span>
                <span>{image.camera}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Lens</span>
                <span>{image.lens}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageDetail;
