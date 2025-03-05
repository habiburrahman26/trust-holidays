import { Button } from '@/components/ui/button';
import Filter from './filter';
import TourCard from './tour-card';
import { CARD_DATA } from '@/data/data';
import arrowIcon from '@/assets/icon/arrow.svg';
import Image from 'next/image';
import ModifySearch from './modify-search';

const TourPackage = () => {
  return (
    <section className="bg-background-secondary">
      <ModifySearch/>

      <div className="grid grid-cols-12 gap-10 section-container py-10">
        <Filter />
        <div className="col-span-9">
          <div>
            <div className="grid grid-cols-3 5xl:grid-cols-4 gap-3.5 3xl:gap-5">
              {CARD_DATA.map((item) => (
                <TourCard {...item} />
              ))}
            </div>
            <div
              className="flex items-center
             justify-end pt-16 gap-4"
            >
              <span>Showing Results 1 - 10 of 30</span>
              <div className="space-x-2">
                {[1, 2, 3].map((item, i) => (
                  <Button
                    variant={i === 0 ? 'default' : 'outline'}
                    className={`size-10 border rounded-full shadow-none text-lg ${
                      i === 0 ? '' : 'bg-background-secondary text-black/50'
                    }`}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="size-10 border rounded-full shadow-none bg-background-secondary"
              >
                <Image src={arrowIcon} alt="arrow-icon" className='size-5 -rotate-90'/>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourPackage;
