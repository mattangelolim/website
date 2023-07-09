import React from "react";
import pic from "../assets/mypic.jpg";
import fb from "../assets/fb.png";
import tw from "../assets/tw.png";
import li from "../assets/li.png";

const about = () => {
  return (
    <div className="content lg:flex">
      <div className="container lg:block lg:justify-center lg:ml-96 lg:items-center">
        <img src={pic} alt="pic" className=" rounded-full h-2/5 mx-auto my-4" />
        <h1 className="font-bold text-4xl text-center py-4 md:py-8">
          Matt Lim
        </h1>
        <h2 className="text-center  pt-4 md:pt-8 tracking-widest">
          COMPUTER ENGINEERING
        </h2>
        <div className="wrapper">
          <img
            src={fb}
            className="fb h-8 px-0.5 py-0.5 bg-white rounded-full mr-4"
          />
          <img
            src={tw}
            className="tw h-8 px-0.5 py-0.5 bg-white rounded-full mr-4"
          />
          <img
            src={li}
            className="li h-8 px-0.5 py-0.5 bg-white rounded-full"
          />
        </div>
      </div>
      <div className="container-2 md:text-justify md:ml-10">
        <h1 className="md:text-8xl font-semibold">Hello</h1>
        <h2 className="md:text-4xl md:mt-5 md:mb-5">
          Here's who I am & what I do
        </h2>
        <button className="resume text-white bg-blue-700 rounded-lg px-4 py-2 mr-4 hover:bg-slate-50 hover:text-black ease-in-out duration-300">
          Resume
        </button>
        <button className="project rounded-lg px-4 py-2 mr-4 bg-white border hover:bg-blue-700 hover:text-white ease-in-out duration-300">
          Projects
        </button>
        <p className="md:mt-8 text-xl text-gray-700">
          Passionate computer engineering graduate with a focus on web
          development. Strong foundation in programming, algorithms, and
          software engineering principles. Dedicated to staying current with the
          latest trends and technologies in web development. Skilled problem
          solver with an eye for design aesthetics, creating user-friendly and
          visually appealing websites.
        </p>
      </div>
    </div>
  );
};

export default about;
