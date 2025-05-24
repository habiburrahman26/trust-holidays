"use client";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CheckboxItem from "@/components/ui/checkbox-item";

const Filter = ({className}) => {
  const [priceRange, setPriceRange] = useState([5000]);
  const [selectedAirfare, setSelectedAirfare] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  return (
    <div className={className}>
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
      </div>

      {/* Filter Durations */}
      <div className="pt-8">
        <p className="font-medium">Filter Durations</p>
        <div className="mt-2.5 mb-3.5 h-[1px] w-full bg-darkGray2/50"></div>

        <Select>
          <SelectTrigger className="w-full shadow-none h-11">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="3">3 days</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Airfare */}
      <div className="pt-8">
        <p className="font-medium">Airfare</p>
        <div className="mt-2.5 mb-3.5 h-[1px] w-full bg-darkGray2/50"></div>

        <div className="space-y-3.5">
          {[
            { label: "With Air Fare", value: "with-air-fare" },
            { label: "Without Air Fare", value: "without-air-fare" },
          ].map((item) => (
            <CheckboxItem
              {...item}
              key={item.value}
              selectItems={selectedAirfare}
              setSelectItems={setSelectedAirfare}
            />
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="pt-8">
        <p className="font-medium">Airfare</p>
        <div className="mt-2.5 mb-3.5 h-[1px] w-full bg-darkGray2/50"></div>

        <div className="space-y-3.5">
          {[
            { label: "Long Drive", value: "long-drive" },
            { label: "Sightseeing", value: "sightseeing" },
            { label: "kid Friendly", value: "kid-friendly" },
          ].map((item) => (
            <CheckboxItem
              {...item}
              key={item.value}
              selectItems={selectedTags}
              setSelectItems={setSelectedTags}
            />
          ))}
        </div>
      </div>


      {/* <div className="flex items-center justify-center mt-16 bg-[#C4C4C4] h-[450px] rounded-lg text-3xl font-medium">
        Ads
      </div>

      <div className="flex items-center justify-center mt-12 bg-[#C4C4C4] h-[450px] rounded-lg text-3xl font-medium">
        Ads
      </div> */}
    </div>
  );
};

export default Filter;
