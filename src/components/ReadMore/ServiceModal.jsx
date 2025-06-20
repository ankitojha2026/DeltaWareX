import React from "react";
import { FaTimes, FaStar, FaRegStar } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

const ServiceModal = ({ show, data, onClose }) => {
  if (!show || !data) return null;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} className="text-warning me-1" />
        ) : (
          <FaRegStar key={i} className="text-muted me-1" />
        )
      );
    }
    return stars;
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
      style={{ zIndex: 1050 }}
    >
      <div
        className="bg-white p-4 rounded shadow position-relative container animate__animated animate__zoomIn"
        style={{
          maxWidth: "900px",
          width: "95%",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <button
          className="btn btn-light position-absolute top-0 end-0 m-2"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        <div className="row flex-column flex-md-row">
          {/* Left Column */}
          <div className="col-md-5 text-center mb-3 mb-md-0">
            <img
              src={data.image}
              alt={data.title}
              className="img-fluid rounded"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "250px",
                objectFit: "cover",
              }}
            />
            <h4 className="mt-3">{data.title}</h4>
            {data.subtitle && (
              <h6 className="text-muted">{data.subtitle}</h6>
            )}
            {data.rating !== undefined && (
              <div className="d-flex justify-content-center mt-2">
                {renderStars(data.rating)}
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="col-md-7">
            {data.description && <p className="text-muted">{data.description}</p>}

            {data.points && data.points.length > 0 && (
              <>
                <h1 className="fw-bold fs-5">Key Features:</h1>
                <ul className="ps-3">
                  {data.points.map((point, index) => (
                    <li key={index} className="mb-1"> {point}</li>
                  ))}
                </ul>
              </>
            )}

            {data.price && (
              <div className="mt-4 d-flex flex-column flex-sm-row align-items-start">
                <p className="display-6 text-danger mb-2">{data.price}</p>
                <Link to="/contact" className="btn btn-danger ms-5 px-4 py-1 fs-6 text-light mt-2 mb-2 mb-sm-0 me-sm-3 ">
                  Enroll Now <SlArrowRight />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
