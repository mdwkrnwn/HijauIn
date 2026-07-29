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
    <section className="flex items-center px-16 ">
      {/* Left */}
      <div className="w-[42%]">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#DCEFD9] bg-white px-4 py-2 shadow-sm">
          <FaLeaf className="text-[11px] text-[#11773D]" />
          <span className="text-[13px] font-semibold text-[#11773D]">
            Fitur HijauIn
          </span>
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-[56px] font-bold leading-[1.15] tracking-[-1px] text-[#111827]">
          Semua Fitur HijauIn
          <br />
          Dalam <span className="text-[#11773D]">Satu Platform</span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-[430px] text-[18px] leading-9 text-[#667085]">
          Dirancang untuk membantumu mencatat aksi ramah lingkungan,
          memantau dampak, mendapatkan insight AI, dan terhubung dengan
          komunitas yang peduli bumi.
        </p>

        {/* Button */}
        <button className="mt-10 flex h-[54px] items-center gap-3 rounded-xl border border-[#9FD4AF] bg-white px-7 text-[16px] font-semibold text-[#076635] transition hover:bg-[#F5FBF6]">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF8EE]">
            <FaLeaf className="text-[13px]" />
          </span>

          Lihat Semua Fitur
        </button>
      </div>

      {/* Right */}
      <div className="relative w-[58%]">
        <Image
          src="/assets/fitur/her.png"
          alt="Semua Fitur HijauIn"
          width={2000}
          height={2000}
          priority
          className="h-auto w-full object-contain"
        />
      </div>
    </section>
  );
}


