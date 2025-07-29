const Cards = ({ item, size = "small" }) => {
  const ICONS = [
    { icon: "fas fa-heart", label: "Wishlist", delay: 300 },
    { icon: "fas fa-shopping-bag", label: "Add to Cart", delay: 200 },
    { icon: "fas fa-money-bill-1", label: "Buy", delay: 100 },
  ];

  return (
    <div
      className={`max-w-xs group w-40 relative  rounded overflow-hidden bg-white  dark:bg-slate-900 dark:text-white`}
    >
      <div className='relative overflow-hidden'>
        <img src={item.image} alt='Book Cover' className='w-full h-auto ' />

        <div className='absolute inset-0 bg-black/30 flex flex-col items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 '>
          {ICONS.map(({ icon, label, delay }, idx) => (
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
              <button className='bg-yellow-600 text-white p-2 rounded-full shadow hover:bg-black w-9 h-9 m-2 flex items-center justify-center'>
                <i className={icon}></i>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className='p-4'>
        <p className='text-sm text-gray-500'>{item.author}</p>
        <h2 className='text-lg font-bold my-2'>{item.title}</h2>
        <h3 className='text-sm text-gray-500 font-semibold'>
          KSh {item.price}
        </h3>
      </div>
    </div>
  );
};

export default Cards;
