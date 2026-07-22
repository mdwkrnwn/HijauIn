import CTA from './(components)/CTA';
import Stats from './(components)/Stats';
import Hero from './(components)/Hero';
import Features from './(components)/Features';
import {
  FaClipboardList, FaStar, FaChartBar, FaTrophy, FaGlobe,
  FaUsers, FaCalendarAlt, FaArrowRight, FaEye, FaLeaf
} from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Features Section */}
      <Features />

      {/* Call to Action Banner */}
      <CTA />

      {/* Cara Kerja Section */}
      <section className="px-16 py-24 text-center">
        <h2 className="mb-20 text-4xl font-bold">
          Cara Kerja <span className="text-primary">HijauIn</span>
        </h2>

        <div className="grid *:mx-auto grid-cols-5">
          {/* Garis putus-putus penghubung (Dotted Line) */}
          {[
            { num: "1", src: "/assets/beranda/catataksi3.png", title: "Catat Aksi", desc: "Catat aksi ramah lingkungan yang kamu lakukan setiap hari." },
            { num: "2", src: "/assets/beranda/dapatkanpoin.png", title: "Dapatkan Poin", desc: "Setiap aksi memberimu poin dan meningkatkan Eco Score-mu." },
            { num: "3", src: "/assets/beranda/pantaudampak.png", title: "Pantau Dampak", desc: "Lihat statistik dan laporan dampak positif dari aksimu." },
            { num: "4", src: "/assets/beranda/ikutchallange.png", title: "Ikuti Challenge", desc: "Selesaikan tantangan seru dan dapatkan badge serta reward." },
            { num: "5", src: "/assets/beranda/berdampakdunia.png", title: "Berdampak Nyata", desc: "Bersama-sama menciptakan perubahan positif untuk bumi yang lebih baik." }
          ].map((step, idx) => (
            <div key={idx} className="relative z-10 grid w-48 grid-rows-[auto_1fr_auto_auto] gap-6 px-2 text-center">
              <div className="bg-primary size-10 flex items-center justify-center p-4 text-xl font-bold text-white rounded-full shadow-md">
                {step.num}
              </div>
              <div className="bg-primary-light text-primary size-50 flex justify-center rounded-full">
                <Image className='object-cover' src={step.src} alt={step.title} width={1536} height={1024} />
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-base leading-relaxed text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Komunitas & Testimoni Section */}
      <section className="px-16 py-24">
        <div className="flex gap-12">
          {/* Kolom 1: Info Komunitas */}
          <div className="w-1/4">
            <h2 className="text-4xl font-bold leading-tight text-gray-900">
              Komunitas <span className="text-primary">Hijau</span>,<br /> Perubahan Nyata
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Bergabung dengan ribuan orang hebat yang sudah memulai langkah hijau untuk bumi yang lebih baik.
            </p>
            <button className="text-primary hover:border-primary flex items-center gap-3 px-6 py-3 text-base font-bold transition bg-white border-2 border-gray-200 rounded-full">
              <FaUsers /> Gabung Komunitas
            </button>
          </div>

          {/* Kolom 2: Kegiatan Terbaru */}
          <div className="flex flex-col w-2/4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Kegiatan Komunitas Terbaru</h3>
              <button className="text-primary hover:underline text-base font-bold">Lihat Semua &rarr;</button>
            </div>
            <div className="grow flex gap-4">
              {[
                { img: "act1", tag: "Bersih Pantai", title: "Bersih Pantai Anyer", p: "120", date: "12 Mei 2024" },
                { img: "act2", tag: "Tanam Pohon", title: "Tanam Pohon Mangrove", p: "95", date: "10 Mei 2024" },
                { img: "act3", tag: "Daur Ulang", title: "Workshop Daur Ulang", p: "56", date: "8 Mei 2024" }
              ].map((act, idx) => (
                <div key={idx} className="hover:shadow-md flex-1 overflow-hidden">
                  <div className='relative'>
                    <div className="bottom-2 left-2 bg-primary-light text-primary absolute px-3 py-1 text-base font-bold rounded-md">
                      {act.tag}
                    </div>
                    <Image src={`https://picsum.photos/seed/${act.img}/300/200`} className='rounded-2xl' alt={act.title} height={280} width={280} />
                  </div>
                  <div className="p-5 font-bold">
                    <h4 className="line-clamp-1 mb-4 text-lg font-bold text-gray-900">{act.title}</h4>
                    <span className="text-primary flex items-center gap-2">
                      <FaUsers /> {act.p} peserta</span>
                    <span className="flex items-center gap-2"><FaCalendarAlt /> {act.date.split(' ')[0]} {act.date.split(' ')[1]}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom 3: Testimoni (Kata Mereka) */}
          <div className="w-1/4">
            <h3 className="mb-6 text-xl font-bold text-gray-900">Kata Mereka</h3>
            <div className="space-y-4">
              {[
                { name: "Sinta Putri", text: "\"HijauIn membuatku lebih sadar dan konsisten menjaga lingkungan setiap hari.\"" },
                { name: "Budi Santoso", text: "\"Challenge-nya seru dan komunitasnya positif banget!\"" }
              ].map((testi, idx) => (
                <div key={idx} className="rounded-2xl p-5 bg-white border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="relative w-12 h-12 overflow-hidden rounded-full">
                      <Image src={`https://picsum.photos/seed/${testi.name}/100/100`} alt={testi.name} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="text-base font-bold text-gray-900">{testi.name}</div>
                      <div className="flex text-base text-yellow-400">
                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                      </div>
                    </div>
                  </div>
                  <p className="text-base italic text-gray-600">{testi.text}</p>
                </div>
              ))}
              <div className="flex justify-center gap-2 mt-4">
                <div className="bg-primary w-2 h-2 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="px-16 py-24">
        <div className="bg-primary-light rounded-[3rem] p-16 flex items-center justify-between relative overflow-hidden shadow-sm">
          {/* Ilustrasi Kiri */}
          <div className="h-75 relative flex items-center justify-center w-1/3">
            <Image src="https://picsum.photos/seed/bottomcta/400/400" alt="People holding earth" fill className="object-contain" />
          </div>

          {/* Teks Tengah */}
          <div className="z-10 w-1/3 px-8 text-center">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900">
              Yuk, mulai langkah kecil untuk perubahan besar!
            </h2>
            <p className="text-lg text-gray-700">
              Bersama HijauIn, mari ciptakan lingkungan yang lebih bersih, sehat, dan berkelanjutan.
            </p>
          </div>

          {/* Tombol Kanan */}
          <div className="z-10 flex flex-col items-end justify-center w-1/3 gap-4">
            <button className="bg-primary hover:bg-green-700 flex items-center justify-center w-64 gap-3 py-4 text-lg font-bold text-white transition rounded-full shadow-lg">
              Daftar Gratis Sekarang <FaArrowRight />
            </button>
            <button className="border-primary text-primary hover:bg-primary-light flex items-center justify-center w-64 gap-3 py-4 text-lg font-bold transition bg-white border-2 rounded-full">
              <FaEye /> Lihat Cara Kerja
            </button>
          </div>

          {/* Ornamen Daun Latar (opsional untuk mempermanis) */}
          <FaLeaf className="top-10 left-10 text-primary opacity-10 absolute text-6xl transform -rotate-45" />
          <FaLeaf className="bottom-10 right-10 text-8xl text-primary opacity-10 absolute transform rotate-45" />
        </div>
      </section>
    </div>
  );






}