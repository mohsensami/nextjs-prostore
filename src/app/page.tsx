"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import Image from "next/image";

//
// === Sample Data ===
//
const banners = [
  {
    id: 1,
    img: "https://picsum.photos/id/1011/1200/500",
    title: "کالکشن جدید پاییز",
    subtitle: "طلا و جواهرات مدرن با تخفیف ویژه",
  },
  {
    id: 2,
    img: "https://picsum.photos/id/1012/1200/500",
    title: "حراج تابستانی",
    subtitle: "۲۰٪ تخفیف روی همه گردنبندها",
  },
  {
    id: 3,
    img: "https://picsum.photos/id/1013/1200/500",
    title: "لاکچری‌ترین مدل‌ها",
    subtitle: "طراحی خاص برای خاص‌ترین‌ها",
  },
];

const categories = [
  { id: 1, title: "گردنبند", img: "https://picsum.photos/id/1025/400/400" },
  { id: 2, title: "انگشتر", img: "https://picsum.photos/id/1035/400/400" },
  { id: 3, title: "دستبند", img: "https://picsum.photos/id/1045/400/400" },
  { id: 4, title: "گوشواره", img: "https://picsum.photos/id/1055/400/400" },
];

const products = [
  {
    id: 1,
    title: "انگشتر طلای ۱۸ عیار",
    price: 5600000,
    img: "https://picsum.photos/id/1062/400/400",
  },
  {
    id: 2,
    title: "گردنبند سلطنتی",
    price: 12500000,
    img: "https://picsum.photos/id/1072/400/400",
  },
  {
    id: 3,
    title: "دستبند شیک",
    price: 8200000,
    img: "https://picsum.photos/id/1082/400/400",
  },
  {
    id: 4,
    title: "گوشواره رزگلد",
    price: 4500000,
    img: "https://picsum.photos/id/1092/400/400",
  },
];

//
// === Homepage Component ===
//
export default function Page() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % banners.length);
  const prev = () => setIndex((i) => (i - 1 + banners.length) % banners.length);

  return (
    <div className="min-h-screen bg-[#192440] text-white">
      {/* === Banner Slider === */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={banners[index].id}
            src={banners[index].img}
            alt={banners[index].title}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#d4af37]">
            {banners[index].title}
          </h1>
          <p className="mt-3 text-lg md:text-xl">{banners[index].subtitle}</p>
        </div>

        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={prev}
            className="rounded-full p-2 bg-[#0b1a33]/70 hover:bg-[#0b1a33] border border-white/20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="rounded-full p-2 bg-[#0b1a33]/70 hover:bg-[#0b1a33] border border-white/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* === Categories === */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-extrabold mb-6">دسته‌بندی محصولات</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <Image
                src={cat.img}
                width={400}
                height={300}
                alt={cat.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-lg font-bold">{cat.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* === Best Sellers === */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-extrabold mb-6">پرفروش‌ترین‌ها</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-[#091427] rounded-2xl shadow-xl overflow-hidden"
            >
              <Image
                src={p.img}
                alt={p.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-bold">{p.title}</h3>
                <p className="text-[#d4af37] font-extrabold">
                  {p.price.toLocaleString("fa-IR")} تومان
                </p>
                <button className="mt-2 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#d4af37] text-[#0b1a33] font-bold hover:shadow-lg transition">
                  <ShoppingCart className="w-4 h-4" /> افزودن به سبد
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
