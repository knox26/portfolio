import React from "react";
import { skills } from "../../lib/constants";
import { FadeIn } from "../ui/fade-in";

function Skills() {
  return (
    <FadeIn className="md:mt-0 pt-5 xs:pt-8 w-full max-w-4xl mx-auto">
      <span className="text-xl xs:text-2xl md:text-3xl pl-1 font-semibold text-white/90">Skills</span>
      <div className="w-full grid grid-cols-3 md:grid-cols-6 mt-6 justify-items-center gap-4 border-b border-white/10 pb-10">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col items-center gap-3 p-4 w-full rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 text-zinc-400 hover:text-white group"
          >
            <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <div className="text-xs sm:text-sm font-medium tracking-wide">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  );
}

export default Skills;
