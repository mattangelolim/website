import React from "react";
import CV from "../assets/cv.png";
import js from "../assets/js.png";
import py from "../assets/py.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import reac from "../assets/react.png";
import node from "../assets/node-js.png";
import tailw from "../assets/tailw.png";
import git from "../assets/git.png";

const Resume = () => {
  return (
    <>
      <div className="page-resume">
        <div className="Margin my-32 mx-32">
          <div className="title flex items-center">
            <img src={CV} alt="#" className="h-16 mr-2" />
            <h1 className="text-center font-bold uppercase text-5xl ">
              My Resume
            </h1>
          </div>
          {/* START OF EXPERIENCE */}
          <div className="experience flex items-center">
            <h2 className="mr-auto ml-8 font-semibold text-2xl">EXPERIENCE</h2>
            <button className="download text-white bg-blue-700  rounded-lg px-4 py-2 mr-8 hover:bg-slate-50 hover:text-black ease-in-out duration-300">
              Download CV
            </button>
          </div>
          <div className="boxes border border-black flex">
            <div className="boxes-margin py-20 px-10 w-96 mx-10">
              <h1 className="date text-lg font-semibold">
                August 2022 - September 2022
              </h1>
              <h2 className="text-2xl mt-2 font-bold">IT Department Intern</h2>
              <h3 className="company text-lg mt-1">School Divisions Office</h3>
              <h4 className="location text-lg mt-1">San Juan City</h4>
            </div>
            <div className="paragraph mt-20 mb-10 mr-10">
              <div className="para-des pr-10 py-8">
                <p className="description text-justify">
                  {" "}
                  <span>• </span>Handled troubleshooting and maintenance of IT
                  equipment.
                  <br></br>
                  <span>• </span>Provided support in monitoring and deployment
                  of IT equipment to students and faculty.
                </p>
              </div>
            </div>
          </div>
          {/* START OF EDUCATION */}
          <div className="experience flex items-center">
            <h2 className="mr-auto ml-8 font-semibold text-2xl">EDUCATION</h2>
          </div>
          <div className="boxes border border-black flex">
            <div className="boxes-margin py-20 px-8 w-96 mx-10">
              <h1 className="date text-lg font-semibold">2019 - 2023</h1>
              <h2 className="text-xl mt-2 font-bold">
                Polytechnic University of the Philippines
              </h2>
              <h3 className="company text-lg mt-1">Sta Mesa, Manila</h3>
              <h4 className="location text-xl mt-1">
                Bachelor of Science in Computer Engineering
              </h4>
            </div>
            <div className="paragraph mt-20 mb-10 mr-10">
              <div className="learnings px-5 py-8">
                <p className="text-justify">
                  <span>" </span>Pursuing a degree in computer engineering has
                  afforded me valuable expertise in programming, particularly in
                  web development. Through a multitude of projects, I honed my
                  skills and prepared myself for the demands of the professional
                  work environment. Furthermore, this educational journey
                  fostered my problem-solving abilities and enhanced my
                  analytical and logical thinking capabilities.<span> "</span>
                </p>
              </div>
            </div>
          </div>
          {/* SECOND EDUCATION */}
          <div className="boxes border border-black flex">
            <div className="boxes-margin py-20 px-8 w-96 mx-10">
              <h1 className="date text-lg font-semibold">2017 - 2019</h1>
              <h2 className="text-xl mt-2 font-bold">
                Polytechnic University of the Philippines
              </h2>
              <h3 className="company text-lg mt-1">Sta Mesa, Manila</h3>
              <h4 className="location text-xl mt-1">
                Science, Technology, Engineering & Mathematics
              </h4>
            </div>
            <div className="paragraph mt-20 mb-10 mr-10">
              <div className="learnings px-5 py-8">
                <p className="text-justify">
                  <span>" </span> Choosing the STEM strand in senior high school
                  has been a pivotal decision in pursuing my aspiration to
                  become a programmer. This academic path has significantly
                  contributed to the development of my critical thinking skills,
                  enabling me to effectively analyze and provide solutions to
                  complex problems.<span> "</span>
                </p>
              </div>
            </div>
          </div>
          {/* THIRD EDUCATION */}
          <div className="boxes border border-black flex">
            <div className="boxes-margin py-20 px-8 w-96 mx-10">
              <h1 className="date text-lg font-semibold">2013 - 2017</h1>
              <h2 className="text-xl mt-2 font-bold">
                San Juan City Science High School
              </h2>
              <h3 className="company text-lg mt-1">San Juan City</h3>
              <h4 className="location text-xl mt-1">Junior High School</h4>
            </div>
            <div className="paragraph mt-20 mb-10 mr-10">
              <div className="learnings px-5 py-8">
                <p className="text-justify">
                  <span>" </span>Attending a science high school during my
                  junior high years proved to be an immensely challenging yet
                  invaluable experience that continues to resonate with me
                  today. This rigorous academic environment pushed me to exceed
                  my limits and evolve into a more accomplished student,
                  fostering personal growth and instilling a steadfast
                  commitment to excellence.<span> "</span>
                </p>
              </div>
            </div>
          </div>
          {/* MY SKILLS */}
          <div className="skills border border-black flex flex-wrap">
            <div className="skills-margin mx-10 my-10 w-auto">
              <h1 className="text-2xl font-semibold">Professional Skillset</h1>
              <div className="sliding-container">
                <div className="slider flex flex-wrap mx-4">
                  <div className="skills-cont h-56 w-40 mx-4 my-4 flex justify-center items-center">
                    <img src={html} alt="#" className="h-40" />
                  </div>
                  <div className="skills-cont h-56 w-40 mx-4 my-4 flex justify-center items-center">
                    <img src={css} alt="#" className="h-32" />
                  </div>
                  <div className="skills-cont h-56 w-40 mx-4 my-4 flex justify-center items-center">
                    <img src={js} alt="#" className="h-32" />
                  </div>
                  <div className="skills-cont h-56 w-40 mx-4 my-4 flex justify-center items-center">
                    <img src={py} alt="#" className="h-32" />
                  </div>
                  <div className="skills-cont h-56 w-40 mx-4 my-4 flex justify-center items-center">
                    <img src={reac} alt="#" className="h-32" />
                  </div>
                  <div className="skills-cont h-56 w-40 mx-4 my-4 flex justify-center items-center">
                    <img src={tailw} alt="#" className="h-32" />
                  </div>
                  <div className="skills-cont h-56 w-40 mx-4 my-4 flex justify-center items-center">
                    <img src={node} alt="#" className="h-32" />
                  </div>
                  <div className="skills-cont h-56 w-40 mx-4 my-4 flex justify-center items-center">
                    <img src={git} alt="#" className="h-32" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Resume;
