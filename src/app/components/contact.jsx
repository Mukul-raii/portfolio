"use client";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, LinkedinIcon, Mail, TwitterIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
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

  const cardVariants = {
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
      className="min-h-screen flex flex-col justify-center items-center px-4"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div 
        className="flex flex-col justify-center items-center my-3  gap-4"
        variants={fadeInUp}
      >
        <motion.div 
          className="py-3  px-5 rounded-3xl bg-gradient-to-r from-blue-300 to-purple-200 z-0"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.p 
            className=" text-md font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent z-10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let's Connect
          </motion.p>
        </motion.div>
        <motion.h1 
          className="text-4xl md:text-5xl font-bold m-3"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p 
          className=" text-lg text-gray-600 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Always up for new opportunities, collabs, or idea exchanges. Reach out
          through any of these channels and I'll get back to you ASAP!
        </motion.p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 mt-10 sm:mt-0 gap-8 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {contactData.map(({ label, icon: Icon, css, contact, display }, index) => (
          <motion.div
            key={label}
            className="flex flex-row gap-5 p-4 sm:p-6 rounded-3xl shadow-md border-2 border-neutral-100 relative transition-all duration-300 hover:-translate-y-1 ease-in-out  hover:bg-gradient-to-br from-blue-50 to-white"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 1 + index * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              y: -10,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className={`bg-gradient-to-br ${css} rounded-2xl p-4`}
              whileHover={{ rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="text-white" />
            </motion.div>
            <div className="flex flex-col">
              <motion.h1 
                className="text-lg font-semibold"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                {label}
              </motion.h1>
              <motion.a
                href={contact}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-neutral-500 py-1  hover:underline break-all"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.4 + index * 0.1 }}
                whileHover={{ color: "#3b82f6" }}
              >
                {label !== "Email" ? `@${display}` : display}
              </motion.a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Contact;

const contactData = [
  {
    label: "Email",
    icon: Mail,
    css: "from-blue-500 to-purple-400",
    contact: "mailto:devmukulrai27@gmail.com",
    display: "devmukulrai27@gmail.com",
  },
  {
    label: "GitHub",
    icon: GithubIcon,
    css: "from-black to-neutral-600",
    contact: "https://github.com/Mukul-raii",
    display: "Mukul-raii",
  },
  {
    label: "LinkedIn",
    icon: LinkedinIcon,
    css: "from-blue-600 to-blue-400",
    contact: "https://www.linkedin.com/in/mukulrai31",
    display: "mukulrai31",
  },
  {
    label: "Twitter",
    icon: TwitterIcon,
    css: "from-black to-blue-500",
    contact: "https://twitter.com/mukulrai04",
    display: "mukulrai04",
  },
];
