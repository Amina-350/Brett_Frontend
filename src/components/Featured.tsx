'use client';
import React from 'react';
import { Koulen } from "next/font/google";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';

import markimg1 from '../../public/assets/Mask group (1).png';
import markimg2 from '../../public/assets/Mask group (2).png';
import markimg3 from '../../public/assets/Mask group (3).png';
import markimg4 from '../../public/assets/Mask group (4).png';
import markimg5 from '../../public/assets/Mask group (5).png';
import markimg6 from '../../public/assets/Mask group (6).png';
import markimg7 from '../../public/assets/Mask group (7).png';

const koulenFont = Koulen({
  subsets: ["latin"],
  weight: "400", // Koulen only supports 400
});

export default function Featured() {
  const images = [
    markimg1, markimg2, markimg3, markimg4, markimg5, markimg6, markimg7
  ];

  return (
    <div className={`${koulenFont.className}`}>
      <h4 className='font-bold pt-10 text-center'>Featured in</h4>
      
      <div className="pt-7 px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <Image 
                  src={img} 
                  alt={`mark${index + 1}`} 
                  className="h-[30px] w-[120px] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
