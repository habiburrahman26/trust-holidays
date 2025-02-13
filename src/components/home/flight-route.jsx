import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';

const FlightRoute = () => {
  return (
    <div className="max-w-7xl mx-auto pb-24">
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-medium mb-2.5">
          Top Domestic & International Routes
        </h1>
        <p className="text-black/50 font-medium mb-0.5">
          Make your next trip unforgettable with{' '}
          <span className="text-primary">Holi</span>days! From business class to
          economy class flights on international
        </p>
        <p className="text-black/50">
          trips or domestic ones, choose from hundreds of airlines.{' '}
          <Link href="#" className="text-primary font-medium">
            Buy your ticket now.
          </Link>
        </p>

        <div className='pt-7'>
          <Button size="lg" className="shadow-none mr-3">Domestic</Button>
          <Button variant="secondary" size="lg" className="bg-lightGray shadow-none hover:bg-lightGray">International</Button>
        </div>
      </div>
    </div>
  );
};

export default FlightRoute;
