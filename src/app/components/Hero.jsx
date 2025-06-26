"use client";
import Image from "next/image";
import { Github, Linkedin, Twitter, X } from "lucide-react";
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
      className="min-h-screen flex items-center justify-center mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="flex flex-col items-center justify-center sm:flex-row gap-12 sm:gap-16 w-full max-w-6xl">
        <motion.div 
          className="flex flex-col items-center justify-center  text-center md:text-left"
          variants={slideInFromLeft}
        >
        <motion.div 
          className="w-max py-1 flex justify-center px-3 rounded-3xl bg-gradient-to-r from-blue-300 to-purple-200"
          variants={itemVariants}
        >
          <motion.p 
            className=" text-md font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Developer
          </motion.p>
        </motion.div>
        <motion.article 
          className="max-w-full  pt-6 sm:max-w-md text-wrap"
          variants={fadeInUp}
        >
          <motion.h1 
            className="  text-4xl  md:text-5xl lg:text-6xl flex flex-col justify-center font-bold tracking-tight mb-6"
            variants={itemVariants}
          >
            <motion.p 
              className="inline-block mr-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Hey, I'm
            </motion.p>
            <motion.p 
              className="relative"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Mukul Rai✨
            </motion.p>
          </motion.h1>
          <motion.p 
            className=" relative sm:text-left mx-auto sm:mx-0 mb-10 text-base sm:text-lg text-neutral-800 whitespace-normal break-words"
            variants={itemVariants}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Full-stack developer passionate about crafting user-centric
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              applications. Based in Jhansi/Delhi, India.
            </motion.span>
          </motion.p>
        </motion.article>
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-4"
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 1.3 }}
        >
          <motion.button 
            className="py-2 px-6 rounded-xl  border-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Resume
          </motion.button>
          <motion.span 
            className="text-green-500 border-green-600 font-medium py-2 px-6 rounded-xl border-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            whileHover={{ scale: 1.05 }}
          >
            Available for new project
          </motion.span>
        </motion.div>
        <motion.div 
          className="flex flex-row  gap-10  mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.a
            href="https://github.com/Mukul-raii"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-blue-600 transition"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 2.0 }}
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/mukulrai31"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            href="https://twitter.com/mukulrai04"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-sky-500 transition"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5, delay: 2.4 }}
          >
            <Twitter size={28} />
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div 
        className="group relative w-80 h-96 p-0 mx-auto   bg-gray-100 border-gray-200 rounded-2xl border-4 overflow-hidden hover:shadow-2xl transition-all  duration-300 hover:bg-neutral-100  hover:p-5  hover:scale-105 flex items-center justify-center"
        variants={slideInFromRight}
        whileHover={{ scale: 1.05, rotateY: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Image
            src="https://res.cloudinary.com/dmvzjbgwp/image/upload/v1746870665/Tanjiro_Kamado_Demon_Slayer_Fanart_Wallpaper_yl7azu.jpg"
            alt="Mukul Rai"
            width={400}
            height={600}
            className="w-full h-full object-cover rounded-2xl transition-all duration-200 ease-in-out"
            priority
          />
        </motion.div>
      </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;

/*     <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 sm:px-6 lg:px-8">
      <div className="grid max-w-6xl gap-16 items-center md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Hey, I'm Mukul
          </h1>
          <p className="text-lg">
            Full-stack developer passionate about crafting user-centric
            applications. Based in Jhansi/Delhi, India.
          </p>
        </div>

        <div className="flex space-x-4">
          <ShimmerButton
            className="rounded-lg transition-transform hover:scale-105"
            background="#2563eb"
          >
            <span className="text-sm font-medium tracking-wide">
              Say Hello 👋
            </span>
          </ShimmerButton>
        </div>

        <ShimmerButton
          className="rounded-lg border border-primary/20 transition-transform hover:scale-105"
          background="#9333ea"
        >
          <span className="text-sm font-medium tracking-wide">
            Download Resume 📄
          </span>
        </ShimmerButton>

        <div className="relative w-64 h-64 rounded-full border-4 border-primary/20 overflow-hidden shadow-2xl transition-all duration-300 hover:border-primary/40 hover:scale-105">
          <Image
            src={image}
            alt="Mukul Rai"
            width={400}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
     */
