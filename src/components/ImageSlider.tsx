import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const images = [
  '/stuu-110.JPG',
  '/stuu-720.JPG',
  '/stuu-699.JPG',
  '/stuu-684.JPG',
  '/stuu-525.JPG',
  '/stuu-678.JPG',
  '/stuu-519.JPG',
  '/stuu-675.JPG',
  '/stuu-462.JPG',
  '/stuu-657.JPG',
  '/stuu-668.JPG',
];

export default function ImageSlider() {
  return (
    <div className="relative">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="w-full h-80"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-lg shadow-lg z-10">
        <p className="text-2xl font-bold">50+</p>
        <p className="text-sm">Active Members</p>
      </div>
    </div>
  );
}