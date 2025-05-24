'use client'
import Image from 'next/image';
import reviewStarIcon from "@/assets/icon/review-star.svg";
import buildingIcon from "@/assets/icon/building.svg";
import shareIcon from "@/assets/icon/share.svg";
import { useState } from 'react';
import Sidebar from './Sidebar';


const Package = ({name}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
    <div className="border-2 p-2 md:p-6 rounded-md relative">
      <div className="flex items-center justify-between">
        <p className="text-lg md:text-xl font-medium text-primary uppercase">{name}</p>
        <div className="flex items-center gap-3.5">
          <div className="flex items-center gap-1">
            <Image
              src={reviewStarIcon}
              alt="calendar icon"
              className='size-4 md:size-5'
            />
            <span className="text-xs md:text-15 text-black/50 font-medium">1000</span>
          </div>
          <div className="flex items-center gap-1">
            <Image src={shareIcon} alt="calendar icon" className='size-4 md:size-5'/>
            <span className="text-xs md:text-15 text-black/50 font-medium">100</span>
          </div>
        </div>
      </div>

      <div className="pt-3.5 grid grid-cols-3 gap-1">
        <div className="relative tour-content">
          <p className="text-black/50 text-xs pb-1">Valid From</p>
          <p className="text-sm text-black font-medium pb-3.5">
            10 <span className="text-black/50 text-xs">Mar’25</span>
          </p>
          <p className="text-black/50 text-xs pb-1">Price Per Person Single</p>
          <p className="text-base md:text-xl text-black font-medium">No</p>
        </div>

        <div className="relative tour-content text-center lg:text-start md:pl-5 md:-mr-4">
          <p className="text-black/50 text-xs pb-1 text-center">Valid Till</p>
          <p className="text-sm text-black font-medium pb-3.5 text-center">
            10 <span className="text-black/50 text-xs">Mar’26</span>
          </p>
          <p className="text-black/50 text-xs pb-1">Price Per Person Double</p>
          <p className="text-base md:text-xl text-black font-medium">BDT 9,900</p>
        </div>

        <div className="text-right md:pl-5">
          <div className="flex items-end flex-col">
            <p className="text-black/50 text-xs pb-1">Departs</p>
            <p className="text-sm text-black font-medium pb-3.5">Every Day</p>
          </div>
          <p className="text-black/50 text-xs pb-1">Price Per Person Twin</p>
          <p className="text-base md:text-xl text-black font-medium">BDT 9,900</p>
        </div>
      </div>

      <div className="flex items-center gap-2.5 pt-4">
        <Image src={buildingIcon} alt="building icon" className="size-5" />
        <p className="text-xs text-black">
          Citymax Bur Dubai or Similar (Dubai)
        </p>
      </div>

      <p className="pt-5 text-xs text-black pb-4">*Price includes VAT & Tax</p>

      <button
        onClick={() => setOpen(true)}
        className="absolute left-0 -bottom-5 md:-bottom-8 block w-full bg-primary py-1.5 md:py-2.5 lg:py-3.5 rounded-md text-white  hover:bg-primary/80 transition-all"
      >
        Book Now
      </button>
    </div>
    <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Package;
