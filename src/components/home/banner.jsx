import bannerImg from '@/assets/images/banner.png';
import playStoreIcon from '@/assets/icon/play-store-black.svg';
import Image from 'next/image';

const Banner = () => {
  return (
    <section className="section-container grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 place-items-center py-10">
      <div>
        <h3 className="section-header text-primary pb-3.5">
          Get the Trust Holiday's App
        </h3>
        <p className="text-xs sm:text-base text-black/50 font-medium pb-4 sm:pb-12">
          Luxurious or budget-friendly hotels, villas or resorts, browse
          accommodations at <span className="text-primary">Holi</span>days that
          meet the need. Book Long-term or short-term accommodation from our
          hotel deals.
        </p>

        <Image
          src={playStoreIcon}
          alt="play store icon"
          className="w-32 md:w-44"
        />
      </div>

      {/* <div className="relative aspect-[5/4] w-[500px]">
        <Image src={bannerImg} alt="banner" fill className="object-cover" />
      </div> */}
    </section>
  );
};

export default Banner;
