import React, { useState } from 'react';
import AddDestination from './add-destination';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import Image from 'next/image';

const SEARCHFOR = [
  {
    label: 'Easy Visa Destination',
    value: 'easy-visa-destination',
  },
  {
    label: 'Popular Destination',
    value: 'popular-destination',
  },
  {
    label: 'Honeymoon',
    value: 'honeymoon',
  },
  {
    label: 'Wishlist',
    value: 'wishlist',
  },
  {
    label: 'Umrah',
    value: 'umrah',
  },
];

const Tour = () => {
  const [selectedSearch, setSelectedSearch] = useState();

  return (
    <div>
      <AddDestination />

      <div className="flex items-center gap-5 pt-7">
        <p className="text-sm font-medium">Search For</p>

        <RadioGroup
          defaultValue={selectedSearch}
          onValueChange={(value) => setSelectedSearch(value)}
          className="flex items-center gap-3.5"
        >
          {SEARCHFOR.map((item) => (
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value={item.value}
                id={item.value}
                className={`shadow-none ${
                  selectedSearch === item.value
                    ? 'border-primary bg-primary'
                    : ' border-darkGray2'
                }`}
              />
              <Label
                htmlFor={item.value}
                className={`${
                  selectedSearch === item.value
                    ? 'text-primary'
                    : 'text-darkGray2'
                } text-sm`}
              >
                {item.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="grid grid-cols-6 gap-3 pt-7">
        {/* https://res.cloudinary.com/dxtqg7ofg/image/upload/v1739970917/Bhutan_-_260360_sgeokk.png */}
        {[1,1,1,1,1].map((item, i) => (
          <Link
            href="#"
            key={i}
            className="block px-2 relative rounded-md overflow-hidden shadow"
          >
            <div className="w-40 h-48">
              <Image
                src="https://res.cloudinary.com/dxtqg7ofg/image/upload/v1739970917/Bhutan_-_260360_sgeokk.png"
                alt="image"
                fill
                className="h-full w-full object-cover"
              />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />

            {/* Content */}
            <div className="absolute bottom-0 w-full p-1">
              <h3 className="font-medium text-white mb-1">Cox's Bazar</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tour;
