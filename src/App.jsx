import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import hero from "./assets/layered-peaks-haikei.svg";
import peaks from "./assets/stacked-peaks.svg";
import wave from "./assets/wave-haikei-2.svg";
import stackedWave from "./assets/stacked-waves-haikei-2.svg";
import "./App.css";
import Skills from "./components/Skills";
import Project from "./Projects";

function App() {
  return (
    <div className="font-montserrat">
      <Parallax pages={4}>
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
          factor={1}
          style={{
            backgroundImage: `url(${wave})`,
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer
          offset={1.9}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `url(${stackedWave})`,
            backgroundSize: "cover",
          }}
        />
        <ParallaxLayer offset={0} speed={0.01}>
          <section className="wrapper grid  grid-cols-2 font-montserrat">
            <div className="mt-[25vh]  font-montserrat text-4xl text-white">
              Namaste 🙏
            </div>
            <div className="mt-[25vh] h-fit border-l-4 pl-4 text-white ">
              <p>I'm </p>
              <p className="text-4xl">Swarna Jang Maden</p>
              <p className="text-text mt-4 ">
                I'm a computer engineer with great passion for creating digital
                experiences. From pixels to code, I pour my enthusiasm into
                every project, striving to create meaningful connections through
                technology.
              </p>
              <p className="text-text mt-1">
                Join me on this journey as we turn ideas into reality, one line
                of code at a time 👋 👋
              </p>
            </div>
          </section>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.05} factor={1}>
          <div className="wrapper font-montserrat text-white">
            <h2 className=" text-4xl">Skills and Tools</h2>
            <p className="text-accent my-4">
              The skills, tools and technologies I use to bring your products to
              life:
            </p>
          </div>
          <Skills />
          <Project />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
