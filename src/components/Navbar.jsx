import React from "react";
import { IoLogoModelS } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="sticky z-50 top-0 left-0 w-full h-[60px] flex items-center justify-center bg-[#1A0B2E]">
      <div className="flex flex-row max-w-[1000px] w-full justify-between pl-10 pr-10 text-white">
        {/* logo icon */}
        <div className="flex items-center justify-center">
          {/* <IoLogoModelS className="scale-[1.6]" /> */}
        </div>
        {/* nav elements */} 
        <div className="flex items-center justify-center gap-24">
          <NavLink to="/" className="tracking-wider h-full text-sm flex items-center font-bold">
            Home
          </NavLink>
          <NavLink
            to="/"
            className="tracking-wider h-full text-sm flex items-center font-bold"
          >
            Projects
          </NavLink>
          <NavLink
            to="/"
            className="tracking-wider h-full text-sm flex items-center font-bold"
          >
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
