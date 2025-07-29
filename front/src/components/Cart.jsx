import React from "react";

function Cart() {
  return (
    <div>
      <dialog id='my_modal_2' className='modal'>
        <div className='fixed right-0 md:h-screen md:w-1/3 w-120 translate-x-50 group-hover:translate-x-0 transition duration-1000 dark:bg-slate-900 bg-white'>
          <div className='w-full h-20 flex px-3 items-center bg-amber-500'>
            <h2 className='text-3xl font-semibold '>My Cart</h2>
          </div>
          <div className='h-full p-3'>be</div>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Cart;
