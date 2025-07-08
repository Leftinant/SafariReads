import { useEffect, useState } from "react";
import Login from "./Login";

function NavBar() {
  localStorage.removeItem("theme");
  const [theme, setTheme] = useState(() => {
    if (localStorage.theme) return localStorage.theme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navItems = (
    <>
      <li>
        <b>
          <a href='/'>Home</a>
        </b>
      </li>
      <li>
        <b>
          <a href='/category'>Library</a>
        </b>
      </li>
      <li>
        <b>
          <a>Contact</a>
        </b>
      </li>
      <li>
        <b>
          <a>About</a>
        </b>
      </li>
    </>
  );

  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-99 bg-white text-black dark:bg-slate-900 dark:text-white'>
        <div className='navbar shadow-sm  dark:bg-slate-900 dark:text-white  bg-white text-black'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  {" "}
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow'
              >
                {navItems}
              </ul>
            </div>
            <a className='text-2xl font-bold cursor-pointer'>Safari Reads</a>
          </div>
          <div className='navbar-end space-x-3'>
            <div className='navbar-center hidden lg:flex'>
              <ul className='menu menu-horizontal px-1'>{navItems}</ul>
            </div>
            <div className='hidden md:block'>
              <label className='px-3 py-1 border rounded-2xl flex items-center gap-2'>
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
                    <circle cx='11' cy='11' r='8'></circle>
                    <path d='m21 21-4.3-4.3'></path>
                  </g>
                </svg>
                <input
                  type='search'
                  className='grow outline-none'
                  placeholder='Search'
                />
              </label>
            </div>
            <div>
              <label className='toggle text-base-content'>
                <input
                  type='checkbox'
                  value='synthwave'
                  className='theme-controller'
                  onClick={toggleTheme}
                />
                <svg
                  aria-label='moon'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <g
                    strokeLinejoin='round'
                    strokeLinecap='round'
                    strokeWidth='2'
                    fill='none'
                    stroke='currentColor'
                  >
                    <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z'></path>
                  </g>
                </svg>
                <svg
                  aria-label='sun'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                >
                  <g
                    strokeLinejoin='round'
                    strokeLinecap='round'
                    strokeWidth='2'
                    fill='none'
                    stroke='currentColor'
                  >
                    <circle cx='12' cy='12' r='4'></circle>
                    <path d='M12 2v2'></path>
                    <path d='M12 20v2'></path>
                    <path d='m4.93 4.93 1.41 1.41'></path>
                    <path d='m17.66 17.66 1.41 1.41'></path>
                    <path d='M2 12h2'></path>
                    <path d='M20 12h2'></path>
                    <path d='m6.34 17.66-1.41 1.41'></path>
                    <path d='m19.07 4.93-1.41 1.41'></path>
                  </g>
                </svg>
              </label>
            </div>
            <div className=''>
              <a
                className='bg-yellow-600 text-white px-5 py-2 rounded-3xl hover:bg-slate-500 duration-1000 cursor-pointer'
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Login
              </a>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
