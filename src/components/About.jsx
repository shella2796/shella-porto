import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about.png" alt="About Me Illustration" className="w-[700px] h-[auto]" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm a process-driven Project Manager with over 4 years of experience leading cross-functional teams in the fast-paced world of digital learning, content development, 
          and product development. I'm passionate about delivering innovative solutions, managing projects from initiation to completion, 
          and ensuring client satisfaction at every stage.       
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My strength lies in collaborating with diverse teams to achieve quality outcomes while fostering strong client relationships. 
          I thrive in dynamic environments where I can help turn ideas into successful, impactful projects.
        </p>

    
      </motion.div>
    </div>
  );
}
