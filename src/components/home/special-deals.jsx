'use client';

import Image from 'next/image';
import Slider from 'react-slick';

const SpecialDeals = () => {
  const destinations = [
    {
      name: 'Dubai',
      image:
        'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FHomepage_Thumbnail_%25281%2529.png&w=384&q=75',
    },
    {
      name: 'Canada',
      image:
        'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FStudent-fare-home-page-thumbnail.png&w=384&q=75',
    },
    {
      name: 'Nepal',
      image:
        'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2Fotithi-home-page-thumbnail.png&w=384&q=75',
    },
    {
      name: 'Singapore',
      image:
        'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FMobile-recharge-10%2525-home-page-thumbnail.png&w=384&q=75',
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="section-container bg-background-secondary pb-24">
      <h3 className="section-header mb-10">Special Deals</h3>

      <Slider {...settings} className="my-slider sm:-mx-2">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="relative h-[168px] rounded-lg shadow-sm overflow-hidden"
            
          >
            <Image
              src={destination.image}
              alt={destination.name}
              fill
              className="w-full h-full object-cover group-hover:scale-105 transition-all"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SpecialDeals;
