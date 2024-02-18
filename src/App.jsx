import hero from "./assets/layered-peaks-haikei.svg";
import wave from "./assets/wave-haikei-2.svg";
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
          className="wrapper mt-[10rem] font-montserrat text-white "
          viewport={{ once: true }}
        >
          <h2 className=" text-4xl font-bold">Skills and Tools</h2>
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
              <span className=" text-black2 text-3xl font-bold group-hover:text-text">
                Kantipur Engineering College
              </span>
            </a>
            <span className="text-black2 font-mono text-xl uppercase">
              bachelor's in computer engineering
            </span>
            <span>2020-2024</span>
          </motion.section>
          <motion.section
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group mt-[2rem] flex w-fit flex-col items-center gap-2 rounded-lg bg-primary p-9 hover:bg-opacity-90"
          >
            <a
              href="https://www.sxc.edu.np"
              target="_blank"
              rel="noreferrer noopener"
              viewport={{ once: true }}
            >
              <span className=" text-black2 text-3xl font-bold group-hover:text-text">
                St. Xavier's College
              </span>
            </a>
            <span className="text-black2 font-mono text-xl uppercase ">
              Higher Secondary education board
            </span>
            <span>2018-2020</span>
          </motion.section>
        </div>
      </main>
      <div className="wrapper mt-[8rem] flex flex-col items-center text-white">
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
                <FaGithub className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/swarna-jang-maden-4aa6162a8/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/madenSwarna"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaXTwitter className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100008905951008"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebook className="text-2xl" />
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
