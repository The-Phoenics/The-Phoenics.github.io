import React from "react";
import { IoLogoModelS } from "react-icons/io";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed z-50 top-0 left-0 w-full h-[60px] flex items-center justify-center bg-[#1A0B2E]">
      <div className="flex flex-row max-w-[1000px] w-full justify-between pl-10 pr-10 text-white">
        {/* logo icon */}
        <div className="flex items-center justify-center">
          {/* <IoLogoModelS className="scale-[1.6]" /> */}
        </div>
        {/* nav elements */} 
        <div className="flex items-center justify-center gap-24">
          <a href="#home" className="tracking-wider h-full text-sm flex items-center font-bold hover:cursor-pointer" >
            Home
          </a>
          <a
            href="#projects"
            className="tracking-wider h-full text-sm flex items-center font-bold hover:cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="tracking-wider h-full text-sm flex items-center font-bold hover:cursor-pointer"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
