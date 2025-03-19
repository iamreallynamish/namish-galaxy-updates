
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import ImageDetail from "../components/ImageDetail";
import Footer from "../components/Footer";

// Sample data
const imageData = {
  title: "Morning Light",
  description: "Captured during the golden hour, this image showcases the delicate interplay between light and shadow as dawn breaks over the misty landscape.",
  tags: ["Nature", "Landscape", "Morning", "Mist"],
  date: "October 15, 2023",
  location: "Echo Valley, CA",
  software: "Adobe Photoshop, Lightroom",
  about: "This project explores the transient moments of dawn, capturing the ephemeral quality of light as it first touches the landscape. The series examines how brief instances of natural illumination can transform ordinary scenes into extraordinary visual experiences."
};

const Index = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <Header />
      
      <main className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
              src="https://images.unsplash.com/photo-1465189684280-6a8fa9b19a00"
              alt="Morning Light"
              className="w-full h-full object-cover"
              onLoad={() => setIsImageLoaded(true)}
            />
          </motion.div>
          
          <div>
            <ImageDetail image={imageData} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
