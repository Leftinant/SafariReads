import React from "react";

function Cards({ item }) {
  return (
    <div>
      <div className='card card-side bg-base-100 shadow-sm'>
        <figure>
          <img
            src={item.image}
            alt='books'
            className='w-fill h-60 object-cover rounded-md shadow-md'
          />
        </figure>
        <div className='card-body '>
          <div className='text-yellow-500 text-sm'>
            {"★".repeat(item.rating)}
            {"☆".repeat(5 - item.rating)}
          </div>
          <h2 className='text-sm font-semibold'>{item.title}</h2>
          <p className='text-xs text-gray-500 mb-1'>{item.author}</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-outline btn-sm rounded-2xl mt-2 text-yellow-500 hover:bg-yellow-500 hover:text-white duration-1000'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
