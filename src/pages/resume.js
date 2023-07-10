import React from "react";
import CV from "../assets/cv.png";

const Resume = () => {
  return (
    <>
      <div className="page-resume">
        <div className="Margin my-32 mx-32">
          <div className="title flex items-center">
            <img src={CV} className="h-16 mr-2" />
            <h1 className="text-center font-bold uppercase text-5xl ">
              My Resume
            </h1>
          </div>
          <div className="experience flex items-center">
            <h2 className="mr-auto ml-8 font-semibold text-2xl">Experience</h2>
            <button className="download text-white bg-blue-700  rounded-lg px-4 py-2 mr-8 hover:bg-slate-50 hover:text-black ease-in-out duration-300">
              Download CV
            </button>
          </div>
          <div className="boxes border border-black">test</div>
        </div>
      </div>
      ;
    </>
  );
};

export default Resume;
