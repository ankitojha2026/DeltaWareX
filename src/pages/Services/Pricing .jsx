import React from 'react';

function Pricing() {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="display-6 mb-3">What Will You Get in Our SaaS Plan?</h2>
        <p className="lead mb-4">Inside this plan, you will get all these deliverables to make your startup a million-dollar success.</p>
        <h3 className="h4 mb-3">Startup Plan</h3>
        <ul className="list-unstyled mb-4 mx-auto" style={{ maxWidth: '400px' }}>
          <li className="d-flex align-items-center justify-content-center mb-2">
            <span className="text-success me-2">✔</span> Android & iOS app for users
          </li>
          <li className="d-flex align-items-center justify-content-center mb-2">
            <span className="text-success me-2">✔</span> Android & iOS app for sellers
          </li>
          <li className="d-flex align-items-center justify-content-center mb-2">
            <span className="text-success me-2">✔</span> Master Admin
          </li>
          <li className="d-flex align-items-center justify-content-center mb-2">
            <span className="text-success me-2">✔</span> Support for 6 months
          </li>
        </ul>
        <p className="display-6 text-danger mb-4">₹50,000</p>
        <a href="#" className="btn btn-danger btn-lg">Book Free Consultancy</a>
      </div>
    </section>
  );
}

export default Pricing;