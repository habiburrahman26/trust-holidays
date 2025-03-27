import { Button } from "@/components/ui/button";
import clockIcon from "@/assets/icon/clock.svg";
import Image from "next/image";
import FilterHotel from "./filter";
import HotelCard from "./hotel-card";
import buildingIcon from "@/assets/icon/hotel/building.svg"

const page = () => {
  return (
    <section className="bg-background-secondary">
      <div className="section-container  flex justify-between bg-white py-3.5">
        <div>
          <p className="text-lg font-medium gap-[5px]">Cox's Bazar</p>
          <div className="text-xs text-black/50 flex items-center gap-3">
            <p>1 room</p>
            <div className="flex items-center gap-[5px]">
              <div className="size-1 bg-primary rounded-[1px]"></div>
              <span>21 Feb - 23 Feb</span>
            </div>
            <div className="flex items-center gap-[5px]">
              <div className="size-1 bg-primary rounded-[1px]"></div>
              <span>2 Guests</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5">
            <Image src={clockIcon} alt="clock icon" className="size-7" />

            <p className="text-black">Time Remaining</p>
          </div>
          <p className="text-2xl font-semibold text-black">15:29</p>
        </div>
        <Button size="lg" className="h-12 shadow-none text-white px-6">
          Modify Search
        </Button>
      </div>

      <div className="section-container  grid grid-cols-12 gap-10 py-10">
        <FilterHotel/>

        <div className="col-span-9">
          <div className="flex items-center justify-center gap-12">
            <Image src={buildingIcon} alt="building icon" />
            <div>
              <p className="font-medium text-black/50 pb-2.5">
                *Price Includes VAT & Tax{" "}
              </p>
              <p className="text-2xl 4xl:3xl font-medium">52 Available Hotels</p>
            </div>
          </div>

          <div className="flex flex-col gap-5 pt-8">
           <HotelCard/>
           <HotelCard/>
           <HotelCard/>
           <HotelCard/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
