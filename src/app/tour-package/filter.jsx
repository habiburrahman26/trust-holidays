import { Button } from '@/components/ui/button';
import React from 'react';

const Filter = () => {
  return (
    <div className='col-span-3'>
      <div className='flex justify-between items-center'>
        <p>Filter</p>
        <Button size="sm" className="rounded">Reset</Button>
      </div>
    </div>
  );
};

export default Filter;
