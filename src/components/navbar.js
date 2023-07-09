import React from "react";

const navbar = () => {
  return (
    <nav className="bg-stone-700 h-24">
      <div className="max-w-7x1 mx-auto px-3 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="#" className="text-white h-16 text-3xl font-bold px-12">
                Matt Lim
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#about"
                className="text-gray-300 hover:bg-stone-900 hover:text-white px-7 py-16 rounded-md text-lg font-medium h-16 ease-in-out duration-500"
              >
                ABOUT ME
              </a>
              <a
                href="#resume"
                className="text-gray-300 hover:bg-stone-900 hover:text-white px-7 py-16 rounded-md text-lg font-medium h-16 ease-in-out duration-500"
              >
                RESUME
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:bg-stone-900 hover:text-white px-7 py-16 rounded-md text-lg font-medium h-16 ease-in-out duration-500"
              >
                PROJECTS
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:bg-stone-900 hover:text-white px-8 py-16 rounded-md text-lg font-medium h-16 ease-in-out duration-500"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
