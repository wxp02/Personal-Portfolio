import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Wenxu Poh
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#experience" className="mr-5 hover:text-white">
            Experience
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#projects" className="mr-5 hover:text-white">
            Projects
          </a>
        </nav>
        {/* Add LinkedIn link here */}
        <a
          href="https://www.linkedin.com/in/wenxu-p-1833291ab/"
          src="./others/linkedin.svg"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          <img
            src="./others/linkedin.svg"
            alt="LinkedIn"
            className="w-6 h-6 mr-1.5"
          />
          LinkedIn
        </a>
        {/* Add GitHub link here */}
        <a
          href="https://github.com/wxp02"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 ml-4" // Added ml-4 for spacing
        >
          <img
            src="./others/github.svg"
            alt="GitHub"
            className="w-6 h-6 mr-1.5"
          />
          GitHub
        </a>
      </div>
    </header>
  );
}
