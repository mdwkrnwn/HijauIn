"use client"

import Link from "next/link";
import {
  FaApple, FaRegEyeSlash, FaLock, FaRegEnvelope
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import {
  MdOutlineEnergySavingsLeaf, MdSecurity, MdPark, MdLocationOn
} from "react-icons/md";
import { FiUsers, FiTrendingUp } from "react-icons/fi";
import { IoLeaf } from "react-icons/io5";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="lg:flex-row flex flex-col items-center w-full gap-16">

      {/* Left Column - Branding & Visuals */}
      <div className="lg:w-1/2 relative flex flex-col justify-between w-full overflow-hidden">
        {/* Background Decorative Blob */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-primary-light/50 to-transparent z-0 pointer-events-none rounded-br-[100px]"></div>

        <div className="relative z-10 flex flex-col justify-between h-full gap-12">
          {/* Logo & Header */}
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="bg-primary p-2 text-white rounded-lg">
                <IoLeaf className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-primary text-2xl font-bold leading-none">HijauIn</h1>
                <p className="text-base font-medium text-gray-500">Satu Langkah Hijau Setiap Hari</p>
              </div>
            </div>

            <div className="bg-primary-light text-primary inline-flex items-center gap-2 px-4 py-2 mb-6 text-base font-bold rounded-full">
              <MdOutlineEnergySavingsLeaf /> Aksi Kecil, Dampak Besar
            </div>

            <h2 className="mb-4 text-5xl font-extrabold leading-tight text-gray-900">
              Yuk, lanjutkan<br />perjalanan <span className="text-primary">hijau</span> mu!
            </h2>
            <p className="text-base text-gray-600 font-medium leading-relaxed w-[80%]">
              Masuk ke akunmu dan terus catat aksi, ikuti tantangan, dan lihat dampak positif yang telah kamu ciptakan.
            </p>
          </div>

          {/* Illustration Space */}
          <div className="min-h-75 relative flex items-center justify-center flex-1">
            <Image
              src="https://picsum.photos/id/11/600/400"
              alt="Eco Illustration"
              fill
              className="rounded-3xl mix-blend-multiply object-cover w-full h-full"
            />
          </div>

          {/* Stats Box */}
          <div className="rounded-3xl flex items-center justify-between p-6 bg-white border border-gray-100 shadow-sm">
            <div className="flex flex-col items-center px-4 text-center">
              <MdOutlineEnergySavingsLeaf className="text-primary w-8 h-8 mb-2" />
              <div className="text-xl font-black text-gray-900">125.430+</div>
              <div className="text-base font-semibold text-gray-500">Aksi Hijau<br />Tercatat</div>
            </div>
            <div className="w-px h-16 bg-gray-100"></div>
            <div className="flex flex-col items-center px-4 text-center">
              <FiUsers className="text-primary w-8 h-8 mb-2" />
              <div className="text-xl font-black text-gray-900">15.000+</div>
              <div className="text-base font-semibold text-gray-500">Pengguna<br />Aktif</div>
            </div>
            <div className="w-px h-16 bg-gray-100"></div>
            <div className="flex flex-col items-center px-4 text-center">
              <MdLocationOn className="text-primary w-8 h-8 mb-2" />
              <div className="text-xl font-black text-gray-900">320+</div>
              <div className="text-base font-semibold text-gray-500">Kota di<br />Indonesia</div>
            </div>
            <div className="w-px h-16 bg-gray-100"></div>
            <div className="flex flex-col items-center px-4 text-center">
              <MdPark className="text-primary w-8 h-8 mb-2" />
              <div className="text-xl font-black text-gray-900">5.243</div>
              <div className="text-base font-semibold text-gray-500">Pohon<br />Ditanam</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Auth Form */}
      <div className="lg:w-1/2 relative flex flex-col items-center justify-center w-full">
        {/* Auth Card */}
        <div className="bg-white rounded-[40px] p-10 lg:p-14 shadow-xl border border-gray-100 w-full relative z-10">
          <h3 className="flex items-center gap-2 mb-2 text-3xl font-extrabold text-gray-900">
            Selamat Datang Kembali! <MdOutlineEnergySavingsLeaf className="text-primary" />
          </h3>
          <p className="mb-8 text-base font-medium text-gray-500">
            Masuk untuk melanjutkan perjalanan hijau mu.
          </p>

          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

            {/* Input Email */}
            <div className="flex flex-col gap-2">
              <label className="text-base font-bold text-gray-900">Email atau Nomor Telepon</label>
              <div className="relative">
                <FaRegEnvelope className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Masukkan email atau nomor telepon"
                  className="rounded-2xl focus:border-primary w-full py-4 pl-12 pr-4 text-base font-semibold transition-colors bg-white border border-gray-200 outline-none"
                />
              </div>
            </div>

            {/* Input Password */}
            <div className="flex flex-col gap-2">
              <label className="text-base font-bold text-gray-900">Kata Sandi</label>
              <div className="relative">
                <FaLock className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                <input
                  type="password"
                  placeholder="Masukkan kata sandi"
                  className="rounded-2xl focus:border-primary w-full py-4 pl-12 pr-12 text-base font-semibold transition-colors bg-white border border-gray-200 outline-none"
                />
                <button type="button" className="right-4 top-1/2 hover:text-gray-600 absolute text-gray-400 transition-colors -translate-y-1/2">
                  <FaRegEyeSlash className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link href="#" className="text-primary hover:underline text-base font-bold">
                Lupa kata sandi?
              </Link>
            </div>

            {/* Submit */}
            <button type="submit" className="bg-primary hover:bg-primary-dark rounded-2xl flex items-center justify-center w-full gap-2 py-4 mt-2 text-base font-bold text-white transition-colors">
              <FiUsers className="w-5 h-5" /> Masuk
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-2">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-base font-semibold text-gray-400">atau</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Social Logins */}
            <div className="flex flex-col gap-4">
              <button type="button" className="rounded-2xl hover:bg-gray-50 flex items-center justify-center w-full gap-3 py-4 text-base font-bold text-gray-700 transition-colors bg-white border border-gray-200">
                <FcGoogle className="w-6 h-6" /> Masuk dengan Google
              </button>
              <button type="button" className="rounded-2xl hover:bg-gray-50 flex items-center justify-center w-full gap-3 py-4 text-base font-bold text-gray-700 transition-colors bg-white border border-gray-200">
                <FaApple className="w-6 h-6" /> Masuk dengan Apple
              </button>
            </div>

            {/* Register Link */}
            <p className="mt-4 text-base font-semibold text-center text-gray-600">
              Belum punya akun? <Link href="/register" className="text-primary hover:underline font-bold">Daftar sekarang</Link>
            </p>
          </form>
        </div>

        {/* Trust Indicators */}
        <div className="flex items-start justify-between w-full px-2 mt-12">
          <div className="flex flex-col w-1/3 gap-2 pr-4">
            <div className="bg-primary rounded-xl flex items-center justify-center w-10 h-10 mb-1 text-white">
              <MdSecurity className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-gray-900">Aman & Terpercaya</h4>
            <p className="text-base font-medium leading-tight text-gray-500">Data kamu aman bersama kami.</p>
          </div>
          <div className="flex flex-col w-1/3 gap-2 pr-4">
            <div className="bg-primary-light rounded-xl text-primary flex items-center justify-center w-10 h-10 mb-1">
              <MdOutlineEnergySavingsLeaf className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-gray-900">Aksi Nyata</h4>
            <p className="text-base font-medium leading-tight text-gray-500">Setiap aksimu berdampak nyata.</p>
          </div>
          <div className="flex flex-col w-1/3 gap-2">
            <div className="rounded-xl flex items-center justify-center w-10 h-10 mb-1 text-gray-600 bg-gray-100">
              <FiTrendingUp className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-gray-900">Pantau Perkembangan</h4>
            <p className="text-base font-medium leading-tight text-gray-500">Lihat progres dan perkembanganmu.</p>
          </div>
        </div>

      </div>
    </div>
  );
}