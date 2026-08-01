"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "", name: "Beranda" },
    { href: "fitur", name: "Fitur" },
    { href: "cara-kerja", name: "Cara Kerja" },
    { href: "edukasi", name: "Edukasi" },
    { href: "komunitas", name: "Komunitas" },
    { href: "tentang", name: "Tentang Kami" },
  ];

  const activePath = pathname === "/" ? "" : pathname.split("/")[1];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex items-center justify-between px-6 py-4 lg:px-16">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/icon.png"
            alt="HijauIn"
            width={52}
            height={52}
            priority
          />
          <div className="leading-none">
            <h1 className="text-2xl font-semibold text-[#0B0F1F] sm:text-3xl">
              <span className="text-[#0B0F1F]">Hijau</span>
              <span className="text-[#1F8148]">In</span>
            </h1>
            <p className="mt-1 text-sm font-medium text-gray-500">
              Satu Langkah Hijau Setiap Hari
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-4 lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-green-600 hover:text-[#076635] focus:outline-none focus:ring-2 focus:ring-green-200"
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Open navigation</span>
            <div className="flex h-5 w-5 flex-col justify-between">
              <span className="block h-0.5 w-full rounded-full bg-current" />
              <span className="block h-0.5 w-full rounded-full bg-current" />
              <span className="block h-0.5 w-full rounded-full bg-current" />
            </div>
          </button>
        </div>

        <div className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => {
            const isActive = activePath === item.href;
            return (
              <Link
                key={item.href}
                href={`/${item.href}`}
                className={`relative pb-2 text-[17px] font-semibold transition-colors ${isActive ? "text-[#076635]" : "text-[#0B0F1F] hover:text-[#076635]"
                  }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute left-0 bottom-0 h-[3px] w-full rounded-full bg-[#076635]" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/login"
            className="rounded-xl border border-green-600 bg-white px-6 py-3 text-sm font-semibold text-[#076635] transition hover:bg-green-50"
          >
            Masuk
          </Link>
          <Link
            href="/register"
            className="rounded-xl bg-[#076635] px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-700"
          >
            Daftar Gratis
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden h-full">
          <div className="border-t border-gray-100 bg-white px-6 py-5 shadow-sm">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activePath === item.href;
                return (
                  <Link
                    key={item.href}
                    href={`/${item.href}`}
                    className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${isActive ? "bg-green-50 text-[#076635]" : "text-[#0B0F1F] hover:bg-gray-100"
                      }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/login"
                className="rounded-xl border border-green-600 bg-white px-4 py-3 text-center text-sm font-semibold text-[#076635] transition hover:bg-green-50"
                onClick={() => setMenuOpen(false)}
              >
                Masuk
              </Link>
              <Link
                href="/register"
                className="rounded-xl bg-[#076635] px-4 py-3 text-center text-sm font-semibold text-white shadow-md transition hover:bg-green-700"
                onClick={() => setMenuOpen(false)}
              >
                Daftar Gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
