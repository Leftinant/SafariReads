function Login() {
  return (
    <div>
      <dialog id='my_modal_3' className='modal'>
        <div className='modal-box md:w-110 md:px-20 w-auto px-10 mx-10 rounded-3xl dark:bg-slate-900'>
          <form method='dialog'>
            <button className='px-2 absolute text-xl text-gray-500 right-2 top-2 cursor-pointer hover:text-black dark:hover:text-white'>
              ✕
            </button>
          </form>
          <div className=' w-full justify-items-center'>
            <img src='logo.png' alt='logo' className='w-20 ju' />
            <h2 className='font-bold mb-5 text-2xl'>Login to your account</h2>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='grid'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='email'
                placeholder='me@example.com'
                className='outline-none border border-gray-300 rounded-2xl p-3 text-l'
                required
              />
            </div>
            <div className='grid'>
              <div className='flex'>
                <label htmlFor='password'>Password</label>
                <a
                  href='#'
                  className='ml-auto inline-block font-semibold text-sm underline-offset-4 hover:underline text-blue-700'
                >
                  Forgot your password?
                </a>
              </div>
              <input
                id='password'
                type='password'
                placeholder='Password'
                className='outline-none border border-gray-300 rounded-2xl p-3 text-l mb-7'
                required
              />
            </div>
          </div>
          <button
            type='submit'
            className='w-full bg-yellow-600 text-white rounded-xl py-2 cursor-pointer font-semibold hover:bg-yellow-700 duration-500'
          >
            Login
          </button>
          <div className='w-full text-center text-sm font-bold my-2'>OR</div>
          <button
            variant='outline'
            className='w-full outline rounded-md  py-2 cursor-pointer'
          >
            Login with Google
          </button>
          <div className='w-full text-center text-sm mt-2'>
            <a href='/Signup' className='cursor-pointer font-semibold'>
              Don't have an Account? Sign Up
            </a>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
