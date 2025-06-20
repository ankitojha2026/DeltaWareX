import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

const CourseCard = ({ image, title, description, rating }) => {
  return (
    <div className="card h-100 border-0" style={{background :'#f8f9fa'}}>
      <img
        src={image}
        className="card-img-top p-2"
        alt={title}
        style={{ width:'100% ', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h1 className="card-title fs-5 fw-bold text-dark">{title}</h1>
        <p className="card-text text-muted" style={{ fontSize: '0.95rem' }}>
          {description}
        </p>
        <div className="text-warning mb-2">
          {[...Array(5)].map((_, i) =>
            i < rating ? <FaStar key={i} size={20} /> : <FaRegStar key={i} size={18} />
          )}
        </div>
        <a href="#" className="btn btn-danger btn-sm px-3 mt-auto">
          Read More
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
