"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Header = () => {
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
            <Button className="hidden sm:block bg-indigo-600 hover:bg-indigo-700 text-sm">
              ورود / ثبت نام
            </Button>

            {/* منو همبرگر برای موبایل با Sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-gray-700"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <SheetHeader>
                  <SheetTitle className="text-indigo-600 font-bold">
                    منو
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-3 mt-6">
                  <Link
                    href="/"
                    className="text-gray-700 hover:text-indigo-600 transition duration-300 py-2"
                  >
                    خانه
                  </Link>
                  <Link
                    href="/products"
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
                  <Button className="bg-indigo-600 hover:bg-indigo-700 w-full mt-2">
                    ورود / ثبت نام
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
