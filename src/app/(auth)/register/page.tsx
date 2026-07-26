"use client"

import Link from "next/link";
import {
  FaApple, FaRegEyeSlash, FaLock, FaRegEnvelope, FaUser, FaPen
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import {
  MdOutlineEnergySavingsLeaf, MdSecurity
} from "react-icons/md";
import { FiPieChart, FiTarget, FiAward, FiUserPlus } from "react-icons/fi";
import { IoLeaf } from "react-icons/io5";

export default function RegisterPage() {
  return (
    <div className="lg:flex-row relative flex flex-col w-full gap-16">

      {/* Absolute Header Link (Desktop) */}
      <div className="right-12 lg:flex absolute z-20 items-center hidden gap-2">
        <span className="text-base font-semibold text-gray-600">Sudah punya akun?</span>
        <Link href="/login" className="bg-white border border-gray-200 text-gray-800 font-bold text-base px-6 py-2.5 rounded-xl hover:border-primary hover:text-primary transition-colors">
          Masuk
        </Link>
      </div>

      {/* Left Column - Branding & Visuals */}
      <div className="lg:w-1/2 relative flex flex-col justify-between w-full overflow-hidden">

        {/* Background Decorative Matrix/Dots (Simulated) */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[radial-gradient(#A5D6A7_2px,transparent_2px)] bg-size-[16px_16px] opacity-40 z-0"></div>

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
              Mulai Perjalanan<br /><span className="text-primary">Hijau</span> mu Sekarang!
            </h2>
            <p className="text-base text-gray-600 font-medium leading-relaxed w-[80%]">
              Buat akun untuk mulai mencatat aksi, mengikuti tantangan, dan memberi dampak positif bagi bumi.
            </p>
          </div>

          {/* Illustration Space */}
          <div className="min-h-75 relative flex items-center justify-center flex-1">
            <img
              src="https://picsum.photos/id/13/600/400"
              alt="Eco Illustration"
              className="rounded-3xl mix-blend-multiply object-cover w-full h-full"
            />
          </div>

          {/* Features Box */}
          <div className="rounded-3xl flex items-start justify-between gap-4 p-6 bg-white border border-gray-100 shadow-sm">
            <div className="flex flex-col w-1/4 px-2">
              <div className="border-primary text-primary rounded-xl flex items-center justify-center w-10 h-10 mb-3 border-2">
                <FaPen className="w-5 h-5" />
              </div>
              <div className="mb-1 text-base font-bold text-gray-900">Catat Aksi</div>
              <div className="text-base font-medium leading-tight text-gray-500">Catat kegiatan baikmu setiap hari</div>
            </div>
            <div className="flex flex-col w-1/4 px-2">
              <div className="border-primary text-primary rounded-xl flex items-center justify-center w-10 h-10 mb-3 border-2">
                <FiPieChart className="w-5 h-5" />
              </div>
              <div className="mb-1 text-base font-bold text-gray-900">Pantau Progress</div>
              <div className="text-base font-medium leading-tight text-gray-500">Lihat perkembangan dan Eco Score mu</div>
            </div>
            <div className="flex flex-col w-1/4 px-2">
              <div className="border-primary text-primary rounded-xl flex items-center justify-center w-10 h-10 mb-3 border-2">
                <FiTarget className="w-5 h-5" />
              </div>
              <div className="mb-1 text-base font-bold text-gray-900">Ikuti Challenge</div>
              <div className="text-base font-medium leading-tight text-gray-500">Selesaikan tantangan seru tiap minggu</div>
            </div>
            <div className="flex flex-col w-1/4 px-2">
              <div className="border-primary text-primary rounded-xl flex items-center justify-center w-10 h-10 mb-3 border-2">
                <FiAward className="w-5 h-5" />
              </div>
              <div className="mb-1 text-base font-bold text-gray-900">Dapatkan Badge</div>
              <div className="text-base font-medium leading-tight text-gray-500">Kumpulkan badge dan level up!</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Auth Form */}
      <div className="lg:w-1/2 relative flex flex-col items-center justify-center w-full pt-8">

        {/* Mobile login link fallback */}
        <div className="lg:hidden flex items-center gap-2 mb-6">
          <span className="text-base font-semibold text-gray-600">Sudah punya akun?</span>
          <Link href="/login" className="text-primary hover:underline text-base font-bold">
            Masuk
          </Link>
        </div>

        {/* Auth Card */}
        <div className="bg-white rounded-[40px] p-10 lg:p-12 shadow-xl border border-gray-100 w-full relative z-10 flex flex-col items-center">

          <div className="bg-primary-light text-primary flex items-center justify-center w-20 h-20 mb-6 rounded-full">
            <FiUserPlus className="w-10 h-10 ml-2" />
          </div>

          <h3 className="flex items-center gap-2 mb-2 text-3xl font-extrabold text-center text-gray-900">
            Buat Akun Baru <MdOutlineEnergySavingsLeaf className="text-primary" />
          </h3>
          <p className="mb-8 text-base font-medium text-center text-gray-500">
            Isi data diri kamu untuk mulai perjalanan hijau.
          </p>

          <form className="flex flex-col w-full gap-5" onSubmit={(e) => e.preventDefault()}>

            {/* Input Name */}
            <div className="flex flex-col gap-2">
              <label className="text-base font-bold text-gray-900">Nama Lengkap</label>
              <div className="relative">
                <FaUser className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap kamu"
                  className="rounded-2xl focus:border-primary w-full py-4 pl-12 pr-4 text-base font-semibold transition-colors bg-white border border-gray-200 outline-none"
                />
              </div>
            </div>

            {/* Input Email */}
            <div className="flex flex-col gap-2">
              <label className="text-base font-bold text-gray-900">Email</label>
              <div className="relative">
                <FaRegEnvelope className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                <input
                  type="email"
                  placeholder="Masukkan email aktif kamu"
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
                  placeholder="Buat kata sandi (min. 8 karakter)"
                  className="rounded-2xl focus:border-primary w-full py-4 pl-12 pr-12 text-base font-semibold transition-colors bg-white border border-gray-200 outline-none"
                />
                <button type="button" className="right-4 top-1/2 hover:text-gray-600 absolute text-gray-400 transition-colors -translate-y-1/2">
                  <FaRegEyeSlash className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Input Confirm Password */}
            <div className="flex flex-col gap-2">
              <label className="text-base font-bold text-gray-900">Konfirmasi Kata Sandi</label>
              <div className="relative">
                <FaLock className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                <input
                  type="password"
                  placeholder="Konfirmasi kata sandi kamu"
                  className="rounded-2xl focus:border-primary w-full py-4 pl-12 pr-12 text-base font-semibold transition-colors bg-white border border-gray-200 outline-none"
                />
                <button type="button" className="right-4 top-1/2 hover:text-gray-600 absolute text-gray-400 transition-colors -translate-y-1/2">
                  <FaRegEyeSlash className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3 mt-2">
              <div className="flex items-center h-6">
                <input type="checkbox" className="accent-primary focus:ring-primary w-5 h-5 border-gray-300 rounded cursor-pointer" defaultChecked />
              </div>
              <p className="text-base font-semibold text-gray-700">
                Saya setuju dengan <Link href="#" className="text-primary hover:underline">Syarat & Ketentuan</Link> dan <Link href="#" className="text-primary hover:underline">Kebijakan Privasi</Link> HijauIn
              </p>
            </div>

            {/* Submit */}
            <button type="submit" className="bg-primary hover:bg-primary-dark rounded-2xl flex items-center justify-center w-full py-4 mt-4 text-base font-bold text-white transition-colors">
              Daftar Sekarang &rarr;
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-2">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-base font-semibold text-gray-400">atau daftar dengan</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Social Logins - Side by Side */}
            <div className="flex gap-4">
              <button type="button" className="rounded-2xl hover:bg-gray-50 flex items-center justify-center flex-1 gap-3 py-4 text-base font-bold text-gray-700 transition-colors bg-white border border-gray-200">
                <FcGoogle className="w-6 h-6" /> Google
              </button>
              <button type="button" className="rounded-2xl hover:bg-gray-50 flex items-center justify-center flex-1 gap-3 py-4 text-base font-bold text-gray-700 transition-colors bg-white border border-gray-200">
                <FaApple className="w-6 h-6" /> Apple
              </button>
            </div>
          </form>
        </div>

        {/* Trust Footer */}
        <div className="flex items-center justify-center w-full gap-3 px-4 mt-10 text-center">
          <MdSecurity className="text-primary shrink-0 w-6 h-6" />
          <p className="text-base font-medium text-gray-600">
            Data kamu aman bersama kami. Kami tidak akan membagikan informasi pribadimu ke pihak lain.
          </p>
        </div>

      </div>
    </div>
  );
}