import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Indoxnito.com",
    description: "Indoxnito.com is a privacy-focused, community-driven social platform where users can engage, connect, and vote transparently without compromising anonymity. I contributed to project management, ensuring smooth collaboration across teams to deliver a secure and user-friendly platform..",
    image: "/assets/indox.png",
  },
  {
    id: 2,
    title: "Voyage",
    description: "Voyage is an AI-powered platform designed to support international student success through actionable insights, targeted outreach, and data-driven solutions. I contributed to project management, ensuring collaboration across teams to deliver a seamless and impactful product experience.",
    image: "/assets/voyage.png",
    link: "#"
  },
  {
    id: 3,
    title: "TekenAja!",
    description: "TekenAja! is a trusted digital signature platform with the highest security standards, certified by KOMINFO. It helps users sign documents easily and securely from anywhere, saving time and ensuring data protection.",
    image: "/assets/dtb.png",
    link: "#"
  },
   {
    id: 4,
    title: "By The Park!",
    description: "A digital platform designed for a preschool to enhance collaboration between teachers and parents. Features include progress tracking, activity galleries, and communication tools to support an engaging, user-friendly experience.",
    image: "/assets/btp.webp",
    link: "#"
  },
  
];

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 lg:space-y-16 space-y-8 lg:pb-6 pb-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className={`flex justify-between items-center flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 10, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="lg:w-[500px] w-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-full hover:scale-105 transition-all duration-500 cursor-pointer object-cover"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="lg:w-1/2 lg:space-y-6 space-y-4">
              <h2 className="font-extrabold text-white mt-5 lg:mt-0 text-3xl lg:text-5xl">
                {String(project.id).padStart(2, "0")}
              </h2>
              <p className="font-bold text-white text-xl lg:text-3xl">{project.title}</p>

              <p className="font-light text-sm/6 lg:text-base text-[#71717A]">
                {project.description}
              </p>
              <a href={project.link} className="text-white mt-3 block" target="_blank" rel="noopener noreferrer">
                <TbExternalLink size={23} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
