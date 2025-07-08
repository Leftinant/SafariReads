function Login() {
  return (
    <div>
      <dialog id='my_modal_3' className='modal'>
        <div className='modal-box w-100'>
          <form method='dialog'>
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              ✕
            </button>
          </form>
          <h2 className='font-semibold'>Login to your account</h2>
          <p className='text-gray-500 mb-3'>
            Enter your email below to login to your account
          </p>
          <div className='flex flex-col gap-6'>
            <div className='grid gap-2'>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                type='email'
                placeholder='me@example.com'
                className='outline-none border border-gray-300 rounded-md px-3'
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <label htmlFor='password'>Password</label>
                <a
                  href='#'
                  className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                >
                  Forgot your password?
                </a>
              </div>
              <input
                id='password'
                type='password'
                placeholder='Password'
                className='outline-none border border-gray-300 rounded-md px-3 mb-5'
                required
              />
            </div>
          </div>
          <button
            type='submit'
            className='w-full bg-black text-white rounded-md py-1'
          >
            Login
          </button>
          <button
            variant='outline'
            className='w-full outline rounded-md my-2 py-1'
          >
            Sign up
          </button>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
