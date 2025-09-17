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
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
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
         I'm a passionate data scientist and analyst specializing in Machine Learning & Generative AI. I thrive on turning raw data into actionable insights and building intelligent, data-driven solutions. My focus is on combining analytical thinking with innovative AI approaches to solve complex problems and create real-world impact.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
          My data science journey started in 2025, and since then, I’ve been continuously learning and evolving — mastering Python, SQL, and data visualization while diving deep into machine learning and generative AI. Today, I work on end-to-end data projects, from data wrangling and exploratory analysis to building predictive models and AI-powered solutions using Python, Pandas, NumPy, Power BI, Scikit-learn, and more.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
         Beyond coding, I enjoy sharing insights on LinkedIn, exploring the latest breakthroughs in Machine Learning and Generative AI, and engaging with the global data science community. I love following the progress of AI startups and experimenting with new tools and techniques in my own projects. Feel free to connect with me on LinkedIn or explore my work on GitHub.
        </p>
      </motion.div>
    </div>
  );
}
