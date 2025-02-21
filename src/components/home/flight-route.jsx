'use client';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useState } from 'react';
import { flightRouteData } from '@/services/flight-route';
import planeIcon from '@/assets/icon/plane.svg';
import Image from 'next/image';

const FlightRouteCard = ({ to, from }) => {
  return (
    <Link
      href="#"
      className="grid grid-cols-3 items-center  bg-lightGray/20 rounded-lg py-4 px-3.5 group border border-transparent hover:bg-white hover:shadow hover:border hover:border-primary transition-all"
    >
      <div>
        <h3 className="font-medium truncate group-hover:text-primary transition-colors ">
          {to.destination}
        </h3>
        <p className="truncate text-black/50 text-xs">{to.airport}</p>
      </div>
      <div className="justify-self-center">
        <Image src={planeIcon} alt="flight icon" className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-medium truncate group-hover:text-primary transition-colors">
          {from.destination}
        </h3>
        <p className="truncate text-black/50 text-xs">{from.airport}</p>
      </div>
    </Link>
  );
};

const FlightRoute = () => {
  const [data, setData] = useState(flightRouteData['domestic']);
  const [activeTab, setActiveTab] = useState('domestic');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setData(flightRouteData[tab]);
  };

  return (
    <div className="pb-24">
      <div className="mb-10">
        <h1 className="section-header mb-2.5">
          Top Domestic & International Routes
        </h1>
        <p className="section-subheader-content">
          Make your next trip unforgettable with{' '}
          <span className="text-primary">Holi</span>days! From business class to
          economy class flights on international trips or domestic ones, choose
          from hundreds of airlines.{' '}
          <Link href="#" className="text-primary">
            Buy your ticket now.
          </Link>
        </p>

        <div className="pt-7">
          <Button
            variant={activeTab === 'domestic' ? 'default' : 'secondary'}
            size="lg"
            className={`shadow-none mr-3 h-12 ${
              activeTab === 'domestic'
                ? ''
                : 'text-black/50 bg-lightGray hover:bg-lightGray/50'
            } `}
            onClick={() => handleTabChange('domestic')}
          >
            Domestic
          </Button>
          <Button
            variant={activeTab === 'international' ? 'default' : 'secondary'}
            size="lg"
            className={`shadow-none h-12 ${
              activeTab === 'domestic'
                ? 'text-black/50 bg-lightGray hover:bg-lightGray/50'
                : ''
            } `}
            onClick={() => handleTabChange('international')}
          >
            International
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((route, index) => (
          <FlightRouteCard key={index} {...route} />
        ))}
      </div>
    </div>
  );
};

export default FlightRoute;
