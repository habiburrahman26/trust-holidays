import { useState } from "react";
import { Button } from "@/components/ui/button";
import moonIcon from "@/assets/icon/flight/moon.svg";
import moonActiveIcon from "@/assets/icon/flight/moon-active.svg";
import morningSunIcon from "@/assets/icon/flight/morinig-sun.svg";
import morningSunActiveIcon from "@/assets/icon/flight/morning-sun-active.svg";
import midSunIcon from "@/assets/icon/flight/mid-sun.svg";
import midSunActiveIcon from "@/assets/icon/flight/mid-sun-active.svg";
import Image from "next/image";

const schedules = [
  {
    label: "00-06 AM",
    activeIcon: morningSunActiveIcon,
    inactiveIcon: morningSunIcon,
  },
  {
    label: "06-12 AM",
    activeIcon: morningSunActiveIcon,
    inactiveIcon: morningSunIcon,
  },
  {
    label: "12-06 AM",
    activeIcon: midSunActiveIcon,
    inactiveIcon: midSunIcon,
  },
  {
    label: "06-12 PM",
    activeIcon: moonActiveIcon,
    inactiveIcon: moonIcon,
  },
];

const Card = ({  schedules, activeItem, setActiveItem}) => {
 return (
    <div className="flex items-center gap-1.5 pt-3.5">
            {schedules.map((item) => (
              <button
                onClick={() => setActiveItem(item.label)}
                key={item.label}
                className={`flex flex-col items-center justify-center gap-1.5 px-2 py-2.5 bg-[#F1F1F4] rounded border ${
                    activeItem === item.label
                    ? "border-black"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={
                    activeItem === item.label
                      ? item.activeIcon
                      : item.inactiveIcon
                  }

                  alt="flight schedule icon"
                />

                <p
                  className={`text-[10px] font-medium ${
                    activeItem === item.label
                      ? "text-black"
                      : "text-[#8E8E90]"
                  }`}
                >
                  {item.label}
                </p>
              </button>
            ))}
          </div>
 )
};

const FlightSchedule = () => {
  const [activeSchedule, setActiveSchedule] = useState("departure");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleScheduleChange = (value) => {
    setActiveSchedule(value);
  };

  const handleSelectedItem = (value) => {
    setSelectedItem(value);
  };

  return (
    <div>
      <div className="pt-8">
        <p className="font-medium">Flight Schedules</p>
        <div className="my-2.5 h-[1px] w-full bg-darkGray2/50"></div>

        <div>
          <Button
            variant={activeSchedule === "departure" ? "default" : "secondary"}
            size="lg"
            className={`shadow-none mr-3 h-10 rounded ${
              activeSchedule === "departure"
                ? ""
                : "text-black/50 bg-lightGray hover:bg-lightGray/50"
            } `}
            onClick={() => handleScheduleChange("departure")}
          >
            Departure
          </Button>
          <Button
            variant={activeSchedule === "arrival" ? "default" : "secondary"}
            size="lg"
            className={`shadow-none h-10 rounded ${
              activeSchedule === "arrival"
                ? ""
                : "text-black/50 bg-lightGray hover:bg-lightGray/50"
            } `}
            onClick={() => handleScheduleChange("arrival")}
          >
            Arrival
          </Button>
        </div>

        <div className="pt-5">
          <p className="text-sm font-medium text-black">
            Departure Dhaka: Anytime
          </p>

          <Card schedules={schedules} activeItem={from} setActiveItem={setFrom}/>
        </div>

        <div className="pt-5">
          <p className="text-sm font-medium text-black">
            Departure Cox's Bazar: Anytime
          </p>

          <Card schedules={schedules} activeItem={to} setActiveItem={setTo}/>
        </div>
      </div>
    </div>
  );
};

export default FlightSchedule;
