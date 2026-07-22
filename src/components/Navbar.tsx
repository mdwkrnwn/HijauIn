// src/components/Navbar.tsx
import Link from 'next/link';
import { FaLeaf } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="w-full bg-background sticky top-0 z-50">
      <div className=" mx-auto px-16 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-primary-dark">
          <FaLeaf className="text-3xl text-primary" />
          <span className="text-2xl font-bold">HijauIn</span>
        </Link>

        <div className="hidden lg:flex gap-8 text-base font-semibold text-gray-700">
          <Link href="/" className="hover:text-primary transition-colors text-primary border-b-2 border-primary pb-1">Beranda</Link>
          <Link href="/fitur" className="hover:text-primary transition-colors">Fitur</Link>
          <Link href="/cara-kerja" className="hover:text-primary transition-colors">Cara Kerja</Link>
          <Link href="/edukasi" className="hover:text-primary transition-colors">Edukasi</Link>
          <Link href="/komunitas" className="hover:text-primary transition-colors">Komunitas</Link>
          <Link href="/tentang" className="hover:text-primary transition-colors">Tentang Kami</Link>
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