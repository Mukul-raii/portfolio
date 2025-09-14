"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
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
    hidden: { y: 30, opacity: 0 },
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
      className="min-h-screen flex items-center justify-center mx-auto px-4 mt-28 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-6xl">
        {/* Text Content */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left flex-1"
          variants={slideInFromLeft}
        >
          <motion.div
            className="w-max py-1 px-3 rounded-3xl bg-gradient-to-r from-blue-300 to-purple-200 mb-4"
            variants={itemVariants}
          >
            <motion.p
              className="text-sm md:text-md font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Developer
            </motion.p>
          </motion.div>

          <motion.article
            className="max-w-full pt-2 md:pt-6 text-wrap"
            variants={fadeInUp}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex flex-col justify-center font-bold tracking-tight mb-4 md:mb-6"
              variants={itemVariants}
            >
              <motion.p
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Hey, I'm
              </motion.p>
              <motion.p
                className="relative bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 20, scale: 0.8 }
                }
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Mukul Rai✨
              </motion.p>
            </motion.h1>

            <motion.p
              className="mx-auto md:mx-0 mb-6 md:mb-10 text-sm sm:text-base md:text-lg text-neutral-800 max-w-md md:max-w-none"
              variants={itemVariants}
            >
              <motion.span
                className="block mb-1"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Full-stack developer passionate about crafting user-centric
                applications.
              </motion.span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                Based in Jhansi/Delhi, India.
              </motion.span>
            </motion.p>
          </motion.article>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 mb-6 md:mb-8 w-full sm:w-auto"
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 1.3 }}
          >
            <motion.button
              className="w-full sm:w-auto py-2 px-6 rounded-xl border-2 text-sm md:text-base font-medium hover:bg-gray-50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Resume
            </motion.button>
            <motion.span
              className="w-full sm:w-auto text-green-500 border-green-600 font-medium py-2 px-4 md:px-6 rounded-xl border-2 text-center text-sm md:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              whileHover={{ scale: 1.05 }}
            >
              Available for new project
            </motion.span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-row gap-8 md:gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.a
              href="https://github.com/Mukul-raii"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-600 transition p-2"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.5, delay: 2.0 }}
            >
              <Github size={24} className="md:w-7 md:h-7" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/mukulrai31"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700 transition p-2"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.5, delay: 2.2 }}
            >
              <Linkedin size={24} className="md:w-7 md:h-7" />
            </motion.a>
            <motion.a
              href="https://twitter.com/mukulrai04"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-sky-500 transition p-2"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ duration: 0.5, delay: 2.4 }}
            >
              <Twitter size={24} className="md:w-7 md:h-7" />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image Container */}
        <motion.div
          className="group relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-96 lg:w-96 lg:h-[28rem] p-0 mx-auto bg-gray-100 border-gray-200 rounded-2xl border-4 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:bg-neutral-100 hover:scale-105 flex items-center justify-center flex-shrink-0"
          variants={slideInFromRight}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }
            }
            transition={{ duration: 1, delay: 0.8 }}
          >
            <img
              src="https://res.cloudinary.com/dmvzjbgwp/image/upload/v1746870665/Tanjiro_Kamado_Demon_Slayer_Fanart_Wallpaper_yl7azu.jpg"
              alt="Mukul Rai"
              className="w-full h-full object-cover rounded-2xl transition-all duration-200 ease-in-out"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
