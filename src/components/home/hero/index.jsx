import HeroTabs from './hero-tabs';

const Hero = () => {
  return (
    <section>
      <div className="relative bg-white">
        <div className="absolute inset-0 max-h-[280px]">
          <div className="hero-overlay absolute inset-0"></div>
          <video
            autoPlay
            muted
            loop
            className="w-full h-full bg-cover object-cover object-center bg-no-repeat"
          >
            <source src="https://utility-assets.s3.ap-southeast-1.amazonaws.com/hero-bg-cover.mp4" />
          </video>
        </div>

        <div className='relative z-10 pt-28'>
          <div className="text-center text-white z-10">
            <h3 className="text-2xl font-medium tracking-[1rem]">Welcome to</h3>
            <h1 className="text-7xl font-bold">
              Trust <span className="text-primary">Holi</span>days
            </h1>
          </div>
          <div className='-mt-6'>
            <HeroTabs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
