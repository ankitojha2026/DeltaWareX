import React from 'react';
import apps from '../../API/ServisecsAPIs/servicesData.json';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function FutureTechnology () {
  const zoomVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section className="py-5">
      <div className="container">
        <h1 className="text-center display-6 mb-4">Our App Development & Services</h1>
        <div className="row g-4">
          {apps.map((app, index) => (
            <motion.div
              key={index}
              className="col-md-4"
              initial="hidden"
              whileInView="visible"
              exit="hidden"
              animate="visible"
              viewport={{ once: false, amount: 0.3 }} // 🔁 Animate every time it enters viewport
              transition={{ duration: 0.5, delay: index * 0.2, ease: 'easeInOut' }}
              variants={zoomVariants}
            >
              <div className="card h-100 custom-card ">
                <img src={app.image} className="card-img-top p-2" alt={app.title} />
                <div className="card-body text-center d-flex flex-column">
                  <h1 className="card-title h5">{app.title}</h1>
                  <h3 className="card-text fs-6 text-start p-2">{app.description}</h3>
                  <ul className="list-unstyled mb-4">
                    {app.features.map((feature, idx) => (
                      <li key={idx} className="d-flex mb-2">
                        <span className="text-success me-2">✔</span>
                        <h3 className="fs-6 text-start">{feature}</h3>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-danger mt-auto">Book Free Consultation</Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FutureTechnology;
