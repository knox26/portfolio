import React from "react";
import { LuUser, LuFolder } from "react-icons/lu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaCircle, FaYahoo } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

import {
  SiMongodb,
  SiExpress,
  SiJsonwebtokens,
  SiReact,
  SiNodedotjs,
  SiStreamlit,
  SiPython,
  SiTradingview,
  SiGithub,
} from "react-icons/si";
const education = [
  {
    year: "2021 - 2024",
    degree: "BE - Information technology",
    college: "Smt Kashibai Navle College of Engineering, Pune",
  },
  {
    year: "2019 - 2020",
    degree: "XII - PCMB",
    college: "Dr. Balasaheb Vikhe Patil Junior College, Ahmednagar",
  },
  {
    year: "2017 - 2018",
    degree: "X",
    college: "Residential Highschool, Ahmednagar",
  },
];

const projects = [
  {
    title: "Uber - Microservices",
    description:
      "A microservices-based ride-hailing platform with User, Captain, Ride, and Gateway services. RabbitMQ facilitates communication between the Ride and Captain services for efficient message handling.",
    stack: [<SiNodedotjs />, <SiExpress />, <SiMongodb />, <SiJsonwebtokens />],

    githubLink: "https://github.com/knox26/Uber-micro-services",
  },
  {
    title: "Talk-Verse",
    description:
      "Talk-Verse is a real-time chatting platform where users can send messages, share files or images, and form group chats for multiple users. It’s simple, efficient, and supports secure communication.",
    stack: [
      <SiReact />,
      <SiNodedotjs />,
      <SiExpress />,
      <SiMongodb />,
      <SiJsonwebtokens />,
    ],
    liveLink: "https://talk-verse.onrender.com",
    githubLink: "https://github.com/knox26/sync-chat-app",
  },
  {
    title: "Stock-X",
    description:
      "A web app offering candlestick stock visualization with indicators, fundamental analysis , top 10 news, and LSTM-based stock price forecasting. Empowering users with data-driven investment insights for informed decision-making. this project is only for educational purposes.",
    stack: [<SiStreamlit />, <SiPython />, <SiTradingview />, <FaYahoo />],
    liveLink: "https://stockvizandforecast.streamlit.app/",
    githubLink: "https://github.com/knox26/project-final",
  },
];
function TabSection() {
  return (
    <div className="flex items-center justify-center w-full mt-10 ">
      <Tabs className="w-full h-full " defaultValue="projects">
        <div className=" flex justify-center items-center  mx-[25%]">
          <TabsList className="bg-transperent rounded-lg w-full  ">
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-transparent text-white text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-white data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-500 tracking-widest text-xl md:text-2xl"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="education"
              className="data-[state=active]:bg-transparent text-white text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-white data-[state=active]:font-semibold data-[state=active]:border-b-purple-500 p-3 transition-all duration-500 tracking-widest text-xl md:text-2xl"
            >
              Education
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="mt-10  w-full border rounded-xl">
          <TabsContent className="pt-8 relative " value="projects">
            {projects.map((edu, id) => (
              <div key={id} className="pt-4 flex bg-transparent">
                <div className="mt-2 w-[20%] h-full flex items-center justify-center text-lg text-zinc-800">
                  <FaCircle />
                </div>
                <div className={`w-[80%] flex flex-col justify-center  pb-5`}>
                  <span className="text-xl md:text-2xl pb-5 text-white/80">
                    {edu.title}{" "}
                  </span>
                  <span className="text-sm md:text-lg tracking-wide text-white/60 pr-2 md:pr-0">
                    {edu.description}
                  </span>
                  <span className="pt-4 text-xl tracking-wide text-white/70 flex gap-2">
                    {edu.stack}
                  </span>
                  <span className="pt-4 text-md tracking-wide flex gap-2 ">
                    {edu.liveLink && (
                      <button
                        className=" rounded-lg p-1 hover:text-blue-500 text-white  border-2 border-zinc-800 hover:bg-zinc-900 hover:border-zinc-900  "
                        onClick={() => window.open(edu.liveLink, "_blank")}
                      >
                        <FaLink className="text-xl" />
                      </button>
                    )}
                    {edu.githubLink && (
                      <button
                        className="border-2 hover:text-blue-500 text-white border-zinc-800 rounded-lg p-1 hover:bg-zinc-900 hover:border-zinc-900 "
                        onClick={() => window.open(edu.githubLink, "_blank")}
                      >
                        <SiGithub className="text-xl" />
                      </button>
                    )}
                  </span>
                </div>
              </div>
            ))}
            <div className="absolute flex items-center justify-center py-7  top-0 left-0 z-[-1] h-full w-[20%] bg-trnasparent">
              {/*  pt-14 pb-20 remove line from top dot and bootom dot */}
              <div className=" h-full w-1 bg-zinc-800"></div>
            </div>
          </TabsContent>

          <TabsContent className="relative pt-8" value="education">
            {education.map((edu, id) => (
              <div key={id} className="pt-4 flex bg-transparent">
                <div className="mt-2 w-[20%] h-full flex items-center justify-center text-lg text-zinc-800">
                  <FaCircle />
                </div>
                <div className={`w-[80%] flex flex-col justify-center pb-5`}>
                  <span className="text-xl md:text-2xl pb-3 text-white/80">
                    {edu.college}
                  </span>
                  <span className="text-sm md:text-md tracking-wide text-white/60">
                    {edu.degree}
                  </span>
                  <span className="text-sm tracking-wide text-white/60">
                    {edu.year}{" "}
                  </span>
                </div>
              </div>
            ))}
            <div className="absolute flex items-center justify-center py-7  top-0 left-0 z-[-1] h-full w-[20%] bg-trnasparent">
              {/*  pt-14 pb-20 remove line from top dot and bootom dot */}
              <div className="  h-full w-1 bg-zinc-800"></div>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default TabSection;
