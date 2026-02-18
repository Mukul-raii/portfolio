"use client";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projectsData";
import SectionWrapper from "@/components/SectionWrapper";
const Projects = () => {
  return (
    <>
      <SectionWrapper>
        <div className="min-h-auto w-full flex items-center justify-center px-4 ">
          <div className="max-w-3xl w-full p-3 flex justify-start items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={16} />
            </Link>
            <h1 className="text-xl font-bold text-gray-900 ">Project</h1>
          </div>
        </div>
      </SectionWrapper>
      <div className="min-h-auto w-full flex items-center justify-center ">
        <div className="max-w-3xl w-full px-4 pb-4 sm:pb-4">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 mb-8 relative">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  borderRight: index % 2 === 0 ? "1px dashed #d1d5db" : "none",
                  borderBottom: index < 2 ? "1px dashed #d1d5db" : "none",
                }}
              >
                <Link
                  href={`/project/${project.slug}`}
                  className="group relative z-10 block"
                >
                  <div className="p-3 overflow-hidden  ">
                    {/* Project Image */}
                    <div className="p-[4px] rounded-[10px] border border-gray-200">
                      <div className="relative w-full bg-[lab(95.36%_0_0)] rounded-[6px] border border-gray-200 h-[200px] md:h-[200px] sm:h-[170px] overflow-hidden select-none">
                        <Image
                          src={project.background}
                          alt={project.title}
                          fill
                          className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="bg-white rounded-t-[6px] absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[75%] group-hover:h-[70%] transition-all duration-300 p-[2px] pb-0">
                          <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold ">{project.title}</h3>
                        <div className="flex items-center gap-1">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              project.status === "Completed"
                                ? "bg-green-500"
                                : "bg-orange-500"
                            }`}
                          ></span>
                          <span className="text-xs font-medium ">
                            {project.status === "Completed"
                              ? "Live"
                              : "Building"}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm  mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center text-sm  transition-colors">
                        <span>View Project</span>
                        <ExternalLink size={14} className="ml-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
