import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination } from "swiper";
import axios from 'axios';

// install Swiper modules
SwiperCore.use([Pagination]);

function ProductCarousell() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products-data").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
        breakpoints= {{
          1024: {
            slidesPerView: 5
          },
          640: {
            slidesPerView: 3
          },
          480: {
            slidesPerView: 2
          },

          320: {
            slidesPerView: 2
          },

        }}
      >
        {products.map((data)=>{
          return(
            <SwiperSlide>
            <div className="product-carousell-elements">
              <img src={data.productImageUrl} alt="Test" />
              <p className="product-name">{data.productName}</p>
              <p className="product-price">€{data.productPrice}</p>
            </div>
          </SwiperSlide>
          );
        })}


      </Swiper>
    </div>
  );
}

export default ProductCarousell;
