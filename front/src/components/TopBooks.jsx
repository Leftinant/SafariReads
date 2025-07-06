import React from "react";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";

function TopBooks() {
  const filterData = list.filter((data) => data.category === "top");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 py-10 overflow-x-auto'>
        <div className='flex items-center gap-1'>
          <div className='w-12'>
            <p className='transform -rotate-90 font-semibold whitespace-nowrap text-gray-700'>
              Top Rated
            </p>
          </div>
          <div className='w-full max-w-auto'>
            <Slider {...settings}>
              {filterData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBooks;
