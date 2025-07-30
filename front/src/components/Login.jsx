import { useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const base = import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${base}/api/user/login`, formData);
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setUser(user);
      window.location.reload();

      toast.success("Login successful!");
      document.getElementById("my_modal_3").close();
    } catch (err) {
      console.error("Login error:", err);
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div>
      <dialog id='my_modal_3' className='modal'>
        <div className='modal-box md:w-110 md:px-20 w-auto px-10 mx-10 rounded-3xl dark:bg-slate-900'>
          <form onSubmit={handleSubmit}>
            <button
              type='button'
              className='px-2 absolute text-xl text-gray-500 right-2 top-2 cursor-pointer hover:text-black'
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <div className=' w-full justify-items-center'>
              <img src='logo.png' alt='logo' className='w-20 ' />
              <h2 className='font-bold mb-5 text-2xl'>Login to your account</h2>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='grid'>
                <label htmlFor='email'>Email</label>
                <label className='input validator rounded-2xl'>
                  <svg
                    className='h-[1em] opacity-50'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    <g
                      strokeLinejoin='round'
                      strokeLinecap='round'
                      strokeWidth='2.5'
                      fill='none'
                      stroke='currentColor'
                    >
                      <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                      <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                    </g>
                  </svg>
                  <input
                    type='email'
                    name='email'
                    placeholder='mail@site.com'
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>
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
                <label className='input validator rounded-2xl mb-5'>
                  <svg
                    className='h-[1em] opacity-50'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                  >
                    <g
                      strokeLinejoin='round'
                      strokeLinecap='round'
                      strokeWidth='2.5'
                      fill='none'
                      stroke='currentColor'
                    >
                      <path d='M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z'></path>
                      <circle
                        cx='16.5'
                        cy='7.5'
                        r='.5'
                        fill='currentColor'
                      ></circle>
                    </g>
                  </svg>
                  <input
                    type='password'
                    name='password'
                    required
                    placeholder='Password'
                    minLength='8'
                    pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
                    title='Must be more than 8 characters, including number, lowercase letter, uppercase letter'
                    value={formData.password}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
            <button
              type='submit'
              className='btn w-full bg-yellow-600 text-white rounded-xl py-2 cursor-pointer font-semibold hover:bg-yellow-700 duration-500'
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
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
