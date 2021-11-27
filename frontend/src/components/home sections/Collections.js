import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

function Collections() {
  return (
    <div className="collections-slider-wrapper">
      <Swiper
        slidesPerView={10}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          1025: {
            slidesPerView: 7,
            spaceBetween: 50
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-elements">
            <div className="collection-slide">
              <a href="/">
                <i className="fas fa-basketball-ball"></i>
                <p>Basketball</p>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-elements">
            <div className="collection-slide">
              <a href="/">
                <i className="fas fa-table-tennis"></i>
                <p>Table tennis</p>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-elements">
            <div className="collection-slide">
              <a href="/">
                <i className="fas fa-futbol"></i>
                <p>Soccer</p>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-elements">
            <div className="collection-slide">
              <a href="/">
                <i className="fas fa-football-ball"></i>
                <p>Football</p>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-elements">
            <div className="collection-slide">
              <a href="/">
                <i className="fas fa-biking"></i>
                <p>Biking</p>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-elements">
            <div className="collection-slide">
              <a href="/">
                <i className="fas fa-volleyball-ball"></i>
                <p>Volleyball</p>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-elements">
            <div className="collection-slide">
              <a href="/">
                <i className="fas fa-golf-ball"></i>
                <p>Golf</p>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-elements">
            <div className="collection-slide">
              <a href="/">
                <i className="fas fa-swimmer"></i>
                <p>Swimming</p>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-elements">
            <div className="collection-slide">
              <a href="/">
                <i className="fas fa-skiing"></i>
                <p>Skiing</p>
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide-elements">
            <div className="collection-slide">
              <a href="/">
                <i className="fas fa-running"></i>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Collections;
