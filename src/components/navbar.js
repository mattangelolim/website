import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

const Navbar = ({ onNavbarClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (page) => {
    onNavbarClick(page);
    setIsOpen(false);
  };

  return (
    <nav className="bg-stone-900 h-24">
      <div className="nav-margin max-w-7x1 mx-auto px-3 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <div className="flex mt-8">
              <a
                onClick={() => handleClick("about")}
                href="#about"
                className="name nav-head text-white h-16 text-3xl font-bold px-2"
              >
                Matt Lim |{" "}
                <span className="course span text-2xl">Computer Engineer</span>
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className={`navbar-toggle ${isOpen ? "open" : ""}`}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <RiCloseLine className="menu-icon" />
              ) : (
                <RiMenuLine className="menu-icon" />
              )}
            </button>
          </div>
          <div className={`${isOpen ? "navbar-menu open" : "navbar-menu"}`}>
            <a
              onClick={() => handleClick("about")}
              href="#about"
              className="about text-gray-300 hover:text-white px-7 py-16 rounded-md text-lg font-medium h-16 ease-in-out duration-300"
            >
              ABOUT ME
            </a>
            <a
              onClick={() => handleClick("resume")}
              href="#resume"
              className="text-gray-300 hover:text-white px-7 py-16 rounded-md text-lg font-medium h-16 ease-in-out duration-300"
            >
              RESUME
            </a>
            <a
              onClick={() => handleClick("projects")}
              href="#projects"
              className="text-gray-300 hover:text-white px-7 py-16 rounded-md text-lg font-medium h-16 ease-in-out duration-300"
            >
              PROJECTS
            </a>
            <a
              onClick={() => handleClick("Contact")}
              href="#contact"
              className="text-gray-300 hover:text-white px-8 py-16 rounded-md text-lg font-medium h-16 ease-in-out duration-00"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
