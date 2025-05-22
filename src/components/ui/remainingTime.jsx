import Image from "next/image";
import clockIcon from "@/assets/icon/clock.svg";
import { cn } from "@/lib/utils";

const RemainingTime = ({className}) => {
  return (
    <div className={cn("flex flex-row items-center gap-1 xl:gap-5", className)}>
      <div className="flex items-center gap-1 xl:gap-2.5">
        <Image src={clockIcon} alt="clock icon" className="size-4 sm:size-5 xl:size-7" />

        <p className="text-black">Time Remaining</p>
      </div>
      <p className="text-base xl:text-2xl font-semibold text-black">15:29</p>
    </div>
  );
};

export default RemainingTime;
