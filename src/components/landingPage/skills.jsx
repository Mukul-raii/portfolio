"use client";

import SectionWrapper from "../SectionWrapper";
import skills from "../../data/skillsData";

const Skills = () => {
  return (
    <>
      <SectionWrapper>
        <div className="min-h-auto w-full flex items-center justify-center px-4 ">
          <div className="max-w-3xl w-full p-3 ">
            <h1 className="text-xl font-bold  ">Skills & Technologies</h1>
          </div>
        </div>
      </SectionWrapper>
      <div className="min-h-auto w-full flex items-center justify-center  py-10">
        <div className="max-w-3xl w-full ">
          {/* Skills Grid */}
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all text-sm font-medium text-gray-700"
              >
                <img
                  src={`https://cdn.simpleicons.org/${skill.icon}`}
                  alt={skill.name}
                  width="18"
                  height="18"
                />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
