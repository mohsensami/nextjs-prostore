"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* سمت راست - لوگو */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-indigo-600">
              فروشگاه آنلاین
            </h1>
          </div>

          {/* منو وسط - برای دسکتاپ */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-indigo-600 transition duration-300"
            >
              خانه
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-indigo-600 transition duration-300"
            >
              محصولات
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-indigo-600 transition duration-300"
            >
              درباره ما
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-indigo-600 transition duration-300"
            >
              تماس با ما
            </Link>
          </nav>

          {/* سمت چپ - آیکون ها */}
          <div className="flex items-center space-x-4">
            {/* سبد خرید */}
            <div className="relative">
              <button className="text-gray-700 hover:text-indigo-600 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                3
              </span>
            </div>

            {/* دکمه ورود */}
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 text-sm hidden sm:block">
              ورود / ثبت نام
            </button>

            {/* منو همبرگر برای موبایل */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* منوی موبایل */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href="#"
                className="text-gray-700 hover:text-indigo-600 transition duration-300 py-2"
              >
                خانه
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-indigo-600 transition duration-300 py-2"
              >
                محصولات
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-indigo-600 transition duration-300 py-2"
              >
                درباره ما
              </Link>
              <Link
                href="#"
                className="text-gray-700 hover:text-indigo-600 transition duration-300 py-2"
              >
                تماس با ما
              </Link>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300 w-full mt-2">
                ورود / ثبت نام
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
