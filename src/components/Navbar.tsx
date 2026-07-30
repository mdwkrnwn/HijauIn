"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", name: "Beranda" },
    { href: "/fitur", name: "Fitur" },
    { href: "/cara-kerja", name: "Cara Kerja" },
    { href: "/edukasi", name: "Edukasi" },
    { href: "/komunitas", name: "Komunitas" },
    { href: "/tentang", name: "Tentang Kami" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className=" mx-auto px-16 py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center g">
          <Image
            src="/assets/icon.png"
            alt="HijauIn"
            width={60}
            height={60}
            priority
          />

          <div className=" ml-2 leading-none">
            <h1 className="text-[36px] font-semibold">
              <span className="text-[#0B0F1F]">Hijau</span>
              <span className="text-[#1F8148]">In</span>
            </h1>
            <p className="mt-1 text-[14px] font-medium text-gray-500">
              Satu Langkah Hijau Setiap Hari
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative pb-2 text-[17px] font-semibold transition-colors ${
                pathname === item.href
                  ? "text-[#076635]"
                  : "text-[#0B0F1F] hover:text-[#076635]"
              }`}
            >
              {item.name}

              {pathname === item.href && (
                <span className="absolute left-0 bottom-0 h-[3px] w-full rounded-full bg-[#076635]" />
              )}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">
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
      </div>
    </nav>
  );
}
