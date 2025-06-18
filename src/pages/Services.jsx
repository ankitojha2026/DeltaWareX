import { motion } from "framer-motion";

import AppTypes from "./Services/AppTypes";
import Header from "./Services/Header";
import MobileMockupCarousel from "./Services/MobileMockupCarousel";
import Pricing from "./Services/Pricing ";
import Testimonial from "./Services/Testimonial";
import UIDesign from "./Services/UIDesign";

function Services() {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-light text-dark">
      {/* Header without animation */}
      <Header />

      {/* Animate on scroll components */}
     
        <AppTypes />
     

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.3 }}
        variants={fadeInUp}
        viewport={{ once: false , amount :0.3}}
      >
        <UIDesign />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.2 }}
        variants={fadeInUp}
        viewport={{ once: true }}
      >
        <MobileMockupCarousel />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.3 }}
        variants={fadeInUp}
        viewport={{ once: false , amount :0.3}}
      >
        <Testimonial />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, delay: 0.4 }}
        variants={fadeInUp}
        viewport={{ once: false , amount :0.3 }}
      >
        <Pricing />
      </motion.div>
    </div>
  );
}

export default Services;
