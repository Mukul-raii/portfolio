import { Tilt } from "@/components/ui/tilt";
import React from "react";

const Projectlist = {
  kioku: {
    image:
      "https://res.cloudinary.com/dmvzjbgwp/image/upload/v1746853692/941_1x_shots_so_hhetku.png",
    alt: "kioku",
    Name: "Kioku",
    text: "Kioku is an AI-powered engagement platform focused on enhancing learning through adaptive testing and review scheduling",
    RepoLink: "https://github.com/Mukul-raii/Kioku",
    LiveDemo: "https://",
  },
  axintract: {
    image:
      "https://res.cloudinary.com/dmvzjbgwp/image/upload/v1746853702/660_1x_shots_so_zvsyos.png",
    alt: "axintract",
    Name: "AxIntract",
    text: "An AI-powered engagement platform for optimizing user responses.",
    RepoLink: "https://github.com/Mukul-raii/Intract_Backend",
    LiveDemo: "https://intract-frontend-nx12.vercel.app/",
  },
  taskCombinator: {
    image:
      "https://res.cloudinary.com/dmvzjbgwp/image/upload/v1746853698/153_1x_shots_so_uwo1n8.png",
    alt: "taskCombinator",
    Name: "Task Combinator",
    text: "A task management system supporting 500+ concurrent users.",
    RepoLink: "https://github.com/Mukul-raii/TaskCombinator",
    LiveDemo: "https://taskcombinator.vercel.app/",
  },
};

const Projects = () => {
  return (
    <div className="max-w-full flex flex-col  gap-16 my-16 justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center gap-4">
        <div className="w-max py-1 px-3 rounded-full bg-gradient-to-r from-blue-300 to-purple-200 flex justify-center">
          <p className="text-md font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </p>
        </div>
        <h1 className="text-3xl font-semibold">Featured Projects</h1>
        <div className="w-20 border-b-4 border-black"></div>
      </div>
      <div className="w-full flex flex-col  justify-center items-center px-4 sm:px-36  gap-20 ">
        {Object.values(Projectlist).map((project, index) => (
          <Tilt key={index} rotationFactor={12} isReverse>
            <div
              style={{
                borderRadius: "12px",
              }}
              className="flex w-full flex-col md:flex-row overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
            >
              <div>
                <img
                  src={project.image || "https://placehold.co/270x192"} // Fallback image if no image is provided
                  alt={project.alt}
                  className="h-52 sm:h-96 w-full object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-center p-8  sm:p-10">
                <h1 className="text-3xl md:text-4xl font-bold py-4">
                  {project.Name}
                </h1>
                <p className="max-w-[400px] mt-2 text-sm text-zinc-700 text-wrap">
                  {project.text}
                </p>
                <div className="mt-4 flex gap-8 text-white">
                  {project.RepoLink && (
                    <a
                      href={project.RepoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded bg-black  px-5 py-2 text-sm "
                    >
                      Repo Link
                    </a>
                  )}
                  {project.LiveDemo && (
                    <a
                      href={project.LiveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded bg-black px-5 py-2 text-sm "
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default Projects;
