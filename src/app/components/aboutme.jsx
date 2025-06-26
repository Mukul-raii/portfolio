"use client";
import { AboutMeTabs } from "@/components/ui/simple-tabs-with-underline-and-bold-font";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Aboutme = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const slideInFromLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInFromRight = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      ref={ref}
      className="min-h-screen w-full flex flex-col px-4 sm:flex-row items-center justify-center gap-10"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div 
        className=""
        variants={slideInFromLeft}
      >
        <motion.img
          src="https://framerusercontent.com/images/0u9nLJhQ0GmYXvXpzvQx551F70.gif"
          alt="Space Nebula"
          className="w-full h-auto rounded-xl"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
      {/* Right side: About and Tabs */}
      <motion.div 
        className=" max-w-screen-md sm:max-w-xl flex flex-col gap-8"
        variants={slideInFromRight}
      >
        <motion.div 
          className="text-4xl font-bold"
          variants={fadeInUp}
        >
          <motion.div 
            className=" w-max py-1  px-2 rounded-3xl bg-gradient-to-r from-blue-300 to-purple-200 z-0"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.p 
              className=" text-sm font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              About me
            </motion.p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Developer by Choice
          </motion.h1>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 1.1 }}
        >
          <AboutMeTabs />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
