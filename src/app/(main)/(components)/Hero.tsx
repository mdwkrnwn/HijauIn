"use client";

import Image from "next/image";
import { FaLeaf, FaPlay, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex min-h-175 w-full flex-col items-center justify-between overflow-hidden px-4 pt-8 sm:px-8 lg:min-h-237.5 lg:flex-row lg:px-16 lg:pt-0">
      {/* Left Content */}
      <div className="z-10 w-full max-w-2xl lg:w-[46%]">
        {/* Badge */}
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          className="inline-flex items-center gap-2 rounded-full border border-[#DCEFE2] bg-[#F3FAF5] px-4 py-2 text-sm font-semibold text-[#11773D] shadow-sm"
        >
          <FaLeaf className="text-xs" />
          Platform Gaya Hidup Ramah Lingkungan
        </div>

        {/* Heading */}
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
          className="mt-8 text-[clamp(2.25rem,4.5vw,4rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B0F1F]"
        >
          Ubah Kebiasaan Kecil
          <br />
          Menjadi <span className="text-[#11773D]">Dampak Besar</span>
          <br />
          <span className="text-[#11773D]">
            Untuk Bumi{" "}
            <FaLeaf className="mb-2 ml-1 inline text-[clamp(1.5rem,3vw,2.25rem)]" />
          </span>
        </h1>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
          className="mt-8 max-w-xl text-[clamp(1rem,1.65vw,1.125rem)] leading-8 text-[#6B7280] sm:leading-9"
        >
          HijauIn membantumu mencatat aksi nyata harianmu setiap hari,
          <br />
          meraih skor dampak, dan wujudkan Eco Score
          <br />
          demi membangun bumi yang lebih hijau.
        </p>

        {/* CTA */}
        <div
          data-aos="zoom-in"
          data-aos-delay="450"
          data-aos-duration="700"
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <button className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-[#11773D] px-8 font-semibold text-white transition duration-300 hover:bg-[#06572d]">
            Mulai Sekarang
            <FaArrowRight />
          </button>

          <button className="flex h-14 items-center justify-center gap-3 rounded-2xl border border-[#A7D8B4] bg-white px-8 font-semibold text-[#076635] transition duration-300 hover:bg-green-50">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#11773D]">
              <FaPlay className="ml-0.5 text-[10px]" />
            </div>
            Lihat Demo
          </button>
        </div>

        {/* Social Proof */}
        <div
          data-aos="fade-right"
          data-aos-delay="600"
          data-aos-duration="800"
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          {/* Avatar */}
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((id) => (
              <Image
                key={id}
                src={`/assets/ava${id}.jpg`}
                alt={`Avatar ${id}`}
                width={48}
                height={48}
                className="rounded-full border-2 border-white object-cover shadow-sm"
              />
            ))}
          </div>

          {/* Text */}
          <div>
            <p className="text-sm text-gray-500">Bergabung bersama</p>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-4xl font-bold text-[#11773D]">15.000+</span>

              <span className="text-lg text-gray-600">pengguna peduli bumi</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="200"
        className="mt-10 w-full max-w-175 hidden lg:block lg:mt-0 lg:w-[58%] xl:w-4/7"
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
          className="h-auto w-full object-contain lg:scale-125"
          priority
        />
      </div>
    </section>
  );
}