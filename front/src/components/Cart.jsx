import React from "react";

function Cart() {
  const list = [
    {
      _id: {
        $oid: "6887cfc6d85228c9f7a278b7",
      },
      id: 1,
      title: "The Midnight Library",
      author: "Matt Haig",
      rating: "5",
      category: "Fiction",
      image: "/cover1.png",
      price: "950.00/=",
    },
    {
      _id: {
        $oid: "6887cfc6d85228c9f7a278c3",
      },
      id: 13,
      title: "The Silk Roads: A New History of the World",
      author: "Peter Frankopan",
      rating: "5",
      category: "History",
      image: "/cover3.png",
      price: "1200.00/=",
    },
    {
      _id: {
        $oid: "6887cfc6d85228c9f7a278cb",
      },
      id: 21,
      title: "Frankenstein",
      author: "Mary Shelley",
      rating: "5",
      category: "Thriller",
      image: "/cover4.png",
      price: "650.00/=",
    },
  ];
  return (
    <div>
      <dialog id='my_modal_2' className='modal'>
        <div className='modal-box !p-0 border-none fixed right-0 h-screen md:w-1/3 w-70 translate-x-50 group-hover:translate-x-0 transition duration-1000 ease-in-out dark:bg-slate-900 bg-white rounded-none'>
          <div className='w-full h-20 flex px-3 items-center bg-amber-500'>
            <h2 className='text-3xl font-semibold '>My Cart</h2>
          </div>
          <div className='h-full p-3 flex-col space-y-3'>
            {list.map((item, idx) => (
              <div
                className='flex h-auto w-ful rounded-xl bg-gray-400 md:p-2'
                key={idx}
              >
                <div className='border-gray-500 border-1 rounded-xl w-full flex text-gray-600 font-bold text-xs md:text-sm'>
                  <div className='md:p-3 p-1 h-full flex justify-center items-center border-r-1 border-gray-500 cursor-pointer  hover:text-red-500'>
                    <i className='fas fa-x'></i>
                  </div>
                  <div className='md:p-3 p-1 h-full flex  items-center border-r-1 border-gray-500 md:w-45'>
                    {item.title}
                  </div>
                  <div className='md:p-3 p-1 h-full flex items-center border-r-1 border-gray-500 md:w-35'>
                    {item.author}
                  </div>
                  <div className='md:p-3 p-1 h-full flex  items-center border-r-1 border-gray-500 md:w-20'>
                    Ksh {item.price}
                  </div>
                  <div className='md:p-3 p-1 h-full flex  items-center border-gray-500 cursor-pointer hover:text-green-500 hover:underline '>
                    Buy
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Cart;
