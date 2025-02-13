'use client';

import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';

const ExploreCountry = () => {
  const destinations = [
    {
      name: 'Cox’s Bazar',
      image:
        'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2F267736179_149939317369872_2872125975221274736_n.jpg&w=1920&q=75',
      description: '31 Spot’s Available',
    },
    {
      name: 'Sylhet',
      image:
        'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FSingapore.jpg&w=1920&q=75',
      description: '31 Spot’s Available',
    },
    {
      name: 'Ratargul Swamp Forest',
      image:
        'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FMaafushi.jpg&w=1920&q=75',
      description: '31 Spot’s Available',
    },
    {
      name: 'Bandarban',
      image:
        'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FKolkata.jpg&w=1920&q=75',
      description: '31 Spot’s Available',
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-7xl mx-auto pb-24">
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl font-medium mb-2.5">
          Explore the country of Bangladesh.
        </h1>
        <p className="text-black/50 mb-0.5">
          You can experience Bangladesh's rich culture and explore the majestic
          beauties of Cox's Bazar, Sylhet, Bandarban,
        </p>
        <p className="text-black/50">
          Sajek Valley, Rangamati, etc.{' '}
          <span className="text-primary font-medium">
            Start planning your trip now.
          </span>
        </p>
      </div>

      <Slider {...settings} className="my-slider -mx-2">
        {destinations.map((destination, index) => (
          <Link href='#' key={index} className="block px-2 relative rounded-xl overflow-hidden">
            <div className="aspect-[4/5]">
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="h-full w-full object-cover"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

            {/* Content */}
            <div className="absolute bottom-0 w-full p-6">
              <h3 className="text-xl font-medium text-white mb-1">
                {destination.name}
              </h3>
              <p className="text-white text-sm">
                {destination.description}
              </p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ExploreCountry;
