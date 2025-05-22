import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SearchIcon from "../searchIcon";

const AddDestination = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4">
      <div className="w-full flex flex-col lg:flex-row items-center gap-4">
        <div className="hero-small-card flex flex-col justify-center">
          <h3 className="text-primary font-medium">Add Location</h3>
          {/* <input
             type="text"
             placeholder="Enter city or airport"
             className="w-full h-12 mt-2 border border-darkGray2/80 rounded-md px-4"/> */}
          <p className="truncate text-black text-xs">Destination</p>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <div className="hero-small-card flex flex-col justify-center cursor-pointer">
              <p>
                <span className="text-primary font-medium">
                  {date ? format(date, "dd LLLL") : null}{" "}
                </span>
              </p>

              <p className="text-black text-xs">
                {date ? format(date, "eeee, yyyy") : null}
              </p>
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <SearchIcon link="tour-package" searchText="Search Tour"/>
    </div>
  );
};

export default AddDestination;
