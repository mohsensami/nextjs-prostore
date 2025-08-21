import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-navy-900 text-gold-500">
      {/* Header */}
      <header className="bg-navy-800 text-gold-300 py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="text-2xl font-bold">
            <Link
              href="/"
              className="hover:text-gold-200 transition-colors duration-300"
            >
              گالری طلای زرین
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6 text-lg">
            <Link
              href="#"
              className="hover:text-gold-200 transition-colors duration-300"
            >
              خانه
            </Link>
            <Link
              href="#"
              className="hover:text-gold-200 transition-colors duration-300"
            >
              محصولات
            </Link>
            <Link
              href="#"
              className="hover:text-gold-200 transition-colors duration-300"
            >
              درباره ما
            </Link>
            <Link
              href="#"
              className="hover:text-gold-200 transition-colors duration-300"
            >
              تماس با ما
            </Link>
            <Link
              href="#"
              className="hover:text-gold-200 transition-colors duration-300"
            >
              بلاگ
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-navy-700 rounded-full transition-colors duration-300">
              {/* Icon for User */}
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
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            <button className="p-2 hover:bg-navy-700 rounded-full transition-colors duration-300">
              {/* Icon for Shopping Cart */}
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.185 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            <button className="md:hidden p-2 hover:bg-navy-700 rounded-full transition-colors duration-300">
              {/* Icon for Mobile Menu */}
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
      </header>

      {/* Hero Section */}
      <section
        className="relative h-96 md:h-[600px] bg-cover bg-center flex items-center justify-center text-center p-4"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-navy-900 bg-opacity-60"></div>
        <div className="z-10 text-gold-500">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            زیبایی جاودانه، اصالت بی‌نظیر
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            مجموعه نفیس طلا و جواهرات برای لحظات خاص شما
          </p>
          <Link
            href="#"
            className="bg-gold-500 text-navy-900 py-3 px-8 rounded-full font-semibold text-lg hover:bg-gold-400 transition-colors duration-300"
          >
            مشاهده محصولات
          </Link>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          دسته‌بندی‌های محبوب
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Category Card 1 */}
          <Link
            href="#"
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="/images/necklace-category.jpg"
              alt="گردنبند"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-navy-900 bg-opacity-40 flex items-center justify-center">
              <span className="text-2xl font-bold text-white group-hover:text-gold-300 transition-colors duration-300">
                گردنبند
              </span>
            </div>
          </Link>
          {/* Category Card 2 */}
          <Link
            href="#"
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="/images/ring-category.jpg"
              alt="انگشتر"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-navy-900 bg-opacity-40 flex items-center justify-center">
              <span className="text-2xl font-bold text-white group-hover:text-gold-300 transition-colors duration-300">
                انگشتر
              </span>
            </div>
          </Link>
          {/* Category Card 3 */}
          <Link
            href="#"
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="/images/earring-category.jpg"
              alt="گوشواره"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-navy-900 bg-opacity-40 flex items-center justify-center">
              <span className="text-2xl font-bold text-white group-hover:text-gold-300 transition-colors duration-300">
                گوشواره
              </span>
            </div>
          </Link>
          {/* Category Card 4 */}
          <Link
            href="#"
            className="group relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="/images/bracelet-category.jpg"
              alt="دستبند"
              className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-navy-900 bg-opacity-40 flex items-center justify-center">
              <span className="text-2xl font-bold text-white group-hover:text-gold-300 transition-colors duration-300">
                دستبند
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          محصولات منتخب
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Card 1 */}
          <div className="bg-navy-800 rounded-lg shadow-lg p-4 text-center group hover:shadow-xl transition-shadow duration-300">
            <div className="relative overflow-hidden mb-4 rounded-lg">
              <img
                src="/images/product-1.jpg"
                alt="طلا طرح پروانه"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy-900 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-gold-500 text-navy-900 py-2 px-6 rounded-full font-semibold hover:bg-gold-400">
                  افزودن به سبد
                </button>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">گردنبند پروانه</h3>
            <p className="text-lg font-bold text-gold-300">۲۵,۰۰۰,۰۰۰ تومان</p>
          </div>
          {/* Product Card 2 */}
          <div className="bg-navy-800 rounded-lg shadow-lg p-4 text-center group hover:shadow-xl transition-shadow duration-300">
            <div className="relative overflow-hidden mb-4 rounded-lg">
              <img
                src="/images/product-2.jpg"
                alt="حلقه ست"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy-900 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-gold-500 text-navy-900 py-2 px-6 rounded-full font-semibold hover:bg-gold-400">
                  افزودن به سبد
                </button>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">حلقه ست کلاسیک</h3>
            <p className="text-lg font-bold text-gold-300">۴۲,۰۰۰,۰۰۰ تومان</p>
          </div>
          {/* Product Card 3 */}
          <div className="bg-navy-800 rounded-lg shadow-lg p-4 text-center group hover:shadow-xl transition-shadow duration-300">
            <div className="relative overflow-hidden mb-4 rounded-lg">
              <img
                src="/images/product-3.jpg"
                alt="گوشواره میخی"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy-900 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-gold-500 text-navy-900 py-2 px-6 rounded-full font-semibold hover:bg-gold-400">
                  افزودن به سبد
                </button>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              گوشواره میخی نگین‌دار
            </h3>
            <p className="text-lg font-bold text-gold-300">۱۲,۰۰۰,۰۰۰ تومان</p>
          </div>
          {/* Product Card 4 */}
          <div className="bg-navy-800 rounded-lg shadow-lg p-4 text-center group hover:shadow-xl transition-shadow duration-300">
            <div className="relative overflow-hidden mb-4 rounded-lg">
              <img
                src="/images/product-4.jpg"
                alt="دستبند زنجیری"
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navy-900 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-gold-500 text-navy-900 py-2 px-6 rounded-full font-semibold hover:bg-gold-400">
                  افزودن به سبد
                </button>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">دستبند کارتیه</h3>
            <p className="text-lg font-bold text-gold-300">۳۵,۰۰۰,۰۰۰ تومان</p>
          </div>
        </div>
      </section>

      {/* About Us/Promotion Section */}
      <section className="bg-navy-800 py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-right mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              گالری طلای زرین
            </h2>
            <p className="text-lg leading-relaxed">
              با افتخار، مجموعه‌ای بی‌نظیر از زیباترین طلا و جواهرات را به شما
              ارائه می‌دهیم. ما با تلفیق هنر سنتی و طراحی مدرن، قطعاتی خلق
              می‌کنیم که نه تنها ارزشمند هستند، بلکه داستان‌گوی زیبایی و اصالت
              شما خواهند بود.
            </p>
            <Link
              href="#"
              className="mt-6 inline-block bg-gold-500 text-navy-900 py-2 px-6 rounded-full font-semibold hover:bg-gold-400 transition-colors duration-300"
            >
              درباره ما بیشتر بدانید
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="/images/about-us-gold.jpg"
              alt="طلا و جواهرات"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-gold-400 py-8 border-t border-gold-600 border-opacity-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="text-xl font-bold mb-4">گالری طلای زرین</h3>
            <p className="text-sm">
              تجربه‌ای لوکس و متفاوت در خرید طلا و جواهرات.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-gold-300 transition-colors duration-300"
                >
                  محصولات
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gold-300 transition-colors duration-300"
                >
                  درباره ما
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gold-300 transition-colors duration-300"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">شبکه‌های اجتماعی</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              {/* Social Media Icons */}
              <Link
                href="#"
                className="hover:text-gold-300 transition-colors duration-300"
              >
                {/* Instagram Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.625 4.975 4.978.042 1.37.058 1.57.058 4.849 0 3.278-.016 3.478-.058 4.849-.204 3.353-1.723 4.829-4.975 4.977-1.266.06-1.646.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.147-4.77-1.624-4.975-4.977-.042-1.37-.058-1.57-.058-4.85s.016-3.478.058-4.849c.205-3.353 1.724-4.829 4.976-4.978 1.265-.06 1.646-.07 4.85-.07zm0-2.163c-3.376 0-3.722.012-5.068.067-4.152.189-6.027 2.064-6.216 6.216-.055 1.346-.067 1.692-.067 5.068s.012 3.722.067 5.068c.189 4.152 2.064 6.027 6.216 6.216 1.346.055 1.692.067 5.068.067s3.722-.012 5.068-.067c4.152-.189 6.027-2.064 6.216-6.216.055-1.346.067-1.692.067-5.068s-.012-3.722-.067-5.068c-.189-4.152-2.064-6.027-6.216-6.216-1.346-.055-1.692-.067-5.068-.067zM12 7.027c-2.747 0-4.973 2.226-4.973 4.973s2.226 4.973 4.973 4.973 4.973-2.226 4.973-4.973-2.226-4.973-4.973-4.973zm0 8.164c-1.764 0-3.19-1.426-3.19-3.19s1.426-3.19 3.19-3.19 3.19 1.426 3.19 3.19-1.426 3.19-3.19 3.19zm8.563-9.524c-.815 0-1.479.664-1.479 1.479s.664 1.479 1.479 1.479 1.479-.664 1.479-1.479-.664-1.479-1.479-1.479z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="hover:text-gold-300 transition-colors duration-300"
              >
                {/* Telegram Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.895 16.891c-.482.164-.913-.06-.993-.578l-.823-5.114 10.925-4.015-4.507 8.356-4.525 1.343z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default page;
