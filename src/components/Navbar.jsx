import React from "react";

function Navbar() {
  return (
    <div className="fixed z-50 top-0 left-0 w-full h-[60px] flex items-center justify-center bg-[#1A0B2E]">
      <div className="flex flex-row max-w-[1000px] w-full justify-between pl-10 pr-10 text-white">
        {/* logo icon */}
        <div className="flex items-center justify-center"></div>
        {/* nav elements */}
        <div className="flex items-center justify-center gap-24">
          <a
            href="#home"
            className="tracking-wider h-full text-sm flex items-center font-bold hover:cursor-pointer text-[#ddd] hover:scale-[1.2] hover:font-bold hover:text-[#fff] transition-all ease-linear duration-200"
          >
            Home
          </a>
          <a
            href="#projects"
            className="tracking-wider h-full text-sm flex items-center font-bold hover:cursor-pointer  text-[#ddd] hover:scale-[1.2] hover:font-bold hover:text-[#fff] transition-all ease-linear duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="tracking-wider h-full text-sm flex items-center font-bold hover:cursor-pointer  text-[#ddd] hover:scale-[1.2] hover:font-bold hover:text-[#fff] transition-all ease-linear duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
