'use client';
import { Button } from '@/components/ui/button';
import Filter from './filter';
import paperPlane from '@/assets/icon/paper-plane.svg';
import Image from 'next/image';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import Airlines from './airlines';
import FlightCard from './flight-card';
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
  const [activeTab, setActiveTab] = useState('cheapest');

  return (
    <section>
      <div className="section-container  flex justify-between bg-white py-3.5">
        <div>
          {/* mobile ->tab */}
          <p className="block lg:hidden text-lg font-medium">DAC — CXB</p>

          {/* desktop */}
          <p className="hidden lg:block text-lg font-medium">
            Dhaka (DAC) — Cox's Bazar (CXB)
          </p>

          <div className="text-xs text-black/50 flex items-center gap-2 lg:gap-3">
            <p className="hidden lg:block">Round Trip</p>
            <div className="flex items-center gap-[5px]">
              <div className="size-1 bg-primary rounded-[1px]"></div>
              <span>21 Feb - 23 Feb</span>
            </div>
            <div className="flex items-center gap-[5px]">
              <div className="size-1 bg-primary rounded-[1px]"></div>
              <span>1 Traveler</span>
            </div>
            <div className="hidden lg:flex items-center gap-[5px]">
              <div className="size-1 bg-primary rounded-[1px]"></div>
              <span>Economy</span>
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

      {/* mobile -> tab */}
      <RemainingTime className="flex justify-center lg:hidden bg-secondary py-1 mb-1 text-white" />

      <div className="section-container bg-background-secondary grid grid-cols-12 lg:gap-10 py-10">
        <Filter className="hidden lg:block lg:col-span-3" />

        <div className="col-span-12 lg:col-span-9">
          {/* mobile -> tab */}
          <div className="flex items-start justify-between lg:hidden pb-4">
            <p className="text-lg font-medium">52 Available Flights</p>
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
                <Filter className="h-[calc(100vh-60px)] overflow-y-auto px-4 pb-20" />
              </SheetContent>
            </Sheet>
          </div>

          {/* desktop */}
          <div className="hidden lg:flex items-center justify-center gap-12">
            <Image src={paperPlane} alt="paper plane icon" />
            <div>
              <p className="font-medium text-black/50 pb-2.5">
                *Price Includes VAT & Tax{' '}
              </p>
              <p className="text-2xl 4xl:3xl font-medium">
                82 Available Flights
              </p>
            </div>
          </div>

          {/* <Airlines /> */}

          <Tabs
            defaultValue="cheapest"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-3 p-0 mb-5 lg:mb-20">
              <TabsTrigger
                value="cheapest"
                className={`h-11 lg:h-[70px] flex flex-col lg:flex-row justify-between text-black data-[state=active]:shadow-none text-xs lg:text-sm ${
                  activeTab === 'cheapest'
                    ? 'data-[state=active]:bg-primary data-[state=active]:text-white'
                    : 'bg-white rounded-none rounded-tl-md rounded-bl-md'
                }`}
              >
                <p>Cheapest</p>
                <p
                  className={`${
                    activeTab === 'cheapest' ? 'text-white' : 'text-black/50'
                  }`}
                >
                  10,819
                </p>
              </TabsTrigger>
              <TabsTrigger
                value="earliest"
                className={`h-11 lg:h-[70px] flex flex-col lg:flex-row justify-between text-black data-[state=active]:shadow-none text-xs lg:text-sm ${
                  activeTab === 'earliest'
                    ? 'data-[state=active]:bg-primary data-[state=active]:text-white'
                    : 'bg-white rounded-none'
                }`}
              >
                <p>Earliest</p>
                <p
                  className={`${
                    activeTab === 'earliest' ? 'text-white' : 'text-black/50'
                  }`}
                >
                  07:15 AM
                </p>
              </TabsTrigger>
              <TabsTrigger
                value="fastest"
                className={`h-11 lg:h-[70px] flex flex-col lg:flex-row justify-between text-black data-[state=active]:shadow-none text-xs lg:text-sm ${
                  activeTab === 'fastest'
                    ? 'data-[state=active]:bg-primary data-[state=active]:text-white'
                    : 'bg-white rounded-none rounded-tr-md rounded-br-md'
                }`}
              >
                <p>Fastest</p>
                <p
                  className={`${
                    activeTab === 'fastest' ? 'text-white' : 'text-black/50'
                  }`}
                >
                  2 Hr 5 Min
                </p>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-col gap-5">
            <FlightCard bestDeal />
            <FlightCard />
            <FlightCard yourOffer />
            <FlightCard />
            <FlightCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
