export const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
      },
    },

    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};
