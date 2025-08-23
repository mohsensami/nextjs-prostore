"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  link: string;
  price: number;
  size: string;
  karat: number;
  color: string;
  img: string;
};

const PRODUCTS: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i,
  title: `محصول ${i + 1}`,
  link: `/products/${i + 1}`,
  price: (5 + i) * 100000,
  size: ["S", "M", "L"][i % 3],
  karat: [18, 21, 24][i % 3],
  color: ["#d4af37", "#e5c07b", "#f5f0e6"][i % 3],
  img: `https://picsum.photos/seed/${i}/500/500`,
}));

const COLORS = [
  { name: "طلایی", value: "#d4af37" },
  { name: "رزگلد", value: "#e5c07b" },
  { name: "نقره‌ای", value: "#f5f0e6" },
];
const SIZES = ["S", "M", "L", "XL"];
const KARATS = [18, 21, 24];

export default function Products() {
  const [priceRange, setPriceRange] = useState<number>(2000000);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedKarats, setSelectedKarats] = useState<number[]>([]);

  const toggle = <T,>(arr: T[], set: (v: T[]) => void, v: T) => {
    set(arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]);
  };

  const filtered = PRODUCTS.filter((p) => {
    const inPrice = p.price <= priceRange;
    const inColor =
      selectedColors.length > 0 ? selectedColors.includes(p.color) : true;
    const inSize =
      selectedSizes.length > 0 ? selectedSizes.includes(p.size) : true;
    const inKarat =
      selectedKarats.length > 0 ? selectedKarats.includes(p.karat) : true;
    return inPrice && inColor && inSize && inKarat;
  });

  return (
    <div className="min-h-screen bg-[#0b1a33] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters */}
        <aside className="lg:col-span-1 space-y-6 bg-[#091427] rounded-3xl p-6 ring-1 ring-white/10 h-fit lg:sticky top-10">
          <h2 className="text-xl font-extrabold mb-4 text-[#d4af37]">
            فیلتر محصولات
          </h2>

          {/* Price */}
          <div>
            <label className="text-sm text-white/70">حداکثر قیمت</label>
            <input
              type="range"
              min={0}
              max={2000000}
              step={50000}
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full accent-[#d4af37] mt-2"
            />
            <div className="flex justify-between text-xs text-white/60 mt-1">
              <span>0</span>
              <span>{priceRange.toLocaleString()} ت</span>
            </div>
          </div>

          {/* Colors */}
          <div>
            <label className="text-sm text-white/70">رنگ</label>
            <div className="mt-2 flex gap-2 flex-wrap">
              {COLORS.map((c) => (
                <button
                  key={c.value}
                  onClick={() =>
                    toggle(selectedColors, setSelectedColors, c.value)
                  }
                  className={`w-10 h-10 rounded-full ring-2 flex items-center justify-center transition ${
                    selectedColors.includes(c.value)
                      ? "ring-[#d4af37] scale-95"
                      : "ring-white/20 hover:ring-white/40"
                  }`}
                  style={{ background: c.value }}
                >
                  {selectedColors.includes(c.value) && (
                    <Check className="w-5 h-5 text-[#0b1a33]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <label className="text-sm text-white/70">سایز</label>
            <div className="mt-2 flex gap-2 flex-wrap">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => toggle(selectedSizes, setSelectedSizes, s)}
                  className={`px-3 py-1 rounded-xl text-sm font-bold ring-2 transition ${
                    selectedSizes.includes(s)
                      ? "bg-[#d4af37] text-[#0b1a33] ring-transparent"
                      : "bg-[#0b1a33] ring-white/20 hover:ring-white/40"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Karats */}
          <div>
            <label className="text-sm text-white/70">عیار</label>
            <div className="mt-2 flex gap-2 flex-wrap">
              {KARATS.map((k) => (
                <button
                  key={k}
                  onClick={() => toggle(selectedKarats, setSelectedKarats, k)}
                  className={`px-3 py-1 rounded-xl text-sm font-bold ring-2 transition ${
                    selectedKarats.includes(k)
                      ? "bg-[#d4af37] text-[#0b1a33] ring-transparent"
                      : "bg-[#0b1a33] ring-white/20 hover:ring-white/40"
                  }`}
                >
                  {k} عیار
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Products */}
        <section className="lg:col-span-3">
          <h1 className="text-2xl font-extrabold mb-6">محصولات</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.03 }}
                className="rounded-3xl overflow-hidden bg-[#091427] ring-1 ring-white/10 shadow-xl flex flex-col"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    width={400}
                    height={300}
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-bold text-lg">
                    <Link href={p.link}>{p.title}</Link>
                  </h3>
                  <div className="mt-1 text-sm text-white/70">
                    {p.karat} عیار
                  </div>
                  <div className="mt-auto font-extrabold text-[#d4af37]">
                    {p.price.toLocaleString()} تومان
                  </div>
                </div>
              </motion.div>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full text-center text-white/60">
                محصولی یافت نشد
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
