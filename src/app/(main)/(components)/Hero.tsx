import Image from "next/image";
import { FaLeaf, FaPlay, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-row items-center justify-between w-full pl-16">
      <div className="w-[46%] z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-[#F3FAF5] border border-[#DCEFE2] px-5 py-2 text-sm font-semibold text-[#11773D] shadow-sm">
          <FaLeaf className="text-xs" />
          Platform Gaya Hidup Ramah Lingkungan
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-[64px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B0F1F]">
          Ubah Kebiasaan Kecil
          <br />
          Menjadi <span className="text-[#11773D]">Dampak Besar</span>
          <br />
          <span className="text-[#11773D]">
            Untuk Bumi <FaLeaf className="inline mb-2 text-[36px]" />
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-[18px] leading-9 text-[#6B7280]">
          HijauIn membantumu mencatat aksi nyata harianmu setiap hari,
          <br />
          meraih skor dampak, dan wujudkan Eco Score
          <br />
          demi membangun bumi yang lebih hijau.
        </p>

        {/* CTA */}
        <div className="mt-10 flex items-center gap-5">
          <button className="flex h-14 items-center gap-3 rounded-2xl bg-[#11773D] px-8 font-semibold text-white transition hover:bg-[#06572d]">
            Mulai Sekarang
            <FaArrowRight />
          </button>

          <button className="flex h-14 items-center gap-3 rounded-2xl border border-[#A7D8B4] bg-white px-8 font-semibold text-[#076635] transition hover:bg-green-50">
            <div className="flex h-7 w-7 items-center justify-center rounded-full border border-[#11773D]">
              <FaPlay className="ml-[2px] text-[10px]" />
            </div>
            Lihat Demo
          </button>
        </div>

        <div className="mt-10 flex items-center gap-5">
          {/* Avatar Group */}
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

            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-[#11773D]">15.000+</span>

              <span className="text-lg text-gray-600">
                pengguna peduli bumi
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/7">
        <Image
          src="/assets/beranda/hero.png"
          alt="Earth Graphic"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 20%, black 30%, black)",
          }}
          className="-translate-x-1/8 translate-y-1/12 scale-125"
          width={1492}
          height={1054}
        />
      </div>
    </section>
  );
}
