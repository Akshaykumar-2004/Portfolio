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
        title: "HR Analytics & Attrition Prediction",
        description: "Built an end-to-end solution using SQL, Python (Scikit-learn), and Power BI to predict employee attrition with 88% accuracy and identify key drivers like overtime, informing retention strategies.",
        image: "/assets/hr.jpg",
        link: "https://github.com/Akshaykumar-2004/HR-Analytics-Employee-Attrition-Prediction"
    },
    {
        id: 2,
        title: "Strategic Insurance Cost Analysis (Healthcare)",
        description: "Analyzed insurance customer data using MySQL, Python (EDA, Feature Engineering), and a 3-page Power BI dashboard with DAX to uncover key factors driving medical costs (smoking, age, BMI) for pricing and wellness program insights.",
        image: "/assets/hsptl.jpg",
        link: "https://github.com/Akshaykumar-2004/Strategic-Insurance-Cost-Analysis-Healthcare-"
    },
    {
        id: 3,
        title: "End-to-End Vendor Performance Analysis",
        description: "Engineered a Python ETL script, performed SQL aggregation (SQLite), Python EDA (Quadrant Analysis, T-test), and Power BI reporting to evaluate vendor performance, identify risks, and recommend optimization strategies for an e-commerce platform.",
        image: "/assets/vendor.jpg",
        link: "https://github.com/Akshaykumar-2004/Vendor-Performance-Analysis"
    },
    {
        id: 4,
        title: "EIC Motor Insurance Deep-Dive Diagnostic Analysis",
        description: "Performed an end-to-end analysis of 2020 Olympics data, transforming scraped web data into a Power BI dashboard. Developed custom DAX metrics to uncover insights on global participation and performance efficiency.",
        image: "/assets/choco11.jpg",
        link: "https://github.com/Akshaykumar-2004/EIC-EDA-and-Dashboard-Using-Power-bi-"
    },
    {
        id: 5,
        title: "Banking Domain Strategic Analysis",
        description: "Analyzed bank marketing data using Python for EDA, outlier handling, feature engineering (PCA), and built a KNN model (Scikit-learn) to predict term deposit subscriptions with ~90% accuracy, optimizing campaign targeting.",
        image: "/assets/bank.jpg",
        link: "https://github.com/Akshaykumar-2004/Bank-Marketing-Term-Deposit-Prediction"
    },
    {
        id: 6,
        title: "Global Terrorism EDA",
        description: "Performed EDA in Python on a large (180k+ rows), complex dataset, visualizing trends, identifying regional hotspots, and uncovering common attack methods over time.",
        image: "/assets/global.jpg",
        link: "https://github.com/Akshaykumar-2004/Global-Terrorist-Attack-EDA"
    },
    {
        id: 7,
        title: "E-commerce RFM Customer Segmentation",
        description: "Implemented the RFM framework in Python to segment e-commerce customers based on Recency, Frequency, and Monetary value, enabling targeted marketing strategies.",
        image: "/assets/ecommerce.jpg",
        link: "https://github.com/Akshaykumar-2004/Ecommerce-sales-EDA"
    },
    {
        id: 8,
        title: "Blinkit EDA",
        description: "Conducted EDA in Python on Blinkit sales data, analyzing item popularity, sales distribution by time/location, and customer purchasing patterns using Pandas and Seaborn.",
        image: "/assets/binkit.jpg",
        link: "https://github.com/Akshaykumar-2004/Blinkit-EDA"
    },
    {
        id: 9,
        title: "Titanic EDA",
        description: "Executed a foundational EDA project in Python, cleaning data, performing feature engineering, and visualizing factors influencing passenger survival on the Titanic dataset.",
        image: "/assets/titanic.jpg",
        link: "https://github.com/Akshaykumar-2004/Titanic-Survival-EDA"
    },
    {
        id: 10,
        title: "Awesome Chocolates Power BI Project",
        description: "Developed a business performance tracker in Power BI, centered on a best-practice star schema data model. Created DAX measures to monitor core KPIs like revenue, profit, and sales across channels.",
        image: "/assets/eic.jpg",
        link: "https://github.com/Akshaykumar-2004/Awesome-Chocolates-Power-BI-Project"
    },
    {
        id: 11,
        title: "Chocolates-Sales-Dashboard ",
        description: "A Power BI dashboard visualizing chocolate sales data to uncover insights into top markets, products, and seasonal trends.",
        image: "/assets/chsale.png",
        link: "https://github.com/Akshaykumar-2004/Chocolates-Sales-Dashboard"
    },
    {
        id: 12,
        title: "Business Performance Tracker",
        description: "Designed a user-friendly Power BI dashboard to analyze chocolate sales. This visualization-focused project provides actionable insights on key markets, top-selling products, and seasonal trends to inform business strategy.",
        image: "/assets/busi.png",
        link: "https://github.com/Akshaykumar-2004/Business-Performance-Tracker"
    },
    {
        id: 13,
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
