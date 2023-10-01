import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';

import img2 from '../../Assets/Photos/countdownflag.png'
import SwiperCore, { } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { Link, useLocation } from 'react-router-dom';

SwiperCore.use([EffectCoverflow, Navigation]);
const Partner = () => {
  const breakpoints = {
    // When window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // When window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // When window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    // When window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  };
  const { pathname } = useLocation()

  return (
    <div className='container-ml mb-[170px] ' id='partner'>
      <div>
        <div>
          <h1 className='text-black text-[40px] px-3 border-l-[5px] border-[#002868] h-[60px] my-[48px]'>Partners</h1>
          <p className='px-3 text-[#000000cc] font-500 text-[20px] mb-[22px]'> We are partnered</p>
        </div>

        <div className="container">

          {
            pathname == '/partners' ? <div>
              <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  flex-wrap px-4 gap-x-10 gap-y-4 mt-4 shadow-md py-3'>
                <div>
                  <img src={img2} alt='loading ...' />
                </div>
                <div>

                  <div className='mb-3'>
                    <h1 className=' mb-7 text-3xl text-bold '>Name of the company</h1>
                    <p>
                      Lorem ipsum is my favourite text so i alltime use it
                    </p>
                  </div>
                  <div className=' relative  '>
                    <Link to="/" className='hover:underline absolute -bottom-20 '>
                      www.google.com
                    </Link>

                  </div>
                </div>
                <div>
                  <h1 className=' mb-7 text-3xl text-bold text-left'>Role</h1>
                  <ul style={{ listStyleType: "circle" }} className='mx-5'>
                    <li >We, the members of this community.</li>
                    <li>We, the members of this community.</li>
                    <li>We, the members of this community.</li>
                    <li>We, the members of this community.</li>
                  </ul>
                </div>
              </div>
            </div> : <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: '.swiper-pagination', clickable: true }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container"
              breakpoints={breakpoints}

            >
              {
                [1, 2, 3, 4, 5, 6, 7, 8].map((item,index) => <SwiperSlide className='bg-white mx-auto   ' key={index}>
                  <img src={img2} alt="slide_image" className='w-[200px] h-[200px] rounded-full mx-auto' />
                </SwiperSlide>)

              }



              <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </Swiper>
          }
        </div>
      </div>
    </div>
  );
};

export default Partner;