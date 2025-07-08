import { useState } from "react";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
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

    if (!formData.agree) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    // Submit the data (e.g., to Firebase or your backend)
    console.log("Form Data:", formData);
  };

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-99 bg-white text-black dark:bg-slate-900 dark:text-white'>
        <div className='navbar shadow-sm  dark:bg-slate-900 dark:text-white  bg-white text-black'>
          <div className='navbar-start'>
            <a className='text-2xl font-bold cursor-pointer'>Safari Reads</a>
          </div>
        </div>
      </div>
      <div className=' flex h-screen items-center justify-center'>
        <div className='max-w-md mx-auto p-6 bg-white rounded-xl shadow-md'>
          <h2 className='text-2xl font-bold mb-4 text-gray-800'>
            Create an Account{" "}
            <span className='text-sm '>
              or{" "}
              <a
                className='text-blue-700'
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Sign in
              </a>
            </span>
          </h2>
          <form onSubmit={handleSubmit} className='space-y-4'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Full Name</span>
              </label>
              <input
                type='text'
                name='name'
                className='input input-bordered w-full'
                placeholder='Jane Doe'
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input
                type='email'
                name='email'
                className='input input-bordered w-full'
                placeholder='jane@example.com'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <input
                type='password'
                name='password'
                className='input input-bordered w-full'
                placeholder='••••••••'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Confirm Password</span>
              </label>
              <input
                type='password'
                name='confirmPassword'
                className='input input-bordered w-full'
                placeholder='••••••••'
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className='form-control'>
              <label className='cursor-pointer label'>
                <input
                  type='checkbox'
                  name='agree'
                  className='checkbox checkbox-sm mr-2'
                  checked={formData.agree}
                  onChange={handleChange}
                />
                <span className='label-text'>
                  I agree to the{" "}
                  <a className='text-blue-600 hover:underline' href='#'>
                    Terms & Conditions
                  </a>
                </span>
              </label>
            </div>

            <div className='form-control'>
              <button
                type='submit'
                className='btn shadow-xl bg-yellow-600 w-full'
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
