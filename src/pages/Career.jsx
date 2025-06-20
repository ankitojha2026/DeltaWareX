import React from 'react';
import { motion } from 'framer-motion'; //  Import framer-motion
import CourseCard from '../components/UI/CourceCard';
import courseSections from '../API/CareerPageAPIs/courcesData.json';
import NewProgram from './Home/NewProgram';

const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i = 1) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

const Career = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <motion.h1
          className="text-center display-5 fw-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Career Opportunities & Courses
        </motion.h1>

        <motion.p
          className="text-center text-muted mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.2 }}
        >
          Choose your future path from our top trending technologies and certification programs.
        </motion.p>

        {courseSections.map((section, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-5"
          >
            <h1 className="fw-semibold pb-2 mb-4" style={{ color: '#d31b62' }}>
              {section.section}
              <hr className="opacity-100 my-2" style={{ color: '#d31b62', border: '2px solid #d31b62' }} />
            </h1>

            <div className="row g-4">
              {section.courses.map((course, idx) => (
                <motion.div
  key={course.id}
  className="col-12 col-sm-6 col-md-4 col-lg-3"
  animate={{ opacity: 1, scale: 1 }}
  initial={{ opacity: 0, scale: 0.95 }}
  transition={{ delay: idx * 0.05, duration: 0.4 }}
>
                 <CourseCard
  image={`/cources/${course.image}`}
  title={course.title}
  subtitle={course.subtitle}
  description={course.description} // Pass full description
  rating={course.rating}
  points={course.features}
  price={course.price}
/>

                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <NewProgram />
      </motion.div>
    </section>
  );
};

export default Career;
