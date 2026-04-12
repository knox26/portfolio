import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaCircle } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import Tcs from "@/assets/tcs3.png"; // Fixed file extension typo
import { SiGithub } from "react-icons/si";
import { education, experience, projects } from "../../lib/constants";

const tabHeader = [
  { id: "tab-exp", name: "Experience" },
  { id: "tab-proj", name: "Projects" },
  { id: "tab-edu", name: "Education" },
];

const TimelineItem = ({ icon, title, subtitle, date, children }) => (
  <div className="pt-4 flex bg-transparent">
    <div className="mt-2 w-[20%] h-full flex items-center justify-center text-lg text-zinc-800 rounded-full">
      {icon}
    </div>
    <div className="w-[80%] flex flex-col justify-center pb-5">
      <span className="text-xl md:text-2xl pb-3 text-white/80">{title}</span>
      {subtitle && (
        <span className="text-sm md:text-lg tracking-wide text-white/60 pr-2 md:pr-0">
          {subtitle}
        </span>
      )}
      {date && (
        <span className="text-sm tracking-wide text-white/60">{date}</span>
      )}
      {children}
    </div>
  </div>
);

function TabSection() {
  return (
    <div className="flex items-center justify-center w-full mt-10 ">
      <Tabs className="w-full h-full " defaultValue="experience">
        <div className=" flex justify-center items-center  mx-[25%]">
          <TabsList className="bg-transperent rounded-lg w-full  ">
            {tabHeader.map((header) => (
              <TabsTrigger
                key={header.id}
                value={header.name.toLowerCase()}
                className="data-[state=active]:bg-transparent text-white text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-white data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-500 tracking-widest text-xl md:text-2xl"
              >
                {header.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="mt-10  w-full border rounded-xl">
          <TabsContent className="relative pt-8" value="experience">
            {experience.map((edu) => (
              <TimelineItem
                key={edu.id}
                icon={
                  <div className="bg-zinc-900 rounded-full p-2">
                    <img
                      src={Tcs}
                      alt="TCS Logo"
                      width={28}
                      height={28}
                      loading="lazy"
                      className="h-7 w-auto"
                    />
                  </div>
                }
                title={edu.post}
                subtitle={edu.company}
                date={edu.year}
              />
            ))}
            <div className="absolute flex items-center justify-center py-7  top-0 left-0 z-[-1] h-full w-[20%] bg-trnasparent">
              <div className="  h-full w-1 bg-zinc-900"></div>
            </div>
          </TabsContent>

          <TabsContent className="pt-8 relative " value="projects">
            {projects.map((edu) => (
              <TimelineItem
                key={edu.id}
                icon={<FaCircle />}
                title={edu.title}
                subtitle={edu.description}
              >
                <span className="pt-4 text-xl tracking-wide text-white/70 flex gap-2">
                  {edu.stack}
                </span>
                <span className="pt-4 text-md tracking-wide flex gap-2 ">
                  {edu.liveLink && (
                    <a
                      href={edu.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live Demo of ${edu.title}`}
                      className=" rounded-lg p-1 hover:text-blue-500 text-white  border-2 border-zinc-800 hover:bg-zinc-900 hover:border-zinc-900  "
                    >
                      <FaLink className="text-xl" aria-hidden="true" />
                    </a>
                  )}
                  {edu.githubLink && (
                    <a
                      href={edu.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub Repo for ${edu.title}`}
                      className="border-2 hover:text-blue-500 text-white border-zinc-800 rounded-lg p-1 hover:bg-zinc-900 hover:border-zinc-900 "
                    >
                      <SiGithub className="text-xl" aria-hidden="true" />
                    </a>
                  )}
                </span>
              </TimelineItem>
            ))}
            <div className="absolute flex items-center justify-center py-7  top-0 left-0 z-[-1] h-full w-[20%] bg-trnasparent">
              <div className=" h-full w-1 bg-zinc-900"></div>
            </div>
          </TabsContent>

          <TabsContent className="relative pt-8" value="education">
            {education.map((edu) => (
              <TimelineItem
                key={edu.id}
                icon={<FaCircle />}
                title={edu.college}
                subtitle={edu.degree}
                date={edu.year}
              />
            ))}
            <div className="absolute flex items-center justify-center py-7  top-0 left-0 z-[-1] h-full w-[20%] bg-trnasparent">
              <div className="  h-full w-1 bg-zinc-900"></div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default TabSection;
