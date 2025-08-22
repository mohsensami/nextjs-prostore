"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  ShoppingCart,
  Truck,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Heart,
  BadgeCheck,
  Check,
} from "lucide-react";
import Image from "next/image";

// TypeScript interfaces
interface BadgeProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface SpecProps {
  name: string;
  value: string;
}

interface TabItem {
  key: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
}

// ⚠️ نکته: برای دید بهتر، از رنگ‌های دلخواه (navy & gold) با کدهای هگز استفاده شده است.
// سرمه‌ای: #0b1a33  |  طلایی: #d4af37

const IMAGES = [
  "https://picsum.photos/id/100/1200/800",
  "https://picsum.photos/id/101/1200/800",
  "https://picsum.photos/id/102/1200/800",
  "https://picsum.photos/id/103/1200/800",
];

const SIZES = ["XS", "S", "M", "L", "XL"];

const COLOR_SWATCHES = [
  { name: "Navy", value: "#0b1a33" },
  { name: "Gold", value: "#d4af37" },
  { name: "Ivory", value: "#f5f0e6" },
  { name: "Charcoal", value: "#2b2b2b" },
];

export default function ProductPage() {
  const [index, setIndex] = useState(0);
  const [isZoom, setIsZoom] = useState(false);
  const [size, setSize] = useState("M");
  const [color, setColor] = useState(COLOR_SWATCHES[0].value);
  const [qty, setQty] = useState(1);

  const price = 129.0;
  const discount = 20; // درصد تخفیف نمونه
  const finalPrice = useMemo(() => (price * (100 - discount)) / 100, [price]);

  const next = () => setIndex((p) => (p + 1) % IMAGES.length);
  const prev = () => setIndex((p) => (p - 1 + IMAGES.length) % IMAGES.length);

  return (
    <div className="min-h-screen bg-[#0b1a33] text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-[#0b1a33]/70 bg-[#0b1a33]/80 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-[#d4af37] flex items-center justify-center shadow">
              <BadgeCheck className="w-5 h-5 text-[#0b1a33]" />
            </div>
            <span className="font-bold tracking-wide text-lg">RoyalLine</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a className="hover:text-[#d4af37] transition" href="#details">
              جزییات
            </a>
            <a className="hover:text-[#d4af37] transition" href="#specs">
              مشخصات
            </a>
            <a className="hover:text-[#d4af37] transition" href="#reviews">
              نظرات
            </a>
          </nav>

          <button className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 bg-[#d4af37] text-[#0b1a33] font-semibold shadow hover:shadow-lg transition">
            <Heart className="w-4 h-4" />
            <span>علاقه‌مندی</span>
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gallery */}
        <section className="relative">
          <div className="rounded-3xl overflow-hidden bg-[#091427] ring-1 ring-white/10 shadow-xl">
            <div className="relative aspect-[4/3]">
              <AnimatePresence initial={false} mode="wait">
                <motion.img
                  key={index}
                  src={IMAGES[index]}
                  alt={`تصویر ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setIsZoom(true)}
                />
              </AnimatePresence>

              {/* Controls */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-between p-2">
                <button
                  aria-label="Previous"
                  onClick={prev}
                  className="pointer-events-auto rounded-full p-2 bg-[#0b1a33]/70 hover:bg-[#0b1a33] border border-white/10 backdrop-blur shadow"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  aria-label="Next"
                  onClick={next}
                  className="pointer-events-auto rounded-full p-2 bg-[#0b1a33]/70 hover:bg-[#0b1a33] border border-white/10 backdrop-blur shadow"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 p-3 overflow-x-auto bg-[#0b1a33]/60">
              {IMAGES.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setIndex(i)}
                  className={`relative shrink-0 w-20 h-16 rounded-xl overflow-hidden ring-2 transition ${
                    i === index
                      ? "ring-[#d4af37]"
                      : "ring-white/10 hover:ring-white/30"
                  }`}
                  aria-label={`تصویر بندانگشتی ${i + 1}`}
                >
                  <Image
                    src={src}
                    alt="thumb"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Zoom Modal */}
          <AnimatePresence>
            {isZoom && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6"
                onClick={() => setIsZoom(false)}
              >
                <motion.img
                  src={IMAGES[index]}
                  alt="zoomed"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  className="max-h-[85vh] max-w-[90vw] rounded-3xl shadow-2xl"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Info */}
        <section className="flex flex-col gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-[#d4af37] text-[#0b1a33] text-xs font-bold tracking-wide">
              جدید
            </div>
            <h1 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight">
              کت اسپرت مردانه مدل RoyalLine
            </h1>
            <p className="mt-2 text-white/80">
              کت اسپرت با پارچه باکیفیت و دوخت دقیق؛ مناسب مجالس رسمی و
              مهمانی‌ها. طراحی مینیمال با ترکیب رنگ سرمه‌ای و جزئیات طلایی.
            </p>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4 ? "fill-[#d4af37] text-[#d4af37]" : "text-white/30"
                  }`}
                />
              ))}
              <span className="text-sm text-white/70">(234 نظر)</span>
            </div>
          </div>

          {/* Price */}
          <div className="rounded-3xl p-4 bg-gradient-to-br from-[#0b1a33] to-[#091427] ring-1 ring-white/10 shadow-xl">
            <div className="flex items-end gap-3">
              <div className="text-3xl font-extrabold text-[#d4af37]">
                {finalPrice.toLocaleString("fa-IR")} تومان
              </div>
              <div className="line-through text-white/50">
                {price.toLocaleString("fa-IR")} تومان
              </div>
              <div className="ms-auto inline-flex items-center rounded-full px-2.5 py-1 text-xs bg-[#d4af37]/15 text-[#d4af37] ring-1 ring-[#d4af37]/40">
                {discount}% تخفیف
              </div>
            </div>

            {/* Options */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-white/70">رنگ</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {COLOR_SWATCHES.map((c) => (
                    <button
                      key={c.value}
                      onClick={() => setColor(c.value)}
                      className={`relative w-10 h-10 rounded-2xl ring-2 transition ${
                        color === c.value
                          ? "ring-[#d4af37] scale-95"
                          : "ring-white/10 hover:ring-white/30"
                      }`}
                      style={{ background: c.value }}
                      aria-label={`انتخاب رنگ ${c.name}`}
                    >
                      {color === c.value && (
                        <Check className="absolute -top-2 -right-2 w-5 h-5 text-[#d4af37] bg-[#0b1a33] rounded-full p-0.5" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm text-white/70">سایز</label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`rounded-2xl px-4 py-2 ring-2 transition font-bold ${
                        size === s
                          ? "bg-[#d4af37] text-[#0b1a33] ring-transparent"
                          : "bg-[#0b1a33] ring-white/10 hover:ring-white/30"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quantity + CTAs */}
            <div className="mt-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-end">
              <div className="flex items-center gap-2 bg-[#0b1a33] ring-1 ring-white/10 rounded-2xl p-2 w-full sm:w-auto">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 rounded-xl bg-[#091427] hover:bg-[#0b1a33] grid place-items-center"
                >
                  −
                </button>
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={(e) =>
                    setQty(Math.max(1, Number(e.target.value) || 1))
                  }
                  className="w-16 text-center bg-transparent outline-none"
                />
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-10 h-10 rounded-xl bg-[#091427] hover:bg-[#0b1a33] grid place-items-center"
                >
                  +
                </button>
              </div>

              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 bg-[#d4af37] text-[#0b1a33] font-extrabold shadow hover:shadow-xl transition">
                <ShoppingCart className="w-5 h-5" />
                افزودن به سبد خرید
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 bg-gradient-to-r from-[#d4af37] to-[#e8d48a] text-[#0b1a33] font-extrabold shadow hover:shadow-xl transition">
                خرید فوری
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Badge
              icon={<Truck className="w-5 h-5" />}
              title="ارسال سریع"
              desc="تحویل ۲۴ تا ۷۲ ساعت"
            />
            <Badge
              icon={<ShieldCheck className="w-5 h-5" />}
              title="ضمانت اصالت"
              desc="کالای اورجینال و معتبر"
            />
            <Badge
              icon={<Star className="w-5 h-5" />}
              title="رضایت بالا"
              desc="امتیاز ۴٫۸ از ۵"
            />
          </div>
        </section>
      </main>

      {/* Tabs / Details */}
      <section id="details" className="mx-auto max-w-7xl px-4 pb-16">
        <div className="rounded-3xl bg-[#091427] ring-1 ring-white/10 p-6 shadow-xl">
          <Tabs
            items={[
              {
                key: "desc",
                label: "توضیحات",
                content: (
                  <ul className="list-disc ps-6 space-y-2 text-white/80">
                    <li>پارچه تنفس‌پذیر و مقاوم</li>
                    <li>فرم شیک با الگوی مدرن</li>
                    <li>دوخت تمیز با توجه به جزئیات</li>
                    <li>قابل ست کردن با استایل رسمی و نیمه‌رسمی</li>
                  </ul>
                ),
              },
              {
                key: "specs",
                label: "مشخصات",
                content: (
                  <div
                    id="specs"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/80"
                  >
                    <Spec name="جنس" value="پلی‌استر-ویسکوز" />
                    <Spec name="الگو" value="اسلیم فیت" />
                    <Spec name="یقه" value="یقه آرشال" />
                    <Spec name="مبدا" value="ساخت ایران" />
                  </div>
                ),
              },
              {
                key: "shipping",
                label: "ارسال و مرجوعی",
                content: (
                  <div className="text-white/80 space-y-2">
                    <p>
                      ارسال به سراسر کشور با پست پیشتاز؛ هزینه بر اساس شهر
                      محاسبه می‌شود.
                    </p>
                    <p>مرجوعی تا ۷ روز در صورت عدم استفاده و حفظ پکینگ.</p>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="mx-auto max-w-7xl px-4 pb-24">
        <h2 className="text-2xl font-extrabold">نظرات کاربران</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-3xl bg-[#091427] ring-1 ring-white/10 p-5 shadow-xl"
            >
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={`w-4 h-4 ${
                      j < 5 - (i % 2)
                        ? "fill-[#d4af37] text-[#d4af37]"
                        : "text-white/30"
                    }`}
                  />
                ))}
              </div>
              <p className="mt-3 text-white/80 leading-7">
                خیلی کیفیت خوبی داره و کاملاً با تصویر مطابقت داشت. بسته‌بندی
                تمیز بود و سایز دقیقاً مثل جدول راهنما.
              </p>
              <div className="mt-4 text-sm text-white/60">
                کاربر {i} • ۱۴۰۳/۰۳/۱۲
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} RoyalLine — تمامی حقوق محفوظ است.
        </div>
      </footer>
    </div>
  );
}

function Badge({ icon, title, desc }: BadgeProps) {
  return (
    <div className="rounded-3xl p-4 bg-[#0b1a33] ring-1 ring-white/10 flex items-center gap-3">
      <div className="w-10 h-10 rounded-2xl bg-[#d4af37]/15 grid place-items-center ring-1 ring-[#d4af37]/40">
        <span className="text-[#d4af37]">{icon}</span>
      </div>
      <div>
        <div className="font-extrabold text-white">{title}</div>
        <div className="text-white/70 text-sm">{desc}</div>
      </div>
    </div>
  );
}

function Spec({ name, value }: SpecProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-[#0b1a33] ring-1 ring-white/10 p-3">
      <span className="text-white/60">{name}</span>
      <span className="font-bold text-white">{value}</span>
    </div>
  );
}

function Tabs({ items }: TabsProps) {
  const [active, setActive] = useState(items?.[0]?.key ?? "tab");
  return (
    <div>
      <div className="flex gap-2 overflow-x-auto">
        {items.map((it: TabItem) => (
          <button
            key={it.key}
            onClick={() => setActive(it.key)}
            className={`rounded-2xl px-4 py-2 font-bold transition ring-2 ${
              active === it.key
                ? "bg-[#d4af37] text-[#0b1a33] ring-transparent"
                : "bg-[#0b1a33] text-white ring-white/10 hover:ring-white/30"
            }`}
          >
            {it.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {items.map((it: TabItem) => (
          <div key={it.key} className={active === it.key ? "block" : "hidden"}>
            {it.content}
          </div>
        ))}
      </div>
    </div>
  );
}
