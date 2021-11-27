import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination } from "swiper";

// This all bellow will be changed in future with dynamic data!
import ImageOne from '../../assets/media/product1.jpeg';
import ImageTwo from '../../assets/media/product2.jpeg';
import ImageThree from '../../assets/media/product3.jpeg';
import ImageFour from '../../assets/media/product4.jpeg';
import ImageFive from '../../assets/media/product5.jpeg';


// This all above will be changed in future with dynamic data!


// install Swiper modules
SwiperCore.use([Pagination]);

function ProductCarousell() {
  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="product-carousell-elements">
                <img src={ImageOne} alt="" />
                <p className="product-name">Air Jordans</p>
                <p className="product-price">€50,00</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="product-carousell-elements">
                <img src={ImageTwo} alt="" />
                <p className="product-name">Nike RXN</p>
                <p className="product-price">€150,00</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="product-carousell-elements">
                <img src={ImageThree} alt="" />
                <p className="product-name">Rugby helmet</p>
                <p className="product-price">€300,00</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="product-carousell-elements">
                <img src={ImageFour} alt="" />
                <p className="product-name">Dunlop racket</p>
                <p className="product-price">€24,00</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="product-carousell-elements">
                <img src={ImageFive} alt="" />
                <p className="product-name">Nike Tanjun</p>
                <p className="product-price">€24,00</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProductCarousell;
