"use client";
import { Tilt } from "@/components/ui/tilt";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideInFromBottom = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      ref={ref}
      className="min-h-screen max-w-full flex flex-col gap-16 justify-center items-center px-4 pt-28"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div 
        className="flex flex-col justify-center items-center text-center gap-4"
        variants={fadeInUp}
      >
        <motion.div 
          className="w-max py-1 px-3 rounded-full bg-gradient-to-r from-blue-300 to-purple-200 flex justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.p 
            className="text-md font-semibold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Portfolio
          </motion.p>
        </motion.div>
        <motion.h1 
          className="text-3xl font-semibold"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Featured Projects
        </motion.h1>
        <motion.div 
          className="w-20 border-b-4 border-black"
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: 80, opacity: 1 } : { width: 0, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </motion.div>
      <motion.div 
        className="w-full flex flex-col  justify-center items-center px-4 sm:px-36  gap-20"
        variants={containerVariants}
      >
        {Object.values(Projectlist).map((project, index) => (
          <motion.div
            key={index}
            variants={slideInFromBottom}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 1 + index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <Tilt rotationFactor={12} isReverse>
              <motion.div
                style={{
                  borderRadius: "12px",
                }}
                className="flex w-full flex-col md:flex-row overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.8, delay: 1.2 + index * 0.2 }}
                >
                  <img
                    src={project.image || "https://placehold.co/270x192"}
                    alt={project.alt}
                    className="h-52 sm:h-96 w-full object-cover"
                  />
                </motion.div>
                <motion.div 
                  className="flex flex-col items-start justify-center p-8  sm:p-10"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
                >
                  <motion.h1 
                    className="text-3xl md:text-4xl font-bold py-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.6 + index * 0.2 }}
                  >
                    {project.Name}
                  </motion.h1>
                  <motion.p 
                    className="max-w-[400px] mt-2 text-sm text-zinc-700 text-wrap"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.8 + index * 0.2 }}
                  >
                    {project.text}
                  </motion.p>
                  <motion.div 
                    className="mt-4 flex gap-8 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 2.0 + index * 0.2 }}
                  >
                    {project.RepoLink && (
                      <motion.a
                        href={project.RepoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded bg-black  px-5 py-2 text-sm"
                        whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Repo Link
                      </motion.a>
                    )}
                    {project.LiveDemo && (
                      <motion.a
                        href={project.LiveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded bg-black px-5 py-2 text-sm"
                        whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.a>
                    )}
                  </motion.div>
                </motion.div>
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
