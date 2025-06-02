import React from "react";
import { FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <div className="w-full h-18 flex items-center justify-between mt-10   pt-5 pb-2 border-t-2 border-zinc-600">
      <div className="text-zinc-500">@{new Date().getFullYear()}</div>
      <div className="flex gap-4 ">
        <button
          className=" hover:text-white text-zinc-500  rounded-lg flex justify-center items-center gap-2 text-xl"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/bhavitavya-jadhav-a490a2264",
              "_blank"
            )
          }
        >
          <LuLinkedin />
        </button>
        <button
          className=" hover:text-white text-zinc-500  rounded-lg flex justify-center items-center gap-2 text-xl"
          onClick={() => window.open("https://github.com/knox26", "_blank")}
        >
          <FaGithub />
        </button>
        <button
          className=" hover:text-white text-zinc-500  rounded-lg flex justify-center items-center gap-2 text-xl"
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=bvjadhav7558@gmail.com",
              "_blank"
            )
          }
        >
          <MdOutlineEmail />
        </button>
      </div>
    </div>
  );
}

export default Footer;
