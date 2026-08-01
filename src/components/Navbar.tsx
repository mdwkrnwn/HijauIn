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
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex items-center justify-between px-16 py-6">
        {/* Logo */}
        {/* Logo Desktop */}
        <Link href="/" className="hidden lg:flex items-center gap-2">
          <Image
            src="/assets/icon.png"
            alt="HijauIn"
            width={60}
            height={60}
            priority
          />

          <div className="leading-none">
            <h1 className="text-[36px] font-semibold">
              <span className="text-[#0B0F1F]">Hijau</span>
              <span className="text-[#1F8148]">In</span>
            </h1>

            <p className="mt-1 text-[14px] font-medium text-gray-500">
              Satu Langkah Hijau Setiap Hari
            </p>
          </div>
        </Link>

        {/* Logo Mobile */}
        <Link href="/" className="flex items-center gap-2 -ml-10 lg:hidden">
          <Image
            src="/assets/icon.png"
            alt="HijauIn"
            width={42}
            height={42}
            priority
          />

          <h1 className="text-[28px] font-semibold leading-none">
            <span className="text-[#0B0F1F]">Hijau</span>
            <span className="text-[#1F8148]">In</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = activePath === item.href;

            return (
              <Link
                key={item.href}
                href={`/${item.href}`}
                className={`relative pb-2 text-[17px] font-semibold transition-colors ${
                  isActive
                    ? "text-[#076635]"
                    : "text-[#0B0F1F] hover:text-[#076635]"
                }`}
              >
                {item.name}

                {isActive && (
                  <span className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[#076635]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className="rounded-xl border border-green-600 bg-white px-7 py-3 font-semibold text-[#076635] transition hover:bg-green-50"
          >
            Masuk
          </Link>

          <Link
            href="/register"
            className="rounded-xl bg-[#076635] px-7 py-3 font-semibold text-white shadow-md transition hover:bg-green-700"
          >
            Daftar Gratis
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center -mr-13 justify-center rounded-xl border border-gray-200 lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#076635]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white shadow-lg lg:hidden">
          <div className="flex flex-col px-6 py-6">
            {navItems.map((item) => {
              const isActive = activePath === item.href;

              return (
                <Link
                  key={item.href}
                  href={`/${item.href}`}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-xl px-4 py-3 text-[16px] font-semibold transition ${
                    isActive
                      ? "bg-green-50 text-[#076635]"
                      : "text-[#0B0F1F] hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-green-600 px-4 py-3 text-center font-semibold text-[#076635]"
              >
                Masuk
              </Link>

              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl bg-[#076635] px-4 py-3 text-center font-semibold text-white"
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
