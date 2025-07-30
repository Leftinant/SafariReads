import { useEffect, useState, useContext } from "react";
import Login from "./Login";
import { AuthContext } from "../context/AuthContext";
import Cart from "./Cart";

function NavBar() {
  const { user } = useContext(AuthContext);

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
          <a href='/'>HOME</a>
        </b>
      </li>
      <li>
        <b>
          <a href='/category'>CATEGORIES</a>
        </b>
      </li>
      <li>
        <b>
          <a href='/contact'>CONTACT</a>
        </b>
      </li>
    </>
  );

  return (
    <>
      <div className='max-w-screen container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-99 bg-white text-black dark:bg-slate-900 dark:text-white'>
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
            <img src='logo.png' className='w-15 mr-3' />
            <a className='text-2xl font-bold cursor-pointer'>Safari Reads</a>
          </div>

          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>{navItems}</ul>
          </div>

          <div className='navbar-end md:space-x-5'>
            <div className='hidden md:block'>
              <label className='px-3 py-1 border-b-2 rounded-2xl flex items-center gap-2'>
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
            <div className='hidden md:block'>
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
            {!user ? (
              <>
                <a
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  <button className='btn bg-yellow-500 hover:bg-yellow-700 mx-3 rounded-2xl '>
                    Login
                  </button>
                </a>
                <Login />
              </>
            ) : (
              <div className='flex items-center space-x-4'>
                <div className='dropdown dropdown-end'>
                  <label
                    tabIndex={0}
                    className='btn btn-ghost btn-circle avatar'
                  >
                    <div className='w-10 rounded-full'>
                      <i className='fas fa-user md:text-2xl mt-3'></i>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                  >
                    <li>
                      <a className='justify-between'>
                        Profile <span className='badge'>New</span>
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          localStorage.removeItem("token");
                          localStorage.removeItem("user");
                          window.location.reload();
                        }}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>

                <div
                  className='cursor-pointer mt-3 flex items-center'
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  <span className='mr-2'>My Cart</span>
                  <i className='fas fa-cart-shopping md:text-2xl ml-1'></i>
                </div>
                <Cart />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
