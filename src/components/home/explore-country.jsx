'use client';

import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { settings } from './sliderSetting';

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

  return (
    <div className="pb-24">
      <div className="mb-10">
        <h1 className="section-header mb-2.5">
          Explore the country of Bangladesh.
        </h1>
        <p className="section-subheader-content">
          You can experience Bangladesh's rich culture and explore the majestic
          beauties of Cox's Bazar, Sylhet, Bandarban, Sajek Valley, Rangamati,
          etc.{' '}
          <span className="text-primary">Start planning your trip now.</span>
        </p>
      </div>

      <Slider {...settings} className="my-slider sm:-mx-2">
        {destinations.map((destination, index) => (
          <Link
            href="#"
            key={index}
            className="block px-1 relative rounded-xl overflow-hidden"
          >
            <div className="relative h-[220px] sm:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={destination.image}
                alt={destination.name}
                fill
                className="h-full w-full object-cover"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(196, 196, 196, 0.00) 64.47%, #1E1E1E 94.67%)',
                }}
              />
            </div>

            

            {/* Content */}
            <div className="absolute bottom-0 w-full px-2 py-4 lg:p-6">
              <h3 className="text-base lg:text-xl truncate font-medium text-white mb-1">
                {destination.name}
              </h3>
              <p className="text-white text-xs sm:text-sm">{destination.description}</p>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default ExploreCountry;
