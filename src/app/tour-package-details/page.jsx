"use client";

// import { useSearchParams } from "next/navigation";
import Image from "next/image";
import ModifySearch from "../tour-package/modify-search";
import drizzel from "@/assets/images/drizzel.jpeg";
import calendarIcon from "@/assets/icon/calendar.svg";
import phoneIcon from "@/assets/icon/phone.svg";
import locationIcon from "@/assets/icon/location.svg";
import shareIcon from "@/assets/icon/share.svg";
import reviewStarIcon from "@/assets/icon/review-star.svg";
import buildingIcon from '@/assets/icon/building.svg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Suspense, useState } from "react";
import { tourAccordions } from "@/data/data";
import { Button } from "@/components/ui/button";

const page = () => {
  // const searchParams = useSearchParams();
  const [activeAccordions, setActiveAccordions] = useState([]);

  // const destination = searchParams.get("destination");
  // const destinationName = destination.split("-").join(" ");

  return (
    <section className="bg-background-secondary pb-20">
      <ModifySearch />

      <div className="section-container pb-10">
        <div className="relative h-[560px] rounded-lg overflow-hidden">
          <Image src={drizzel} alt="drizzel" fill objectFit="cover" />
        </div>

        <div className="grid grid-cols-5 gap-5 pt-10 px-10">
          <div className="col-span-3">
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                {/* <Suspense fallback={<p>loading...</p>}> */}
                <h1 className="text-4xl font-medium">Dazzling Dubai</h1>
                {/* </Suspense> */}
                <div className="flex items-center gap-2.5">
                  <Image
                    src={locationIcon}
                    alt="location icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-black/50 text-sm">
                    Dubai, United Arab Emirates
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Image
                    src={calendarIcon}
                    alt="location icon"
                    width={20}
                    height={20}
                  />
                  <span className="text-sm font-medium">3 day</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-black/50">Price Starts from</p>
                <h3 className="text-3xl font-medium text-black">BDT 9,900</h3>
                <p className="text-sm text-black/50">( Per Person )</p>
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
                      className={`py-3.5 text-sm ${
                        activeAccordions.includes(item.value)
                          ? "text-black font-medium"
                          : "font-normal text-black/50"
                      }`}
                    >
                      {item.label}
                    </AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-12 p-6 bg-[#FD983D26] rounded-md">
              <h3 className="text-xl font-medium text-primary pb-2.5">
                Choose Our Best Plans!
              </h3>
              <p className="text-black/50 font-normal pb-3.5">
                Plan your perfect getaway by customizing the itinerary exactly
                to your preferences. Also let us know about your thoughts and we
                will suggest you the best vacation.
              </p>

              <div className="flex items-center gap-1">
                <Image
                  src={locationIcon}
                  alt="location icon"
                  width={12}
                  height={12}
                />
                <span className="text-primary font-medium">
                  Office Location Link
                </span>
              </div>

              <div className="flex items-center gap-5 pt-8">
                <Button className="h-12 shadow-none">Go to Promotions</Button>
                <div className="flex items-center gap-1">
                  <Image src={phoneIcon} alt="phone icon" />
                  <span className="text-primary">+880 1711 88 40 80</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 space-y-12">
            <div className="p-6 bg-gray/10 rounded-md">
              <h3 className="text-xl font-medium text-black pb-2.5">
                Plan Holiday, Your Way!
              </h3>
              <p className="text-black/50 font-normal pb-3.5">
                Plan your perfect getaway by customizing the itinerary exactly
                to your preferences. Also let us know about your thoughts and we
                will suggest you the best vacation.
              </p>

              <div className="flex items-center gap-5 pt-8">
                <Button className="h-12 shadow-none bg-gray hover:bg-gray/90">
                  Go to Promotions
                </Button>
                <div className="flex items-center gap-1">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.27617 9.72416C8.58378 10.9373 10.3485 12.3146 11.867 10.8659C12.0647 10.6683 12.2993 10.5116 12.5575 10.4046C12.8157 10.2976 13.0925 10.2426 13.3719 10.2426C13.6514 10.2426 13.9282 10.2976 14.1864 10.4046C14.4446 10.5116 14.6792 10.6683 14.8768 10.8659C15.5405 11.5811 16.8034 12.4688 16.7181 13.5888C16.7321 13.8871 16.6839 14.185 16.5766 14.4637C16.4693 14.7424 16.3052 14.9957 16.0947 15.2075C12.305 18.6317 8.43607 15.6529 4.78592 12.2145C1.34696 8.56453 -1.63062 4.69496 1.79271 0.905569C2.00457 0.695087 2.2579 0.530975 2.5366 0.423661C2.81529 0.316346 3.11327 0.268175 3.41158 0.282209C4.53431 0.199636 5.41176 1.45226 6.13442 2.12351C6.33204 2.32114 6.48881 2.55575 6.59577 2.81396C6.70272 3.07217 6.75777 3.34892 6.75777 3.62841C6.75777 3.90789 6.70272 4.18464 6.59577 4.44285C6.48881 4.70106 6.33204 4.93568 6.13442 5.1333C4.68611 6.65308 6.06304 8.41541 7.27617 9.72416Z"
                      fill="#5E6175"
                    />
                  </svg>

                  <span className="text-gray font-medium">
                    +880 1711 88 40 80
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <svg
                    width="12"
                    height="16"
                    viewBox="0 0 12 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.51458 0C8.55986 0 11.0292 2.40991 11.0292 5.38195C11.0292 8.354 8.55986 12.1535 5.51458 15.6246C2.4693 12.1535 0 8.354 0 5.38195C0 2.40991 2.4693 0 5.51458 0Z"
                      fill="#5E6175"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.5154 7.57887C6.7548 7.57887 7.76419 6.5919 7.76419 5.38416C7.76419 4.17457 6.7529 3.18945 5.5154 3.18945C4.2779 3.18945 3.2666 4.17642 3.2666 5.38416C3.2647 6.5919 4.276 7.57887 5.5154 7.57887Z"
                      fill="white"
                    />
                  </svg>

                  <span className="text-gray font-medium">Google Map</span>
                </div>
              </div>
            </div>

            <div className="border-2 p-6 rounded-md relative">
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold uppercase text-primary">
                STANDARD
                </p>
                <div className="flex items-center gap-3.5">
                  <div className="flex items-center gap-1">
                    <Image
                      src={reviewStarIcon}
                      alt="calendar icon"
                      width={20}
                      height={20}
                    />
                    <span className="text-black/50 font-medium">1000</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={shareIcon}
                      alt="calendar icon"
                      width={20}
                      height={20}
                    />
                    <span className="text-black/50 font-medium">100</span>
                  </div>
                </div>
              </div>

              <div className="pt-3.5 grid grid-cols-3 gap-1">
                <div className="relative tour-content">
                  <p className="text-black/50 text-xs pb-1">Valid From</p>
                  <p className="text-sm text-black font-medium pb-3.5">
                    10 <span className="text-black/50 text-xs">Mar’25</span>
                  </p>
                  <p className="text-black/50 text-xs pb-1">
                    Price Per Person Single
                  </p>
                  <p className="text-xl text-black font-medium">No</p>
                </div>

                <div className="relative tour-content pl-6">
                  <p className="text-black/50 text-xs pb-1 text-center">
                    Valid Till
                  </p>
                  <p className="text-sm text-black font-medium pb-3.5 text-center">
                    10 <span className="text-black/50 text-xs">Mar’26</span>
                  </p>
                  <p className="text-black/50 text-xs pb-1">
                    Price Per Person Double
                  </p>
                  <p className="text-xl text-black font-medium">BDT 9,900</p>
                </div>

                <div className="pl-6">
                  <div className="flex items-end flex-col">
                    <p className="text-black/50 text-xs pb-1">Departs</p>
                    <p className="text-sm text-black font-medium pb-3.5">
                      Every Day
                    </p>
                  </div>
                  <p className="text-black/50 text-xs pb-1">
                    Price Per Person Twin
                  </p>
                  <p className="text-xl text-black font-medium">BDT 9,900</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-4">
                <Image src={buildingIcon} alt="building icon" className="size-5"/>
                <p className="text-xs text-black">Citymax Bur Dubai or Similar (Dubai)</p>
              </div>

              <p className="pt-5 text-xs text-black pb-4">*Price includes VAT & Tax</p>

              <button className="absolute left-0 -bottom-8 block w-full bg-primary py-3.5 rounded-md text-white  hover:bg-primary/80 transition-all">Book Now</button>
            </div>

            <div className="border-2 p-6 rounded-md relative">
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold uppercase text-primary">
                  SUPERIOR
                </p>
                <div className="flex items-center gap-3.5">
                  <div className="flex items-center gap-1">
                    <Image
                      src={reviewStarIcon}
                      alt="calendar icon"
                      width={20}
                      height={20}
                    />
                    <span className="text-black/50 font-medium">1000</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={shareIcon}
                      alt="calendar icon"
                      width={20}
                      height={20}
                    />
                    <span className="text-black/50 font-medium">100</span>
                  </div>
                </div>
              </div>

              <div className="pt-3.5 grid grid-cols-3 gap-1">
                <div className="relative tour-content">
                  <p className="text-black/50 text-xs pb-1">Valid From</p>
                  <p className="text-sm text-black font-medium pb-3.5">
                    10 <span className="text-black/50 text-xs">Mar’25</span>
                  </p>
                  <p className="text-black/50 text-xs pb-1">
                    Price Per Person Single
                  </p>
                  <p className="text-xl text-black font-medium">No</p>
                </div>

                <div className="relative tour-content pl-6">
                  <p className="text-black/50 text-xs pb-1 text-center">
                    Valid Till
                  </p>
                  <p className="text-sm text-black font-medium pb-3.5 text-center">
                    10 <span className="text-black/50 text-xs">Mar’26</span>
                  </p>
                  <p className="text-black/50 text-xs pb-1">
                    Price Per Person Double
                  </p>
                  <p className="text-xl text-black font-medium">BDT 9,900</p>
                </div>

                <div className="pl-6">
                  <div className="flex items-end flex-col">
                    <p className="text-black/50 text-xs pb-1">Departs</p>
                    <p className="text-sm text-black font-medium pb-3.5">
                      Every Day
                    </p>
                  </div>
                  <p className="text-black/50 text-xs pb-1">
                    Price Per Person Twin
                  </p>
                  <p className="text-xl text-black font-medium">BDT 9,900</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-4">
                <Image src={buildingIcon} alt="building icon" className="size-5"/>
                <p className="text-xs text-black">Citymax Bur Dubai or Similar (Dubai)</p>
              </div>

              <p className="pt-5 text-xs text-black pb-4">*Price includes VAT & Tax</p>

              <button className="absolute left-0 -bottom-8 block w-full bg-primary py-3.5 rounded-md text-white  hover:bg-primary/80 transition-all">Book Now</button>
            </div>

            <div className="border-2 p-6 rounded-md relative">
              <div className="flex items-center justify-between">
                <p className="text-xl font-semibold uppercase text-primary">
                DELUXE
                </p>
                <div className="flex items-center gap-3.5">
                  <div className="flex items-center gap-1">
                    <Image
                      src={reviewStarIcon}
                      alt="calendar icon"
                      width={20}
                      height={20}
                    />
                    <span className="text-black/50 font-medium">1000</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image
                      src={shareIcon}
                      alt="calendar icon"
                      width={20}
                      height={20}
                    />
                    <span className="text-black/50 font-medium">100</span>
                  </div>
                </div>
              </div>

              <div className="pt-3.5 grid grid-cols-3 gap-1">
                <div className="relative tour-content">
                  <p className="text-black/50 text-xs pb-1">Valid From</p>
                  <p className="text-sm text-black font-medium pb-3.5">
                    10 <span className="text-black/50 text-xs">Mar’25</span>
                  </p>
                  <p className="text-black/50 text-xs pb-1">
                    Price Per Person Single
                  </p>
                  <p className="text-xl text-black font-medium">No</p>
                </div>

                <div className="relative tour-content pl-6">
                  <p className="text-black/50 text-xs pb-1 text-center">
                    Valid Till
                  </p>
                  <p className="text-sm text-black font-medium pb-3.5 text-center">
                    10 <span className="text-black/50 text-xs">Mar’26</span>
                  </p>
                  <p className="text-black/50 text-xs pb-1">
                    Price Per Person Double
                  </p>
                  <p className="text-xl text-black font-medium">BDT 9,900</p>
                </div>

                <div className="pl-6">
                  <div className="flex items-end flex-col">
                    <p className="text-black/50 text-xs pb-1">Departs</p>
                    <p className="text-sm text-black font-medium pb-3.5">
                      Every Day
                    </p>
                  </div>
                  <p className="text-black/50 text-xs pb-1">
                    Price Per Person Twin
                  </p>
                  <p className="text-xl text-black font-medium">BDT 9,900</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-4">
                <Image src={buildingIcon} alt="building icon" className="size-5"/>
                <p className="text-xs text-black">Citymax Bur Dubai or Similar (Dubai)</p>
              </div>

              <p className="pt-5 text-xs text-black pb-4">*Price includes VAT & Tax</p>

              <button className="absolute left-0 -bottom-8 block w-full bg-primary py-3.5 rounded-md text-white hover:bg-primary/80 transition-all">Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
