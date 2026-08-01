import Image from "next/image";
import { FaArrowRight, FaPlay } from "react-icons/fa";

export default function BottomCTA() {
  return (
    <section data-aos="fade-up" className="w-full px-4 py-10 sm:px-8 lg:px-16 lg:py-16">
      <div className="relative mx-auto flex  flex-col gap-8 overflow-hidden rounded-[28px] bg-[#F3F6F3] px-6 py-8 shadow-[0_8px_25px_rgba(0,0,0,.04)] sm:px-8 lg:flex-row lg:items-center lg:px-10 lg:py-10">
        {/* Left Illustration */}
        <div
          data-aos="fade-right"
          data-aos-duration="900"
          className="relative hidden h-48 w-full shrink-0 items-end lg:flex lg:w-[260px] xl:h-55 xl:w-[320px]"
        >
          <Image
            src="/assets/beranda/yukmulai.png"
            alt="Yuk Mulai"
            fill
            className="object-contain object-bottom-left scale-[1.18] animate-float"
            priority
          />
        </div>

        {/* Center */}
        <div data-aos="fade-up" data-aos-delay="150" className="flex-1 lg:ml-8">
          <h2 className="text-[clamp(1.5rem,3vw,1.95rem)] font-semibold leading-[1.3] text-[#0B0F1F]">
            Yuk, mulai langkah kecil
            <br />
            untuk perubahan besar!
          </h2>

          <p className="mt-4 text-[16px] leading-8 text-[#667085]">
            Bersama HijauIn, mari ciptakan lingkungan yang
            <br />
            lebih bersih, sehat, dan berkelanjutan.
          </p>
        </div>

        {/* Right */}
        <div data-aos="zoom-in" data-aos-delay="300" className="flex flex-col gap-4 sm:w-auto">
          {/* Button 1 */}
          <button
            className="group flex h-13.5 w-full items-center justify-center rounded-xl bg-[#076635] px-6 text-[14px] font-medium text-white shadow-[0_8px_20px_rgba(7,102,53,.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#06572D] hover:shadow-[0_12px_24px_rgba(7,102,53,.28)] sm:w-72"
          >
            Daftar Gratis Sekarang

            <span className="ml-3 flex h-7 w-7 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1">
              <FaArrowRight className="text-[11px] text-[#076635]" />
            </span>
          </button>

          {/* Button 2 */}
          <button
            className="group flex h-13.5 w-full items-center justify-center rounded-xl border border-[#9FD4AF] bg-white px-6 text-[14px] font-medium text-[#076635] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F8FCF8] sm:w-72"
          >
            <span className="mr-3 flex h-7 w-7 items-center justify-center rounded-full border border-[#076635] transition-transform duration-300 group-hover:scale-110">
              <FaPlay className="ml-0.5 text-[10px]" />
            </span>

            Lihat Cara Kerja
          </button>
        </div>

        {/* Ornament kanan bawah */}
        <Image
          src="/assets/beranda/daunyukmulai.png"
          alt=""
          width={200}
          height={200}
          className="pointer-events-none absolute -right-20 bottom-0 opacity-90 animate-float"
        />

        {/* Ornament kiri */}
        <Image
          src="/assets/beranda/daunkecil.png"
          alt=""
          width={90}
          height={90}
          className="pointer-events-none absolute bottom-0 left-2 opacity-40 animate-float"
        />

        {/* Ornament kanan atas */}
        <Image
          src="/assets/beranda/daunkecil.png"
          alt=""
          width={30}
          height={30}
          className="pointer-events-none absolute right-8 top-5 opacity-30 animate-float"
        />
      </div>
    </section>
  );
}