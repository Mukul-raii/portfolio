"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projectsData } from "@/data/projectsData";
import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/project/projectcard";

const Projects = () => {
  return (
    <>
      <SectionWrapper>
        <div className="min-h-auto w-full flex items-center justify-center px-4">
          <div className="max-w-3xl w-full p-3 flex justify-start items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={16} />
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Projects</h1>
          </div>
        </div>
      </SectionWrapper>

      <div className="min-h-auto w-full flex items-center justify-center">
        <div className="max-w-3xl w-full px-4 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 mb-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                style={{
                  borderRight: index % 2 === 0 ? "1px dashed #d1d5db" : "none",
                  borderBottom:
                    index <
                    projectsData.length -
                      (projectsData.length % 2 === 0 ? 2 : 1)
                      ? "1px dashed #d1d5db"
                      : "none",
                }}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
