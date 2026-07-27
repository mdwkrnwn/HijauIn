"use client"
import Link from "next/link";
import {
  FaApple, FaRegEyeSlash, FaLock, FaRegEnvelope, FaUser, FaPen
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import {
  MdSecurity
} from "react-icons/md";
import { FiPieChart, FiTarget, FiAward, FiUserPlus } from "react-icons/fi";
import { IoLeaf } from "react-icons/io5";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Decorative blurred blobs - full page */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">

        {/* Header Row - Logo left, Login link right */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
                  <Image
                    src="/assets/icon.png"
                    alt="Eco Illustration"
                    className="w-12 h-12 object-contain"
                    width={360}
                    height={360}
                  />
            <div>
              <h1 className="text-primary text-2xl font-bold leading-none">HijauIn</h1>
              <p className="text-sm font-medium text-gray-500 mt-1">Satu Langkah Hijau Setiap Hari</p>
            </div>
          </div>
        </div>

        <div className="lg:flex-row flex flex-col items-center w-full gap-16">

          {/* Left Column - Branding & Visuals */}
          <div className="lg:w-1/2 relative flex flex-col justify-between w-full">
            {/* Decorative dot grid */}
            <div className="absolute top-4 right-4 w-28 h-28 bg-[radial-gradient(#A5D6A7_2px,transparent_2px)] bg-size-[16px_16px] opacity-40 z-0 pointer-events-none"></div>

            <div>
              <div className="bg-primary/10 text-primary inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold rounded-full">
                <IoLeaf className="w-4 h-4" /> Aksi Kecil, Dampak Besar
              </div>

              <h2 className="mb-4 text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
                Mulai Perjalanan<br /><span className="text-primary">Hijau</span> mu Sekarang!
              </h2>

              <p className="text-base text-gray-600 font-medium leading-relaxed max-w-md">
                Buat akun untuk mulai mencatat aksi, mengikuti tantangan, dan memberi dampak positif bagi bumi.
              </p>
            </div>

            {/* Illustration - no frame, blends with background */}
            <div className="relative w-full h-[520px] lg:h-[680px]">
              <Image
                src="/assets/register/main.jpeg"
                alt="Eco Illustration"
                fill
                className="object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* Right Column - Auth Form */}
          <div className="lg:w-1/2 relative flex flex-col items-center justify-center w-full">
            {/* Auth Card */}
            <div className="bg-white rounded-[40px] p-10 lg:p-12 shadow-2xl shadow-primary/10 border border-gray-100 w-full relative z-10 flex flex-col items-center">
              <div className="bg-primary/10 text-primary flex items-center justify-center w-20 h-20 mb-6 rounded-full">
                <FiUserPlus className="w-9 h-9" />
              </div>
              <h3 className="flex items-center gap-2 mb-2 text-3xl font-extrabold text-center text-gray-900">
                Buat Akun Baru <IoLeaf className="text-primary w-6 h-6" />
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
                    <input type="checkbox" className="accent-primary focus:ring-primary w-5 h-5 border-gray-300 rounded cursor-pointer" />
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

                                <p className="mt-4 text-base font-semibold text-center text-gray-600">
                  Sudah punya akun?{" "}
                  <Link
                    href="/login"
                    className="text-primary hover:underline font-bold"
                  >
                    Masuk
                  </Link>
                </p>
              </form>
            </div>

            {/* Trust Footer */}
            {/* <div className="flex items-center justify-center w-full gap-3 px-4 mt-10 text-center">
              <MdSecurity className="text-primary shrink-0 w-6 h-6" />
              <p className="text-sm font-medium text-gray-600">
                Data kamu aman bersama kami. Kami tidak akan membagikan informasi pribadimu ke pihak lain.
              </p>
            </div> */}
          </div>

        </div>
      </div>
    </div>
  );
}