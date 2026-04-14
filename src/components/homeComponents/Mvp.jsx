import React from "react";
import { motion } from "framer-motion";
import bhaviImage from "@/assets/bhavi5.jpg";
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
        className="w-48 h-48 md:w-[320px] md:h-[320px] relative z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-3xl blur-xl opacity-20 animate-pulse" />
        <img
          src={bhaviImage}
          alt="Profile picture of Bhavitavya"
          width={320}
          height={320}
          loading="eager"
          className="w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl relative z-10"
        />
      </motion.div>
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
    </motion.div>
  );
}

export default Mvp;
