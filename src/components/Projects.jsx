import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { Link } from "react-router-dom";
import projectsConfig from "../config/projectsConfig.json";

function ProjectImgSection({ projectImageUrl }) {
  return (
    <div className="w-full relative rounded-lg">
      <div className="w-[90%] absolute z-20 aspect-[1/1] max-h-[400px] rounded-lg bg-[#2B0B3A]">
        {/* project image */}
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <img
            src={projectImageUrl}
            className="absolute -bottom-10 -right-10 ml-20 w-full h-full object-cover rounded-lg hover:cursor-pointer transition-all duration-700 hover:right-0 hover:bottom-0 hover:scale-110"
          />
        </div>
      </div>
      <img src="/assets/gradient.png" className="absolute scale-[1.1] -top-[180px] right-14" />
    </div>
  );
}

function Project({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <div className="max-w-[1200px] w-full flex justify-center">
      <div className="flex mt-[10vh] w-full">
        {!isEven ? <ProjectImgSection projectImageUrl={project.imgUrl} /> : ""}

        <div className="w-full relative mt-10">
          <div className={`${!isEven ? "" : ""}`}>
            <h2
              className={`font-Poppins text-[#9857D3] font-medium text-[1.1em] ${
                !isEven ? "text-right" : ""
              }`}
            >
              Featured Project
            </h2>
            <h1
              className={`font-Poppins text-[#CCD6F6] font-bold text-[2.2em] ${
                !isEven ? "text-right" : ""
              }`}
            >
              {project.name}
            </h1>
          </div>
          <div className="w-[120%] border-b-[1px] absolute z-30 p-6 pl-8 pr-8 bg-[#ffffff11] backdrop-blur-[8px] rounded-2xl text-lg mt-3 text-left tracking-wide font-medium">
            {project.description}
            <div className="relative">
              {/* project links */}
              <div
                className={`flex absolute z-22 top-12 left-0 gap-6 items-start pl-2 ${
                  !isEven ? "items-end justify-end right-0" : ""
                }`}
              >
                <Link
                  to={project.liveUrl}
                  className="scale-[1.4] hover:scale-[1.5] duration-500 transition-all"
                >
                  <IoMdGlobe />
                </Link>
                <Link
                  to={project.githubUrl}
                  className="scale-[1.3] hover:scale-[1.4] duration-500 transition-all"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {isEven ? (
          <ProjectImgSection projectImageUrl={project.imgUrl} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="flex text-white justify-center w-full bg-[#11071F]">
      <div className="flex flex-col gap-[400px] justify-center items-center  w-full">
        {projectsConfig.data.map((project, index) => {
          return <Project project={project} index={index} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
