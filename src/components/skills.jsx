"use client";

import SectionWrapper from "./SectionWrapper";

const Skills = () => {
  const skills = [
    { name: "React", icon: "react", color: "#61DAFB" },
    { name: "Next", icon: "nextdotjs", color: "#000000" },
    { name: "Expo", icon: "expo", color: "#000020" },
    { name: "Django", icon: "django", color: "#092E20" },
    { name: "Express", icon: "express", color: "#000000" },
    { name: "Node", icon: "nodedotjs", color: "#339933" },
    { name: "Bun", icon: "bun", color: "#fbf0df" },
    { name: "PostgreSQL", icon: "postgresql", color: "#4169E1" },
    { name: "MongoDB", icon: "mongodb", color: "#47A248" },
    { name: "Redis", icon: "redis", color: "#FF4438" },
    { name: "Prisma", icon: "prisma", color: "#2D3748" },
    { name: "Zustand", icon: "reactquery" }, // No official icon, kept emoji
    { name: "Tanstack Query", icon: "reactquery", color: "#FF4154" },
    { name: "Postman", icon: "postman", color: "#FF6C37" },
    { name: "Tailwind", icon: "tailwindcss", color: "#06B6D4" },
    { name: "shadcn", icon: "shadcnui", color: "#000000" },
    { name: "Motion", icon: "framer", color: "#0055FF" },
    { name: "GSAP", icon: "greensock", color: "#88CE02" },
    { name: "JavaScript", icon: "javascript", color: "#F7DF1E" },
    { name: "TypeScript", icon: "typescript", color: "#3178C6" },
    { name: "Java", icon: "openjdk", color: "#ED8B00" },
    { name: "Python", icon: "python", color: "#3776AB" },
    { name: "C/C++", icon: "cplusplus", color: "#00599C" },
    { name: "SQL", icon: "sqlite", color: "#003B57" },
    { name: "Git", icon: "git", color: "#F05032" },
    { name: "Github", icon: "github", color: "#181717" },
    { name: "Figma", icon: "figma", color: "#F24E1E" },
    { name: "Docker", icon: "docker", color: "#2496ED" },
    { name: "Linux", icon: "linux", color: "#FCC624" },
  ];
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
