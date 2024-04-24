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
      <motion.main
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 1 }}
        className="h-screen bg-[url('./assets/layered-peaks-haikei.svg')] bg-cover"
      >
        <nav className="wrapper font-lato absolute top-[5vh]  text-lg font-medium text-text">
          <ul className="flex justify-end gap-9">
            <li>
              <a
                href="#technologies"
                className="hover-underline-animation hover:text-accent"
              >
                Skills & Technologies
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover-underline-animation hover:text-accent"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover-underline-animation hover:text-accent"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover-underline-animation hover:text-accent"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
        <section className="wrapper grid  grid-cols-2 font-montserrat">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-[25vh]  font-montserrat text-4xl text-white"
          >
            Namaste 🙏
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-[25vh] h-fit border-l-4 pl-4 text-white "
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
              Join me on this journey as we turn ideas into reality, one line of
              code at a time 👋 👋
            </p>
          </motion.div>
        </section>
      </motion.main>
      <main>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="wrapper mt-[9rem] font-montserrat text-white "
          viewport={{ once: true }}
        >
          <h2 className="marker-underline text-4xl font-bold" id="technologies">
            Technologies
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
            className="mt-[8rem] text-center text-4xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            id="education"
          >
            Formal Education
          </motion.p>
          <motion.section
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group mt-[3rem] flex w-fit flex-col items-center gap-2 rounded-lg border-solid bg-primary p-9  hover:bg-opacity-90"
          >
            <a
              href="https://kec.edu.np/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className=" text-3xl font-bold text-black2 group-hover:text-text">
                Kantipur Engineering College
              </span>
            </a>
            <span className="font-mono text-xl uppercase text-black2">
              bachelor's in computer engineering
            </span>
            <span>2020-2024</span>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group mt-[2rem] flex w-fit flex-col items-center gap-2 rounded-lg bg-primary p-9 shadow-lg hover:scale-75 hover:bg-opacity-90 "
          >
            <a
              href="https://www.sxc.edu.np"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className=" text-3xl font-bold text-black2 group-hover:text-text">
                St. Xavier's College
              </span>
            </a>
            <span className="font-mono text-xl uppercase text-black2 ">
              Higher Secondary education board
            </span>
            <span>2018-2020</span>
          </motion.section>
        </div>
      </main>
      <div
        className="wrapper mt-[8rem] flex flex-col items-center text-white"
        id="contact"
      >
        <h1 className="text-center text-4xl font-bold">Contact me 👋👋</h1>
        <div className="  mb-[2rem] mt-[1rem] rounded-lg border border-x-purple-400 border-y-purple-800 p-8">
          <span className="text-2xl">limbujungmaden@gmail.com</span>
          <ul className="mt-3 flex justify-center gap-6">
            <li>
              <a
                href="https://github.com/maden1738"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaGithub className="text-2xl hover:text-accent" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/swarna-jang-maden-4aa6162a8/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin className="text-2xl hover:text-accent" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/madenSwarna"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaXTwitter className="text-2xl hover:text-accent" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100008905951008"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebook className="text-2xl hover:text-accent" />
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
