import "./App.css";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="overflow-hidden font-montserrat">
      <motion.main className="h-screen bg-[url('./assets/Layer.svg')] bg-cover">
        <nav className="wrapper font-lato absolute top-6  text-base font-medium text-text md:top-[2rem] md:text-lg lg:top-[5vh]">
          <ul className="flex justify-center gap-4 md:gap-9">
            <li>
              <a
                href="#technologies"
                className="hover-underline-animation  hover:text-accent"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover-underline-animation  hover:text-accent"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover-underline-animation  hover:text-accent"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover-underline-animation  hover:text-accent"
              >
                Contact me
              </a>
            </li>
          </ul>
        </nav>
        <section className="wrapper inline  grid-cols-2 font-montserrat md:grid">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-[5rem] text-center font-montserrat text-4xl text-white md:mt-[25vh] md:text-left"
          >
            Namaste 🙏
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-[3rem] h-fit px-5 text-white md:mt-[20vh] md:border-l-4  md:pl-4 lg:mt-[25vh]"
          >
            <p>I'm </p>
            <p className="text-4xl">Swarna Jang Maden</p>
            <p className="mt-4 text-text ">
              I'm a computer engineer with great passion for creating digital
              experiences. From pixels to code, I pour my enthusiasm into every
              project, striving to create meaningful connections through
              technology.
            </p>
            <p className="mt-1 text-text">
              Eager to contribute to a company where I can apply my technical
              skills to deliver business value while simultaneously enhancing my
              skills as a developer.
            </p>
          </motion.div>
        </section>
      </motion.main>
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="wrapper mt-9 font-montserrat text-white md:mt-[7rem]"
          viewport={{ once: true }}
        >
          <h2 className="marker-underline text-4xl font-bold" id="technologies">
            Skills & Technologies
          </h2>
          <p className="my-4 text-accent">
            The skills, tools and technologies I use to bring your products to
            life:
          </p>
        </motion.div>
        <Skills />
        <Project />
        <div className="wrapper flex flex-col items-center font-montserrat text-white">
          <motion.p
            className="mt-11 text-center text-4xl font-bold md:mt-[8rem]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
            viewport={{ once: true }}
            id="education"
          >
            Formal Education
          </motion.p>
          <motion.section
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            onClick={() => {
              window.open("https://kec.edu.np/", "_blank");
            }}
            className="group mt-[1rem] flex w-fit flex-col items-center gap-2 rounded-lg border-solid bg-primary p-9 text-center  hover:cursor-pointer hover:bg-opacity-90 md:mt-[3rem]"
          >
            <span className=" text-3xl font-bold text-black2 group-hover:text-text">
              Kantipur Engineering College
            </span>
            <span className="font-mono text-xl uppercase text-black2">
              bachelor's in computer engineering
            </span>
            <span>2020-2024</span>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            onClick={() => {
              window.open("https://www.sxc.edu.np/", "_blank");
            }}
            className=" group mt-4 flex w-fit flex-col items-center gap-2 rounded-lg bg-primary p-9 text-center shadow-lg hover:scale-75 hover:cursor-pointer hover:bg-opacity-90 md:mt-[2rem]"
          >
            <span className=" text-3xl font-bold text-black2 group-hover:text-text">
              St. Xavier's College
            </span>
            <span className="font-mono text-xl uppercase text-black2 ">
              Higher Secondary education board
            </span>
            <span>2017-2019</span>
          </motion.section>
        </div>
      </main>
      <div
        className="wrapper mt-11 flex flex-col items-center text-white  md:mt-[6rem]"
        id="contact"
      >
        <h1 className="text-center text-4xl font-bold">Contact me 👋👋</h1>
        <div className="mb-[2rem] mt-[1rem] rounded-lg border border-x-purple-400 border-y-purple-800 p-6 md:p-8 ">
          <p className=" text-center text-lg md:text-2xl">
            limbujungmaden@gmail.com
          </p>
          <ul className="mt-5 flex justify-center gap-10">
            <li>
              <a
                href="https://github.com/maden1738"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub className="text-4xl hover:text-accent" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/swarna-jang-maden-4aa6162a8/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin className="text-4xl hover:text-accent" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/madenSwarna"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaXTwitter className="text-4xl hover:text-accent" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100008905951008"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebook className="text-4xl hover:text-accent" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
