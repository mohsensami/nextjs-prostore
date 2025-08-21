import React from "react";
// import { Sparkles, Crown, Gem, Diamond } from 'lucide-react';

// Main application component
export default function page() {
  return (
    <div className="bg-neutral-950 text-amber-100 font-sans antialiased overflow-x-hidden">
      {/* --- Header Section --- */}
      <header className="py-6 px-4 md:px-8 lg:px-12 flex justify-between items-center sticky top-0 z-50 bg-neutral-950 bg-opacity-90 backdrop-blur-sm">
        <a
          href="#"
          className="flex items-center gap-2 text-2xl font-bold tracking-widest uppercase"
        >
          {/* <Sparkles className="w-6 h-6 text-amber-500" /> */}
          <span className="text-amber-500">Gold</span>
          <span className="text-amber-100">Lux</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#"
            className="font-semibold text-sm hover:text-amber-500 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="font-semibold text-sm hover:text-amber-500 transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="font-semibold text-sm hover:text-amber-500 transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="font-semibold text-sm hover:text-amber-500 transition-colors"
          >
            Contact
          </a>
        </nav>
        <button className="px-4 py-2 border border-amber-500 rounded-full text-sm font-semibold transition-all hover:bg-amber-500 hover:text-neutral-950">
          Sign In
        </button>
      </header>

      {/* --- Hero Section --- */}
      <main>
        <section className="relative h-screen flex items-center justify-center p-4 text-center">
          {/* Background image with a golden tint overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://placehold.co/1920x1080/403000/fff?text=Luxury+Collection"
              alt="Luxury gold background"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-neutral-950 opacity-50"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-amber-300">
              Discover the Essence of{" "}
              <span className="text-amber-500">True Gold</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-neutral-300">
              Experience unparalleled luxury and sophistication with our
              exclusive collection of fine products.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="bg-amber-500 text-neutral-950 font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
                Explore Now
              </button>
              <button className="text-neutral-300 font-semibold py-3 px-8 rounded-full border border-amber-500 transition-colors hover:bg-amber-500 hover:text-neutral-950">
                View Gallery
              </button>
            </div>
          </div>
        </section>

        {/* --- Features Section --- */}
        <section className="py-20 px-4 md:px-8 lg:px-12 bg-neutral-900">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-amber-500 mb-4">
            Our Core Values
          </h2>
          <p className="text-center text-neutral-400 max-w-3xl mx-auto mb-16">
            We are dedicated to providing the highest quality and craftsmanship
            in every piece we create.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature Card 1 */}
            <div className="bg-neutral-950 rounded-xl p-8 shadow-xl border border-amber-700 hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center items-center h-16 w-16 mx-auto bg-amber-500 rounded-full mb-6">
                {/* <Crown className="w-8 h-8 text-neutral-950" /> */}
              </div>
              <h3 className="text-2xl font-bold text-amber-300 text-center mb-2">
                Unmatched Quality
              </h3>
              <p className="text-center text-neutral-400">
                Each product is meticulously crafted with the finest materials
                and attention to detail.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-neutral-950 rounded-xl p-8 shadow-xl border border-amber-700 hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center items-center h-16 w-16 mx-auto bg-amber-500 rounded-full mb-6">
                {/* <Gem className="w-8 h-8 text-neutral-950" /> */}
              </div>
              <h3 className="text-2xl font-bold text-amber-300 text-center mb-2">
                Exclusive Designs
              </h3>
              <p className="text-center text-neutral-400">
                Our limited-edition designs ensure you own a piece of unique,
                wearable art.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-neutral-950 rounded-xl p-8 shadow-xl border border-amber-700 hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center items-center h-16 w-16 mx-auto bg-amber-500 rounded-full mb-6">
                {/* <Diamond className="w-8 h-8 text-neutral-950" /> */}
              </div>
              <h3 className="text-2xl font-bold text-amber-300 text-center mb-2">
                Sustainable Practices
              </h3>
              <p className="text-center text-neutral-400">
                We are committed to ethical sourcing and eco-friendly processes
                in all our production.
              </p>
            </div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="py-20 px-4 md:px-8 lg:px-12 bg-neutral-950">
          <div className="max-w-4xl mx-auto text-center rounded-2xl p-10 bg-amber-900 border border-amber-700">
            <h2 className="text-3xl font-bold text-amber-100 mb-4">
              Ready to Adorn Yourself?
            </h2>
            <p className="text-neutral-200 text-lg max-w-2xl mx-auto mb-8">
              Explore our latest arrivals and find the perfect piece to elevate
              your style.
            </p>
            <button className="bg-amber-500 text-neutral-950 font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105">
              Shop The Collection
            </button>
          </div>
        </section>
      </main>

      {/* --- Footer Section --- */}
      <footer className="py-8 px-4 md:px-8 lg:px-12 text-center text-neutral-400 border-t border-neutral-800">
        <p className="text-sm">&copy; 2024 GoldLux. All rights reserved.</p>
        <div className="mt-2 flex justify-center gap-4 text-xs">
          <a href="#" className="hover:text-amber-500 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-amber-500 transition-colors">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
}
