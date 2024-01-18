import React from "react";

const Nav = () => {
  return (
    <nav className="bg-gray-50 border-gray-500 dark:bg-gray-900 max-w-screen-xl flex flex-wrap items-center  mx-auto rounded-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="/football"
              className="text-blue-600 hover:text-orange-500"
              aria-current="page"
            >
              Football
            </a>
          </li>
          <li>
            <a
              href="/soccer"
              className="text-blue-600 hover:text-orange-500"
              aria-current="page"
            >
              Futbol/Soccer
            </a>
          </li>
          <li>
            <a
              href="/baseball"
              className="text-blue-600 hover:text-orange-500"
              aria-current="page"
            >
              Baseball
            </a>
          </li>
          <li>
            <a
              href="/basketball"
              className="text-blue-600 hover:text-orange-500"
              aria-current="page"
            >
              BasketBall
            </a>
          </li>
          <li>
            <a
              href="/hockey"
              className="text-blue-600 hover:text-orange-500"
              aria-current="page"
            >
              Hockey
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
