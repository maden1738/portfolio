import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import hero from "./assets/layered-peaks-haikei.svg";
import wave from "./assets/wave-haikei-2.svg";
import "./App.css";
import Skills from "./components/Skills";
import Project from "./Projects";

function App() {
  return (
    <div className="font-montserrat">
      <Parallax pages={4.5}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={1.2}
          style={{
            backgroundImage: `url(${hero})`,
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={0.8}
          style={{
            backgroundImage: `url(${wave})`,
            backgroundSize: "cover",
          }}
        />
        {/* <ParallaxLayer
          offset={1.9}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${stackedWave})`,
            backgroundSize: "cover",
          }}
        /> */}
        <ParallaxLayer offset={0} speed={0.01}>
          <section className="wrapper grid  grid-cols-2 font-montserrat">
            <div className="mt-[25vh]  font-montserrat text-4xl text-white">
              Namaste 🙏
            </div>
            <div className="mt-[25vh] h-fit border-l-4 pl-4 text-white ">
              <p>I'm </p>
              <p className="text-4xl">Swarna Jang Maden</p>
              <p className="mt-4 text-text ">
                I'm a computer engineer with great passion for creating digital
                experiences. From pixels to code, I pour my enthusiasm into
                every project, striving to create meaningful connections through
                technology.
              </p>
              <p className="mt-1 text-text">
                Join me on this journey as we turn ideas into reality, one line
                of code at a time 👋 👋
              </p>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.05}>
          <div className="wrapper font-montserrat text-white">
            <h2 className=" text-4xl font-bold">Skills and Tools</h2>
            <p className="my-4 text-accent">
              The skills, tools and technologies I use to bring your products to
              life:
            </p>
          </div>
          <Skills />
          <Project />
          <div className="wrapper flex flex-col items-center font-montserrat text-white">
            <p className="mt-[7rem] text-center text-4xl font-bold">
              Formal Education
            </p>
            <section className="mt-[3rem] flex w-fit flex-col items-center gap-2 rounded-lg bg-primary p-9">
              <span className=" text-black2 text-3xl font-bold">
                Kantipur Engineering College
              </span>
              <span className="text-black2 font-mono text-xl uppercase">
                bachelor's in computer engineering
              </span>
              <span>2020-2024</span>
            </section>
            <section className="mt-[2rem] flex w-fit flex-col items-center gap-2 rounded-lg bg-primary p-9">
              <span className=" text-black2 text-3xl font-bold">
                St. Xavier's College
              </span>
              <span className="text-black2 font-mono text-xl uppercase">
                Higher Secondary education board
              </span>
              <span>2018-2020</span>
            </section>
          </div>
        </ParallaxLayer>
      </Parallax>
      <div>the end</div>
    </div>
  );
}

export default App;
