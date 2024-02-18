import React from "react";
import hekto from "../assets/hekto.png";
import tenzies from "../assets/tenzies.png";
import codepen from "../assets/codepen.png";
import finance from "../assets/finance.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Projects() {
  let projects = [
    {
      name: "E-commerce site",
      image: hekto,
      techs: ["MERN", "redux"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eum similique possimus a fuga omnis deleniti dolore sed, doloribus delectus quas, architecto voluptatem minima voluptatibus aliquid unde sapiente animi voluptatum?",
      live: "https://hekto-psi.vercel.app/",
      github: "https://hekto-psi.vercel.app/",
    },
    {
      name: "Tenzies",
      image: tenzies,
      techs: ["React"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eum similique possimus a fuga omnis deleniti dolore sed, doloribus delectus quas, architecto voluptatem minima voluptatibus aliquid unde sapiente animi voluptatum?",
      live: "https://tenzies-amber-nine.vercel.app/",
      github: "https://github.com/maden1738/tenzies",
    },
    {
      name: "Codepen Clone",
      image: codepen,
      techs: ["React"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eum similique possimus a fuga omnis deleniti dolore sed, doloribus delectus quas, architecto voluptatem minima voluptatibus aliquid unde sapiente animi voluptatum?",
      live: "https://codepen-clone-indol-seven.vercel.app/",
      github: "https://github.com/maden1738/codepenClone/tree/main",
    },
    {
      name: "Finance",
      image: finance,
      techs: ["Flask", "SQL"],
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eum similique possimus a fuga omnis deleniti dolore sed, doloribus delectus quas, architecto voluptatem minima voluptatibus aliquid unde sapiente animi voluptatum?",
      live: "https://finance-ecru-alpha.vercel.app/",
      github: "https://github.com/maden1738/stocks",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="wrapper mt-[10rem] text-4xl font-bold text-white"
      >
        My Projects
      </motion.div>
      {projects.map((project) => {
        return (
          <>
            <div className="wrapper mt-[4rem]">
              <div className="grid grid-cols-2 gap-8">
                <motion.section
                  className=""
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
                  <p className="text-3xl font-medium text-white">
                    {project.name}
                  </p>
                  <div className="mt-3 flex gap-2">
                    {project.techs.map((tech) => {
                      return (
                        <>
                          <button className="tech" type="button">
                            {tech}
                          </button>
                        </>
                      );
                    })}
                  </div>
                  <div className="mt-4 text-text">{project.description}</div>
                  <div className="mt-4 flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button className="demo text-black2 font-medium">
                        Live Demo
                      </button>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button className="demo text-black2 font-medium">
                        Github
                      </button>
                    </a>
                  </div>
                </motion.section>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
