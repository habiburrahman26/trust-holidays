"use client";
import { Button } from "@/components/ui/button";
import Filter from "./filter";
import paperPlane from "@/assets/icon/paper-plane.svg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import Airlines from "./airlines";
import FlightCard from "./flight-card";

const page = () => {
  const [activeTab, setActiveTab] = useState("cheapest");

  return (
    <section className="bg-background-secondary">
      <div className="section-container  flex justify-between bg-white py-3.5">
        <div>
          <p className="text-lg font-medium gap-[5px]">
            Dhaka (DAC) — Cox's Bazar (CXB)
          </p>
          <div className="text-xs text-black/50 flex items-center gap-3">
            <p>Round Trip</p>
            <p className="flex items-center gap-[5px]">
              <div className="size-1 bg-primary rounded-[1px]"></div>
              <span>21 Feb - 23 Feb</span>
            </p>
            <p className="flex items-center gap-[5px]">
              <div className="size-1 bg-primary rounded-[1px]"></div>
              <span>1 Traveler</span>
            </p>
            <p className="flex items-center gap-[5px]">
              <div className="size-1 bg-primary rounded-[1px]"></div>
              <span>Economy</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1.07141V28.9286H22.5C26.0614 28.9286 28.9286 26.0614 28.9286 22.5V7.49998C28.9286 3.93855 26.0614 1.07141 22.5 1.07141H15Z"
                fill="#FD983D"
              />
              <path
                d="M7.5 0C3.36354 0 0 3.36353 0 7.5V22.5C0 26.6365 3.36354 30 7.5 30H22.5C26.6365 30 30 26.6365 30 22.5V7.5C30 3.36353 26.6365 0 22.5 0H7.5ZM7.5 2.14286H22.5C25.4864 2.14286 27.8571 4.51361 27.8571 7.5V22.5C27.8571 25.4864 25.4864 27.8571 22.5 27.8571H7.5C4.51361 27.8571 2.14286 25.4864 2.14286 22.5V7.5C2.14286 4.51361 4.51361 2.14286 7.5 2.14286Z"
                fill="#1E1E1E"
              />
              <path
                d="M14.9992 7.5C14.715 7.5 14.4425 7.61288 14.2415 7.81381C14.0406 8.01475 13.9277 8.28727 13.9277 8.57143V14.9728C13.9277 15.133 13.9636 15.2912 14.0328 15.4357C14.1019 15.5802 14.2026 15.7073 14.3274 15.8078L19.6846 20.1207C19.7942 20.2089 19.9202 20.2747 20.0552 20.3142C20.1903 20.3538 20.3318 20.3663 20.4717 20.3512C20.6117 20.336 20.7472 20.2935 20.8707 20.2259C20.9941 20.1583 21.1031 20.0671 21.1913 19.9574C21.2795 19.8478 21.3453 19.7219 21.3848 19.5868C21.4244 19.4517 21.4369 19.3102 21.4218 19.1703C21.4066 19.0304 21.364 18.8948 21.2965 18.7713C21.2289 18.6479 21.1377 18.5389 21.028 18.4508L16.0706 14.4601V8.57143C16.0706 8.28727 15.9577 8.01475 15.7568 7.81381C15.5558 7.61288 15.2833 7.5 14.9992 7.5Z"
                fill="#1E1E1E"
              />
            </svg>

            <p className="text-black">Time Remaining</p>
          </div>
          <p className="text-2xl font-semibold text-black">15:29</p>
        </div>
        <Button size="lg" className="h-12 shadow-none text-white px-6">
          Modify Search
        </Button>
      </div>

      <div className="section-container  grid grid-cols-12 gap-10 py-10">
        <Filter />
        <div className="col-span-9">
          <div className="flex items-center justify-center gap-12">
            <Image src={paperPlane} alt="paper plane icon" />
            <div>
              <p className="font-medium text-black/50 pb-2.5">
                *Price Includes VAT & Tax{" "}
              </p>
              <p className="text-2xl 4xl:3xl font-medium">82 Available Flights</p>
            </div>
          </div>

          <Airlines/>

          <Tabs
            defaultValue="cheapest"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-3 p-0 mb-20">
              <TabsTrigger
                value="cheapest"
                className={`h-[70px] flex justify-between text-black data-[state=active]:shadow-none ${
                  activeTab === "cheapest"
                    ? "data-[state=active]:bg-primary data-[state=active]:text-white"
                    : "bg-white rounded-none rounded-tl-md rounded-bl-md"
                }`}
              >
                <p>Cheapest</p>
                <p className={`${activeTab === "cheapest" ? "text-white" : "text-black/50"}`}>10,819</p>
              </TabsTrigger>
              <TabsTrigger
                value="earliest"
                className={`h-[70px] flex justify-between text-black data-[state=active]:shadow-none ${
                  activeTab === "earliest"
                    ? "data-[state=active]:bg-primary data-[state=active]:text-white"
                    : "bg-white rounded-none"
                }`}
              >
                <p>Earliest</p>
                <p className={`${activeTab === "earliest" ? "text-white" : "text-black/50"}`}>07:15 AM</p>
              </TabsTrigger>
              <TabsTrigger
                value="fastest"
                className={`h-[70px] flex justify-between text-black data-[state=active]:shadow-none ${
                  activeTab === "fastest"
                    ? "data-[state=active]:bg-primary data-[state=active]:text-white"
                    : "bg-white rounded-none rounded-tr-md rounded-br-md"
                }`}
              >
                <p>Fastest</p>
                <p className={`${activeTab === "fastest" ? "text-white" : "text-black/50"}`}>2 Hr 5 Min</p>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex flex-col gap-5">
          <FlightCard bestDeal/>
          <FlightCard />
          <FlightCard yourOffer/>
          <FlightCard/>
          <FlightCard/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
