"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const experiences = [
    {
      title: "Software Engineer",
      company: "Klimb",
      period: "Aug, 2025 - Present",
      location: "Mumbai, India - Remote",
      type: "Internship",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG2TlYwRNVfQkc4RqTJeSJLhqLbhJUNu311g&s", // Replace with actual logo
      logoColor: "bg-white",
      achievements: [
        "Owned the core presentation editor, driving major performance and reliability improvements",
        "Designed and built core editor features like drag-and-drop, resize, and keyboard shortcuts end-to-end",
        "Owned a foundational refactor, strengthening a critical codebase to enable safer and faster production",
        "Drove major Drive page performance improvements, resolving bugs to deliver faster, reliable experiences",
      ],
      technologies: [
        "Next",
        "Tailwind",
        "TypeScript",
        "JavaScript",
        "Express",
        "PostgreSQL",
        "Docker",
      ],
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <SectionWrapper>
        <div className="min-h-auto w-full flex items-center justify-center px-4 ">
          <div className="max-w-3xl w-full p-3  ">
            <h1 className="text-xl font-bold text-gray-900 ">Experiences</h1>
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
                        <h3 className="font-semibold text-gray-900">
                          {exp.title}
                        </h3>
                        <span className="px-2 py-0.5 text-xs border border-gray-300 rounded text-gray-600">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{exp.company}</p>
                    </div>

                    {/* Period and Location */}
                    <div className="text-right text-sm text-gray-600 hidden sm:block">
                      <p>{exp.period}</p>
                      <p className="text-xs">{exp.location}</p>
                    </div>
                  </div>

                  {/* Chevron */}
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ml-4 flex-shrink-0 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                {expandedIndex === index && (
                  <div className=" pb-6 pt-2 border-t border-gray-100">
                    {/* Mobile Period/Location */}
                    <div className="sm:hidden text-sm text-gray-600 mb-4">
                      <p>{exp.period}</p>
                      <p className="text-xs">{exp.location}</p>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mb-4 ml-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-700 list-disc">
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
                            src={`https://cdn.simpleicons.org/${tech}`}
                            alt={tech}
                            width="16"
                            height="16"
                          />
                          {tech}
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
