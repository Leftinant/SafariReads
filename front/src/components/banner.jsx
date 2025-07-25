function Banner() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row pt-10 bg-white text-black dark:bg-slate-900 dark:text-white'>
        <div className='md:w-1/2 w-full '>
          <img
            src='/banner1.png'
            className='w-auto h-120 md:ml-30 mt-10'
            alt='banner'
          />
        </div>
        <div className='md:w-1/2 w-full md:mt-30'>
          <div className='space-y-12'>
            <h1 className='text-4xl font-bold'>
              Welcome to Safari Reads -{" "}
              <span className='text-yellow-600'>
                Your Reading Safari Begins Here.
              </span>
            </h1>
            <p className='text-xl'>
              Here, we believe every reader deserves an adventure. Dive into
              tales from across kenya, africa, and the world. Every book is a
              journey. Where will yours take you today ?
            </p>
          </div>
          <button className='bg-yellow-600 btn btn-secondary border-none mt-10 hover:bg-yellow-200 hover:text-yellow-600 duration-1000 cursor-pointer px-10 rounded-xl'>
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;
