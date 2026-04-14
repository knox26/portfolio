import React from "react";
import { FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="w-full flex items-center justify-between mt-10 pt-8 pb-8 border-t border-white/5">
      <div className="text-zinc-500 text-sm font-medium">© {new Date().getFullYear()} Bhavitavya Jadhav</div>
      <div className="flex gap-3">
        <a
          href="https://www.linkedin.com/in/bhavitavya-jadhav-a490a2264"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="p-2 text-zinc-500 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all text-lg"
        >
          <LuLinkedin aria-hidden="true" />
        </a>
        <a
          href="https://github.com/knox26"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="p-2 text-zinc-500 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all text-lg"
        >
          <FaGithub aria-hidden="true" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=bvjadhav7558@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send Email"
          className="p-2 text-zinc-500 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-all text-lg"
        >
          <MdOutlineEmail aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
