// src/components/Footer.tsx
import { FaInstagram, FaTiktok, FaYoutube, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full bg-brand-dark text-white pt-20 pb-10">
      <div className=" mx-auto px-16 grid grid-cols-1 md:grid-cols-5 gap-12 border-b border-green-800 pb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl font-bold">HijauIn</span>
          </div>
          <p className="text-base text-gray-300 mb-8 max-w-md">
            Platform digital untuk membangun kebiasaan ramah lingkungan, mencatat aksi, dan berkontribusi nyata untuk bumi.
          </p>
          <div className="flex gap-6 text-2xl">
            <FaInstagram className="cursor-pointer hover:text-brand-light" />
            <FaTiktok className="cursor-pointer hover:text-brand-light" />
            <FaYoutube className="cursor-pointer hover:text-brand-light" />
            <FaFacebook className="cursor-pointer hover:text-brand-light" />
          </div>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-6">Jelajahi</h4>
          <ul className="space-y-4 text-base text-gray-300">
            <li>Beranda</li><li>Fitur</li><li>Cara Kerja</li><li>Edukasi</li><li>Komunitas</li><li>Tentang Kami</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-6">Bantuan</h4>
          <ul className="space-y-4 text-base text-gray-300">
            <li>FAQ</li><li>Pusat Bantuan</li><li>Kebijakan Privasi</li><li>Syarat & Ketentuan</li><li>Hubungi Kami</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-6">Kontak</h4>
          <ul className="space-y-4 text-base text-gray-300">
            <li>hello@hijauin.id</li>
            <li>0812-3456-7890</li>
            <li>Jl. Hijau No. 123, Jakarta, Indonesia</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-base text-gray-400">
        © 2024 HijauIn. All rights reserved.
      </div>
    </footer>
  );
}