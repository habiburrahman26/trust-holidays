'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { destinations } from '@/data/data';
import Slider from 'react-slick';
import Link from 'next/link';

const PopularDestinationSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const homeSliderSetting = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    adaptiveHeight: true,
    accessibility: false,
    focusOnSelect: true,
    centerPadding: '0px',
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

  const getCardClass = (index) => {
    const position =
      (index - activeSlide + destinations.length) % destinations.length;

    // Normalize position for wrap-around
    const normalizedPosition =
      position > destinations.length / 2
        ? position - destinations.length
        : position;

    const baseClass =
      'absolute transition-all duration-500 ease-in-out rounded-lg overflow-hidden';

    switch (normalizedPosition) {
      case -2: // Leftmost
        return `${baseClass} left-[100%] w-[230px] h-[350px] top-[75px] opacity-70 z-10`;
      case -1: // Left
        return `${baseClass} left-[50%] w-[280px] h-[400px] top-[50px] opacity-95 z-20`;
      case 0: // Center
        return `${baseClass} left-1/2 -translate-x-1/2 w-[370px] h-[500px] top-0 opacity-100 z-30`;
      case 1: // Right
        return `${baseClass} right-[50%] w-[280px] h-[400px] top-[50px] opacity-95 z-20`;
      case 2: // Rightmost
        return `${baseClass} right-[100%] w-[230px] h-[350px] top-[75px] opacity-70 z-10`;
      default:
        return `${baseClass} opacity-0 pointer-events-none`;
    }
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

      <div className="w-full h-full lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl mx-auto">
        <Slider {...homeSliderSetting} className="my-slider">
          {destinations?.map((slider, index) => (
            <div
              className="grid grid-cols-3 items-center content-center"
              key={index}
            >
              <div className="flex flex-col h-[400px]">
                <Link
                  href="#"
                  className={`homeSlide transition-all duration-500 ${
                    activeSlide === index ? 'homeActiveSlide' : 'opacity-80'
                  }`}
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
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PopularDestinationSlider;
