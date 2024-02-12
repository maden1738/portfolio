import React from "react";
import hekto from "./assets/hekto.png";
import tenzies from "./assets/tenzies.png";
import codepen from "./assets/codepen.png";
import finance from "./assets/finance.png";
import { Link } from "react-router-dom";

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
      <div className="wrapper mt-[10rem] text-4xl text-white">My Projects</div>
      {projects.map((project) => {
        return (
          <>
            <div className="wrapper mt-[4rem] ">
              <div className="flex gap-8">
                <img
                  src={project.image}
                  alt=""
                  className="w-[50%] rounded-md"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-3xl text-white">{project.name}</p>
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
                  <div className="text-text mt-4">{project.description}</div>
                  <div className="mt-4 flex gap-3">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button className="demo">Live Demo</button>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <button className="demo">Github</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}

      {/* <div className="wrapper mt-[10rem] text-4xl text-white">My Projects</div>
      <div className="wrapper mt-[4rem] ">
        <div className="flex gap-8">
          <img src={hekto} alt="" className="w-[50%] rounded-md" />
          <div className="flex flex-col justify-center">
            <p className="text-3xl text-white">E-commerce Site</p>
            <div className="mt-3 flex gap-2">
              <button className="tech" type="button">
                MERN
              </button>
              <button className="tech" type="button">
                redux
              </button>
            </div>
            <div className="text-text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              dolorem consectetur reprehenderit, et eos iste dolor veniam quas
              delectus ea blanditiis aliquid, sunt, nemo repellendus quidem
              incidunt beatae quisquam totam.
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://hekto-psi.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="demo">Live Demo</button>
              </a>
              <a
                href="https://github.com/maden1738/hekto"
                target="_blank"
                rel="noreferrer noopener"
              >
                <button className="demo">Github</button>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}
