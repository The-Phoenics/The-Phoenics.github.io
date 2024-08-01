import React from "react";
import skillsConfig from "../config/skillsConfig.json";
import GitHubCalendar from "react-github-calendar";

const explicitTheme = {
  light: ["#fef3e2", "#fcd2a5", "#f8b066", "#f58a3f", "#ef5b0c"],
  dark: ["#2e1f0e", "#593919", "#8c5a26", "#bf792e", "#fca729"],
};

const purpleTheme = {
  light: ["#f3e5f5", "#ce93d8", "#ba68c8", "#8e24aa", "#6a1b9a"],
  dark: ["#311b3a", "#512c62", "#7b3f8e", "#a05fbc", "#d4a8e2"],
};

function Skills() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-[12%] pt-10 bg-[#11071F] text-white">
      <div className="flex flex-col gap-2">
        <h1 className="font-Preahvihear font-bold text-center text-[3em] md:text-[3.5em]">Skills</h1>
        <div className="max-w-[700px] md:p-6 p-2 flex items-center justify-center gap-1 md:gap-3 flex-wrap">
          {skillsConfig.data.map((skill, idx) => {
            return (
              <div
                key={idx}
                className="h-auto hover:cursor-pointer hover:scale-[1.1] transition-all duration-[300ms] aspect-square bg-[#251C31] p-5 rounded-[50%] md:scale-100 scale-[0.8]"
              >
                <img src={skill.imgUrl} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="gap-10 flex flex-col">
        <h1 className="font-Preahvihear font-bold text-center text-[3.5em]">Days I Code</h1>
        <div className="scale-[1.1] ml-2">
          <GitHubCalendar className="font-Poppins text-[#444444 font-bold]" style={{fontFamily: "Poppins", fontWeight: "700" }}  username="The-Phoenics" colorScheme="dark" theme={purpleTheme} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
