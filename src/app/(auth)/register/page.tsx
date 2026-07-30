"use client"
import Link from "next/link";
import {
  FaApple, FaRegEyeSlash, FaLock, FaRegEnvelope, FaUser
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FiUserPlus } from "react-icons/fi";
import { IoLeaf } from "react-icons/io5";
import Image from "next/image";
import { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { signUpUser } from "../actions/signUp";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTaS, setAgreeTaS] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = async (formData: FormData) => {
    setError("");
    setSuccess("");

    if (!name || !email || !password || !confirmPassword) {
      return setError("Semua kolom wajib diisi.");
    }
    if (password.length < 8) {
      return setError("Kata sandi minimal 8 karakter.");
    }
    if (password !== confirmPassword) {
      return setError("Konfirmasi kata sandi tidak cocok.");
    }
    if (!agreeTaS) {
      return setError("Anda harus menyetujui Syarat & Ketentuan dan Kebijakan Privasi.");
    }

    setIsLoading(true);
    try {
      const result = await signUpUser(formData);

      if (!result?.success) {
        setError(result.message);
        setIsLoading(false);
        return;
      }

      setSuccess("Login berhasil! Mengalihkan...");

      setTimeout(() => {
        router.push("/login");
      }, 1000);

    } catch (err) {
      setError("Terjadi kesalahan sistem. Silakan coba lagi.");
      setIsLoading(false);
    }
    setIsLoading(false);

    setSuccess("Pendaftaran berhasil!");
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAgreeTaS(false);
  };
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-linear-to-br from-green-50 via-white to-green-50">
      {/* Decorative blurred blobs - full page */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#11773D]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#11773D]/10 rounded-full blur-3xl pointer-events-none" />

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
              <h1 className="text-[#11773D] text-2xl font-bold leading-none">HijauIn</h1>
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
              <div className="bg-[#11773D]/10 text-[#11773D] inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold rounded-full">
                <IoLeaf className="w-4 h-4" /> Aksi Kecil, Dampak Besar
              </div>

              <h2 className="mb-4 text-4xl lg:text-5xl font-bold leading-tight text-[#0B0F1F]">
                Mulai Perjalanan<br /><span className="text-[#11773D]">Hijau</span> mu Sekarang!
              </h2>

              <p className="text-base text-gray-600 font-medium leading-relaxed max-w-md">
                Buat akun untuk mulai mencatat aksi, mengikuti tantangan, dan memberi dampak positif bagi bumi.
              </p>
            </div>

            {/* Illustration - no frame, blends with background */}
            <div className="relative w-full h-130 lg:h-170">
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
            <div className="bg-white rounded-[40px] p-10 lg:p-12 shadow-2xl shadow-[#11773D]/10 border border-gray-100 w-full relative z-10 flex flex-col items-center">
              <div className="bg-[#11773D]/10 text-[#11773D] flex items-center justify-center w-20 h-20 mb-6 rounded-full">
                <FiUserPlus className="w-9 h-9" />
              </div>
              <h3 className="flex items-center gap-2 mb-2 text-3xl font-bold text-center text-[#0B0F1F]">
                Buat Akun Baru <IoLeaf className="text-[#11773D] w-6 h-6" />
              </h3>
              <p className="mb-8 text-base font-medium text-center text-gray-500">
                Isi data diri kamu untuk mulai perjalanan hijau.
              </p>
              {/* Status Messages */}
              {error && (
                <div className="w-full p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-2xl border border-red-200">
                  {error}
                </div>
              )}
              {success && (
                <div className="w-full p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-2xl border border-green-200">
                  {success}
                </div>
              )}
              <form className="flex flex-col w-full gap-5" action={handleSignUp}>
                {/* Input Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-base font-bold text-[#0B0F1F]">Nama Lengkap</label>
                  <div className="relative">
                    <FaUser className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Masukkan nama lengkap kamu"
                      className="rounded-2xl focus:border-[#11773D] w-full py-4 pl-12 pr-4 text-base font-semibold transition-colors bg-white border border-gray-200 outline-none"
                    />
                  </div>
                </div>

                {/* Input Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-base font-bold text-[#0B0F1F]">Email</label>
                  <div className="relative">
                    <FaRegEnvelope className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Masukkan email aktif kamu"
                      className="rounded-2xl focus:border-[#11773D] w-full py-4 pl-12 pr-4 text-base font-semibold transition-colors bg-white border border-gray-200 outline-none"
                    />
                  </div>
                </div>

                {/* Input Password */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="password" className="text-base font-bold text-[#0B0F1F]">Kata Sandi</label>
                  <div className="relative">
                    <FaLock className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Buat kata sandi (min. 8 karakter)"
                      className="rounded-2xl focus:border-[#11773D] w-full py-4 pl-12 pr-12 text-base font-semibold transition-colors bg-white border border-gray-200 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="right-4 top-1/2 hover:text-gray-600 absolute text-gray-400 transition-colors -translate-y-1/2"
                    >
                      {showPassword ? <FaRegEye className="w-5 h-5" /> : <FaRegEyeSlash className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Input Confirm Password */}
                <div className="flex flex-col gap-2">
                  <label className="text-base font-bold text-[#0B0F1F]">Konfirmasi Kata Sandi</label>
                  <div className="relative">
                    <FaLock className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Konfirmasi kata sandi kamu"
                      className="rounded-2xl focus:border-[#11773D] w-full py-4 pl-12 pr-12 text-base font-semibold transition-colors bg-white border border-gray-200 outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="right-4 top-1/2 hover:text-gray-600 absolute text-gray-400 transition-colors -translate-y-1/2"
                    >
                      {showConfirmPassword ? <FaRegEye className="w-5 h-5" /> : <FaRegEyeSlash className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3 mt-2">
                  <div className="flex items-center h-6">
                    <input
                      id="ToS"
                      type="checkbox"
                      checked={agreeTaS}
                      onChange={(e) => setAgreeTaS(e.target.checked)}
                      className="accent-[#11773D] focus:ring-[#11773D] w-5 h-5 border-gray-300 rounded cursor-pointer"
                    />
                  </div>
                  <label htmlFor="ToS" className="text-base font-semibold text-gray-700">
                    Saya setuju dengan <Link href="#" className="text-[#11773D] hover:underline">Syarat & Ketentuan</Link> dan <Link href="#" className="text-[#11773D] hover:underline">Kebijakan Privasi</Link> HijauIn
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-[#11773D] hover:bg-[#11773D]-dark rounded-2xl flex items-center justify-center w-full py-4 mt-4 text-base font-bold text-white transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Memproses..." : "Daftar Sekarang \u2192"}
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
                    className="text-[#11773D] hover:underline font-bold"
                  >
                    Masuk
                  </Link>
                </p>
              </form>
            </div>

            {/* Trust Footer */}
            {/* <div className="flex items-center justify-center w-full gap-3 px-4 mt-10 text-center">
              <MdSecurity className="text-[#11773D] shrink-0 w-6 h-6" />
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