"use client";
import codelogo from "@/../public/code.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isMenu, setIsMenu] = useState<boolean>(false);
  return (
    <header className="sticky top-0 right-0 z-50">
      <nav className="bg-white dark:bg-slate-900 w-full start-0 border-b border-slate-200 dark:border-slate-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src={codelogo}
              className="h-8 w-8"
              alt="
             Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              LWS
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
            <button
              onClick={() => setIsMenu((prev) => !prev)}
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`
              ${
                isMenu ? "block" : "hidden"
              } items-center justify-between  w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-slate-800 md:dark:bg-slate-900 dark:border-slate-700">
              <li>
                <Link
                  onClick={() => setIsMenu((prev) => !prev)}
                  href="/"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => setIsMenu((prev) => !prev)}
                  href="/javascript"
                  className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                >
                  Javascript
                </Link>
              </li>
              <li className="relative dropdown-menu">
                <Link
                  href=""
                  className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                >
                  Python
                </Link>

                <ul className="bg-slate-800 sm:absolute top-6 pl-4 sm:w-32 py-2 space-y-2  hidden dropdown-list rounded-md">
                  <li>
                    <Link
                      onClick={() => setIsMenu((prev) => !prev)}
                      href="/python"
                      className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                    >
                      Core Python
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setIsMenu((prev) => !prev)}
                      href="/python/django"
                      className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                    >
                      Django
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setIsMenu((prev) => !prev)}
                      href="python"
                      className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                    >
                      django
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  onClick={() => setIsMenu((prev) => !prev)}
                  href="/jsvspy"
                  className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                >
                  Js Vs Py
                </Link>
              </li>
              <li className="relative dropdown-menu">
                <Link
                  href=""
                  className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                >
                  HTML
                </Link>

                <ul className="bg-slate-800 sm:absolute top-6 pl-4 sm:w-48 py-2 space-y-2  hidden dropdown-list rounded-md">
                  <li>
                    <Link
                      onClick={() => setIsMenu((prev) => !prev)}
                      href="/html-shortcut"
                      className="block py-2 px-3 text-slate-900 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-slate-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-slate-700"
                    >
                      VsCode_ShortCut
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
