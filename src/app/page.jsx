import Banner from '@/components/home/banner';
import BestHotel from '@/components/home/best-hotel';
import BestPlace from '@/components/home/best-place';
import ExploreCountry from '@/components/home/explore-country';
import FlightRoute from '@/components/home/flight-route';
import Hero from '@/components/home/hero';
import PopularDestinationSlider from '@/components/home/popular-destination-slider';
import SpecialDeals from '@/components/home/special-deals';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <Hero />
      <SpecialDeals />
      <PopularDestinationSlider />
      <BestHotel />
      <div className="bg-background-secondary section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-black px-2.5 md:px-16 lg:px-32 py-10 mb-10 md:mb-24">
          <div className='text-xs md:text-base'>
            <h3 className="section-header font-medium text-white pb-2.5">
              Members can save on lifestyle
            </h3>
            <p className="text-white/50">
              Enjoy privileges such as exclusive flight prices, unbelievable
              discounts on thousands
            </p>
            <p className="text-white/50 pb-0.5">
              of hotels, and much more.{' '}
              <span className="text-white font-medium">
                Start planning your trip now.
              </span>
            </p>
          </div>

          <Button variant="secondary">Find Your Saving</Button>
        </div>

        <ExploreCountry />
        <BestPlace />
        <FlightRoute />
      </div>
      <Banner />
    </>
  );
}
