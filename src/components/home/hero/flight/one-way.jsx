import { useState } from "react";
import Image from "next/image";
import locationChangeIcon from "@/assets/icon/location-change.svg";
import searchIcon from "@/assets/icon/search.svg";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Oneway = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="pt-6 grid grid-cols-[2.1fr_1fr_1fr_auto] gap-4">
      <div className="relative w-full grid grid-cols-2 items-center gap-4">
        <div className="hero-small-card">
          <p className="text-black text-xs">From</p>
          <h3 className="text-primary font-medium">Dhaka</h3>
          {/* <input
        type="text"
        placeholder="Enter city or airport"
        className="w-full h-12 mt-2 border border-darkGray2/80 rounded-md px-4"/> */}
          <p className="truncate text-black text-xs">
            Hazrat Shahjalal International Airport, Bangladesh
          </p>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 size-8 bg-white flex items-center justify-center z-10">
          <Image
            src={locationChangeIcon}
            alt="location change image"
            className="size-6"
          />
        </div>

        <div className="hero-small-card">
          <p className="text-black text-xs">To</p>
          <h3 className="text-primary font-medium">Cox’s Bazar</h3>
          {/* <input
        type="text"
        placeholder="Enter city or airport"
        className="w-full h-12 mt-2 border border-darkGray2/80 rounded-md px-4"/> */}
          <p className="truncate text-black text-xs">
            Cox's Bazar Airport, Bangladesh
          </p>
        </div>
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <div className="hero-small-card cursor-pointer">
            <p className="text-black text-xs">Journey Date</p>
            <p>
              <span className="text-primary font-medium">
                {date ? format(date, "dd") : null}{" "}
              </span>
              <span className="text-sm">
                {date ? format(date, "LLL") : null},{" "}
                {date ? format(date, "yy") : null}
              </span>
            </p>

            <p className="text-black text-xs">
              {date ? format(date, "eeee") : null}
            </p>
          </div>
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

      <div className="hero-small-card">
        <p className="text-black text-xs">Select your Ticket class</p>
        <h3 className="text-primary font-medium">1 Traveler</h3>
        {/* <input
        type="text"
        placeholder="Enter city or airport"
        className="w-full h-12 mt-2 border border-darkGray2/80 rounded-md px-4"/> */}
        <p className="truncate text-black text-xs">Economy Class</p>
      </div>

      <div className="w-[81px] h-[77px] bg-primary flex items-center justify-center p-6 rounded-lg">
        <Image src={searchIcon} alt="search icon" className="size-8" />
      </div>
    </div>
  );
};

export default Oneway;
