import React from 'react';
import { TbExternalLink } from "react-icons/tb";
import { motion } from 'framer-motion';

// SwiperJS Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const projects = [
    // Your projects array
    {
        id: 1,
        title: "EIC Motor Insurance Deep-Dive Diagnostic Analysis",
        description: "Performed an end-to-end analysis of 2020 Olympics data, transforming scraped web data into a Power BI dashboard. Developed custom DAX metrics to uncover insights on global participation and performance efficiency.",
        image: "/assets/choco11.jpg",
        link: "https://github.com/Akshaykumar-2004/EIC-EDA-and-Dashboard-Using-Power-bi-"
    },
    {
        id: 2,
        title: "Awesome Chocolates Power BI Project",
        description: "Developed a business performance tracker in Power BI, centered on a best-practice star schema data model. Created DAX measures to monitor core KPIs like revenue, profit, and sales across channels.",
        image: "/assets/eic.jpg",
        link: "https://github.com/Akshaykumar-2004/Awesome-Chocolates-Power-BI-Project"
    },
    {
        id: 3,
        title: "Business Performance Tracker",
        description: "Designed a user-friendly Power BI dashboard to analyze chocolate sales. This visualization-focused project provides actionable insights on key markets, top-selling products, and seasonal trends to inform business strategy.",
        image: "/assets/busi.png",
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

// NEW SIMPLIFIED ANIMATION VARIANTS
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: 0.3 }, // Delay allows curtain to move first
  },
};

const curtainVariants = {
  hidden: { scaleX: 1 },
  visible: {
    scaleX: 0,
    transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] },
  },
};

export default function Projects() {
  return (
    <div className="bg-black px-5 lg:px-28 py-8 my-8 lg:py-16 lg:my-16" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center text-white">
        My <span className="font-extrabold">Projects</span>
      </h2>

      <div className="lg:mt-16 mt-8 relative">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
          pagination={{ clickable: true }}
          loop={true}
          className="mySwiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <motion.div
                key={project.id}
                className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 p-4 lg:min-h-[550px]"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Image Container with Curtain */}
                <div className="lg:w-1/2 w-full max-w-lg relative overflow-hidden rounded-2xl shadow-lg shadow-gray-900/50">
                  <motion.img
                    className="w-full h-full object-cover"
                    src={project.image}
                    alt={project.title}
                    variants={contentVariants}
                  />
                  <motion.div
                    className="absolute inset-0 bg-cyan-500 origin-right"
                    variants={curtainVariants}
                  />
                </div>

                {/* Text Content Container */}
                <motion.div
                  className="lg:w-1/2 flex flex-col gap-4 text-center lg:text-left"
                  variants={containerVariants}
                >
                  <motion.h2 variants={contentVariants} className="font-extrabold text-white text-3xl lg:text-5xl">
                    {String(project.id).padStart(2, "0")}
                  </motion.h2>
                  <motion.p variants={contentVariants} className="font-bold text-white text-xl lg:text-3xl">{project.title}</motion.p>
                  <motion.p variants={contentVariants} className="font-light text-sm/6 lg:text-base text-[#71717A]">
                    {project.description}
                  </motion.p>
                  <motion.a 
                    href={project.link} 
                    className="text-white mt-3 mx-auto lg:mx-0 w-fit" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variants={contentVariants}
                  >
                    <TbExternalLink size={25} className="hover:text-cyan-400 transition-colors" />
                  </motion.a>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons will be controlled by CSS */}
        <div className="swiper-button-prev-custom"></div>
        <div className="swiper-button-next-custom"></div>
      </div>
    </div>
  );
}