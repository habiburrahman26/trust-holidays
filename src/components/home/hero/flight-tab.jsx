import { Checkbox } from '@/components/ui/checkbox';
import React from 'react';

const FlightTab = () => {
  return (
    <div className="">
      {/* checkbox */}
      <div className='flex items-center gap-4'>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox id="two" />
          <label
            htmlFor="two"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>

      </div>
    </div>
  );
};

export default FlightTab;
