'use client'
// src/components/Navbar.tsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaLeaf } from 'react-icons/fa';

export default function Navbar() {
  const path = usePathname();
  const navItems = [
    { href: "/", name: "Beranda" },
    { href: "/fitur", name: "Fitur" },
    { href: "/cara-kerja", name: "Cara Kerja" },
    { href: "/edukasi", name: "Edukasi" },
    { href: "/komunitas", name: "Komunitas" },
    { href: "/tentang", name: "Tentang Kami" }
  ];

  return (
    <nav className="w-full bg-background sticky top-0 z-50">
      <div className=" mx-auto px-16 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-primary-dark">
          <FaLeaf className="text-3xl text-primary" />
          <span className="text-2xl font-bold">HijauIn</span>
        </Link>

        <div className="hidden lg:flex gap-8 text-base font-semibold text-gray-700">
          {navItems.map(({ href, name }, idx) => (
            <Link key={idx} href={href} className={`hover:text-primary transition-colors text-foreground pb-1 ${path === href && "border-b-2 border-primary text-primary"}`}>{name}</Link>
          ))}
        </div>

        <div className="flex gap-4">
          <Link href="/login" className="px-6 py-3 rounded-full border border-primary font-semibold text-base text-primary hover:bg-gray-50">
            Masuk
          </Link>
          <Link href="/register" className="px-6 py-3 rounded-full bg-primary text-white font-semibold text-base hover:bg-green-700">
            Daftar Gratis
          </Link>
        </div>
      </div>
    </nav>
  );
}