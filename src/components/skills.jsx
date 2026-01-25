
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const techStack = [
    { id: "stage1-div-1", alt: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { id: "stage1-div-2", alt: "Next.js", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    { id: "stage1-div-3", alt: "Typescript", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    { id: "stage1-div-4", alt: "Tailwind CSS", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    { id: "stage1-div-5", alt: "Rust", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    { id: "stage2-div-1", alt: "Docker", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    { id: "stage2-div-2", alt: "Git", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    { id: "stage3-div-1", alt: "MongoDB", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    { id: "stage3-div-2", alt: "SQL", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    { id: "stage4-div-1", alt: "NodeJS", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    { id: "stage4-div-2", alt: "Redux", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    { id: "stage4-div-3", alt: "Socket.io", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    { id: "stage4-div-4", alt: "Python", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
    { id: "stage4-div-5", alt: "Go", src:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"},
  ];

  return (
    <motion.div 
      ref={ref}
      className="w-full grid grid-cols-5 gap-4 place-items-center"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {techStack.map((tech, index) => (
        <motion.div 
          key={tech.id} 
          id={tech.id} 
          className="relative flex flex-col w-36 h-36"
          variants={itemVariants}
          whileHover={{ 
            scale: 1.1, 
            rotate: 5,
            boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            alt={tech.alt}
            loading="lazy"
            width="300"
            height="300"
            decoding="async"
            className="rounded-xl scale-50"
            style={{ color: "transparent" }}
            src={tech.src}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 0.5 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
    

export default Skills



