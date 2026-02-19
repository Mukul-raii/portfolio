"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionWrapper from "../SectionWrapper";
import experiences from "../../data/experienceData";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <SectionWrapper>
        <div className="min-h-auto w-full flex items-center justify-center px-4 ">
          <div className="max-w-3xl w-full p-3  ">
            <h1 className="text-xl font-bold  ">Experiences</h1>
          </div>
        </div>
      </SectionWrapper>
      <div className="min-h-auto w-full flex items-center justify-center ">
        <div className="max-w-3xl w-full">
          {/* Header Section */}

          {/* Experience Cards */}
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className=" overflow-hidden hover:border-gray-300 transition-colors"
              >
                {/* Card Header */}
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full  py-4 flex items-start justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start gap-4 flex-1">
                    {/* Logo */}
                    {/* <div
                      className={`w-12 h-12 ${exp.logoColor} outline-black outline-2 rounded-lg flex items-center justify-center flex-shrink-0`}
                    > */}
                    <div className="p-[4px] rounded-[10px] border border-gray-200">
                      <div className="relative w-full bg-gray-50 rounded-[6px] border border-gray-200  overflow-hidden select-none">
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className="w-10 h-10 rounded outline-black outline-2"
                        />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-semibold ">{exp.title}</h3>
                        <span className="px-2 py-0.5 text-xs border border-gray-300 rounded ">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-sm ">{exp.company}</p>
                    </div>

                    {/* Period and Location */}
                    <div className="text-right text-sm  hidden sm:block">
                      <p>{exp.period}</p>
                      <p className="text-xs">{exp.location}</p>
                    </div>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    className={`w-5 h-5  transition-transform ml-4 flex-shrink-0 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                {expandedIndex === index && (
                  <div className=" pb-6 pt-2 border-t border-gray-100">
                    {/* Mobile Period/Location */}
                    <div className="sm:hidden text-sm  mb-4">
                      <p>{exp.period}</p>
                      <p className="text-xs">{exp.location}</p>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4 ml-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm list-disc">
                          {achievement}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded border border-gray-200 flex flex-row gap-2"
                        >
                          <img
                            src={`https://cdn.simpleicons.org/${tech.icon}`}
                            alt={tech.name}
                            width="16"
                            height="16"
                          />
                          {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
