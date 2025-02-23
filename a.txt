'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { destinations } from '@/data/data';

const PopularDestinationSlider = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 3000);
  };

  const handleDotClick = (index) => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setActiveIndex(index);
    startTimer();
  };

  useEffect(() => {
    startTimer();

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const getCardClass = (index) => {
    const position =
      (index - activeIndex + destinations.length) % destinations.length;

    // Normalize position for wrap-around
    const normalizedPosition =
      position > destinations.length / 2
        ? position - destinations.length
        : position;

    const baseClass =
      'absolute transition-all duration-500 ease-in-out rounded-lg overflow-hidden';

    switch (normalizedPosition) {
      case -2: // Leftmost
        return `${baseClass} left-[15%] w-[230px] h-[350px] top-[75px] opacity-70 z-10`;
      case -1: // Left
        return `${baseClass} left-[24%] w-[280px] h-[400px] top-[50px] opacity-95 z-20`;
      case 0: // Center
        return `${baseClass} left-1/2 -translate-x-1/2 w-[370px] h-[500px] top-0 opacity-100 z-30`;
      case 1: // Right
        return `${baseClass} right-[24%] w-[280px] h-[400px] top-[50px] opacity-95 z-20`;
      case 2: // Rightmost
        return `${baseClass} right-[15%] w-[230px] h-[350px] top-[75px] opacity-70 z-10`;
      default:
        return `${baseClass} opacity-0 pointer-events-none`;
    }
  };

  return (
    <div className="w-full section-container pt-10 lg:pt-24">
      <div className="text-center mb-10">
        <h2 className="section-header mb-2.5">
          Most Popular Destinations
        </h2>
        <p className="section-subheader-content">
          Expand your travel horizons with new facets! Explore the world by
          choosing your ideal travel destinations in Asia, Europe, America, Australia and more with Trust{' '}
          <span className="text-primary">Holi</span>days.
        </p>
     
      </div>

      <div className="relative h-[500px] mb-8 overflow-hidden ">
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
        {[...Array(3)].map((_, i) => {
          const dotIndex =
            (activeIndex - 1 + i + destinations.length) % destinations.length;
          const opacity = i === 1 ? 'opacity-100' : 'opacity-70';
          return (
            <button
              key={dotIndex}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                i === 1 ? 'bg-primary' : 'bg-lightGray'
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
