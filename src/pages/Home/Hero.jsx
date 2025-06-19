import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="container col-xxl-8 px-4 py-2">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">

        {/* Image Section with animation */}
        <motion.div
          className="col-10 col-sm-8 col-lg-6"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/public/MobileImage/hero.png"
            className="d-block mx-lg-auto rounded-4 img-fluid"
            alt="hero image"
            width="700"
            height="500"
            loading="lazy"
          />
        </motion.div>

        {/* Text Section with animation */}
        <motion.div
          className="col-lg-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true}}
        >
          <h1>Transform Your Tech Career with DeltaWareX</h1>
          <p className="lead">
            Join <strong>DeltaWareX</strong>, your gateway to mastering today's most in-demand technologies. We offer expert-led training in <strong>Java, Python, Cybersecurity, DevOps, Cloud Computing, Git & GitHub, and Blockchain</strong> — all under one roof.
            <br /><br />
            Our hands-on, industry-focused curriculum ensures you're not just learning, you're building real-world skills. Whether you're a beginner or advancing your career, DeltaWareX helps you stay ahead in the digital era.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-danger fw-bold btn-lg px-4 me-md-2">Join Now !!</button>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
