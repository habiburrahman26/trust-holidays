"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import Image from "next/image";
import { format, addDays } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import searchIcon from "@/assets/icon/search.svg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const SEARCHFOR = [
  {
    label: "Business",
    value: "business",
  },
  {
    label: "Couples",
    value: "couples",
  },
  {
    label: "Families",
    value: "families",
  },
  {
    label: "Friends",
    value: "friends",
  },
  {
    label: "Solo",
    value: "solo",
  },
];

export const Hotel = () => {
  const [selectedSearch, setSelectedSearch] = useState();
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(addDays(new Date(), 1));

  return (
    <div>
      <div className="flex items-center gap-5">
        <p className="text-sm font-medium">Search For</p>

        <RadioGroup
          defaultValue={selectedSearch}
          onValueChange={(value) => setSelectedSearch(value)}
          className="flex items-center gap-3.5"
        >
          {SEARCHFOR.map((item) => (
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value={item.value}
                id={item.value}
                className={`shadow-none ${
                  selectedSearch === item.value
                    ? "border-primary"
                    : " border-darkGray2"
                }`}
              />
              <Label
                htmlFor={item.value}
                className={`${
                  selectedSearch === item.value
                    ? "text-primary"
                    : "text-darkGray2"
                } text-sm`}
              >
                {item.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="pt-6 grid grid-cols-[2.1fr_1fr_1fr_auto] gap-4">
        <div className="relative w-full grid grid-cols-2 items-center gap-4">
          <div className="hero-small-card">
            <p className="text-black text-xs">City/Hotel/Resort/Area</p>
            <h3 className="text-primary font-medium">Cox’s Bazer</h3>
            {/* <input
             type="text"
             placeholder="Enter city or airport"
             className="w-full h-12 mt-2 border border-darkGray2/80 rounded-md px-4"/> */}
            <p className="truncate text-black text-xs">Bangladesh</p>
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <div className="hero-small-card cursor-pointer">
                <p className="text-black text-xs">Check In</p>
                <p>
                  <span className="text-primary font-medium">
                    {checkIn ? format(checkIn, "dd") : null}{" "}
                  </span>
                  <span className="text-sm">
                    {checkIn ? format(checkIn, "LLL") : null},{" "}
                    {checkIn ? format(checkIn, "yy") : null}
                  </span>
                </p>

                <p className="text-black text-xs">
                  {checkIn ? format(checkIn, "eeee") : null}
                </p>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <div className="hero-small-card cursor-pointer">
              <p className="text-black text-xs">Check Out</p>
              <p>
                <span className="text-primary font-medium">
                  {checkOut ? format(checkOut, "dd") : null}{" "}
                </span>
                <span className="text-sm">
                  {checkOut ? format(checkOut, "LLL") : null},{" "}
                  {checkOut ? format(checkOut, "yy") : null}
                </span>
              </p>

              <p className="text-black text-xs">
                {checkOut ? format(checkOut, "eeee") : null}
              </p>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={checkOut}
              onSelect={setCheckOut}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <div className="hero-small-card">
          <p className="text-black text-xs">Room & Guests</p>
          <h3 className="text-sm">
            <span className="text-primary font-medium text-base">1</span> room,{" "}
            <span className="text-primary font-medium text-base">2</span> guest
          </h3>
          {/* <input
             type="text"
             placeholder="Enter city or airport"
             className="w-full h-12 mt-2 border border-darkGray2/80 rounded-md px-4"/> */}
          <p className="truncate text-black text-xs">2 Adults</p>
        </div>

        <div className="w-[81px] h-[77px] flex items-center justify-center p-6 rounded-lg bg-primary ">
          <Image src={searchIcon} alt="search icon" className="size-8" />
        </div>
      </div>
    </div>
  );
};
