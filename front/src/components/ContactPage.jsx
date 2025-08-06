const ContactSection = () => {
  return (
    <section className='pt-50 pb-20 flex items-center justify-center px-4 dark:bg-slate-900 dark:text-white  bg-white text-black'>
      <div className='w-full max-w-6xl dark:bg-slate-900 dark:text-white  bg-white text-black rounded-lg shadow-lg overflow-hidden flex flex-col lg:flex-row'>
        <div className='w-full lg:w-1/2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-8 lg:p-12'>
          <a href='/'>
            <button className='mb-6 flex items-center space-x-2 text-sm '>
              <span className='border  rounded-full w-6 h-6 flex items-center justify-center'>
                <i className='fas fa-arrow-left'></i>
              </span>
              <span>Back to Home</span>
            </button>
          </a>

          <h2 className='text-3xl font-bold mb-4'>Contact Us</h2>
          <p className='text-gray-500 mb-10 text-sm'>
            Welcome to our “Contact Us” page, your gateway to reaching out and
            connecting with us. We value your feedback, inquiries, and
            suggestions.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm'>
            <div>
              <p className='font-semibold text-gray-500'>CALL US</p>
              <p className='mt-1'>+254 758 822 727</p>
            </div>
            <div>
              <p className='font-semibold text-gray-500'>ADDRESS:</p>
              <p className=' mt-1'>
                Uhuru Highway,
                <br />
                Waiyaki Way, Nairobi,
                <br />
                Kenya
              </p>
            </div>
            <div>
              <p className='font-semibold text-gray-500'>EMAIL:</p>
              <p className=' mt-1'>safareads@company.com</p>
            </div>
          </div>
        </div>
        <div className='w-full lg:w-1/2 bg-base p-8 lg:p-12 flex flex-col justify-center'>
          <h2 className='text-2xl font-semibold mb-6'>Contact form</h2>

          <form className='dark:bg-slate-900 dark:text-white  bg-white text-black rounded-lg border p-6 space-y-4 text-sm'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label>
                  First name<span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  placeholder='First name'
                  className='mt-1 w-full border border-gray-400 rounded-full px-4 py-2'
                />
              </div>
              <div>
                <label>
                  Last name<span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  placeholder='Last name'
                  className='mt-1 w-full border border-gray-400 rounded-full px-4 py-2'
                />
              </div>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <label>
                  Email<span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  placeholder='me@example.com'
                  className='mt-1 w-full border border-gray-400 rounded-full px-4 py-2'
                />
              </div>
              <div>
                <label>
                  Phone number<span className='text-red-500'>*</span>
                </label>
                <input
                  type='tel'
                  placeholder='Phone number'
                  className='mt-1 w-full border border-gray-400 rounded-full px-4 py-2'
                />
              </div>
            </div>

            <div>
              <label>Description:</label>
              <textarea
                rows='4'
                placeholder='How Can We Help?'
                className='mt-1 w-full border border-gray-400 rounded-lg px-4 py-2'></textarea>
            </div>

            <button
              type='submit'
              className='bg-yellow-200 text-yellow-600 font-medium py-2 px-6 rounded-full hover:bg-yellow-300 transition'>
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
