const Cards = ({ item, size = "small" }) => {
  // Size config
  const cardWidth = size === "large" ? "w-85" : "w-[260px]";
  const cardHeight = size === "large" ? "h-[250px]" : "h-[180px]";
  const imgWidth = size === "large" ? "w-40" : "w-[120px]";
  const imgHeight = cardHeight;

  return (
    <div className={`my-3 p-2 ${cardWidth}`}>
      <div
        className={`card card-side hover:scale-105 duration-300 bg-white dark:bg-slate-900 dark:text-white shadow-md rounded-md overflow-hidden ${cardHeight}`}
      >
        <figure className={`${imgWidth} ${imgHeight} shrink-0`}>
          <img
            src={item.image}
            alt='book'
            className='w-full h-full object-cover'
          />
        </figure>

        <div className='card-body p-3 flex flex-col justify-between w-full'>
          <div className='text-yellow-500 text-sm'>
            {"★".repeat(item.rating)}
            {"☆".repeat(5 - item.rating)}
          </div>
          <h2 className='text-sm font-semibold line-clamp-2'>{item.title}</h2>
          <h3 className='text-sm text-gray-500'>{item.author}</h3>
          <p className='text-xs text-green-600'>{item.price}</p>
          <div className='card-actions justify-end mt-auto'>
            <button className='btn btn-outline btn-sm text-yellow-500 hover:bg-yellow-500 hover:text-white duration-300 rounded-2xl'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
