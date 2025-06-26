"use client";
import { ArrowBigRight, ArrowRight } from 'lucide-react';
import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div 
      ref={ref}
      className='max-w-full flex flex-col text-center sm:text-justify items-center justify-center  gap-6'
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className='max-w-full my-20 flex flex-row justify-center animate-bounce ease-in-out transition'
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.a 
          className="" 
          href=""
          whileHover={{ color: "#3b82f6" }}
        >
          Download my Resume 
        </motion.a>
        <motion.div
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowRight/>
        </motion.div>
      </motion.div>
      <motion.div 
        className='w-full flex  items-center justify-center'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div 
          className='w-11/12 text-[10px] border-t-2 border-neutral-300  text-gray-600 p-4'
          initial={{ width: 0 }}
          animate={isInView ? { width: "91.666667%" } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Copyright © 2025 Mukul Rai. All rights reserved.
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer
