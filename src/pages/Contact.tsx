
import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";

const Contact = () => {
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
          <h1 className="text-4xl font-light tracking-wide mb-8">Contact</h1>
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-lg p-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-white/60 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-white/60 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-white/60 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white/20"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 rounded-md transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Contact;
