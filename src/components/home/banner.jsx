import bannerImg from '@/assets/images/banner-bg.png';
import bannerIcon from '@/assets/icon/banner.svg';
import playStoreIcon from '@/assets/icon/play-store-black.svg';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="relative h-[350px] lg:h-[700px] bg-white flex items-center justify-center overflow-hidden">
      <div className="absolute left-1/2 lg:left-[40%]  w-1/2 h-[300px] lg:h-[600px] z-10">
        <Image src={bannerImg} alt="banner" fill objectFit="cover" />
      </div>

      <div className="absolute top-32 hidden lg:block lg:-right-20 2xl:right-0">
        <Image src={bannerIcon} alt="banner" />
      </div>

      <div className="w-full md:w-[600px] absolute top-1/2 -translate-y-1/2 left-2.5 lg:left-[10%] pr-2.5 md:pr-0 z-10">
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
    </section>
  );
};

export default Banner;
