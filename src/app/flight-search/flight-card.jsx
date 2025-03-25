import Image from "next/image";
import usIcon from "@/assets/icon/flight/us.svg";
import giIcon from "@/assets/icon/flight/gi.svg";
import planeIcon from "@/assets/icon/plane.svg";
import tickIcon from "@/assets/icon/tickmark.svg";
import atmCardIcon from "@/assets/icon/atm-card.svg";
import paperPlaneIcon from "@/assets/icon/paper-plane.svg";
import diamondIcon from "@/assets/icon/diamond.svg";
import watchIcon from "@/assets/icon/watch.svg";
import reviewStarIcon from "@/assets/icon/review-star.svg";
import bestDealIcon from "@/assets/icon/flight/best-deal.svg";
import yourOfferIcon from "@/assets/icon/flight/your-offer.svg";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const FlightCard = ({ bestDeal, yourOffer }) => {
  return (
    <div>
      <div className="relative grid grid-cols-[1fr_auto] items-center gap-16 px-[45px]  py-[50px] bg-[#FFFCF9] rounded-tl-md rounded-tr-md">
        <div className="grid grid-cols-12 gap-7">
          <div className="col-span-4 flex gap-8">
            <div className="space-y-5">
              <div className="flex items-center justify-center  gap-2.5">
                <Image src={usIcon} alt="airlines icon" className="w-10" />

                <div>
                  <p className="text-xl text-black font-medium">DAC - CXB</p>
                  <p className="text-sm text-black/50 font-medium">Novoair</p>
                  <p className="text-xs text-black/50">1hr 5min</p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2.5 ">
                <Image src={giIcon} alt="airlines icon" className="w-10" />

                <div>
                  <p className="text-xl text-black font-medium">CXB - DAC</p>
                  <p className="text-sm text-black/50 font-medium">Novoair</p>
                  <p className="text-xs text-black/50">1hr 5min</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <Image src={planeIcon} alt="plane" className="size-4" />
              <div className="h-10 w-[1px] bg-darkGray2/50 my-4"></div>
              <Image
                src={planeIcon}
                alt="plane"
                className="size-4 -rotate-90"
              />
            </div>
          </div>

          <div className="col-span-8 space-y-5">
            <div className="flex items-center gap-7">
              <div className="basis-auto">
                <p className="text-black font-medium">08:00 PM</p>
                <p className="text-sm text-black/50 font-medium whitespace-nowrap">
                  23 Feb, Sunday
                </p>
                <p className="text-xs text-black/50 truncate">
                  Hazrat Shahjalal..
                </p>
              </div>

              <div className="basis-full">
                <div className="w-full flex items-center">
                  <div className="w-full h-[1px] border border-dashed border-darkGray2/50"></div>
                  <Image
                    src={paperPlaneIcon}
                    alt="paper plane icon"
                    className="size-7"
                  />
                </div>
                <p className="text-xs text-black/50 text-center -mt-3">
                  DAC - Non Stop
                </p>
              </div>

              <div className="basis-auto">
                <p className="text-black font-medium">09:50 PM</p>
                <p className="text-sm text-black/50 font-medium whitespace-nowrap">
                  23 Feb, Sunday
                </p>
                <p className="text-xs text-black/50 truncate">
                  Cox’s Bazer Air...
                </p>
              </div>
            </div>

            <div className="flex items-center gap-7">
              <div className="basis-auto">
                <p className="text-black font-medium">08:50 PM</p>
                <p className="text-sm text-black/50 font-medium whitespace-nowrap">
                  23 Feb, Sunday
                </p>
                <p className="text-xs text-black/50 truncate">
                  Cox’s Bazer Air..
                </p>
              </div>

              <div className="basis-full">
                <div className="w-full flex items-center">
                  <div className="w-full h-[1px] border border-dashed border-darkGray2/50"></div>
                  <Image
                    src={paperPlaneIcon}
                    alt="paper plane icon"
                    className="size-7"
                  />
                </div>
                <p className="text-xs text-black/50 text-center -mt-3">
                  DAC - Non Stop
                </p>
              </div>

              <div className="basis-auto">
                <p className="text-black font-medium">11:00 PM</p>
                <p className="text-sm text-black/50 font-medium whitespace-nowrap">
                  23 Feb, Sunday
                </p>
                <p className="text-xs text-black/50 truncate">
                  Hazrat Shahjalal..
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5">
          <div>
            <div className="flex items-center gap-2.5 pt-5">
              <Image src={atmCardIcon} alt="atm card icon" />
              <p className="text-xs text-green">AMEXCARD25</p>
            </div>

            <p className="text-2xl font-medium text-black pt-7 pb-1.5">
              ৳ 10,118
            </p>
            <p className="text-sm font-medium text-black/50 text-right line-through">
              ৳ 10,118
            </p>
          </div>
          <Link href="flight-booking" className="bg-primary flex justify-center items-center h-[174px] w-[81px] rounded-md">
            <Image src={tickIcon} alt="tick mark icon" className="size-9" />
          </Link>
        </div>

        {(bestDeal || yourOffer) && (
          <div className="absolute top-4 -left-3">
            <Image src={bestDeal ? bestDealIcon : yourOfferIcon} alt="best deal" />
            <p className="text-sm text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {bestDeal ? 'Best Deal' : 'Your Offer'}
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-6 px-[45px] py-6 bg-white rounded-bl-md rounded-br-md">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5">
            <Image src={diamondIcon} alt="diamond icon" className="size-6" />
            <p className="text-[#ABC32F]">Partially Refundable</p>
          </div>

          <div className="flex items-center gap-2.5">
            <Image src={watchIcon} alt="watch icon" className="size-5" />
            <p className="text-red">Partially Refundable</p>
          </div>

          <div className="flex items-center gap-2.5">
            <Image
              src={reviewStarIcon}
              alt="review star icon"
              className="size-[22px]"
            />
            <p className="text-primary">1000</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 cursor-pointer">
          <p className="text-sm text-primary font-medium">View Details</p>
          <ChevronDown className="text-primary" />
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
