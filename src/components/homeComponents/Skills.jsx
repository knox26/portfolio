import React from "react";
import { skills } from "../../lib/constants";

function Skills() {
  return (
    <div className=" md:mt-0 pt-5 xs:pt-8 ">
      <span className="text-xl xs:text-2xl md:text-3xl pl-1">Skills</span>
      <div className=" w-full grid grid-cols-3  md:grid-cols-6 mt-3 xs:mt-5  justify  border-zinc-600 pb-3">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="xyz flex flex-col m-1 md:m-4 text-zinc-500 hover:text-white transition-all duration-300  p-2 rounded-xl "
          >
            <div className=" text-xl sm:text-2xl md:text-2xl lg:text-3xl flex items-center justify-center">
              {skill.icon}
            </div>
            <div className="flex items-center justify-center text-sm sm:text-md md:text-lg">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
