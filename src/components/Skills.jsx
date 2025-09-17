import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPython } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
import { FaCalculator, FaTableCells, FaGears, FaChartPie, FaChartColumn } from "react-icons/fa6";


import { FaRobot, FaBrain, FaChartSimple } from "react-icons/fa6";

export default function Skills() {
  const [skills] = useState([
    // { id: 1, name: "JavaScript", icon: <FaJs size={50} /> },
    // { id: 2, name: "React", icon: <FaReact size={50} /> },
    // { id: 3, name: "Node.js", icon: <FaNodeJs size={50} /> },
    { id: 4, name: "Python", icon: <FaPython size={50} /> },
    { id: 2, name: "SQL", icon: <TbSql size={50} /> },
    { id: 3, name: "NumPy", icon: <FaCalculator size={50} /> },
    { id: 1, name: "Pandas", icon: <FaTableCells size={50} /> },
    { id: 5, name: "Scikit-learn", icon: <FaGears size={50} /> }, // FaGears is a great alternative for "tools"
    { id: 6, name: "Matplotlib", icon: <FaChartPie size={50} /> },
    { id: 7, name: "Power BI", icon: <FaChartColumn size={50} /> },
    
   
    { id: 8, name: "EDA", icon: <FaChartSimple size={50} /> },
    { id: 9, name: "ML", icon: <FaRobot size={50} /> },
    { id: 10, name: "Gen AI", icon: <FaBrain size={50} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Grapesgenix Technical Solutions",
      role: "Android Development Intern",
      period: "Jan 2025 - Mar 2025",
      description:
        "During the internship, I gained practical experience in mobile application development with a dual focus on front-end design and data management. A key part of my role involved designing the user-facing elements of Android applications, where I concentrated on creating an effective user interface (UI) and a positive user experience (UX). Alongside these design responsibilities, I also handled the crucial task of cleaning and preparing datasets, a fundamental skill that ensured the integrity of data used within the data-driven applications.",
      // logo: "/assets/google.svg",
    },
    {
      id: 2,
      company: "Luminar Technolab",
      role: "Data Science Intern",
      period: "Jun 2025 - Present",
      description:
        "Currently, as a Data Science Intern at Luminar Technolab, I am building a comprehensive skill set by focusing first on core competencies. My training began with mastering foundational tools, including Python for programming, Exploratory Data Analysis (EDA) to uncover insights from data, and SQL for database querying. This solid groundwork is now paving the way for my progression into more advanced and specialized domains, as my learning trajectory is set to advance into Machine Learning (ML), Deep Learning (DL), and the cutting-edge field of Generative AI.",
      // logo: "/assets/youtube.svg",
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
