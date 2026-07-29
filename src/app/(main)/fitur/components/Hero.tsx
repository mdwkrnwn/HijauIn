"use client";

import Image from "next/image";
import { FaLeaf } from "react-icons/fa";

const features = [
  {
    title: "Catat Aksi Harian",
    desc: "Catat berbagai aksi ramah lingkungan setiap hari.",
    icon: "/assets/fitur/catat.png",
    className: "top-0 left-1/2 -translate-x-1/2",
  },
  {
    title: "Eco Score",
    desc: "Dapatkan poin dan lihat perkembanganmu.",
    icon: "/assets/fitur/score.png",
    className: "top-16 right-8",
  },
  {
    title: "Laporan Dampak",
    desc: "Lihat dampak positif dari setiap aksi yang kamu lakukan.",
    icon: "/assets/fitur/report.png",
    className: "bottom-20 right-0",
  },
  {
    title: "Edukasi & Inspirasi",
    desc: "Akses artikel, tips, dan konten edukatif seputar lingkungan.",
    icon: "/assets/fitur/book.png",
    className: "bottom-0 right-16",
  },
  {
    title: "Komunitas Aktif",
    desc: "Gabung komunitas hijau dan bergerak bersama.",
    icon: "/assets/fitur/community.png",
    className: "bottom-0 left-1/2 -translate-x-1/2",
  },
  {
    title: "Challenge & Misi",
    desc: "Ikuti tantangan seru dan dapatkan reward.",
    icon: "/assets/fitur/trophy.png",
    className: "bottom-20 left-0",
  },
  {
    title: "AI Green Coach",
    desc: "Dapatkan rekomendasi personal dari AI.",
    icon: "/assets/fitur/ai.png",
    className: "top-24 left-6",
  },
];

export default function Hero() {
  return (
    <section className="flex items-center overflow-hidden px-16 py-24">
      {/* Left */}
      <div className="z-10 w-[42%]">
        {/* Badge */}
        <div
          data-aos="fade-right"
          data-aos-duration="700"
          className="inline-flex items-center gap-2 rounded-full border border-[#DCEFD9] bg-white px-4 py-2 shadow-sm"
        >
          <FaLeaf className="text-[11px] text-[#11773D]" />

          <span className="text-[13px] font-semibold text-[#11773D]">
            Fitur HijauIn
          </span>
        </div>

        {/* Heading */}
        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="800"
          className="mt-8 text-[56px] font-bold leading-[1.15] tracking-[-1px] text-[#111827]"
        >
          Semua Fitur HijauIn
          <br />
          Dalam <span className="text-[#11773D]">Satu Platform</span>
        </h1>

        {/* Description */}
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
          className="mt-8 max-w-[430px] text-[18px] leading-9 text-[#667085]"
        >
          Dirancang untuk membantumu mencatat aksi ramah lingkungan,
          memantau dampak, mendapatkan insight AI, dan terhubung dengan
          komunitas yang peduli bumi.
        </p>

        {/* Button */}
        <button
          data-aos="zoom-in"
          data-aos-delay="450"
          data-aos-duration="700"
          className="group mt-10 flex h-[54px] items-center gap-3 rounded-xl border border-[#9FD4AF] bg-white px-7 text-[16px] font-semibold text-[#076635] transition-all duration-300 hover:-translate-y-1 hover:bg-[#F5FBF6] hover:shadow-lg"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF8EE] transition-transform duration-300 group-hover:scale-110">
            <FaLeaf className="text-[13px]" />
          </span>

          Lihat Semua Fitur
        </button>
      </div>

      {/* Right */}
      <div
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1000"
        className="relative w-[58%]"
      >
        <Image
          src="/assets/fitur/main.png"
          alt="Semua Fitur HijauIn"
          width={1492}
          height={1054}
          priority
          className="h-auto w-full object-contain animate-float"
        />
      </div>
    </section>
  );
}