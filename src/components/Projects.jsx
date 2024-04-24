import React from "react";
import hekto from "../assets/hekto.png";
import tenzies from "../assets/tenzies.png";
import codepen from "../assets/codepen.png";
import finance from "../assets/finance.png";
import { motion } from "framer-motion";

export default function Projects() {
  let projects = [
    {
      name: "E-commerce site",
      image: hekto,
      techs: ["React", "NodeJS", "Express", "MongoDB", "Redux"],
      description:
        "A full stack ecommerce site based on MERN Stack. It is implemented through various express APIs and MongoDB data base. Front-end is built with React. Redux was used for state management",
      live: "https://hekto-psi.vercel.app/",
      github: "https://hekto-psi.vercel.app/",
    },
    {
      name: "Tenzies",
      image: tenzies,
      techs: ["React"],
      description:
        "A single player version of popular dice game Tenzies. It has additional feature of keeping track of personal highscore",
      live: "https://tenzies-amber-nine.vercel.app/",
      github: "https://github.com/maden1738/tenzies",
    },
    {
      name: "Codepen Clone",
      image: codepen,
      techs: ["React"],
      description:
        "Clone of popular website codepen. It is online code editor to write Html, Css and Js code on the browser",
      live: "https://codepen-clone-indol-seven.vercel.app/",
      github: "https://github.com/maden1738/codepenClone/tree/main",
    },
    {
      name: "Finance",
      image: finance,
      techs: ["Flask", "SQL", "Python"],
      description:
        "A basic portfolio site for buying, selling and keeping track of stocks",
      github: "https://github.com/maden1738/stocks",
    },
  ];
  return (
    <div className="wrapper" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className=" mt-14 text-4xl font-bold text-white md:mt-[8rem]"
      >
        My Projects
      </motion.div>
      {projects.map((project) => {
        return (
          <div className="mt-11 md:mt-[4rem]">
            <div className="grid-cols-2 grid-rows-1 gap-8 md:grid">
              <motion.section
                className="place-self-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <img src={project.image} alt="" className="rounded-md" />
              </motion.section>
              <motion.section
                className="flex flex-col justify-center "
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="mt-2 text-3xl font-medium text-white md:mt-0">
                  {project.name}
                </p>
                <div className="mt-2 flex flex-wrap gap-2 md:mt-3">
                  {project.techs.map((tech) => {
                    return (
                      <button className="tech" type="button">
                        {tech}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-3 text-text md:mt-3">
                  {project.description}
                </div>

                <div className="mt-4 flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="demo font-medium text-black2">
                      Live Demo
                    </button>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="demo font-medium text-black2">
                      Github
                    </button>
                  </a>
                </div>
              </motion.section>
            </div>
          </div>
        );
      })}
    </div>
  );
}
