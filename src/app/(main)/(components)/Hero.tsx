import Image from "next/image";
import { FaLeaf, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="flex flex-row items-center justify-between w-full pl-16">
      <div className="w-3/7 z-10">
        <div className="bg-background text-primary inline-flex items-center gap-2 px-4 py-2 mb-8 text-base font-semibold border border-green-100 rounded-full shadow-sm">
          <FaLeaf /> Platform Gaya Hidup Ramah Lingkungan
        </div>
        <h1 className="mb-8 text-6xl font-extrabold leading-tight text-gray-900">
          Ubah Kebiasaan Kecil Menjadi <span className="text-primary">Dampak Besar</span> Untuk Bumi
        </h1>
        <p className="mb-10 text-xl leading-relaxed text-gray-600">
          HijauIn membantumu mencatat aksi nyata harianmu setiap hari, meraih skor dampak, dan wujudkan Eco Score demi membangun bumi yang lebih hijau.
        </p>
        <div className="flex items-center gap-6">
          <button className="bg-primary hover:bg-green-700 flex items-center gap-3 px-8 py-4 text-lg font-bold text-white transition rounded-full">
            Mulai Sekarang <FaArrowRight />
          </button>
          <button className="hover:bg-gray-50 flex items-center gap-3 px-8 py-4 text-lg font-bold text-gray-800 transition bg-white border border-gray-300 rounded-full">
            Lihat Demo
          </button>
        </div>
      </div>
      <div className="w-4/7">
        <Image src="/assets/beranda/hero.png" alt="Earth Graphic" style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 30%, black)'
        }} className="-translate-x-1/8 translate-y-1/12 scale-125"
          width={1492}
          height={1054}
        />
      </div>
    </section>);
}