import React from "react";
import { motion } from "framer-motion";
import bhaviImage from "@/assets/Bhavitavya.png";
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
        initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)", y: 0 }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: -40 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-48 md:w-[320px] relative z-10 group"
      >
        {/* Infinite Levitating Component */}
        <motion.div
           animate={{ y: [-12, 12, -12] }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           className="relative"
        >
          {/* Animated Gradient Glow Border Backdrop */}
          <motion.div
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-[3px] rounded-[2rem] bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-[length:200%_200%] opacity-40 blur-md group-hover:opacity-70 transition-opacity duration-500"
          />
          {/* Tight Solid Animated Border */}
          <motion.div
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 bg-[length:200%_200%]"
          />
          
          {/* Core Image Container */}
          <div className="relative bg-zinc-950 p-[3px] rounded-[2rem] overflow-hidden">
            <img
              src={bhaviImage}
              alt="Profile picture of Bhavitavya"
              width={320}
              loading="eager"
              className="w-full aspect-[8/9] object-cover object-top rounded-[1.8rem] relative z-10"
            />
          </div>
        </motion.div>

        {/* Floor Drop-shadow (Grows and shrinks as the image 'floats') */}
        <motion.div
           animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.2, 0.6, 0.2] }}
           transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black rounded-[100%] blur-xl"
        />
      </motion.div>
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
    </motion.div>
  );
}

export default Mvp;
