import HeroTabs from './hero-tabs';

const Hero = () => {
  return (
    <section>
      <div className="relative bg-background-secondary">
        <div className="absolute inset-0 max-h-[350px] 3xl:max-h-[400px]">
          <div className="hero-overlay absolute inset-0"></div>
          <video
            autoPlay
            muted
            loop
            className="w-full h-full bg-cover  object-cover object-center bg-no-repeat"
            style={{
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <source src="https://res.cloudinary.com/dxtqg7ofg/video/upload/hero_ydmerb.mp4" />
            your browser doesn't support video 
          </video>
        </div>

        <div className='relative z-10 pt-28 sm:pt-44 3xl:pt-52 pb-20'>
          <div className="text-center text-white z-10">
            <h3 className="text-2xl font-medium tracking-[1rem]">Welcome to</h3>
            <h1 className="text-3xl md:text-7xl font-semibold sm:font-bold">
              Trust <span className="text-primary">Holi</span>days
            </h1>
          </div>
          <div className='px-2 sm:-mt-6'>
            <HeroTabs />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
