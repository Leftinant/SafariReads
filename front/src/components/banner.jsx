import React from 'react';
import banner from "../../public/banner.jpg";

function Banner() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row'>
        <div className='w-full w-1/2 '>
            <img src={banner} className="w-auto h-120 md:ml-30 mt-10" alt="banner" />
        </div>
        <div className='w-full w-1/2 md:mt-30'>
            <div className='space-y-12'>
                <h1 className='text-4xl font-bold'>
                    Welcome to Safari Reads - <span className='text-yellow-600'>Your Reading Safari Begins Here.</span>
                </h1>
                <p className='text-xl'>
                    Here, we believe every reader deserves an adventure. Dive into tales from across kenya, africa, and the world. Every book is a journey. Where will yours take you today ?
                </p>
                <label className="input validator">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                    >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                </svg>
                <input type="email" placeholder="Enter your email to login" required />
                </label>
            </div>
            <button className="bg-yellow-600 btn btn-secondary border-none mt-5 hover:bg-yellow-800 duration-1000 cursor-pointer px-10 ">Sign In</button>
        </div>
        
    </div>
    </>
  )
}

export default Banner