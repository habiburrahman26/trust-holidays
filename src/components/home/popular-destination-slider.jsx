'use client';

import Image from 'next/image';
import { destinations } from '@/data/data';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const PopularDestinationSlider = () => {
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
                alt="destination image"
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
