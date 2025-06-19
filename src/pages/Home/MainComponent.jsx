import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';

import NewProgram from './NewProgram';
import OnlineLearning from './OnlineLearning';
import FutureTechnology from './FutureTechnology';
import Testimonial from './Testimonial';
import WhyChoose from './WhyChoose';
import TrainingSection from './TrainingSection';
import Hero from './Hero';

const MainComponent = () => {
  // Animation config
  const sectionAnimation = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
    viewport: { once: true }
  };

  return (
    <div className="container-fluid py-5">

      {/* Hero Section (already animated inside Hero component) */}
      <Hero />

      {/* Training Programs Section */}
      <motion.div {...sectionAnimation}>
        <TrainingSection />
      </motion.div>

      {/* Newly Launched Programs Section */}
      <motion.div {...sectionAnimation}>
        <NewProgram />
      </motion.div>

      {/* Online Learning Platform Section */}
      <motion.div {...sectionAnimation}>
        <OnlineLearning />
      </motion.div>

      {/* Futuristic Technologies Section */}
      <motion.div {...sectionAnimation}>
        <FutureTechnology />
      </motion.div>

      {/* Testimonial Section */}
      <motion.div {...sectionAnimation}>
        <Testimonial />
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div {...sectionAnimation}>
        <WhyChoose />
      </motion.div>

    </div>
  );
};

export default MainComponent;
