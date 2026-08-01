"use client";
import Link from "next/link";
import { SubmitEvent, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaApple,
  FaRegEyeSlash,
  FaRegEye,
  FaLock,
  FaRegEnvelope,
  FaRegUser,
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdSecurity } from "react-icons/md";
import { FiTrendingUp } from "react-icons/fi";
import { IoLeaf } from "react-icons/io5";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Image from "next/image";
import { loginUser } from "../actions/login";
import { supabase } from "@/utils/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (formData: FormData) => {
    setError("");
    setSuccess("");
    setIsLoading(true);

    const formEmail = formData.get("email")?.toString();
    const formPassword = formData.get("password")?.toString();

    if (!formEmail || !formPassword) {
      setError("Email dan kata sandi wajib diisi.");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: formEmail,
        password: formPassword,
      });

      if (error) {
        setError(error.message);
        setIsLoading(false);
        return;
      }

      setSuccess("Login berhasil! Mengalihkan...");

      router.push("/admin");
    } catch {
      setError("Terjadi kesalahan sistem. Silakan coba lagi.");
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Decorative blurred blobs - full page */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#11773D]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#11773D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="lg:flex-row flex flex-col items-center w-full gap-16">
          {/* Left Column - Branding & Visuals */}
          <div className="lg:w-1/2 flex flex-col justify-between w-full">
            {/* Logo & Header */}
            <div>
              <Link href="/" className="flex items-center gap-3 mb-10">
                <Image
                  src="/assets/icon.png"
                  alt="Eco Illustration"
                  className="w-12 h-12 object-contain"
                  width={360}
                  height={360}
                />
                <div>
                  <h1 className="text-[#11773D] text-2xl font-bold leading-none">
                    HijauIn
                  </h1>
                  <p className="text-sm font-medium text-gray-500 mt-1">
                    Satu Langkah Hijau Setiap Hari
                  </p>
                </div>
              </Link>

              <div className="bg-[#11773D]/10 text-[#11773D] inline-flex items-center gap-2 px-4 py-2 mb-3 text-sm font-bold rounded-full">
                <IoLeaf className="w-4 h-4" /> Aksi Kecil, Dampak Besar
              </div>

              <h2 className="mb-4 text-4xl lg:text-5xl font-bold leading-tight text-[#0B0F1F]">
                Yuk, lanjutkan
                <br />
                perjalanan <span className="text-[#11773D]">hijau</span> mu!
              </h2>

              <p className="text-base text-gray-600 font-medium leading-relaxed max-w-md">
                Masuk ke akunmu dan terus catat aksi, ikuti tantangan, dan lihat
                dampak positif yang telah kamu ciptakan.
              </p>
            </div>

            {/* Illustration - no frame, blends with background */}
            <div className="relative w-full h-[520px] lg:h-[680px]">
              <Image
                src="/assets/login/main.jpeg"
                alt="Eco Illustration"
                fill
                className="object-contain mix-blend-multiply"
              />
            </div>
          </div>

          {/* Right Column - Auth Form */}
          <div className="lg:w-1/2 relative flex flex-col items-center justify-center w-full">
            {/* Auth Card */}
            <div className="bg-white rounded-[40px] p-10 lg:p-14 shadow-2xl shadow-[#11773D]/10 border border-gray-100 w-full relative z-10">
              <h3 className="flex items-center gap-2 mb-2 text-3xl font-bold text-[#0B0F1F]">
                Selamat Datang Kembali!{" "}
                <IoLeaf className="text-[#11773D] w-6 h-6" />
              </h3>
              <p className="mb-8 text-base font-medium text-gray-500">
                Masuk untuk melanjutkan perjalanan hijau mu.
              </p>

              {/* Status Messages */}
              {error && (
                <div className="w-full p-4 mb-6 text-sm text-red-700 bg-red-100 rounded-2xl border border-red-200">
                  {error}
                </div>
              )}
              {success && (
                <div className="w-full p-4 mb-6 text-sm text-green-700 bg-green-100 rounded-2xl border border-green-200">
                  {success}
                </div>
              )}

              <form
                className="flex flex-col gap-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  await handleLogin(new FormData(e.currentTarget));
                }}
              >
                {/* Input Email */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-bold text-[#0B0F1F]">
                    Email
                  </label>
                  <div className="relative">
                    <FaRegEnvelope className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Masukkan email terdaftar kamu"
                      className="rounded-2xl focus:border-[#11773D] w-full py-4 pl-12 pr-4 text-base font-semibold transition-colors bg-white border border-gray-200 outline-none"
                    />
                  </div>
                </div>

                {/* Input Password */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-bold text-[#0B0F1F]">
                    Kata Sandi
                  </label>
                  <div className="relative">
                    <FaLock className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan kata sandi"
                      className="rounded-2xl focus:border-[#11773D] w-full py-4 pl-12 pr-12 text-base font-semibold transition-colors bg-white border border-gray-200 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="right-4 top-1/2 hover:text-gray-600 absolute text-gray-400 transition-colors -translate-y-1/2"
                    >
                      {showPassword ? (
                        <FaRegEye className="w-5 h-5" />
                      ) : (
                        <FaRegEyeSlash className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Forgot Password */}
                <div className="flex justify-end">
                  <Link
                    href="#"
                    className="text-[#11773D] hover:underline text-base font-bold"
                  >
                    Lupa kata sandi?
                  </Link>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#11773D] py-4 text-base font-bold text-white transition hover:bg-[#0b5f31] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Memproses...
                    </>
                  ) : (
                    <>
                      <FaRegUser className="h-4 w-4" />
                      Masuk
                    </>
                  )}
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4 my-2">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="text-base font-semibold text-gray-400">
                    atau masuk dengan
                  </span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Social Logins - Side by Side */}
                <div className="flex gap-4">
                  <button
                    type="button"
                    className="rounded-2xl hover:bg-gray-50 flex items-center justify-center flex-1 gap-3 py-4 text-base font-bold text-gray-700 transition-colors bg-white border border-gray-200"
                  >
                    <FcGoogle className="w-6 h-6" /> Google
                  </button>
                  <button
                    type="button"
                    className="rounded-2xl hover:bg-gray-50 flex items-center justify-center flex-1 gap-3 py-4 text-base font-bold text-gray-700 transition-colors bg-white border border-gray-200"
                  >
                    <FaApple className="w-6 h-6" /> Apple
                  </button>
                </div>

                {/* Register Link */}
                <p className="mt-4 text-base font-semibold text-center text-gray-600">
                  Belum punya akun?{" "}
                  <Link
                    href="/register"
                    className="text-[#11773D] hover:underline font-bold"
                  >
                    Daftar sekarang
                  </Link>
                </p>
              </form>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-start justify-between w-full px-2 mt-12">
              <div className="flex flex-col w-1/3 gap-2 pr-4">
                <div className="bg-[#11773D] rounded-xl flex items-center justify-center w-10 h-10 mb-1 text-white">
                  <MdSecurity className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0B0F1F]">
                  Aman & Terpercaya
                </h4>
                <p className="text-sm font-medium leading-tight text-gray-500">
                  Data kamu aman bersama kami.
                </p>
              </div>
              <div className="flex flex-col w-1/3 gap-2 pr-4">
                <div className="bg-[#11773D]/10 rounded-xl text-[#11773D] flex items-center justify-center w-10 h-10 mb-1">
                  <IoLeaf className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0B0F1F]">
                  Aksi Nyata
                </h4>
                <p className="text-sm font-medium leading-tight text-gray-500">
                  Setiap aksimu berdampak nyata.
                </p>
              </div>
              <div className="flex flex-col w-1/3 gap-2">
                <div className="rounded-xl flex items-center justify-center w-10 h-10 mb-1 text-gray-600 bg-gray-100">
                  <FiTrendingUp className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#0B0F1F]">
                  Pantau Perkembangan
                </h4>
                <p className="text-sm font-medium leading-tight text-gray-500">
                  Lihat progres dan perkembanganmu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
