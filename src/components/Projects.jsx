import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "EIC Motor Insurance Deep-Dive Diagnostic Analysis",
    description: "Performed an end-to-end analysis of 2020 Olympics data, transforming scraped web data into a Power BI dashboard. Developed custom DAX metrics to uncover insights on global participation and performance efficiency.",
    image: "/assets/olym.png",
    link: "https://github.com/Akshaykumar-2004/EIC-EDA-and-Dashboard-Using-Power-bi-"
  },
  {
    id: 2,
    title: "Business Performance Tracker",
    description: "Developed a business performance tracker in Power BI, centered on a best-practice star schema data model. Created DAX measures to monitor core KPIs like revenue, profit, and sales across channels.",
    image: "/assets/busi.png",
    link: "https://github.com/Akshaykumar-2004/Business-Performance-Tracker"
  },
  {
    id: 3,
    title: "Business Performance Tracker",
    description: "Designed a user-friendly Power BI dashboard to analyze chocolate sales. This visualization-focused project provides actionable insights on key markets, top-selling products, and seasonal trends to inform business strategy.",
    image: "/assets/choco.png",
    link: "https://github.com/Akshaykumar-2004/Business-Performance-Tracker"
  },
   {
    id: 4,
    title: "Navita AI Travel Guide",
    description: "Navita is an AI travel guide with a smart chatbot and AI-generated visuals, helping you plan trips, explore destinations, and enjoy a smooth, personalized journey.",
    image: "/assets/navi.png",
    link: "https://github.com/Akshaykumar-2004/Navita-AI-Travel-Guide"
  }
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
