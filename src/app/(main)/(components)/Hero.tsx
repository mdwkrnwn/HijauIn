"use client";

import Image from "next/image";
import { FaLeaf, FaPlay, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex h-auto min-h-screen flex-col lg:flex-row items-center justify-between w-full px-6 lg:pl-16 -mt-20 lg:pr-0 pt-28 lg:-mt-30 lg:pt-0 overflow-hidden">
      {/* Left Content */}
      <div className="z-10 w-full lg:w-[46%] text-center lg:text-left">
        {/* Badge */}
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          className="inline-flex items-center gap-2 rounded-full bg-[#F3FAF5] border text-[#11773D] border-[#DCEFE2] px-4 py-2 text-xs lg:px-5 lg:text-sm font-semibold"
        >
          <FaLeaf className="text-xs text-[#11773D] " />
          Platform Gaya Hidup Ramah Lingkungan
        </div>

        {/* Heading */}
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
          className="mt-6 lg:mt-8 text-[40px] leading-tight lg:text-[64px] lg:leading-[1.15] font-bold tracking-[-0.02em] text-[#0B0F1F]"
        >
          Ubah Kebiasaan Kecil
          <br />
          Menjadi <span className="text-[#11773D]">Dampak Besar</span>
          <br />
          <span className="text-[#11773D]">
            Untuk Bumi
            <FaLeaf className="inline mb-1 text-[22px] lg:mb-2 lg:text-[36px]" />
          </span>
        </h1>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
          className="mt-6 lg:mt-8 text-[15px] leading-7 lg:text-[18px] lg:leading-9 text-[#6B7280]"
        >
          HijauIn membantumu mencatat aksi nyata harianmu setiap hari,
          <br className="hidden lg:block" />
          meraih skor dampak, dan wujudkan Eco Score
          <br className="hidden lg:block" />
          demi membangun bumi yang lebih hijau.
        </p>

        {/* CTA */}
        <div
          data-aos="zoom-in"
          data-aos-delay="450"
          data-aos-duration="700"
          className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-5"
        >
          <button className="flex h-12 lg:h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-[#11773D] px-6 lg:px-8 font-semibold text-white transition hover:bg-[#06572d]">
            Mulai Sekarang
            <FaArrowRight />
          </button>

          <button className="flex h-12 lg:h-14 w-full sm:w-auto items-center justify-center gap-3 rounded-2xl border border-[#A7D8B4] bg-white px-6 lg:px-8 font-semibold text-[#076635] transition hover:bg-green-50">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#11773D]">
              <FaPlay className="ml-[2px] text-[10px]" />
            </div>
            Lihat Demo
          </button>
        </div>

        {/* Social Proof */}
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="800"
          className="mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
        >
          {/* Avatar */}
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((id) => (
              <Image
                key={id}
                src={`/assets/ava${id}.jpg`}
                alt={`Avatar ${id}`}
                width={40}
                height={40}
                className="rounded-full border-2 border-white object-cover shadow-sm lg:w-12 lg:h-12"
              />
            ))}
          </div>

          {/* Text */}
          <div>
            <p className="text-sm text-gray-500">Bergabung bersama</p>

            <div className="flex items-center gap-2">
              <span className="text-3xl lg:text-4xl font-bold text-[#11773D]">
                15.000+
              </span>

              <span className="text-lg text-gray-600">
                pengguna peduli bumi
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="hidden lg:block w-4/7"
      >
        <Image
          src="/assets/beranda/hero.png"
          alt="Earth Graphic"
          width={1492}
          height={1254}
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 20%, black 30%, black)",
          }}
          className="-translate-x-1/8 translate-y-1/12 scale-125 animate-float"
          priority
        />
      </div>
    </section>
  );
}
