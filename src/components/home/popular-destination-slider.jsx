'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { destinations } from '@/data/data';
import Slider from 'react-slick';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const PopularDestinationSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const homeSliderSetting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    centerMode: true,
    adaptiveHeight: true,
    accessibility: false,
    focusOnSelect: true,
    centerPadding: '0px',
    // adaptiveHeight:true,
    beforeChange: (_, index) => {
      setActiveSlide(index);
    },

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full section-container pt-10 lg:pt-24">
      <div className="text-center mb-10">
        <h2 className="section-header mb-2.5">Most Popular Destinations</h2>
        <p className="section-subheader-content mx-auto">
          Expand your travel horizons with new facets! Explore the world by
          choosing your ideal travel destinations in Asia, Europe, America,
          Australia and more with Trust{' '}
          <span className="text-primary">Holi</span>days.
        </p>
      </div>

      {/* <div className='relative'>
        <Slider {...homeSliderSetting} className="my-slider overflow-hidden">
          {destinations?.map((slider, index) => (
            <div key={index} className=' h-[500px] relative'>
              <Link
                href="#"
                className={getCardClass(index)}
              >
                <Image
                  src={slider.image}
                  alt="movie"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto rounded-lg overflow-hidden"
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div> */}

      {/* <div className="w-full h-full mx-auto bg-red">
        <Slider {...homeSliderSetting} className="my-slider py-[100px]">
          {destinations?.map((slider, index) => (
            <Link
              key={index}
              href="#"
              className={`block relative h-[350px] sm:h-[400px] rounded-lg overflow-hidden homeSlide transition-all duration-500 ${
                activeSlide === index ? 'homeActiveSlide' : 'opacity-80'
              }`}
            >
              <Image
                src={slider.image}
                alt="movie"
                fill
                className="object-cover block "
              />
            </Link>
          ))}
        </Slider>
      </div> */}

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        initialSlide={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
          slideShadows: false,
        }}
        loop={true}
        loopAdditionalSlides={1}
        watchSlidesProgress={true}
        loopedSlides={destinations.length}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
        }}
        className="destinationSwiper w-full xl:max-w-5xl 3xl:max-w-6xl mx-auto"
      >
        {destinations?.map((slider, index) => (
          <SwiperSlide key={index} className="h-[500px]">
            <Link
              href="#"
              className={`block relative h-[350px] sm:h-[500px] rounded-lg overflow-hidden homeSlide transition-all duration-500`}
            >
              <Image
                src={slider.image}
                alt="movie"
                fill
                className="object-cover block"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularDestinationSlider;
