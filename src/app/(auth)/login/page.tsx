// src/app/login/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaGoogle, FaApple, FaLeaf, FaEyeSlash, FaUser } from 'react-icons/fa';

export default function Login() {
  return (
    <div className=" w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden flex min-h-200">
      {/* Left Side Illustration */}
      <div className="w-1/2 bg-linear-to-br from-green-50 to-brand-light relative p-16">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-brand font-semibold text-base w-max mb-8">
          <FaLeaf /> Aksi Kecil, Dampak Besar
        </div>
        <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Yuk, lanjutkan <br /> perjalanan <span className="text-brand">hijau</span> mu!
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Masuk ke akunmu dan terus catat aksi, ikuti tantangan, dan lihat dampak positif yang telah kamu ciptakan.
        </p>
        <div className="relative w-full h-100 rounded-3xl overflow-hidden shadow-lg border border-white">
          <Image src="https://picsum.photos/seed/login/800/600" alt="Login Illustration" fill className="object-cover" />
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-1/2 p-16 bg-white">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Selamat Datang Kembali! <FaLeaf className="inline text-brand" /></h2>
          <p className="text-lg text-gray-500">Masuk untuk melanjutkan perjalanan hijau mu.</p>
        </div>

        <form className="space-y-8">
          <div>
            <label className="block text-base font-bold text-gray-700 mb-3">Email atau Nomor Telepon</label>
            <input type="text" placeholder="Masukkan email atau nomor telepon" className="w-full px-6 py-4 rounded-xl border border-gray-300 text-base focus:ring-2 focus:ring-brand outline-none" />
          </div>
          <div>
            <label className="block text-base font-bold text-gray-700 mb-3">Kata Sandi</label>
            <div className="relative">
              <input type="password" placeholder="Masukkan kata sandi" className="w-full px-6 py-4 rounded-xl border border-gray-300 text-base focus:ring-2 focus:ring-brand outline-none" />
              <FaEyeSlash className="absolute right-6 top-5 text-xl text-gray-400 cursor-pointer" />
            </div>
            <div className="text-right mt-3">
              <Link href="#" className="text-brand font-bold text-base hover:underline">Lupa kata sandi?</Link>
            </div>
          </div>

          <button type="button" className="w-full bg-brand text-white py-5 rounded-xl font-bold text-lg hover:bg-green-700 transition flex items-center justify-center gap-3">
            <FaUser /> Masuk
          </button>
        </form>

        <div className="mt-10 flex items-center justify-between">
          <hr className="w-1/3 border-gray-200" />
          <span className="text-base text-gray-500 font-medium">atau</span>
          <hr className="w-1/3 border-gray-200" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6">
          <button className="flex items-center justify-center gap-3 py-4 border border-gray-300 rounded-xl text-base font-bold hover:bg-gray-50">
            <FaGoogle className="text-xl" /> Masuk dengan Google
          </button>
          <button className="flex items-center justify-center gap-3 py-4 border border-gray-300 rounded-xl text-base font-bold hover:bg-gray-50">
            <FaApple className="text-xl" /> Masuk dengan Apple
          </button>
        </div>

        <div className="mt-12 text-center text-base text-gray-600">
          Belum punya akun? <Link href="/register" className="text-brand font-bold hover:underline">Daftar sekarang</Link>
        </div>
      </div>
    </div>
  );
}