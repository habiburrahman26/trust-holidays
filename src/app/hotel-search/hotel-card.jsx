import hotelImage from "@/assets/images/hotel.png";
import { Star } from "lucide-react";
import Image from "next/image";
import locationIcon from "@/assets/icon/location.svg";
import { Separator } from "@/components/ui/separator";
import bedIcon from "@/assets/icon/hotel/bed.svg";
import tickIcon from "@/assets/icon/tickmark.svg";
import atmCardIcon from "@/assets/icon/atm-card.svg";
import Link from "next/link";

const HotelCard = () => {
  return (
    <div className="flex items-center gap-12 bg-white p-4 rounded-md">
      <div className="flex items-center gap-6">
        <div className="relative min-w-44 h-60 rounded-md overflow-hidden">
          <Image
            src={hotelImage}
            alt="hotel photo"
            fill
            className="object-cover w-full h-full"
          />
        </div>

        <div>
          <div className="flex items-center gap-2.5 pb-2">
            <h2 className="text-xl font-medium">Hotel Bay Marina</h2>
            <div className="flex gap-1.5">
              <Star className="fill-primary stroke-primary size-4" />
              <Star className="fill-primary stroke-primary size-4" />
              <Star className="fill-primary stroke-primary size-4" />
            </div>
          </div>
          <div className="text-xs text-black/50 flex items-center gap-[5px]">
            <p>Hotel</p>
            <div className="size-1 bg-primary rounded-[1px]"></div>
            <span>2.16 km</span>
            <Image
              src={locationIcon}
              alt="location icon"
              className="size-2.5"
            />
            <span>Cox’s Bazar, Bangladesh</span>
          </div>

          <div className="flex items-center flex-wrap gap-x-14 gap-y-3.5 pt-9">
            {Array.from({ length: 8 }).map((item) => (
              <div className="flex items-center gap-2.5">
                <div className="size-1 bg-primary rounded-[1px]"></div>
                <p className="text-black/50 text-sm">Bathtub</p>
              </div>
            ))}
          </div>

          <Separator className="my-2.5" />

          <div className="flex items-center gap-4">
            <Image src={bedIcon} alt="bed icon" className="" />
            <div>
              <h3 className="font-medium">Deluxe</h3>

              <div className="flex items-center gap-1.5 text-xs text-black/50">
                <span>Non Refundable</span>
                <div className="size-1 bg-primary rounded-[1px]"></div>
                <span>Room Only</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 min-w-52">
        <div >
          <div className="flex items-center gap-2.5 pt-5">
            <Image src={atmCardIcon} alt="atm card icon" />
            <p className="text-xs text-green">AMEXCARD25</p>
          </div>

          <p className="text-xs text-black/50 text-right pt-5 pb-1.5">Starts From</p>
          <p className="text-2xl font-medium text-black pb-1.5 text-right">৳ 10,118</p>
          <p className="text-sm font-medium text-black/50 text-right line-through pb-4">
            ৳ 10,118
          </p>
          <p className="text-xs text-black/50">Per Night / Room</p>
        </div>
        <Link
          href="#"
          className="bg-primary flex justify-center items-center h-60 w-[81px] rounded-md"
        >
          <Image src={tickIcon} alt="tick mark icon" className="size-9" />
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
