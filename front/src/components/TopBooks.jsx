import Slider from "react-slick";
import Cards from "./Cards";
import list from "../assets/list.json";

function TopBooks() {
  const filterData = list.filter((data) => data.rating === "5");

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
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <div className='max-w-screen justify-center items-center container md:px-30 px-7 py-10  bg-white text-black dark:bg-slate-900 dark:text-white'>
        <div className='md:flex items-center gap-1 w-full max-w-screen'>
          <div className=' whitespace-nowrap flex w-full items-center justify-center'>
            <h1 className='md:transform md:rotate-270 font-semibold text-gray-700 '>
              Top Rated
            </h1>
          </div>
          <div className='md:w-400 w-full'>
            <Slider {...settings}>
              {filterData.map((item) => (
                <Cards item={item} key={item.id} size='large' />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBooks;
