import { useEffect, useState } from "react";

function CheckPage() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("orderSummary"));
    if (orderData) {
      setOrder(orderData);
    }
  }, []);

  if (!order) {
    return <div className='p-10 text-center text-4xl'>No order found.</div>;
  }

  return (
    <>
      <div className='max-w-screen container mx-auto md:px-30 px-5 bg-gray-100 dark:bg-gray-800 text-black dark:text-white min-h-screen'>
        <div className='pt-30 pb-10 flex justify-center w-full'>
          <h1 className='text-4xl font-semibold'>Checkout</h1>
        </div>
        <div className='flex md:flex-row flex-col gap-5 h-auto'>
          <div className='md:w-3/5'>
            <h2 className='text-xl font-semibold'>Delivery information</h2>
            <div className=' dark:bg-slate-900 dark:text-white  bg-white text-black p-5 m-5'>
              <form className='flex justify-around md:flex-row flex-col'>
                <div>
                  <label>
                    Name <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Your Name'
                    className='input bg-gray-100 dark:bg-gray-800 '
                    required
                  />
                  <br />
                  <br />
                  <label>
                    Email <span className='text-red-500'>*</span>
                  </label>
                  <label className='input validator bg-gray-100 dark:bg-gray-800 '>
                    <svg
                      className='h-[1em] opacity-50'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 24 24'>
                      <g
                        strokeLinejoin='round'
                        strokeLinecap='round'
                        strokeWidth='2.5'
                        fill='none'
                        stroke='currentColor'>
                        <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                        <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                      </g>
                    </svg>
                    <input type='email' placeholder='mail@site.com' required />
                  </label>
                  <br />
                  <br />
                  <label>
                    Street Address <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='city'
                    placeholder='Enter Street Address'
                    className='input bg-gray-100 dark:bg-gray-800 mb-5'
                    required
                  />
                </div>
                <div>
                  <label>
                    Phone Number <span className='text-red-500'>*</span>
                  </label>
                  <label className='input validator  bg-gray-100 dark:bg-gray-800'>
                    <svg
                      className='h-[1em] opacity-50'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 16 16'>
                      <g fill='none'>
                        <path
                          d='M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z'
                          fill='currentColor'></path>
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z'
                          fill='currentColor'></path>
                      </g>
                    </svg>
                    <input
                      type='tel'
                      className='tabular-nums'
                      required
                      placeholder='Phone'
                      pattern='[0-9]*'
                      minLength='10'
                      maxLength='10'
                      title='Must be 10 digits'
                    />
                  </label>
                  <br />
                  <br />
                  <label>
                    County <span className='text-red-500'>*</span>
                  </label>
                  <select
                    defaultValue='Select County'
                    className='select bg-gray-100 dark:bg-gray-800'>
                    <option disabled={true}>Select County</option>
                    <option>Nairobi</option>
                    <option>Mombasa</option>
                    <option>Kisumu</option>
                    <option>Nakuru</option>
                    <option>Kiambu</option>
                    <option>Machakos</option>
                    <option>Kakamega</option>
                    <option>Uasin Gishu</option>
                    <option>Kisii</option>
                    <option>Meru</option>
                    <option>Nyeri</option>
                    <option>Eldoret</option>
                    <option>Embu</option>
                    <option>Kericho</option>
                    <option>Laikipia</option>
                  </select>
                </div>
              </form>
            </div>
            <h2 className='text-xl font-semibold'>Payment Method</h2>
            <div className=' dark:bg-slate-900 dark:text-white  bg-white text-black p-5 m-5 flex-col '>
              <div className='p-2 dark:border-gray-800 border-gray-200 border-1 rounded m-2'>
                <input
                  type='radio'
                  name='radio-8'
                  className='radio radio-warning m-3'
                  defaultChecked
                />
                Cash On Delivery
              </div>
              <div className='p-2 dark:border-gray-800 border-gray-200 border-1 rounded m-2'>
                <input
                  type='radio'
                  name='radio-8'
                  className='radio radio-warning m-3'
                />
                M-Pesa
              </div>
              <div className='p-2 dark:border-gray-800 border-gray-200 border-1 rounded m-2'>
                <input
                  type='radio'
                  name='radio-8'
                  className='radio radio-warning m-3'
                />
                PayPal
              </div>
              <div className='p-2 dark:border-gray-800 border-gray-200 border-1 rounded m-2'>
                <input
                  type='radio'
                  name='radio-8'
                  className='radio radio-warning m-3'
                />
                Add Credit/Debit Card
              </div>
            </div>
          </div>
          <div className='md:w-2/5 h-full'>
            <h2 className='text-xl font-semibold'>Order Summary</h2>
            <div className=' dark:bg-slate-900 dark:text-white  bg-white text-black p-5 m-5'>
              <div className='flex-col w-full '>
                <div className='flex justify-between w-full mb-4'>
                  <span className='text-gray-500'>Sub Total:</span>
                  <span className='font-semibold text-right'>
                    Ksh {order.subtotal.toLocaleString()}.00
                  </span>
                </div>
                <div className='flex justify-between w-full mb-4'>
                  <span className='text-gray-500'>Shipping:</span>
                  <span className='font-semibold text-right'>
                    Ksh {order.shipping.toFixed(2)}
                  </span>
                </div>
                <div className='flex justify-between w-full mb-4'>
                  <span className='text-gray-500'>Taxes</span>
                  <span className='font-semibold text-right'>
                    Ksh {order.taxes.toFixed(2)}
                  </span>
                </div>
                <div className='flex justify-between w-full mb-7'>
                  <span className='text-gray-500'>Discount</span>
                  <span className='font-semibold text-right'>
                    Ksh {order.discount.toLocaleString()}.00
                  </span>
                </div>
                <div className='flex justify-between w-full text-lg font-bold border-t pt-5 mb-5'>
                  <span>Total</span>
                  <span className='font-semibold text-right'>
                    Ksh {order.total.toLocaleString()}.00
                  </span>
                </div>
                <button className='w-full h-15 bg-amber-500 flex justify-center items-center text-black text-xl font-bold '>
                  Confirm Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckPage;
