import Image from 'next/image';
import usIcon from '@/assets/icon/flight/us.svg';
import planeIcon from '@/assets/icon/plane.svg';

const FlightRoute = () => {
  return (
    <>
      {/*mobile -> tab  */}
      <div className="grid grid-cols-3 gap-4 lg:hidden">
        <div>
          <h3 className="text-sm text-black font-medium">08:00 PM</h3>
          <h3 className="text-xs text-black font-medium">DAC</h3>
          <p className="text-xs text-black/50 truncate">23 Feb, Mon</p>
        </div>

        <div >
          <h3 className="text-sm text-black font-medium">1h 5min</h3>
          <Image src={usIcon} alt="airline icon" className='w-6'/>
          <p className='text-xs text-black/50'>NonStop</p>
        </div>

        <div>
          <h3 className="text-sm text-black font-medium">08:00 PM</h3>
          <h3 className="text-xs text-black font-medium">COX</h3>
          <p className="text-xs text-black/50 truncate">23 Feb, Mon</p>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-4 md:gap-3 lg:gap-2 2xl:gap-5">
        <div className="flex items-center justify-center  gap-2.5">
          <Image src={usIcon} alt="airlines icon" className="w-8" />
          <div>
            <h3 className="text-15 text-black font-medium">DAC - CXB</h3>
            <p className="text-xs text-black/50 font-medium uppercase">
              Novoair
            </p>
            <p className="text-xs text-black/50">1hr 5min</p>
          </div>
        </div>

        <div>
          <h3 className="text-15 text-black font-medium">08:00 PM</h3>
          <p className="text-xs text-black/50 font-medium whitespace-nowrap">
            23 Feb, Sunday
          </p>
          <p className="text-xs text-black/50 truncate">Hazrat Shahjalal...</p>
        </div>

        {/* <div className="self-center">
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
            </div> */}

        <div>
          <h3 className="text-15 text-black font-medium">08:00 PM</h3>
          <p className="text-xs text-black/50 font-medium whitespace-nowrap">
            23 Feb, Sunday
          </p>
          <p className="text-xs text-black/50 truncate">Hazrat Shahjalal...</p>
        </div>

        <div>
          <h3 className="font-medium">Non-Stop</h3>
          <p className="text-xs">COX</p>
        </div>
      </div>
    </>
  );
};

export default FlightRoute;
