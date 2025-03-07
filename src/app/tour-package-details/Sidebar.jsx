import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import crossIcon from "@/assets/icon/cross.svg";
import calenderIcon from '@/assets/icon/calendar-light.svg'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import buildingIcon from "@/assets/icon/building-light.svg";
import peopleIcon from "@/assets/icon/people.svg";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { CalendarDays } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import SelectBox from "@/components/ui/select-box";
import { Checkbox } from "@/components/ui/checkbox";
import LoginModal from "@/components/ui/login-modal";

const Sidebar = ({ open, setOpen }) => {
  const [date, setDate] = useState(new Date());
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
   <>
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="sm:max-w-lg overflow-y-auto">
        <SheetHeader className="border-b pb-5">
          <SheetTitle className="text-3xl font-medium flex items-center gap-6">
            <button onClick={() => setOpen(false)}>
              <Image src={crossIcon} alt="cross icon" width={20} height={20} />
            </button>
            <span>Reserve</span>
          </SheetTitle>
        </SheetHeader>
        <div className="pt-7 pb-8 flex items-center gap-6">
        <Image src={calenderIcon} alt="building icon" className="size-6" />
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full block h-12 justify-start text-left font-normal 4xl:text-lg shadow-none",
                  !date && "text-muted-foreground"
                )}
              >
                {/* <CalendarIcon /> */}
                {date ? (
                  <p className="flex justify-between items-center">
                    <span>{format(date, "d LLL, y")}</span>
                    <span className="text-xs font-normal">
                      {format(date, "EEEE")}
                    </span>
                  </p>
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="pb-8">
          <h3 className="pb-8 text-2xl">Number of Rooms:</h3>

          <div className="flex items-center gap-6 pb-4">
            <Image src={buildingIcon} alt="building icon" className="size-6" />
            <SelectBox
              data={[
                { label: "1", value: 1 },
                { label: "2", value: 2 },
                { label: "3", value: 3 },
              ]}
              placeholder="Total Double Room"
              className="h-12"
            />
          </div>

          <div className="flex items-center gap-6">
            <Image src={buildingIcon} alt="building icon" className="size-6" />
            <SelectBox
              data={[
                { label: "1", value: 1 },
                { label: "2", value: 2 },
                { label: "3", value: 3 },
              ]}
              placeholder="Total Twin Room"
              className="h-12"
            />
          </div>
        </div>

        <div>
          <h3 className="pb-8 text-2xl">Number of Rooms:</h3>

          <div className="flex items-center gap-6 pb-6">
            <Image src={peopleIcon} alt="building icon" className="size-6" />
            <div className="w-full space-y-4">
              <SelectBox
                data={[
                  { label: "1", value: 1 },
                  { label: "2", value: 2 },
                  { label: "3", value: 3 },
                ]}
                placeholder="Number of Adults"
                className="h-12"
              />
              <SelectBox
                data={[
                  { label: "1", value: 1 },
                  { label: "2", value: 2 },
                  { label: "3", value: 3 },
                ]}
                placeholder="Number of Child (7-12)"
                className="h-12"
              />
            </div>
          </div>

          <div className="flex items-center gap-6 pt-5">
            <Image src={peopleIcon} alt="building icon" className="size-6" />
            <div className="w-full space-y-4">
              <SelectBox
                data={[
                  { label: "1", value: 1 },
                  { label: "2", value: 2 },
                  { label: "3", value: 3 },
                ]}
                placeholder="Number of Child (3-6)"
                className="h-12"
              />
              <SelectBox
                data={[
                  { label: "1", value: 1 },
                  { label: "2", value: 2 },
                  { label: "3", value: 3 },
                ]}
                placeholder="Number of infant"
                className="h-12"
              />
            </div>
          </div>

          <div className="py-8">
            <h3 className="text-2xl font-medium pb-5">Arrival Details</h3>
            <p className="font-medium text-base pb-2">00:12</p>
            <p className="text-xs text-black/50">Arrival Time</p>
          </div>

          <div className="pb-8">
            <h3 className="text-2xl font-medium pb-5">Departure Details</h3>
            <div className="flex justify-between items-center gap-4">
              <div>
                <p className="font-medium text-base pb-2">00:12</p>
                <p className="text-xs text-black/50">Departure Time</p>
              </div>

              <div>
                <p className="font-medium text-base pb-2">00:12</p>
                <p className="text-xs text-black/50">Pickup Time</p>
              </div>
            </div>
          </div>

          <div className="pb-8">
            <h3 className="text-2xl font-medium pb-5">Special Notes</h3>
            <textarea
              rows={4}
              className="px-3 py-1 border rounded-md w-full placeholder:text-sm placeholder:text-black/50"
              placeholder="Write any special request"
            ></textarea>
          </div>

          <div className="p-6 bg-gray/10 rounded-md">
            <h3 className="text-xl font-medium text-black pb-2.5">
              Plan Holiday, Your Way!
            </h3>
            <p className="text-black/50 font-normal pb-3.5">
              Plan your perfect getaway by customizing the itinerary exactly to
              your preferences. Also let us know about your thoughts and we will
              suggest you the best vacation.
            </p>

            <div className="flex items-center gap-5 pt-8">
              <Button className="h-12 shadow-none bg-[#5E6175] hover:bg-gray/90">
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
            </div>
          </div>

          <div className="flex items-center space-x-2 pt-8 pb-10">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm text-black/50 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I have read and accept the <span className="underline text-black">terms and conditions</span>.
            </label>
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
          <Button onClick={()=>setIsLoggedin(true)} className="block w-full h-14">Proceed to Checkout</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    <LoginModal show={isLoggedin} setShow={setIsLoggedin}/>
    </>
  );
};

export default Sidebar;
