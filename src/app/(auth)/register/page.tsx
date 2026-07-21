// src/app/register/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaGoogle, FaApple, FaLeaf, FaEyeSlash, FaUsers } from 'react-icons/fa';

export default function Register() {
  return (
    <div className=" w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden flex min-h-200">
      {/* Left Side Illustration */}
      <div className="w-1/2 bg-linear-to-br from-green-50 to-brand-light relative p-16">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-brand font-semibold text-base w-max mb-8">
          <FaLeaf /> Aksi Kecil, Dampak Besar
        </div>
        <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Mulai Perjalanan <span className="text-brand">Hijau</span> mu Sekarang!
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Buat akun untuk mulai mencatat aksi, mengikuti tantangan, dan memberi dampak positif bagi bumi.
        </p>
        <div className="relative w-full h-100 rounded-3xl overflow-hidden shadow-lg border border-white">
          <Image src="https://picsum.photos/seed/register/800/600" alt="Registration Illustration" fill className="object-cover" />
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 p-16 bg-white">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-brand-light rounded-full mx-auto mb-6 flex items-center justify-center text-brand text-4xl">
            <FaUsers />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Buat Akun Baru</h2>
          <p className="text-lg text-gray-500">Isi data diri kamu untuk mulai perjalanan hijau.</p>
        </div>

        <form className="space-y-8">
          <div>
            <label className="block text-base font-bold text-gray-700 mb-3">Nama Lengkap</label>
            <input type="text" placeholder="Masukkan nama lengkap kamu" className="w-full px-6 py-4 rounded-xl border border-gray-300 text-base focus:ring-2 focus:ring-brand outline-none" />
          </div>
          <div>
            <label className="block text-base font-bold text-gray-700 mb-3">Email</label>
            <input type="email" placeholder="Masukkan email aktif kamu" className="w-full px-6 py-4 rounded-xl border border-gray-300 text-base focus:ring-2 focus:ring-brand outline-none" />
          </div>
          <div>
            <label className="block text-base font-bold text-gray-700 mb-3">Kata Sandi</label>
            <div className="relative">
              <input type="password" placeholder="Buat kata sandi (min. 8 karakter)" className="w-full px-6 py-4 rounded-xl border border-gray-300 text-base focus:ring-2 focus:ring-brand outline-none" />
              <FaEyeSlash className="absolute right-6 top-5 text-xl text-gray-400 cursor-pointer" />
            </div>
          </div>
          <div>
            <label className="block text-base font-bold text-gray-700 mb-3">Konfirmasi Kata Sandi</label>
            <div className="relative">
              <input type="password" placeholder="Konfirmasi kata sandi kamu" className="w-full px-6 py-4 rounded-xl border border-gray-300 text-base focus:ring-2 focus:ring-brand outline-none" />
              <FaEyeSlash className="absolute right-6 top-5 text-xl text-gray-400 cursor-pointer" />
            </div>
          </div>

          <div className="flex items-start gap-4">
            <input type="checkbox" className="mt-1 w-5 h-5 rounded text-brand focus:ring-brand border-gray-300" />
            <label className="text-base text-gray-600 leading-relaxed">
              Saya setuju dengan <Link href="#" className="text-brand font-bold">Syarat & Ketentuan</Link> dan <Link href="#" className="text-brand font-bold">Kebijakan Privasi HijauIn</Link>
            </label>
          </div>

          <button type="button" className="w-full bg-brand text-white py-5 rounded-xl font-bold text-lg hover:bg-green-700 transition">
            Daftar Sekarang &rarr;
          </button>
        </form>

        <div className="mt-10 flex items-center justify-between">
          <hr className="w-1/3 border-gray-200" />
          <span className="text-base text-gray-500 font-medium">atau daftar dengan</span>
          <hr className="w-1/3 border-gray-200" />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-6">
          <button className="flex items-center justify-center gap-3 py-4 border border-gray-300 rounded-xl text-base font-bold hover:bg-gray-50">
            <FaGoogle className="text-xl" /> Google
          </button>
          <button className="flex items-center justify-center gap-3 py-4 border border-gray-300 rounded-xl text-base font-bold hover:bg-gray-50">
            <FaApple className="text-xl" /> Apple
          </button>
        </div>
      </div>
    </div>
  );
}