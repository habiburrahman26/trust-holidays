"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  facilitiesAndService,
  meals_plan,
  star_category,
} from "@/services/hotel";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import CheckboxItem from "@/components/ui/checkbox-item";

const FilterHotel = ({className}) => {
  const [priceRange, setPriceRange] = useState([5000]);
  const [starCategory, setStarCategory] = useState([]);
  const [selectMealsPlan, setSelectMealsPlan] = useState([]);
  const [facilities, setFacilities] = useState([]);

  const handleStar = (item) => {
    if (!starCategory.includes(item)) {
      setStarCategory((prevState) => [...prevState, item]);
    } else {
      setStarCategory((prevState) => prevState.filter((i) => i !== item));
    }
  };

  return (
    <div className={cn(className)}>
      <div className="flex justify-between items-center pb-6">
        <p className="font-sm text-black font-medium">Filter</p>
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

      <div className="pt-8">
        <p className="font-medium">Star Category</p>
        <div className="my-2.5 h-[1px] w-full bg-darkGray2/50"></div>

        <div className="space-y-3.5">
          {star_category.map((item) => (
            <div
              key={item.value}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleStar(item.value)}
            >
              <Star
                className={cn("size-4 fill-[#C8C5C6] stroke-none", {
                  "fill-primary ": starCategory.includes(
                    item.value
                  ),
                })}
              />
              <p
                className={cn("text-black/50 text-xs", {
                  "text-primary": starCategory.includes(item.value),
                })}
              >
                {item.value} star
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Meal Plans */}
      <div className="pt-8">
        <p className="font-medium">Meal Plans</p>
        <div className="my-2.5 h-[1px] w-full bg-darkGray2/50"></div>

        <div className="space-y-3.5">
          {meals_plan.map((item) => (
            <CheckboxItem
              {...item}
              key={item.value}
              selectItems={selectMealsPlan}
              setSelectItems={setSelectMealsPlan}
            />
          ))}
        </div>
      </div>

      {/* refund */}
      <div className="pt-8">
        <p className="font-medium">Refutability</p>
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

      {/* Facilities and Services */}
      <div className="pt-8">
        <p className="font-medium">Facilities and Services</p>
        <div className="my-2.5 h-[1px] w-full bg-darkGray2/50"></div>

        <div className="space-y-3.5">
          {facilitiesAndService.map((item) => (
            <CheckboxItem
              key={item.value}
              {...item}
              selectItems={facilities}
              setSelectItems={setFacilities}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterHotel;
