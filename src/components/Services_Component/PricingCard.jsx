// PricingCard.js
import React from 'react'; // contains hover effects

function PricingCard({ title, features, price }) {
  return (
    <div className="card pricing-card text-center p-4 h-100">
      <h3 className="h4 mb-3">{title}</h3>
      <ul className="list-unstyled mb-4 mx-auto" style={{ maxWidth: '400px' }}>
        {features.map((item, index) => (
          <li key={index} className="d-flex align-items-center justify-content-center mb-2">
            <span className="text-success me-2">✔</span> {item}
          </li>
        ))}
      </ul>
      <p className="display-6 text-danger mb-4">{price}</p>
      <a href="#" className="btn btn-danger btn-lg">Book Free Consultancy</a>
    </div>
  );
}

export default PricingCard;
