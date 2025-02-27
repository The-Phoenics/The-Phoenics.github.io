import { isValidElement, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
import { Link } from "react-router-dom";
import projectsConfig from "../config/projectsConfig.json";
import {  motion, useAnimation, useInView } from "framer-motion";

function ProjectImgSection({ projectImageUrl, isEven }) {

  const imageOffsetStyling = isEven ? "-right-8 -bottom-6 hover:right-0 hover:bottom-0" : "right-8 top-6 hover:right-0 hover:top-0";

  return (
    <div className="w-full relative rounded-lg hidden md:block">
      <div className="w-[90%] absolute z-20 aspect-[1/1] max-h-[400px] rounded-lg bg-[#2B0B3A] shadow-md">
        {/* project image */}
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          <img
            src={projectImageUrl}
            className={`absolute ${imageOffsetStyling} shadow-2xl shadow-[#11071F] ml-20 w-full h-full object-cover rounded-lg hover:cursor-pointer transition-all duration-700 hover:scale-100`}
          />
        </div>
      </div>
      <img src="/assets/gradient.png" className="absolute scale-[1] -top-[170px] right-20" />
    </div>
  );
}

function Project({ project, index }) {
  const isEven = index % 2 === 0;
  const projectRef = useRef(null);
  const isInView = useInView(projectRef);
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView])

  return (
    <motion.div
      ref={projectRef}
      className="max-w-[1400px] w-full flex justify-center"
      variants={{
        hidden: { opacity: 0, y: 0 },
        visible: { opacity: 1, y: -60 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 1
      }}
    >
      <div className="flex mt-[0vh] w-full md:scale-[1] scale-[0.8]">
        {!isEven ? <ProjectImgSection projectImageUrl={project.imgUrl} /> : ""}

        <div className="w-full relative mt-20">
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
                {
                project.liveUrl ?
                <Link
                  target="_blank"
                  to={project.liveUrl}
                  className="scale-[1.4] hover:scale-[1.5] duration-500 transition-all"
                >
                  <IoMdGlobe />
                </Link>
                : ""
                }
                <Link
                  target="_blank"
                  to={project.githubUrl}
                  className="scale-[1.3] hover:scale-[1.4] duration-500 transition-all"
                >
                  <FaGithub />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {isEven ? <ProjectImgSection projectImageUrl={project.imgUrl} isEven={isEven} /> : ""}
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <div
      id="projects"
      className="flex text-white min-h-[3000px] justify-center w-full bg-[#11071F]"
    >
      <div className="flex flex-col gap-[300px] md:gap-[500px] justify-center items-center w-full">
        {projectsConfig.data.map((project, index) => {
          return <Project project={project} index={index} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
