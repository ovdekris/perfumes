import React from "react";
import img1 from './img-1.jpg';
import img2 from './img-2.jpg';
import img3 from './img-3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from "./Slider.module.css";
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider(){
    return(
        <Swiper spaceBetween={50}
                slidesPerView={1}
                className={style.container}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                >
            <SwiperSlide><img src={img1} alt=""/></SwiperSlide>
            <SwiperSlide><img src={img2} alt=""/></SwiperSlide>
            <SwiperSlide><img src={img3} alt=""/></SwiperSlide>
        </Swiper>
    )
}
export default Slider;