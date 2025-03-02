"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { airlines, flightTypeData, numberOfStopsData } from "@/data/data";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FlightSchedule from "./flight-schedule";

const CheckboxItem = ({ label, value, selectItems, setSelectItems }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={value}
        checked={selectItems.includes(value)}
        onCheckedChange={(checked) => {
          setSelectItems((prevState) => {
            if (checked) {
              return [...prevState, value];
            } else {
              return prevState.filter((item) => item !== value);
            }
          });
        }}
      />
      <label
        htmlFor={value}
        className={`text-xs ${
          selectItems.includes(value) ? "text-primary" : "text-black/50"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

const Filter = () => {
  const [priceRange, setPriceRange] = useState([5000]);
  const [selectAirlines, setSelectAirlines] = useState([]);
  const [flightTypes, setFlightTypes] = useState([]);
  const [numberOfStops, setNumberOfStops] = useState([]);


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

        <p className="pt-7 text-xs text-black/50">
          <span className="font-semibold text-black">Note:</span> Starts from 
          <span className="font-semibold text-black">
            ৳ 11,494 - ৳ 20,067 
          </span>{" "}
          against your search. Price is a subject to change.
        </p>
      </div>

      {/* flight schedules */}
      <FlightSchedule/>

      {/* Airlines */}
      <div className="pt-8">
        <p className="font-medium">Airlines</p>
        <div className="my-2.5 h-[1px] w-full bg-darkGray2/50"></div>

        <div className="space-y-3.5">
          {airlines.map((item) => (
            <CheckboxItem
              {...item}
              key={item.value}
              selectItems={selectAirlines}
              setSelectItems={setSelectAirlines}
            />
          ))}
        </div>
      </div>

      {/* refund */}
      <div className="pt-8">
        <p className="font-medium">Number Of Stops</p>
        <div className="my-2.5 h-[1px] w-full bg-darkGray2/50"></div>

        <Select>
          <SelectTrigger className="w-full shadow-none h-11">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="non-refundable">Non Refundable</SelectItem>
              <SelectItem value="refund">Refundable</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Flight type */}
      <div className="pt-8">
        <p className="font-medium">Flight Type</p>
        <div className="my-2.5 h-[1px] w-full bg-darkGray2/50"></div>

        <div className="space-y-3.5">
          {flightTypeData.map((item) => (
            <CheckboxItem
              key={item.value}
              {...item}
              selectItems={flightTypes}
              setSelectItems={setFlightTypes}
            />
          ))}
        </div>
      </div>

      {/* Number of stop */}
      <div className="pt-8">
        <p className="font-medium">Number Of Stops</p>
        <div className="my-2.5 h-[1px] w-full bg-darkGray2/50"></div>

        <div className="space-y-3.5">
          {numberOfStopsData.map((item) => (
            <CheckboxItem
              key={item.value}
              {...item}
              selectItems={numberOfStops}
              setSelectItems={setNumberOfStops}
            />
          ))}
        </div>
      </div>

      {/* baggage Policy */}
      <div className="pt-8">
        <p className="font-medium">Baggage Policy</p>
        <div className="my-2.5 h-[1px] w-full bg-darkGray2/50"></div>

        <Select>
          <SelectTrigger className="w-full shadow-none h-11">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="20">20 Kg</SelectItem>
              <SelectItem value="40">40 Kg</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Filter;
