import React from "react";
import skillsConfig from "../config/skillsConfig.json";

function Skills() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#11071F] text-white">
      <div className="flex flex-col gap-4">
        <h1 className="font-Preahvihear font-bold text-center text-[3.5em]">Skills</h1>
        <div className="max-w-[700px] p-6 flex items-center justify-center gap-3 flex-wrap">
          {skillsConfig.data.map((skill, idx) => {
            return (
              <div
                key={idx}
                className="h-full hover:cursor-pointer hover:scale-[1.1] transition-all duration-[300ms] aspect-square bg-[#251C31] p-5 rounded-[50%]"
              >
                <img src={skill.imgUrl} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
