'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const destinations = [
  {
    id: 1,
    image:
      'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FSingapore.jpg&w=1920&q=75',
    title: 'Beijing Temple',
  },
  {
    id: 2,
    image:
      'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FMaafushi.jpg&w=1920&q=75',
    title: 'Mountain Cherry Blossoms',
  },
  {
    id: 3,
    image:
      'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FKolkata.jpg&w=1920&q=75',
    title: 'Arctic Glass Igloo',
  },
  {
    id: 4,
    image:
      'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FBangkok.jpg&w=1920&q=75',
    title: 'Maldives Resort',
  },
  {
    id: 5,
    image:
      'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FMaafushi.jpg&w=1920&q=75',
    title: 'Mountain Cherry Blossoms',
  },
  {
    id: 6,
    image:
      'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FSingapore.jpg&w=1920&q=75',
    title: 'Thailand Cliffs',
  },
  {
    id: 7,
    image:
      'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FBangkok.jpg&w=1920&q=75',
    title: 'Maldives Resort',
  },
];

const PopularDestinationSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);

  //   const handlePrevClick = () => {
  //     setActiveIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  //   };

  //   const handleNextClick = () => {
  //     setActiveIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  //   };

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getCardClass = (index) => {
    const position = index - activeIndex;

    // Normalize position for wrap-around
    const normalizedPosition =
      position < -2
        ? position + destinations.length
        : position > 2
        ? position - destinations.length
        : position;

    const baseClass =
      'absolute transition-all duration-500 ease-in-out rounded-lg overflow-hidden';

    switch (normalizedPosition) {
      // case -3:
      //   return `${baseClass} left-0 w-[200px] h-[300px] top-[100px] opacity-40 z-0 transform scale-90 -translate-x-3/4`;
      case -2: // Leftmost
        return `${baseClass} left-[15%] w-[230px] h-[350px] top-[75px] opacity-70 z-10`;
      case -1: // Left
        return `${baseClass} left-[24%] w-[280px] h-[400px] top-[50px] opacity-100 z-20`;
      case 0: // Center
        return `${baseClass} left-1/2 -translate-x-1/2 w-[370px] h-[500px] top-0 opacity-100 z-30`;
      case 1: // Right
        return `${baseClass} right-[24%] w-[280px] h-[400px] top-[50px] opacity-100 z-20`;
      case 2: // Rightmost
        return `${baseClass} right-[15%] w-[230px] h-[350px] top-[75px] opacity-70 z-10`;
      // case 3:
      //   return `${baseClass} right-0 w-[200px] h-[300px] top-[100px] opacity-40 z-0 transform scale-90 translate-x-3/4`;
      default:
        return `${baseClass} opacity-0 pointer-events-none`;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Most Popular Destinations</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Expand your travel horizons with new facets! Explore the world by
          choosing your ideal travel destinations in Asia, Europe, America,
          Australia and more with Trust Holidays.
        </p>
      </div>

      <div className="relative h-[500px] mb-8 overflow-hidden">
        {destinations.map((destination, index) => (
          <div key={destination.id} className={getCardClass(index)}>
            <Image
              src={destination.image}
              alt={destination.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        {[...Array(5)].map((_, i) => {
          const dotIndex =
            (activeIndex - 2 + i + destinations.length) % destinations.length;
          const opacity =
            i === 2
              ? 'opacity-100'
              : i === 1 || i === 3
              ? 'opacity-70'
              : 'opacity-40';
          return (
            <button
              key={dotIndex}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === 2 ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
              } ${opacity}`}
              onClick={() => handleDotClick(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PopularDestinationSlider;
