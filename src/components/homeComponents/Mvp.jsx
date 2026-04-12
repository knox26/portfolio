import React from "react";
import bhaviImage from "@/assets/bhavi5.jpg"; // Ensure this path is correct and the file exists
import { HiOutlineDocumentText } from "react-icons/hi2";
import { LuLinkedin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Mvp() {
  return (
    <>
      <div className="flex mt-14 flex-col md:flex-row  md:pb-4 border-b-2 border-zinc-600">
        <div className="w-full flex justify-center items-center pr-1 md:hidden">
          <img src={bhaviImage} alt="Profile picture of Bhavitavya" width={160} height={160} loading="eager" className="rounded-lg w-40 " />
        </div>
        <div className="md:w-[71%] pt-4 flex flex-col ">
          <div className=" flex justify-center text-xl xs:text-2xl  md:hidden">
            hi, Bhavitavya here 👋
          </div>
          <div className="hidden md:block">
            <div className=" flex justify-center   md:justify-start text-5xl">
              hi, Bhavitavya
            </div>
            <div className=" flex justify-center    md:justify-start text-5xl">
              here 👋
            </div>
          </div>
          <div className=" text-md mt-8 mx-2 mb-6 text-white/70 flex justify-center md:mx-0 md:mr-5 md:justify-start md:text-lg lg:text-xl ">
            {new Date().getFullYear() - 2002}-year-old web wizard from India 🇮🇳, crafting full-stack magic by
            day and chasing perfect soundwaves as an audiophile by night.
          </div>
          <div className="flex py-3 md:py-5 pl-1 text-md gap-5 w-full ">
            <a
              href="https://drive.google.com/file/d/1XYl0NSrEh0vFrSFzQNzhesdfyh-KAJ_A/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Resume"
              className=" py-1 px-2 rounded-lg flex justify-center items-center gap-1 tracking-tight hover:text-white text-zinc-500  "
            >
              <HiOutlineDocumentText aria-hidden="true" />
              Resume
            </a>
            <div className="flex gap-4 border-l-2 border-zinc-600 pl-10">
              <a
                href="https://www.linkedin.com/in/bhavitavya-jadhav-a490a2264"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className=" hover:text-white text-zinc-500  rounded-lg flex justify-center items-center gap-2 text-xl"
              >
                <LuLinkedin aria-hidden="true" />
              </a>
              <a
                href="https://github.com/knox26"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className=" hover:text-white text-zinc-500  rounded-lg flex justify-center items-center gap-2 text-xl"
              >
                <FaGithub aria-hidden="true" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bvjadhav7558@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Send Email"
                className=" hover:text-white text-zinc-500  rounded-lg flex justify-center items-center gap-2 text-xl"
              >
                <MdOutlineEmail aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-[29%] md:flex justify-end items-center  hidden ">
          <img
            src={bhaviImage}
            alt="Profile picture of Bhavitavya"
            width={300}
            height={300}
            loading="lazy"
            className=" rounded-xl h-[100%] max-h-72  w-auto object-contain"
          />
        </div>
      </div>
    </>
  );
}

export default Mvp;
