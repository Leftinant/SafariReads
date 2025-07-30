import toast from "react-hot-toast";

const Cards = ({ item, size = "small" }) => {
  const handleBuy = async (e) => {
    try {
      toast.success(
        `Successfully Purchased. $(<br />) Book Title:${item.title}`
      );
    } catch (err) {
      console.error("Purchase Failed:", err);
      toast.error(err.response?.data?.message || "Purchase Failed");
    }
  };

  const ICONS = [
    {
      icon: "fas fa-heart",
      label: "Wishlist",
      delay: 300,
      // click: ,
    },
    {
      icon: "fas fa-shopping-bag",
      label: "Add to Cart",
      delay: 200,
      // click: ,
    },
    {
      icon: "fas fa-money-bill-1",
      label: "Buy",
      delay: 100,
      click: handleBuy,
    },
  ];

  return (
    <div
      className={`max-w-xs group w-40 relative md:w-50 rounded overflow-hidden bg-white  dark:bg-slate-900 dark:text-white`}
    >
      <div className='relative overflow-hidden'>
        <img src={item.image} alt='Book Cover' className='w-full h-auto ' />

        <div className='absolute inset-0 bg-black/30 flex flex-col items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 '>
          {ICONS.map(({ icon, label, delay, click }, idx) => (
            <div
              key={idx}
              className={`relative flex items-center group/icon transform translate-x-20 group-hover:translate-x-0 transition duration-1000`}
              style={{ transitionDelay: `${delay}ms` }}
            >
              {/* Tooltip Label */}
              <span className='absolute right-full px-2 py-1 bg-black text-white text-xs rounded shadow opacity-0 group-hover/icon:opacity-100 transition duration-200 whitespace-nowrap'>
                {label}
              </span>

              {/* Icon Button */}
              <button
                className='bg-yellow-600 text-white p-2 rounded-full shadow hover:bg-black w-9 h-9 m-2 flex items-center justify-center'
                onClick={click}
              >
                <i className={icon}></i>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className='p-4'>
        <h2 className='text-lg font-bold my-2'>{item.title}</h2>
        <p className='text-sm text-gray-500'>{item.author}</p>
        <div className='flex mt-3'>
          <div className='rating rating-xs mr-7'>
            {[1, 2, 3, 4, 5].map((i) => (
              <input
                key={i}
                type='radio'
                className='mask mask-star-2 bg-yellow-500'
                readOnly
                checked={item.rating === i}
              />
            ))}
          </div>

          <h3 className='text-sm text-green-500 font-semibold mt-3'>
            Khs {item.price}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Cards;
