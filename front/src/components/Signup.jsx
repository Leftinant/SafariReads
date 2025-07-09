import { useState } from "react";
import Login from "./Login";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Submit the data (e.g., to Firebase or your backend)
    console.log("Form Data:", formData);
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-99'>
        <div className='navbar shadow-sm '>
          <div className='navbar-start'>
            <img src='logo.png' className='w-15 mr-3' />
            <a className='text-2xl font-bold cursor-pointer'>Safari Reads</a>
          </div>
        </div>
      </div>
      <div className=' flex h-screen items-center justify-center'>
        <div className='max-w-md  mx-auto p-6 rounded-xl shadow-md'>
          <div className='relative'>
            <h2 className='text-2xl font-bold mb-4'>Create an Account</h2>
            <span className='absolute font-bold top-0 right-0 text-'>
              or{" "}
              <a
                className='text-blue-700 cursor-pointer'
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>
            </span>
            <Login />
          </div>
          <div className='mx-10'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='form-control'>
                <label className='text-sm'>Name</label>
                <input
                  type='text'
                  name='name'
                  className=' input border-primary-content w-full rounded-2xl px-3 text-l'
                  placeholder='Full Name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='form-control'>
                <label className='text-sm'>Email</label>
                <input
                  type='email'
                  name='email'
                  className='input border-primary-content w-full rounded-2xl p-3 text-l'
                  placeholder='me@example.com'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className='form-control'>
                <label className='text-sm'>Password</label>
                <input
                  type='password'
                  name='password'
                  className='input border-primary-content w-full rounded-2xl p-3 text-l'
                  placeholder='••••••••'
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <p className='w-full text-xs pl-2 pt-2 text-gray-700'>
                  Use 8 or more letters, numbers and symbols
                </p>
              </div>

              <div className='form-control'>
                <label className='text-sm'>Confirm Password</label>
                <input
                  type='password'
                  name='confirmPassword'
                  className='input border-primary-content w-full rounded-2xl p-3 text-l'
                  placeholder='••••••••'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='form-control'>
                <button
                  type='submit'
                  className=' w-full rounded-2xl bg-yellow-500 hover:bg-yellow-700 duration-500 text-white py-2 font-bold mt-2'
                >
                  Sign Up
                </button>
              </div>
              <div className='w-full text-center'>
                <p className='text-xs text-gray-700'>
                  By continuing, you agree to our{" "}
                  <span className='underline cursor-pointer'>
                    Terms and conditions
                  </span>{" "}
                  and acknowledge you've read our{" "}
                  <span className='underline cursor-pointer'>
                    Privacy Policy
                  </span>{" "}
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
