import React from 'react';
import { motion } from 'framer-motion';

const features = [
  'Live Classes by Expert',
  'Lifetime Access Trainers',
  'Remote Learning',
  'Well Organized Courses',
  'Hands-On Live Projects',
  'Professional Certification',
  'Mock Interviews & Placement Assistance',
  'Resume Building'
];

const OnlineLearning = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center display-6 fw-bold mb-5">
          Why Choose DeltaWareX Online Learning Platform?
        </h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 180 }}
                className="card h-100 border-0 text-center px-3 py-4 shadow custom-shadow rounded-4"
              >
                <h1 className="fw-bold text-dark fs-6 mb-0">{feature}</h1>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineLearning;
