import Image from 'next/image';
import calendarIcon from '@/assets/icon/calendar.svg';
import tourLinkIcon from '@/assets/icon/tour-link.svg';
import shareIcon from '@/assets/icon/share.svg';
import reviewStarIcon from '@/assets/icon/review-star.svg';
import locationIcon from '@/assets/icon/location.svg';
import Link from 'next/link';


const TourCard = ({name,location,image,days,review,price}) => {
  return (
    <Link href={`tour-package/details?destination=${name.split(' ').join('-')}`} className="p-2 pb-8 bg-white rounded-lg" style={{boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.08)"}}>
      <div className="relative h-44 xs:h-52 lg:h-[250px] rounded-lg overflow-hidden">
        <Image
          src={image}
          alt="image destination"
          fill
          objectFit="cover"
        />
      </div>

      <div className="px-1.5">
        <div className="flex items-center justify-between pt-2.5 text-xs lg:text-base">
          <div className="flex items-center gap-1">
            <Image
              src={calendarIcon}
              alt="calendar icon"
              className='size-4 lg:size-5'
            />
            <span className="text-black/50 font-medium">{days} days</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Image
                src={reviewStarIcon}
                alt="calendar icon"
                className='size-4 lg:size-5'
              />
              <span className="text-black/50 font-medium">{review}</span>
            </div>
            <div className="flex items-center gap-1">
              <Image
                src={shareIcon}
                alt="calendar icon"
                className='size-4 lg:size-5'
              />
              <span className="text-black/50 font-medium">10</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-2 pt-3.5">
          <div>
            <p className="text-xs font-medium text-black/50">
              Price Starts from
            </p>
            <h3 className="text-lg lg:text-xl font-medium">
              BDT {price}{' '}
              <span className="text-[10px] font-medium text-black">
                ( per person )
              </span>
            </h3>
            <p className="text-15 lg:text-lg font-medium truncate">{name}</p>
            <div className="flex items-center gap-2 pt-1">
              <Image src={locationIcon} alt="location icon" className='size-3 lg:size-4'/>
              <span className="text-xs lg:text-sm truncate">
                {location}
              </span>
            </div>
          </div>
          <div className='basis-9'>
            <Image src={tourLinkIcon} alt="link icon" className="size-6 lg:size-10" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
