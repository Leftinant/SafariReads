function Cards({ item }) {
  return (
    <div className=' my-3 p-3 dark:bg-slate-900 dark:text-white  bg-white text-black'>
      <div className='w-80 card card-side hover:scale-105 duration-500 dark:bg-slate-900 dark:text-white  bg-white text-black'>
        <figure className='shadow-xl rounded-md'>
          <img src={item.image} alt='books' />
        </figure>
        <div className='card-body '>
          <div className='text-yellow-500 text-sm'>
            {"★".repeat(item.rating)}
            {"☆".repeat(5 - item.rating)}
          </div>
          <h2 className='text-sm font-semibold'>{item.title}</h2>
          <h3 className='text-sm text-gray-500'>{item.author}</h3>
          <p className='text-xs text-green-600 mb-1'>{item.price}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-outline btn-sm flex rounded-2xl mt-2 text-yellow-500 hover:bg-yellow-500 hover:text-white duration-1000'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
