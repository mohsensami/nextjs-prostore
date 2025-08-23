'use client'

import { useState } from "react";
import { Menu, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "خانه", href: "#" },
    {
      name: "محصولات",
      href: "#",
      sub: ["کالای دیجیتال", "مد و پوشاک", "لوازم خانگی"],
    },
    { name: "درباره ما", href: "#" },
    { name: "تماس با ما", href: "#" },
  ];

  return (
    <header className="bg-sky-900 text-yellow-400 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* لوگو سمت راست */}
        <div className="font-bold text-xl">فروشگاه من</div>

        {/* منو دسکتاپ */}
        <nav className="hidden md:flex gap-6 text-yellow-300">
          {navItems.map((item, i) => (
            <div key={i} className="relative group cursor-pointer">
              <a href={item.href} className="hover:text-yellow-500">
                {item.name}
              </a>
              {item.sub && (
                <div className="absolute hidden group-hover:block bg-sky-800 text-yellow-300 mt-2 rounded-lg shadow-lg">
                  {item.sub.map((s, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block px-4 py-2 hover:bg-sky-700 hover:text-yellow-400"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* سمت چپ: سبد خرید و ورود */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-yellow-400 hover:text-yellow-500"
          >
            <ShoppingCart />
          </Button>
          <Button
            variant="outline"
            className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-sky-900"
          >
            <User className="mr-2 h-4 w-4" /> ورود
          </Button>

          {/* موبایل همبرگر */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-yellow-400"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-sky-900 text-yellow-300">
              <nav className="flex flex-col gap-4 mt-6">
                {navItems.map((item, i) => (
                  <div key={i}>
                    <a
                      href={item.href}
                      className="block py-2 hover:text-yellow-400"
                    >
                      {item.name}
                    </a>
                    {item.sub && (
                      <div className="ml-4 flex flex-col gap-2">
                        {item.sub.map((s, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="text-sm hover:text-yellow-400"
                          >
                            {s}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
