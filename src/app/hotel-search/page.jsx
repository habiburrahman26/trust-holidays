import { Button } from '@/components/ui/button';
import Image from 'next/image';
import FilterHotel from './filter';
import HotelCard from './hotel-card';
import buildingIcon from '@/assets/icon/hotel/building.svg';
import RemainingTime from '@/components/ui/remainingTime';
import { CircleX, FilterIcon, Pencil } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetClose,
} from '@/components/ui/sheet';

const page = () => {
  return (
    <section>
      <div className="section-container flex justify-between items-center bg-white py-1.5 xl:py-3.5">
        <div>
          <p className="text-base lg:text-lg font-medium">Cox's Bazar</p>
          <div className="text-xs text-black/50 flex items-center gap-1 xl:gap-3">
            <p>1 room</p>
            <div className="flex items-center gap-1 xl:gap-[5px]">
              <div className="size-1 bg-primary rounded-[1px]"></div>
              <span>21 Feb - 23 Feb</span>
            </div>
            <div className="flex items-center gap-1 xl:gap-[5px]">
              <div className="size-1 bg-primary rounded-[1px]"></div>
              <span>2 Guests</span>
            </div>
          </div>
        </div>

        <RemainingTime className="hidden lg:flex" />

        <Button
          size="lg"
          className="h-12 shadow-none text-white px-6 hidden lg:block"
        >
          Modify Search
        </Button>
        <Button className="block lg:hidden">
          <Pencil />
        </Button>
      </div>

      <RemainingTime className="flex justify-center lg:hidden bg-secondary py-1 mb-1 text-white" />

      <div className="section-container bg-background-secondary grid grid-cols-12 lg:gap-10 pt-4 pb-10 lg:py-10">
        <FilterHotel className="hidden lg:block lg:col-span-3" />

        <div className="col-span-12 lg:col-span-9">
          {/* mobile -> tab */}
          <div className="flex items-start justify-between lg:hidden">
            <p className="text-lg font-medium">52 Available Hotels</p>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="rounded-full">
                  <FilterIcon /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full p-0">
                <SheetHeader className="px-4 py-2">
                  <SheetClose asChild>
                    <CircleX size={24} />
                  </SheetClose>
                </SheetHeader>
                <FilterHotel className="h-[calc(100vh-60px)] overflow-y-auto px-4 pb-20" />
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}
          <div className="hidden lg:flex items-center justify-center gap-12">
            <Image src={buildingIcon} alt="building icon" />
            <div>
              <p className="text-sm md:text-base font-medium text-black/50 pb-2.5">
                *Price Includes VAT & Tax{' '}
              </p>
              <p className="text-2xl 4xl:3xl font-medium">
                52 Available Hotels
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 pt-4 lg:pt-8">
            <HotelCard />
            <HotelCard />
            <HotelCard />
            <HotelCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
