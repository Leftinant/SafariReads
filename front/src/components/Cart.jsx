import React, { useState, useEffect, useRef } from "react";

function Cart({ onClose }) {
  const dialogRef = useRef(null);
  const [totals, setTotals] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setTotals(cartItems.map(() => 1));
  }, [cartItems]);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, []);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(stored);
    setTotals(Array(stored.length).fill(1));
  }, []);

  const handleRemoveItem = (indexToRemove) => {
    const updatedCart = cartItems.filter((_, i) => i !== indexToRemove);
    const updatedTotals = totals.filter((_, i) => i !== indexToRemove);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
    setTotals(updatedTotals);
  };

  const handleAdd = (index) => {
    const updated = [...totals];
    updated[index] += 1;
    setTotals(updated);
  };

  const handleSubtract = (index) => {
    const updated = [...totals];
    if (updated[index] > 1) {
      updated[index] -= 1;
      setTotals(updated);
    }
  };

  const totalPrice = cartItems.reduce((acc, item, index) => {
    return acc + parseInt(item.price) * totals[index];
  }, 0);

  const handleSubmit = () => {
    const orderData = {
      items: cartItems,
      subtotal: totalPrice,
      discount: 200,
      shipping: 0,
      taxes: 0,
      total: totalPrice - 200,
    };

    localStorage.setItem("orderSummary", JSON.stringify(orderData));

    window.location.href = "/checkout";
  };

  return (
    <div>
      <dialog ref={dialogRef} className='modal min-h-screen'>
        <div className='modal-box !p-0 border-none fixed right-0 min-h-screen md:w-1/3 w-70 translate-x-50 group-hover:translate-x-0 transition duration-1000 ease-in-out dark:bg-slate-900 bg-white rounded-none'>
          <div className='w-full h-15 flex px-3 items-center bg-amber-500'>
            <h2 className='text-3xl font-semibold'>🛒 Cart</h2>
          </div>

          {cartItems.length === 0 ? (
            <div className='h-full flex justify-center my-50'>
              <div className='text-center'>
                <i className='fas fa-shop-slash text-7xl mb-5'></i>
                <p className='font-semibold text-2xl'>Your Cart is empty</p>
              </div>
            </div>
          ) : (
            <div className='h-full'>
              <div className='h-full flex-col space-y-3 px-3'>
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className='flex h-auto w-full p-5 border-t-1 border-gray-500'>
                    <div className='w-1/2 mr-5'>
                      <img src={item.image} alt='cover' />
                    </div>
                    <div className='w-full flex-col space-y-1'>
                      <div className='font-bold md:text-xl text-gray-500'>
                        {item.author}
                      </div>
                      <div className='font-bold md:text-xl '>{item.title}</div>
                      <div>
                        <b>Category: </b>
                        {item.category}
                      </div>
                      <div className='font-semibold my-5 md:text-xl text-gray-500'>
                        Ksh {item.price}/=
                      </div>

                      <div className='flex'>
                        <table>
                          <tbody>
                            <tr>
                              <td
                                className='border-1 py-1 px-2 cursor-pointer'
                                onClick={() => handleSubtract(index)}>
                                <i className='fas fa-minus'></i>
                              </td>
                              <td className='border-1 px-5 py-1'>
                                {totals[index]}
                              </td>
                              <td
                                className='border-1 py-1 px-2 cursor-pointer'
                                onClick={() => handleAdd(index)}>
                                <i className='fas fa-plus'></i>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <button
                          className='text-xl hover:text-red-500 cursor-pointer ml-10'
                          onClick={() => handleRemoveItem(index)}>
                          <i className='far fa-trash-can'></i>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <footer className='footer border-t-2 p-3'>
                <div className='flex-col w-full'>
                  <div className='flex justify-between w-full'>
                    <span className='text-gray-500'>Sub Total:</span>
                    <span className='font-semibold text-right'>
                      Ksh {totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className='flex justify-between w-full'>
                    <span className='text-gray-500'>Shipping:</span>
                    <span className='font-semibold text-right'>Ksh 00.00</span>
                  </div>
                  <div className='flex justify-between w-full'>
                    <span className='text-gray-500'>Taxes</span>
                    <span className='font-semibold text-right'>Ksh 00.00</span>
                  </div>
                  <div className='flex justify-between w-full mb-4'>
                    <span className='text-gray-500'>Discount</span>
                    <span className='font-semibold text-right'>Ksh 200.00</span>
                  </div>
                  <div className='flex justify-between w-full text-lg font-bold border-t pt-2'>
                    <span>Total</span>
                    <span className='font-semibold text-right'>
                      Ksh {(totalPrice - 200).toLocaleString()}.00
                    </span>
                  </div>
                  <button
                    className='btn w-full h-15 bg-amber-500 flex justify-center items-center text-black text-xl font-bold'
                    onClick={handleSubmit}>
                    Proceed to CheckOut
                  </button>
                </div>
              </footer>
            </div>
          )}
        </div>
        <div className='modal-backdrop' onClick={onClose}></div>
      </dialog>
    </div>
  );
}

export default Cart;
