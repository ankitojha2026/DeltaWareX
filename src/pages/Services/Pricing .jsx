// Pricing.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import pricingPlans from '../../API/ServisecsAPIs/pricingPlans.json';

function Pricing() {
  return (
    <section className="py-5 ">
      <div className="container text-center">
        <h1 className="display-6 mb-2" style={{color:"#d31b62"}}> What will you get in this SAAS plan?</h1>
       
       <p className="mb-4">Inside this plan, you will get all these deliverables with which you can make your startup a million dollar startup.</p>
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          className="pricing-swiper"
        >
          {pricingPlans.map((plan, index) => (
            <SwiperSlide key={index} className="pricing-slide">
              <div className="card border rounded-4 pricing-card text-center p-4 h-100" style={{  border:"1px solid #d31b62 "}}>
                <h1 className="h4 mb-3">{plan.title}</h1>
                <ul className="list-unstyled mb-4 mx-auto" style={{ maxWidth: '300px' }}>
                  {plan.features.map((item, i) => (
                    <li key={i} className="d-flex align-items-start justify-content-center mb-2">
                      <h3 className="fs-6 text-start w-100"><span className="text-success  me-2 ">✔</span> {item}</h3>
                    </li>
                  ))}
                </ul>
                <p className="display-6 text-danger mb-4">{plan.price}</p>
                <a href="#" className="btn btn-danger btn-lg">Book Free Consultancy</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Pricing;
