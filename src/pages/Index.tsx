
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ImageDetail from "../components/ImageDetail";
import Footer from "../components/Footer";

// Sample data
const imageData = {
  title: "Morning Light",
  description: "",
  tags: ["Nature", "Landscape", "Morning", "Mist"],
  date: "October 15, 2023",
  location: "Echo Valley, CA",
  software: "Adobe Photoshop, Lightroom",
  about: "This project explores the transient moments of dawn, capturing the ephemeral quality of light as it first touches the landscape. The series examines how brief instances of natural illumination can transform ordinary scenes into extraordinary visual experiences."
};

// Additional sample images
const additionalImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    alt: "Mountain landscape at dawn"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1505159940484-eb2b9f2588e2",
    alt: "Forest in morning light"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07",
    alt: "Misty mountain valley"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1544084944-15079f3056fe",
    alt: "Sunrise over lake"
  }
];

const Index = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [selectedProjectImg, setSelectedProjectImg] = useState("https://images.unsplash.com/photo-1465189684280-6a8fa9b19a00");

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Header />
      
      <main className="container mx-auto px-6 pt-24 pb-16">
        {/* Main project section - 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left column - Project image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] overflow-hidden rounded-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
            <motion.img
              initial={{ scale: 1.1, filter: "blur(10px)" }}
              animate={{ 
                scale: isImageLoaded ? 1 : 1.1,
                filter: isImageLoaded ? "blur(0px)" : "blur(10px)"
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              src={selectedProjectImg}
              alt="Morning Light"
              className="w-full h-full object-cover"
              onLoad={() => setIsImageLoaded(true)}
            />
          </motion.div>
          
          {/* Right column - Project details */}
          <div>
            <ImageDetail image={imageData} />
          </div>
        </div>
        
        {/* More images section - row of thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8"
        >
          <h3 className="text-xl font-mono font-light tracking-wide mb-6">More From This Project</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalImages.map((img) => (
              <motion.div
                key={img.id}
                className="aspect-square overflow-hidden rounded-lg cursor-pointer relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProjectImg(img.src)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10 opacity-0 hover:opacity-100 transition-opacity"></div>
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
