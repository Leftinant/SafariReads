import { useEffect, useState } from "react";

function NavBar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, []);

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
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-99'>
        <div className='navbar bg-base-100 shadow-sm'>
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
                <input type='search' className='grow' placeholder='Search' />
              </label>
            </div>
            <div>
              <label className='toggle text-base-content'>
                <input
                  type='checkbox'
                  value='synthwave'
                  className='theme-controller'
                />
                <svg
                  aria-label='sun'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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
                <svg
                  aria-label='moon'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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
              </label>
            </div>
            <div className=''>
              <a className='bg-black text-white px-5 py-2 rounded-md hover:bg-slate-500 duration-1000 cursor-pointer'>
                Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
