import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase,FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill,RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";

export default function Skills() {
  const [skills] = useState([
  { id: 1, name: "Jira", icon: <img src="/assets/jira.svg" alt="Jira" className="w-10 h-10" /> },
  { id: 2, name: "ClickUp", icon: <img src="/assets/clickup.svg" alt="ClickUp" className="w-10 h-10" /> },
  { id: 3, name: "Figma", icon: <img src="/assets/figma.svg" alt="Figma" className="w-10 h-10" /> },
  { id: 4, name: "G-Suite", icon: <img src="/assets/gsheets.svg" alt="G-Suite" className="w-10 h-10" /> },
  { id: 5, name: "Slack", icon: <img src="/assets/slack.svg" alt="Slack" className="w-10 h-10" /> },
  { id: 6, name: "Telegram", icon: <img src="/assets/tele.svg" alt="Telegram" className="w-10 h-10" /> },
  { id: 9, name: "Asana", icon: <img src="/assets/asana.svg" alt="Asana" className="w-10 h-10" /> },
  { id: 10, name: "Postman", icon: <img src="/assets/postman.svg" alt="Postman" className="w-10 h-10" /> },
  { id: 11, name: "Trello", icon: <img src="/assets/trello.svg" alt="Trello" className="w-10 h-10" /> },
  { id: 12, name: "GitLab", icon: <img src="/assets/gitlab.svg" alt="GitLab" className="w-10 h-10" /> },

]);


  const [experiences] = useState([
    {
      id: 1,
      company: "Louisiana Home Performane",
      role: "IT Project Coordinator &  Document Controller",
      period: "Nov 2024 - Present",
      description:
        " As an IT Project Coordinator and Document Controller at LHP, I support project planning and execution for IT initiatives, manage schedules, prepare project documentation, and organize team meetings. I collaborate with stakeholders to ensure smooth communication, assist in evaluating progress, provide regular status updates, and help resolve challenges throughout the project lifecycle. In addition, I oversee document control processes by maintaining version accuracy, ensuring proper filing and retrieval of records, and upholding documentation standards to support project quality and compliance.",
      logo: "/assets/lhp.png",
    },
    {
      id: 2,
      company: "Xcidic Pte Ltd",
      role: "IT Project Manager",
      period: "Dec 2024 - May 2025",
      description:
        "As an IT Project Manager at Xcidic Pte Ltd, I coordinate daily activities between internal developer teams and clients to ensure smooth project execution. I manage client, vendor, and stakeholder relationships, organize meetings to align on project goals, and participate in daily scrum sessions. I also create workload planners using Jira to optimize resource allocation and help teams meet timeline targets.",
      logo: "/assets/xcidic.png",
    },
     {
      id: 3,
      company: "Centrinova Solusi Edukasi",
      role: "Project Manager",
      period: "Dec 2021 - Nov 2024",
      description:
        "As a Project Manager at PT Centrinova Solusi Edukasi, I coordinated day-to-day activities across internal teams and vendors to ensure successful project execution. I created workload planners using Asana to manage resource loads and meet timeline targets, while building and maintaining relationships with clients, vendors, and stakeholders. I worked closely with instructional designers, graphic designers, animators, and developers to monitor project progress and organized meetings with clients to align on project goals.",
      logo: "/assets/centrinova.webp",
    },
     {
      id: 4,
      company: "Djelas Tandatangan Bersama",
      role: "IT Project Manager",
      period: "May 2021 - Nov 2021",
      description:
        "As an IT Project Manager at PT Djelas Tandatangan Bersama, I collaborated with engineering, marketing, customer support, and UI/UX teams to implement new features and enhancements. I monitored progress in design, development, and testing, provided reports and project documentation for the management team, and led the development team in presenting progress updates and deliverables. I also met with clients to gather detailed requirements and ensure alignment on project needs.",
      logo: "/assets/dtb.jpg",
    },
     {
      id: 4,
      company: "Pratama Abadi Industri",
      role: "Project Manager",
      period: "Nov 2018 - Jan 2021",
      description:
        "As a Project Manager at PT Pratama Abadi Industri, I developed plans to keep projects on budget and on schedule, while coordinating with cross-functional teams to deliver high-quality physical products (sample shoes). I provided feedback to HQ on potential issues, offered suggestions to ensure project excellence and product consistency, and communicated progress with clients across five regions. I also introduced sustainability innovations that reduced costs by up to $0.0061 per pair.",
      logo: "/assets/pratama.jpg",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        <p className="text-center text-sm lg:text-base text-gray-600 mt-2">
          <br></br>
  Technologies I work with in cross-functional projects
</p>


        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-7" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
