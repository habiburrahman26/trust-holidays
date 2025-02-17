import { useState } from 'react';
import Image from 'next/image';
import locationChangeIcon from '@/assets/icon/location-change.svg';
import searchIcon from '@/assets/icon/search.svg';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const Oneway = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="pt-6 grid grid-cols-[2fr_1fr_auto] gap-4">
      <div className="relative w-full flex items-center gap-4">
        <div className="w-full border border-darkGray2/50 rounded-lg px-4 py-3">
          <p className="text-black text-xs">From</p>
          <h3 className="text-lg text-primary font-medium">Dhaka</h3>
          {/* <input
        type="text"
        placeholder="Enter city or airport"
        className="w-full h-12 mt-2 border border-darkGray2/80 rounded-md px-4"/> */}
          <p className="truncate text-black text-xs">
            Hazrat Shahjalal International Airport, Ba{' '}
          </p>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 size-8 bg-white flex items-center justify-center z-10">
          <Image
            src={locationChangeIcon}
            alt="location change image"
            className="size-6"
          />
        </div>

        <div className="w-full border border-darkGray2/50 rounded-lg px-4 py-3">
          <p className="text-black text-xs">To</p>
          <h3 className="text-lg text-primary font-medium">Cox’s Bazar</h3>
          {/* <input
        type="text"
        placeholder="Enter city or airport"
        className="w-full h-12 mt-2 border border-darkGray2/80 rounded-md px-4"/> */}
          <p className="truncate text-black text-xs">
            Hazrat Shahjalal International Airport, Ba{' '}
          </p>
        </div>
      </div>

      <div className="border border-darkGray2/50 rounded-lg px-4 py-3">
        <p className="text-black text-xs">Journey Date</p>

        <Popover>
          <PopoverTrigger asChild>
            <p className="text-lg text-primary font-medium cursor-pointer">
              {date ? format(date, 'PPP') : null}
            </p>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <p className="truncate text-black text-xs">
          Hazrat Shahjalal International Airport, Ba{' '}
        </p>
      </div>

      <div className="bg-primary flex items-center justify-center p-6 rounded-lg">
        <Image src={searchIcon} alt="search icon" className="w-6 h-6" />
      </div>
    </div>
  );
};

export default Oneway;
