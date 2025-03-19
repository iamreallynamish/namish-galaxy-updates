
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="container mx-auto px-6 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-light tracking-wide mb-8">About</h1>
          <div className="space-y-6 text-white/80">
            <p>
              NAMISH// is a photography project dedicated to capturing the subtle 
              interplay of light, texture, and atmosphere in natural landscapes.
            </p>
            <p>
              Founded in 2023, our mission is to document the beauty of ephemeral 
              moments in nature through a minimalist aesthetic lens, emphasizing 
              composition and emotional resonance over technical complexity.
            </p>
            <p>
              Each image in our gallery represents a deliberate approach to 
              seeing and documenting the world around us—embracing both the 
              grandiose and the intimate details that often go unnoticed.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default About;
