import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNode,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiExpress,
  SiRedux,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";

export default function Skills() {
  let skills = [
    { name: "html", logo: <FaHtml5 /> },
    { name: "css", logo: <FaCss3Alt /> },
    { name: "javascript", logo: <IoLogoJavascript /> },
    { name: "react", logo: <FaReact /> },
    { name: "redux", logo: <SiRedux /> },
    { name: "node", logo: <FaNode /> },
    { name: "express", logo: <SiExpress /> },
    { name: "MongoDb", logo: <SiMongodb /> },
    { name: "Github", logo: <FaGithub /> },
    { name: "Tailwind", logo: <SiTailwindcss /> },
    { name: "sql", logo: <AiOutlineConsoleSql /> },
    { name: "python", logo: <FaPython /> },
    { name: "typescript", logo: <SiTypescript /> },
  ];
  return (
    <div className="wrapper grid gap-4 md:grid-cols-5 lg:grid-cols-8">
      {skills.map((skill) => {
        return (
          <div className="hover:text-text flex flex-col items-center justify-center text-white">
            <div className="mt-4 text-[4rem]">{skill.logo}</div>
            <div>{skill.name}</div>
          </div>
        );
      })}
    </div>
  );
}
