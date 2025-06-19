import React from 'react';
import {
  FaUsers,
  FaSnowflake,
  FaTools,
  FaChalkboardTeacher,
  FaBullhorn,
  FaSearch,
  FaDatabase,
  FaMobileAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';


const iconMap = {
  FaUsers: <FaUsers size={40} className="mb-3 training-card-icon" />,
  FaSnowflake: <FaSnowflake size={40} className="mb-3 training-card-icon" />,
  FaTools: <FaTools size={40} className="mb-3 training-card-icon" />,
  FaChalkboardTeacher: <FaChalkboardTeacher size={40} className="mb-3 training-card-icon" />,
  FaBullhorn: <FaBullhorn size={40} className="mb-3 training-card-icon" />,
  FaSearch: <FaSearch size={40} className="mb-3 training-card-icon" />,
  FaDatabase: <FaDatabase size={40} className="mb-3 training-card-icon" />,
  FaMobileAlt: <FaMobileAlt size={40} className="mb-3 training-card-icon" />
};

const TrainingCard = ({ title, description, icon }) => {
  return (
    <motion.div
      className="col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        whileHover={{ y: -10, scale: 1.03 }}
        transition={{ type: 'spring', stiffness: 200 }}
        className="training-card-box h-100"
      >
        <div className="card-body text-center ">
          {iconMap[icon]}
          <h1 className=" fs-3 training-card-title">{title}</h1>
          <p className="training-card-text">{description}</p>
          <a href="#" className=" btn btn-danger btn-sm">Read More</a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TrainingCard;
