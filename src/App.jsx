import { useState } from "react";

import "./App.css";

function App() {
  return (
    <>
      <section className="wrapper grid h-screen grid-cols-2 bg-hero bg-cover bg-center  bg-no-repeat font-montserrat">
        <div className="mt-[25%]  font-montserrat text-4xl text-white">
          Namaste 🙏
        </div>
        <div className="mt-[25%] h-fit border-l-4 pl-4 text-white ">
          <p>I'm </p>
          <p className="text-4xl">Swarna Jang Maden</p>
          <p className="text-text mt-4 ">
            I'm a computer engineer with great passion for creating digital
            experiences. From pixels to code, I pour my enthusiasm into every
            project, striving to create meaningful connections through
            technology. Join me on this journey as we turn ideas into reality,
            one line of code at a time.
          </p>
        </div>
      </section>
      <section className="h-screen">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
        voluptates fuga perferendis rem sed est accusantium eveniet minima sequi
        cum odit blanditiis fugiat repudiandae iste, enim illo deserunt ducimus
        ipsam.
      </section>
    </>
  );
}

export default App;
