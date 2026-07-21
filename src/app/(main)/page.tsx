// src/app/page.tsx
import Image from 'next/image';
import { FaArrowRight, FaLeaf, FaRecycle, FaTree, FaUsers, FaGlobe } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between px-16 py-24 min-h-200 bg-linear-to-b from-brand-light to-white">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-brand font-semibold text-base mb-8 shadow-sm border border-green-100">
            <FaLeaf /> Platform Gaya Hidup Ramah Lingkungan
          </div>
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mb-8">
            Ubah Kebiasaan Kecil Menjadi <span className="text-brand">Dampak Besar</span> Untuk Bumi
          </h1>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            HijauIn membantumu mencatat aksi nyata harianmu setiap hari, meraih skor dampak, dan wujudkan Eco Score demi membangun bumi yang lebih hijau.
          </p>
          <div className="flex gap-6 items-center">
            <button className="bg-brand text-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-3 hover:bg-green-700 transition">
              Mulai Sekarang <FaArrowRight />
            </button>
            <button className="bg-white text-gray-800 px-8 py-4 rounded-full text-lg font-bold flex items-center gap-3 border border-gray-300 hover:bg-gray-50 transition">
              Lihat Demo
            </button>
          </div>
        </div>
        <div className="relative w-200 h-150 rounded-3xl overflow-hidden shadow-2xl">
          <Image src="https://picsum.photos/seed/earth/800/600" alt="Earth Graphic" fill className="object-cover" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-16 py-16 -mt-16 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl p-12 flex justify-between items-center border border-gray-100">
          {[
            { value: "125.430 kg", label: "Sampah Dikelola", icon: <FaRecycle /> },
            { value: "82.340 kg", label: "CO2 Berhasil Dikurangi", icon: <FaGlobe /> },
            { value: "5.243", label: "Pohon Ditanam", icon: <FaTree /> },
            { value: "15.000+", label: "Pengguna Aktif", icon: <FaUsers /> }
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <div className="text-5xl text-brand">{stat.icon}</div>
              <div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-lg text-gray-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="px-16 py-24 bg-white text-center">
        <h2 className="text-4xl font-bold mb-4">Fitur Unggulan <span className="text-brand">HijauIn</span></h2>
        <p className="text-xl text-gray-500 mb-16">Semua yang kamu butuhkan untuk hidup lebih hijau dalam satu platform.</p>

        <div className="grid grid-cols-5 gap-8">
          {[
            { title: "Catat Aksi Harian", desc: "Catat berbagai aksi hijau seperti hemat energi." },
            { title: "Eco Score", desc: "Dapatkan poin dari setiap aksi dan pantau skor." },
            { title: "AI Rekomendasi", desc: "Dapatkan rekomendasi aksi hijau personal." },
            { title: "Challenge & Misi", desc: "Ikuti tantangan seru dan kumpulkan poin." },
            { title: "Laporan Dampak", desc: "Lihat laporan dampak positif dari setiap aksi." }
          ].map((feature, idx) => (
            <div key={idx} className="border border-gray-100 p-8 rounded-3xl hover:shadow-lg transition text-left bg-gray-50">
              <div className="w-20 h-20 bg-brand-light rounded-2xl mb-8 flex items-center justify-center text-3xl text-brand">
                <FaLeaf />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-base text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="px-16 py-24">
        <div className="bg-brand-light rounded-[3rem] p-16 flex items-center justify-between">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-bold text-gray-900 leading-tight mb-8">
              Punya Teman Pintar Untuk Hidup <span className="text-brand">Lebih Hijau</span>
            </h2>
            <button className="bg-brand text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-green-700">
              Coba Sekarang
            </button>
          </div>
          <div className="flex gap-6">
            <div className="w-75 h-75 relative rounded-3xl overflow-hidden">
              <Image src="https://picsum.photos/seed/eco1/300/300" alt="Eco Feature" fill className="object-cover" />
            </div>
            <div className="w-75 h-75 relative rounded-3xl overflow-hidden mt-12">
              <Image src="https://picsum.photos/seed/eco2/300/300" alt="Eco Feature" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}