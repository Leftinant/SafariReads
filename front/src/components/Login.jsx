import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const base = import.meta.env.VITE_API_BASE_URL;

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:4001/user/login", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Loggedin Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
          setTimeout(() => {}, 2000);
        }
      });
  };

  return (
    <div>
      <dialog id='my_modal_3' className='modal'>
        <div className='modal-box md:w-110 md:px-20 w-auto px-10 mx-10 rounded-3xl dark:bg-slate-900'>
          <form method='dialog' onSubmit={handleSubmit(onSubmit)}>
            <button className='px-2 absolute text-xl text-gray-500 right-2 top-2 cursor-pointer hover:text-black dark:hover:text-white'>
              ✕
            </button>
          </form>
          <div className=' w-full justify-items-center'>
            <img src='logo.png' alt='logo' className='w-20 ' />
            <h2 className='font-bold mb-5 text-2xl'>Login to your account</h2>
          </div>
          <div className='flex flex-col gap-6'>
            <div className='grid'>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                placeholder='me@example.com'
                className='outline-none border border-gray-300 rounded-2xl p-3 text-l'
                {...register("email", { required: true })}
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
                type='password'
                placeholder='Password'
                className='outline-none border border-gray-300 rounded-2xl p-3 text-l mb-7'
                {...register("password", { required: true })}
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
          <button className='btn w-full outline rounded-md dark:bg-slate-900 py-2'>
            <svg
              aria-label='Google logo'
              width='16'
              height='16'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <g>
                <path d='m0 0H512V512H0' fill='#fff'></path>
                <path
                  fill='#34a853'
                  d='M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341'
                ></path>
                <path
                  fill='#4285f4'
                  d='m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57'
                ></path>
                <path
                  fill='#fbbc02'
                  d='m90 341a208 200 0 010-171l63 49q-12 37 0 73'
                ></path>
                <path
                  fill='#ea4335'
                  d='m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55'
                ></path>
              </g>
            </svg>
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
