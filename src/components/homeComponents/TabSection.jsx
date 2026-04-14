import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Briefcase, GraduationCap, Code2, ExternalLink, Github } from "lucide-react";
import Tcs from "@/assets/tcs3.png";
import { education, experience, projects } from "../../lib/constants";
import { FadeIn } from "../ui/fade-in";

const tabHeader = [
  { id: "experience", name: "Experience", icon: Briefcase },
  { id: "projects", name: "Projects", icon: Code2 },
  { id: "education", name: "Education", icon: GraduationCap },
];

const TimelineCard = ({ icon, title, subtitle, date, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-6 overflow-hidden group hover:bg-white/10 transition-colors"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="flex items-start gap-4 relative z-10">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-zinc-900 border border-white/20 flex items-center justify-center text-zinc-300">
        {icon}
      </div>
      <div className="flex-grow">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
          <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          {date && (
            <span className="text-sm font-medium text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-white/5 whitespace-nowrap">
              {date}
            </span>
          )}
        </div>
        {subtitle && <p className="text-zinc-400 mb-3 text-sm md:text-base leading-relaxed">{subtitle}</p>}
        {children}
      </div>
    </div>
  </motion.div>
);

function TabSection() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <FadeIn className="w-full mt-20 md:mt-32 max-w-4xl mx-auto">
      <div className="flex flex-col items-center w-full">
        
        {/* Custom Framer Motion Tabs */}
        <div className="flex p-1 space-x-1 bg-zinc-900/50 backdrop-blur-md rounded-2xl border border-white/10 mb-10 w-full sm:w-auto overflow-x-auto select-none">
          {tabHeader.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm md:text-base font-medium transition-colors outline-none whitespace-nowrap ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 bg-white/10 border border-white/20 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={18} />
                  {tab.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content with AnimatePresence */}
        <div className="w-full relative min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {activeTab === "experience" && (
              <motion.div key="exp" className="w-full">
                {experience.map((exp) => (
                  <TimelineCard
                    key={exp.id}
                    icon={
                      <img src={Tcs} alt="TCS Logo" width={24} height={24} className="opacity-90" />
                    }
                    title={exp.post}
                    subtitle={exp.company}
                    date={exp.year}
                  />
                ))}
              </motion.div>
            )}

            {activeTab === "projects" && (
              <motion.div key="proj" className="w-full">
                {projects.map((proj) => (
                  <TimelineCard
                    key={proj.id}
                    icon={<Code2 size={24} />}
                    title={proj.title}
                    subtitle={proj.description}
                  >
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                      {/* Stack Badges */}
                      <div className="flex flex-wrap gap-2 text-xl text-zinc-400">
                        {proj.stack.map((icon, i) => (
                          <span key={i} className="p-2 bg-zinc-800/50 border border-white/5 rounded-lg flex items-center justify-center hover:text-white hover:bg-zinc-800 transition-colors">
                            {icon}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex-grow" />

                      {/* Links */}
                      <div className="flex gap-2">
                        {proj.liveLink && (
                          <a
                            href={proj.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white rounded-lg transition-all"
                          >
                            <ExternalLink size={16} /> Live
                          </a>
                        )}
                        {proj.githubLink && (
                          <a
                            href={proj.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-zinc-900 border border-white/10 hover:bg-zinc-800 hover:border-white/20 text-white rounded-lg transition-all"
                          >
                            <Github size={16} /> Code
                          </a>
                        )}
                      </div>
                    </div>
                  </TimelineCard>
                ))}
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div key="edu" className="w-full">
                {education.map((edu) => (
                  <TimelineCard
                    key={edu.id}
                    icon={<GraduationCap size={24} />}
                    title={edu.college}
                    subtitle={edu.degree}
                    date={edu.year}
                  />
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </FadeIn>
  );
}

export default TabSection;
