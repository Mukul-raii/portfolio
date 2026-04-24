"use client";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";
import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "./projectcard";

const Projects = () => {
  return (
    <>
      <SectionWrapper>
        <div className="min-h-auto w-full flex items-center justify-center px-4">
          <div className="max-w-3xl w-full p-3">
            <h1 className="text-xl font-bold text-gray-900">Projects</h1>
          </div>
        </div>
      </SectionWrapper>

      <div className="min-h-auto w-full flex items-center justify-center">
        <div className="max-w-3xl w-full px-4 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
            {projectsData.slice(0, 4).map((project, index) => (
              <div
                key={index}
                style={{
                  borderRight: index % 2 === 0 ? "1px dashed #d1d5db" : "none",
                  borderBottom: index < 2 ? "1px dashed #d1d5db" : "none",
                }}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition font-medium text-sm"
              href="/project"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
