import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const images = [
  "/MobileImage/img1.webp",
  "/MobileImage/img2.webp",
  "/MobileImage/img3.webp",
  "/MobileImage/img4.webp",
  "/MobileImage/img5.webp",
  "/MobileImage/img6.webp",
];

const MobileMockupCarousel = () => {
  return (
    <div className="mockup-wrapper">
      <Swiper
        slidesPerView={3}
        spaceBetween={-80}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
          el: ".custom-pagination"
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mockup-swiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: -80,
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="mockup-slide">
              <img src={src} alt={`Slide ${index}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots */}
      <div className="custom-pagination"></div>
    </div>
  );
};

export default MobileMockupCarousel;
