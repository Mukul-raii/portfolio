"use client";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projectsData";
import SectionWrapper from "./SectionWrapper";

const Projects = () => {
  return (
    <>
      <SectionWrapper>
        <div className="min-h-auto w-full flex items-center justify-center px-4 ">
          <div className="max-w-3xl w-full p-3 ">
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
                  href={`/project/${project.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="group relative z-10 block"
                >
                  <div className="p-3 overflow-hidden  ">
                    {/* Status Badge */}
                    {/* <div className="relative">
                      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-white border border-gray-200 rounded-full text-gray-700 z-10">
                        {project.status === "Completed"
                          ? "Coming Soon"
                          : "Building"}
                      </span>
                      {project.status === "Completed" && (
                        <div className="absolute top-4 right-4 p-2 bg-white border border-gray-200 rounded-lg z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                          <ExternalLink size={16} className="text-gray-600" />
                        </div>
                      )}
                    </div> */}

                    {/* Project Image */}
                    <div className="p-[4px] rounded-[10px] border border-gray-200">
                      <div className="relative w-full bg-gray-50 rounded-[6px] border border-gray-200 h-[200px] md:h-[200px] sm:h-[170px] overflow-hidden select-none">
                        <Image
                          src={project.background}
                          alt={project.title}
                          fill
                          className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="bg-white rounded-t-[6px] absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[75%] group-hover:h-[70%] transition-all duration-300 p-[2px] pb-0">
                          <Image
                            src={project.image}
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

          {/* View All Button */}
          <div className="flex justify-center">
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition font-medium">
              View All
              <ExternalLink size={16} />
            </button>
          </div>

          {/* Horizontal dashed line */}
          {/*    <div
          className="w-full h-px"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to right, #d1d5db 0px, #d1d5db 6px, transparent 6px, transparent 14px)",
            backgroundSize: "100% 1px",
            backgroundRepeat: "no-repeat",
          }}
        ></div> */}

          {/* Dashed vertical line between columns */}
          {/*    <div className="absolute left-1/2 top-0 h-full -translate-x-1/2 z-0 hidden md:block pointer-events-none">
          <div
            className="h-full w-px "
            style={{
              backgroundImage:
                "repeating-linear-gradient(to bottom, #d1d5db 0px, #d1d5db 6px, transparent 6px, transparent 14px)",
              backgroundSize: "1px 100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

 */}
        </div>
      </div>
    </>
  );
};

export default Projects;
/*    className={`w-1.5 h-1.5 rounded-full ${
                            project.status === "Completed"
                              ? "bg-green-500"
                              : "bg-orange-500"
                          }`}
                        ></span>
                        {project.status === "Completed" ? "Live" : "Building"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ml-4 flex-shrink-0 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedIndex === index && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <div className="sm:hidden text-sm text-gray-600 mb-4">
                    <p className="text-xs">Timeline: {project.timeline}</p>
                    <p className="text-xs">Role: {project.role}</p>
                  </div>
                  {project.features && project.features.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Key Features
                      </h4>
                      <ul className="space-y-2 ml-4">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-700 list-disc"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.challenges && project.challenges.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Challenges
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.challenges.map((challenge, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 text-xs font-medium bg-orange-50 text-orange-700 rounded border border-orange-200"
                          >
                            {challenge}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition text-sm font-medium"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="flex items-center gap-2 px-6 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition font-medium">
            View All
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
 */
