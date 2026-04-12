import React from "react";
import { LuFolder } from "react-icons/lu";
import { IoIosContact } from "react-icons/io";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJsonwebtokens,
  SiStreamlit,
  SiPython,
  SiTradingview,
  SiGithub,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaGitAlt, FaGithub as FaGithubAlt, FaDatabase } from "react-icons/fa";
import { ChevronsLeftRightEllipsis } from "lucide-react";

export const navLinks = [
  {
    id: "nav-home",
    name: "Home",
    link: "/",
    icon: <LuFolder />,
  },
  {
    id: "nav-contact",
    name: "Contact",
    link: "/contacts",
    icon: <IoIosContact />,
  },
];

export const skills = [
  { id: "skill-react", icon: <SiReact />, name: "ReactJs" },
  { id: "skill-node", icon: <SiNodedotjs />, name: "NodeJs" },
  { id: "skill-express", icon: <SiExpress />, name: "Express" },
  { id: "skill-mongodb", icon: <SiMongodb />, name: "MongoDB" },
  { id: "skill-git", icon: <FaGitAlt />, name: "Git" },
  { id: "skill-github", icon: <FaGithubAlt />, name: "Github" },
  { id: "skill-html", icon: <SiHtml5 />, name: "Html" },
  { id: "skill-css", icon: <SiCss3 />, name: "Css" },
  { id: "skill-sql", icon: <FaDatabase />, name: "Sql" },
  { id: "skill-js", icon: <SiJavascript />, name: "Javascript" },
  { id: "skill-tailwind", icon: <SiTailwindcss />, name: "Tailwind" },
  { id: "skill-java", icon: <FaJava />, name: "Java" },
];

export const education = [
  {
    id: "edu-bachelor",
    year: "2021 - 2024",
    degree: "Bachelor in Engineering - Information Technology",
    college: "Smt Kashibai Navle College of Engineering, Pune",
  },
  {
    id: "edu-12th",
    year: "2019 - 2020",
    degree: "12th - Science",
    college: "Dr. Balasaheb Vikhe Patil Junior College, Ahmednagar",
  },
  {
    id: "edu-10th",
    year: "2017 - 2018",
    degree: "10th",
    college: "Residential Highschool, Ahmednagar",
  },
];

export const experience = [
  {
    id: "exp-tcs",
    post: "Assistant System Engineer Trainee",
    company: "Tata Consultancy Services",
    year: "April 2025 - Present",
  },
];

export const projects = [
  {
    id: "proj-soulmegle",
    title: "Soulmegle",
    description:
      "SoulMegle is a random video chat app like Omegle, enabling real-time video calls and messaging with strangers. Uses WebRTC",
    stack: [
      <SiReact key="react" />,
      <SiNodedotjs key="node" />,
      <SiExpress key="express" />,
      <SiMongodb key="mongo" />,
      <SiJsonwebtokens key="jwt" />,
      <ChevronsLeftRightEllipsis key="webrtc" />,
    ],
    liveLink: "https://vision-1-lus9.onrender.com",
    githubLink: "https://github.com/knox26/Vision-1",
  },
  {
    id: "proj-uber",
    title: "Uber - Microservices",
    description:
      "A microservices-based ride-hailing platform with User, Captain, Ride, and Gateway services. RabbitMQ facilitates communication between the Ride and Captain services for efficient message handling.",
    stack: [
      <SiNodedotjs key="node" />,
      <SiExpress key="express" />,
      <SiMongodb key="mongo" />,
      <SiJsonwebtokens key="jwt" />
    ],
    githubLink: "https://github.com/knox26/Uber-micro-services",
  },
  {
    id: "proj-talkverse",
    title: "Talk-Verse",
    description:
      "Talk-Verse is a real-time chatting platform where users can send messages, share files or images, and form group chats for multiple users. It’s simple, efficient, and supports secure communication.",
    stack: [
      <SiReact key="react" />,
      <SiNodedotjs key="node" />,
      <SiExpress key="express" />,
      <SiMongodb key="mongo" />,
      <SiJsonwebtokens key="jwt" />,
    ],
    liveLink: "https://talk-verse.onrender.com",
    githubLink: "https://github.com/knox26/Talk-Verse",
  },
  {
    id: "proj-stockx",
    title: "Stock-X",
    description:
      "A web app offering candlestick stock visualization with indicators, fundamental analysis , top 10 news, and LSTM-based stock price forecasting. Empowering users with data-driven investment insights for informed decision-making. this project is only for educational purposes.",
    stack: [
      <SiStreamlit key="streamlit" />,
      <SiPython key="python" />,
      <SiTradingview key="tradingview" />,
    ],
    liveLink: "https://stockvizandforecast.streamlit.app/",
    githubLink: "https://github.com/knox26/project-final",
  },
];
