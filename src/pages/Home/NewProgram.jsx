import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaRegStar } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import courseData from '../../API/HomePageAPIs/technologyData.json';
import ServiceModal from '../../components/ReadMore/ServiceModal' // ✅ Import Modal

const CourseSlider = () => {
  const [selectedCourse, setSelectedCourse] = useState(null); // ✅ modal course data
  const [showModal, setShowModal] = useState(false);          // ✅ modal visibility

  const handleReadMore = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h1 className="text-center display-6 fw-bold mb-2">
          Explore Our Top Certifications
        </h1>
        <h3 className="mb-5 fs-6 text-center">
          Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!
        </h3>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2.5,
            slideShadows: false
          }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 }
          }}
        >
          {courseData.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="card course-card shadow-lg border-0 rounded-4 overflow-hidden">
                <img
                  src={course.image}
                  className="card-img-top"
                  alt={course.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body text-center">
                  <h1 className="card-title fs-4 fw-bold text-dark">{course.title}</h1>
                  <p className="card-text text-start text-muted" style={{ fontSize: '0.95rem' }}>
                    {course.description}
                  </p>
                  <div className="text-warning mb-3">
                    {[...Array(5)].map((_, i) =>
                      i < course.rating ? (
                        <FaStar key={i} size={20} />
                      ) : (
                        <FaRegStar key={i} size={18} />
                      )
                    )}
                  </div>
                  <button
                    className="btn btn-danger btn-sm px-3 mt-2"
                    onClick={() => handleReadMore(course)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ✅ Modal Call */}
        <ServiceModal
          show={showModal}
          data={selectedCourse}
          onClose={() => setShowModal(false)}
        />
      </div>
    </section>
  );
};

export default CourseSlider;
