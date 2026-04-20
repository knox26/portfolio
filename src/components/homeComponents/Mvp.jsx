import React from "react";
import { motion } from "framer-motion";
import bhaviImage from "@/assets/Bhavitavya.webp";
import { FileText, Linkedin, Github, Mail } from "lucide-react";

function Mvp() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col-reverse md:flex-row items-center justify-between pt-16 md:pt-24 pb-20 md:pb-32 gap-10 md:gap-6 relative"
    >
      <div className="md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left z-10 w-full px-4 md:px-0">
        <motion.div variants={itemVariants} className="text-xl md:text-2xl font-medium text-zinc-400 mb-2">
          hi, Bhavitavya here 👋
        </motion.div>
        
        <motion.h1 
          variants={itemVariants} 
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500">
            Crafting digital
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            experiences.
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-400 max-w-[500px] mb-8 leading-relaxed">
          {new Date().getFullYear() - 2002}-year-old web wizard from India 🇮🇳, crafting full-stack magic by day and chasing perfect soundwaves as an audiophile by night.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-4 w-full">
          <a
            href="https://drive.google.com/file/d/1XYl0NSrEh0vFrSFzQNzhesdfyh-KAJ_A/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume"
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95"
          >
            <FileText size={18} className="group-hover:text-blue-600 transition-colors" />
            Resume
          </a>
          
          <div className="flex gap-2 items-center">
            <a
              href="https://www.linkedin.com/in/bhavitavya-jadhav-a490a2264"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 bg-zinc-900 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-white/20 transition-all hover:scale-105 active:scale-95"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/knox26"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 bg-zinc-900 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-white/20 transition-all hover:scale-105 active:scale-95"
            >
              <Github size={20} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bvjadhav7558@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send Email"
              className="p-3 bg-zinc-900 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-white/20 transition-all hover:scale-105 active:scale-95"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 0 }}
        animate={{ opacity: 1, scale: 1, y: -40 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-56 md:w-[360px] relative z-10 group flex justify-center items-center mt-6 md:mt-0 perspective-1000"
      >
        {/* Animated Blob Backdrop Glow */}
        <motion.div
           animate={{ 
             borderRadius: [
               "60% 40% 30% 70% / 60% 30% 70% 40%",
               "30% 70% 70% 30% / 30% 30% 70% 70%",
               "60% 40% 30% 70% / 60% 30% 70% 40%"
             ],
             rotate: [0, 90, 0]
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-60 blur-xl group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        />

        {/* Morphing Image Blob */}
        <motion.div
           animate={{ 
             borderRadius: [
               "60% 40% 30% 70% / 60% 30% 70% 40%",
               "30% 70% 70% 30% / 30% 30% 70% 70%",
               "60% 40% 30% 70% / 60% 30% 70% 40%"
             ],
             y: [-12, 12, -12],
             rotate: [0, -5, 0]
           }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="relative w-full aspect-square overflow-hidden bg-zinc-900 shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10 border border-white/20 group-hover:border-white/50 transition-colors duration-500"
        >
          {/* Subtle inner reflection */}
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-white/5 to-white/20 mix-blend-overlay pointer-events-none z-20" />
          
          <img
            src={bhaviImage}
            alt="Profile picture of Bhavitavya"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110 filter grayscale-[10%] group-hover:grayscale-0 relative z-10"
          />
        </motion.div>

        {/* Floor Shadow */}
        <motion.div
           animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.2, 0.5, 0.2] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black rounded-[100%] blur-xl"
        />
      </motion.div>
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
    </motion.div>
  );
}

export default Mvp;
