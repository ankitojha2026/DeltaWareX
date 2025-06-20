import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pqv4wbh",
        "template_27vkakg",
        form.current,
        "mwd8fHTedfzh4XgIO"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully! ✅");
          setTimeout(() => {
            setIsSent(false);
          }, 3000);
        },
        (error) => {
          console.error("Error:", error);
          toast.error("Failed to send message. Try again.");
        }
      );
  };

  const inputStyle = {
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid red",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease-in-out",
  };

  const focusStyle = {
    outline: "none",
    boxShadow: "0 0 0 0.2rem rgba(220, 53, 69, 0.25)",
  };

  return (
    <section className="container py-5">
      <ToastContainer />

      <div className="row justify-content-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="col-md-6 col-lg-5"
        >
          <div
            className="card"
            style={{
              backgroundColor: "#f8f9fa",
              border: "none",
              borderRadius: "0rem",
              boxShadow: "10px 20px 20px black",
              padding: "1.5rem",
            }}
          >
            <div className="text-center mb-4">
              <img
                src="/cources/cropped_circle_image.png"
                alt="Logo"
                width="90"
                style={{
                  borderRadius: "50%",
                  marginBottom: "0.5rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                }}
              />
              <h1 style={{ fontWeight: "bold", color: "#000" }}>DeltaWareX</h1>
              <p style={{ fontSize: "0.9rem", color: "#555" }}>
                Connect with us for any queries or support. We are here to help!
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-3">
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="form-control"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="form-control"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="form-control"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                />
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required
                  className="form-control"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn w-100 fw-bold"
                style={{
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  border: "none",
                  padding: "0.75rem",
                  fontSize: "1rem",
                  borderRadius: "0.5rem",
                  marginTop: "0.5rem",
                }}
              >
                Send
              </motion.button>
            </form>

            {/* Social links */}
            <h5
              className="text-center mt-4 fst-italic"
              style={{ color: "#222", fontWeight: "500" }}
            >
              Follow Us On
            </h5>

            <div
              className="d-flex justify-content-center gap-4 mt-3 fs-4"
              style={{ fontSize: "1.5rem" }}
            >
              <motion.a
                whileHover={{ scale: 1.3 }}
                href="#"
                style={{ color: "#000" }}
              >
                <BsLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.3 }}
                href="#"
                style={{ color: "#000" }}
              >
                <BsInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.3 }}
                href="#"
                style={{ color: "#000" }}
              >
                <AiFillFacebook />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
