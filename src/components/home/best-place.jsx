'use client';
import Slider from 'react-slick';
import SliderCardWithReview from '../ui/slider-card-with-review';

const BestPlace = () => {
  const destinations = [
    {
      name: 'Dubai',
      image:
        'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2F267736179_149939317369872_2872125975221274736_n.jpg&w=1920&q=75',
      reviews: 261,
      rating: 5,
    },
    {
      name: 'Canada',
      image:
        'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FSingapore.jpg&w=1920&q=75',
      reviews: 261,
      rating: 5,
    },
    {
      name: 'Nepal',
      image:
        'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FMaafushi.jpg&w=1920&q=75',
      reviews: 261,
      rating: 5,
    },
    {
      name: 'Singapore',
      image:
        'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FKolkata.jpg&w=1920&q=75',
      reviews: 261,
      rating: 5,
    },
    {
      name: 'India',
      image:
        'https://sharetrip.net/_next/image?url=https%3A%2F%2Ftbbd-flight.s3.ap-southeast-1.amazonaws.com%2Fpromotion%2FBangkok.jpg&w=1920&q=75',
      reviews: 261,
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto pb-24">
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl font-medium mb-2.5">
          Best Place in <span className="text-red">Bangladesh</span> for Your
          Next Trip
        </h1>
        <p className="text-black/50 mb-0.5">
          Luxurious or budget-friendly hotels, villas or resorts, browse
          accommodations at <span className="text-primary">Holi</span>days that
          meet the need.
        </p>
        <p className="text-black/50">
          Book Long-term or short-term accommodation from our hotel deals.
        </p>
      </div>

      
        <Slider {...settings} className="my-slider -mx-2">
          {destinations.map((destination, index) => (
          <SliderCardWithReview key={index} link="#" {...destination}/>
          ))}
        </Slider>
      
    </div>
  );
};

export default BestPlace;
