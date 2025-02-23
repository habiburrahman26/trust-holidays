'use client';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

const Filter = () => {
  const [priceRange, setPriceRange] = useState([5000]);

  return (
    <div className="col-span-3">
      <div className="flex justify-between items-center pb-6">
        <p className="font-sm text-black/50">Filter</p>
        <Button size="sm" className="rounded shadow-none bg-primaryLight">
          Reset
        </Button>
      </div>

      {/* price range */}
      <div>
        <p className="font-medium text-black">Price Range</p>
        <div className="my-2.5 h-[1px] w-full bg-darkGray2/50"></div>
        <div className="flex items-center justify-between gap-2">
          <p className="flex flex-col gap-2.5">
            <span className="text-xs text-black/50">Minimum Price</span>
            <span className="font-medium">9000</span>
          </p>
          <p className="flex flex-col gap-2.5">
            <span className="text-xs text-black/50">Maximum Price</span>
            <span className="font-medium">190000</span>
          </p>
        </div>

        <Slider
          defaultValue={priceRange}
          onValueChange={setPriceRange}
          max={100}
          step={1}
          className="w-full mt-5"
        />
      </div>
    </div>
  );
};

export default Filter;
