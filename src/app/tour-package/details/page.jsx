'use client';

// import { useSearchParams } from "next/navigation";
import { useState } from 'react';
import Image from 'next/image';
import { tourAccordions } from '@/data/data';
import ModifySearch from '../modify-search';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import Package from './package';
import drizzel from '@/assets/images/drizzel.jpeg';
import calendarIcon from '@/assets/icon/calendar.svg';
import locationIcon from '@/assets/icon/location.svg';
import LocationIcon from '@/components/ui/icon/location-icon';
import PhoneIcon from '@/components/ui/icon/phone-icon';

const page = () => {
  // const searchParams = useSearchParams();
  const [activeAccordions, setActiveAccordions] = useState([]);
  // const destination = searchParams.get("destination");
  // const destinationName = destination.split("-").join(" ");

  return (
    <section className="bg-background-secondary pb-10 lg:pb-20">
      <ModifySearch />

      <div className="section-container pb-10">
        <div className="relative h-44 sm:h-60 lg:h-[400px] 3xl:h-[560px] rounded-lg overflow-hidden">
          <Image src={drizzel} alt="drizzel" fill objectFit="cover" />
        </div>

        <div className="grid lg:grid-cols-4 2xl:grid-cols-5 gap-5 pt-5 lg:pt-10">
          <div className="lg:col-span-2 2xl:col-span-3">
            <div className="flex items-center justify-between">
              <div className="space-y-1 lg:space-y-4">
                {/* <Suspense fallback={<p>loading...</p>}> */}
                <h1 className="text-xl lg:text-2xl font-medium">
                  Dazzling Dubai
                </h1>
                {/* </Suspense> */}
                <div className="flex items-center gap-1 sm:gap-2.5">
                  <Image
                    src={locationIcon}
                    alt="location icon"
                    className="size-3 sm:size-4 lg:size-5"
                  />
                  <span className="text-xs sm:text-sm text-black/50 truncate">
                    Dubai, United Arab Emirates
                  </span>
                </div>

                <div className="flex items-center gap-1 sm:gap-2.5">
                  <Image
                    src={calendarIcon}
                    alt="location icon"
                    className="size-3 sm:size-4 lg:size-5"
                  />
                  <span className="text-sm font-medium">3 day</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-black/50">Price Starts from</p>
                <h3 className="text-xl lg:text-2xl font-medium text-black">
                  BDT 9,900
                </h3>
                <p className="text-xs md:text-sm text-black/50">
                  ( Per Person )
                </p>
              </div>
            </div>

            <div className="pt-7">
              <Accordion
                type="multiple"
                value={activeAccordions}
                onValueChange={setActiveAccordions}
                className="space-y-2.5"
              >
                {tourAccordions.map((item) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="border px-5 rounded"
                  >
                    <AccordionTrigger
                      className={`py-2 lg:py-3.5 text-xs lg:text-sm ${
                        activeAccordions.includes(item.value)
                          ? 'text-black font-medium'
                          : 'font-normal text-black/50'
                      }`}
                    >
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent className="text-xs lg:text-sm">
                      {item.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-5 lg:mt-12 p-2 lg:p-6 bg-[#FD983D26] rounded-md text-sm lg:text-15">
              <h3 className="text-15 lg:text-lg font-medium text-primary pb-2.5">
                Choose Our Best Plans!
              </h3>
              <p className="text-sm lg:text-15 text-black/50 font-normal pb-3.5">
                Plan your perfect getaway by customizing the itinerary exactly
                to your preferences. Also let us know about your thoughts and we
                will suggest you the best vacation.
              </p>

              <div className="flex items-center gap-1">
                <LocationIcon className="size-4 lg:size-5" />
                <span className="text-primary font-medium">
                  Office Location Link
                </span>
              </div>

              <div className="flex items-center gap-3 lg:gap-5 pt-3 lg:pt-5">
                <Button className="h-9 lg:h-12 shadow-none">
                  Go to Promotions
                </Button>
                <div className="flex items-center lg:gap-1">
                  <PhoneIcon />
                  <span className="text-xs lg:text-sm text-primary">
                    +880 1711 88 40 80
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 2xl:col-span-2 flex flex-col gap-10 lg:gap-5">
            <div className="order-last lg:order-first p-2 lg:p-6 bg-gray/10 rounded-md text-sm lg:text-15 ">
              <h3 className="text-15 lg:text-lg font-medium text-black pb-2.5">
                Plan Holiday, Your Way!
              </h3>
              <p className="text-sm lg:text-15 text-black/50 font-normal pb-3.5">
                Plan your perfect getaway by customizing the itinerary exactly
                to your preferences. Also let us know about your thoughts and we
                will suggest you the best vacation.
              </p>

              <div className="flex items-center gap-3 md:gap-5 pt-3 lg:pt-5">
                <Button className="h-10 shadow-none bg-[#5E6175] hover:bg-gray/90">
                  Go to Promotions
                </Button>
                <div className="flex items-center lg:gap-1">
                  <PhoneIcon fill="#5E6175" />
                  <span className="text-xs lg:text-sm text-gray font-medium">
                    +880 1711 88 40 80
                  </span>
                </div>
              </div>
            </div>

            <div className="order-1 space-y-9 lg:space-y-12">
              <Package name="STANDARD" />
              <Package name="SUPERIOR" />
              <Package name="DELUXE" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
