import { UserButton } from "@clerk/nextjs";
import React from "react";

const Nav = () => {
  return (
    <nav className="bg-gray-50 border-gray-500 dark:bg-gray-900 max-w-screen-xl flex flex-wrap items-center  mx-auto rounded-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
            >
              Football
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Futbol/Soccer
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              Baseball
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              BasketBall
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-6 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
