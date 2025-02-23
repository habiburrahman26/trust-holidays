'use client';
import Slider from 'react-slick';
import SliderCardWithReview from '../ui/slider-card-with-review';
import { settings } from './sliderSetting';

const BestHotel = () => {
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

  return (
    <div className="section-container pt-10 pb-20 lg:py-24">
      <div className="text-center mb-10">
        <h1 className="section-header mb-2.5">
          Best Hotels in <span className="text-red">Bangladesh</span> for Your
          Next Trip
        </h1>
        <p className="section-subheader-content mx-auto">
          Luxurious or budget-friendly hotels, villas or resorts, browse
          accommodations at <span className="text-primary">Holi</span>days that
          meet the need.Book Long-term or short-term accommodation from our hotel deals.
        </p>
        
      </div>

      
        <Slider {...settings} className="my-slider sm:-mx-2">
          {destinations.map((destination, index) => (
          <SliderCardWithReview key={index} link="#" {...destination}/>
          ))}
        </Slider>
      
    </div>
  );
};

export default BestHotel;
