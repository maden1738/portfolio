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
import { motion } from "framer-motion";

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
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <div className="wrapper grid gap-4 md:grid-cols-5 lg:grid-cols-8">
      {skills.map((skill, index) => {
        return (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center text-white hover:text-accent"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="mt-4 text-[4rem]">{skill.logo}</div>
            <div>{skill.name}</div>
          </motion.div>
        );
      })}
    </div>
  );
}
