import bannerImg from '@/assets/images/banner.png';
import bannerIcon from '@/assets/icon/banner.svg';
import playStoreIcon from '@/assets/icon/play-store-black.svg';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative  py-20 flex items-center justify-center">
      <div className="w-full pl-2.5 sm:pl-4 2xl:pl-[350px] basis-1/2">
        <h3 className="text-2xl md:text-3xl lg:text-4xl text-primary font-medium pb-3.5">
          Get the Trust Holiday's App
        </h3>
        <p className="text-black/50 font-medium pb-12">
          Luxurious or budget-friendly hotels, villas or resorts, browse
          accommodations at <span className="text-primary">Holi</span>days that
          meet the need. Book Long-term or short-term accommodation from our
          hotel deals.
        </p>

        <Image src={playStoreIcon} alt="play store icon" className="w-44" />
      </div>

      <div className="relative w-[35%] lg:w-[50%] xl:w-[40%] 6xl:w-[30%] h-[300px] lg:h-[600px] ml-auto">
        <Image src={bannerImg} alt="banner" fill objectFit="cover" className='z-10' />
      </div>
    </section>
  );
};

export default Banner;
