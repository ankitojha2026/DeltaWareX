import React from 'react';
import { motion } from 'framer-motion';
import TrainingCard from './TrainingCard';
import trainingData from '../../API/HomePageAPIs/traningData.json';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const TrainingSection = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center display-6 fw-bold mb-3">Education For Everyone</h1>
      <p className="text-center text-muted mb-5">
        Finding your own space and utilizing better learning options can result in faster than the traditional ways. Enjoy the beauty of Technical Training!
      </p>

      <motion.div
        className="row row-cols-1 row-cols-md-3 g-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
       
  {trainingData.map((item) => (
    <TrainingCard
      key={item.id}
      title={item.title}
      description={item.description}
      icon={item.icon}
    />
  ))}


      </motion.div>
    </div>
  );
};

export default TrainingSection;
