import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl"> Who am I ?</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-orange-700 to-yellow-500  text-1xl">
          A true tech enthusiast with a can-do attitude
        </p>
        <p className="text-gray-300 text-center ">
        I am a passionate full-stack web developer who finds joy in the perfect blend of logic and creativity. </p>
        <p className="text-gray-300 text-center ">A digital polyglot fluent in HTML, CSS, JavaScript, React, Ruby, Ruby on Rails, SQL, and JavaScript. </p>
        <p className="text-gray-300 text-center ">I am driven by the desire to turn ideas into functional applications, stimulating user experience, pushing the boundaries of human imagination.
        </p>
      </div>
    </section>
  );
};

export default About;
