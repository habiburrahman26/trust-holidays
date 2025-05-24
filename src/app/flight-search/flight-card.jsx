import Image from 'next/image';
import tickIcon from '@/assets/icon/tickmark.svg';
import atmCardIcon from '@/assets/icon/atm-card.svg';
import paperPlaneIcon from '@/assets/icon/paper-plane.svg';
import diamondIcon from '@/assets/icon/diamond.svg';
import watchIcon from '@/assets/icon/watch.svg';
import reviewStarIcon from '@/assets/icon/review-star.svg';
import bestDealIcon from '@/assets/icon/flight/best-deal.svg';
import yourOfferIcon from '@/assets/icon/flight/your-offer.svg';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import FlightRoute from './flight-route';

const FlightCard = ({ bestDeal, yourOffer }) => {
  return (
    <div>
      {/* Mobile */}
      <div className="flex lg:hidden flex-wrap items-center justify-between gap-2 px-2 py-2 bg-white rounded-tl-md rounded-tr-md">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5">
            <Image src={diamondIcon} alt="diamond icon" className="size-4" />
            <p className="text-[10px] sm:text-xs text-[#ABC32F]">Partially Refundable</p>
          </div>

          <div className="flex items-center gap-2.5">
            <Image src={watchIcon} alt="watch icon" className="size-3" />
            <p className="text-[10px] sm:text-xs text-red">Partially Refundable</p>
          </div>

          <div className="flex items-center gap-2.5">
            <Image
              src={reviewStarIcon}
              alt="review star icon"
              className="size-[16px]"
            />
            <p className="text-[10px] sm:text-xs text-primary">1000</p>
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center lg:gap-3 2xl:gap-4 px-4 py-4 bg-[#FFFCF9]  rounded-bl-md rounded-br-md lg:rounded-tl-md lg:rounded-tr-md">
        <div className="flex flex-col gap-5">
          <FlightRoute />
          <FlightRoute />
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex gap-2 2xl:gap-5">
          <div>
            <div className="flex items-center gap-2.5 pt-5">
              <Image src={atmCardIcon} alt="atm card icon" />
              <p className="text-xs text-green">AMEXCARD25</p>
            </div>

            <p className="text-xl text-right font-medium text-black pt-7 pb-1.5">
              ৳ 10,118
            </p>
            <p className="text-sm font-medium text-black/50 text-right line-through">
              ৳ 10,118
            </p>
          </div>
          <Link
            href="flight-booking"
            className="bg-primary hidden lg:flex justify-center items-center h-[174px] w-16 2xl:w-[81px] rounded-md"
          >
            <Image src={tickIcon} alt="tick mark icon" className="size-9" />
          </Link>
        </div>

        {(bestDeal || yourOffer) && (
          <div className="hidden lg:block absolute top-1.5 -left-2">
            <Image
              src={bestDeal ? bestDealIcon : yourOfferIcon}
              alt="best deal"
              className="w-[115px]"
            />
            <p className="text-xs text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {bestDeal ? 'Best Deal' : 'Your Offer'}
            </p>
          </div>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-between gap-6 px-[45px] py-1.5 lg:py-3 bg-white rounded-bl-md rounded-br-md">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2.5">
            <Image src={diamondIcon} alt="diamond icon" className="size-5" />
            <p className="text-sm text-[#ABC32F]">Partially Refundable</p>
          </div>

          <div className="flex items-center gap-2.5">
            <Image src={watchIcon} alt="watch icon" className="size-4" />
            <p className="text-sm text-red">Partially Refundable</p>
          </div>

          <div className="flex items-center gap-2.5">
            <Image
              src={reviewStarIcon}
              alt="review star icon"
              className="size-[18px]"
            />
            <p className="text-sm text-primary">1000</p>
          </div>
        </div>

        <div className="flex items-center gap-2.5 cursor-pointer">
          <p className="text-sm text-primary font-medium">View Details</p>
          <ChevronDown className="text-primary" />
        </div>
      </div>

      {/* Mobile */}
        <div className="flex lg:hidden items-center justify-between px-2 py-2 bg-white rounded-bl-md rounded-br-md">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2.5">
              <Image src={atmCardIcon} alt="atm card icon" />
              <p className="text-xs text-green">AMEXCARD25</p>
            </div>

            <div className='flex items-center gap-1'>
              <p className="text-right font-semibold text-black">৳ 10,118</p>
              <p className="text-xs font-medium text-black/50 text-right line-through">
                ৳ 10,118
              </p>
            </div>
          </div>
          <Link
            href="flight-booking"
            className="bg-primary flex justify-center items-center rounded-md px-2.5 py-2.5"
          >
            <Image src={tickIcon} alt="tick mark icon" className="size-4" />
          </Link>
        </div>

    </div>
  );
};

export default FlightCard;
