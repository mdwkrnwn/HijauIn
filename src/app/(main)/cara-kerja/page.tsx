// src/app/cara-kerja/page.tsx
import Image from 'next/image';
import { FaCheckCircle, FaClipboardList, FaRobot, FaStar, FaTrophy, FaGlobe, FaArrowRight } from 'react-icons/fa';

export default function HowItWorks() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Header Section */}
      <section className="w-full px-16 py-24 text-center bg-brand-light relative overflow-hidden">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-brand font-semibold text-base mb-8 shadow-sm">
          <FaCheckCircle /> Cara Kerja HijauIn
        </div>
        <h1 className="text-6xl font-extrabold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
          5 Langkah Mudah Menuju Bumi yang <span className="text-brand">Lebih Hijau</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          HijauIn membantumu mencatat aksi, mendapatkan insight dari AI, dan melihat dampak nyatanya. Semua dalam satu platform.
        </p>
        <div className="relative w-[1000px] h-[500px] mx-auto rounded-t-[3rem] overflow-hidden shadow-2xl border-4 border-white mt-8">
          <Image src="https://picsum.photos/seed/appmockup/1000/500" alt="App Mockup" fill className="object-cover" />
        </div>
      </section>

      {/* 5 Steps Diagram */}
      <section className="w-full px-16 py-24 bg-white">
        <h2 className="text-4xl font-bold text-center mb-24">Bagaimana <span className="text-brand">HijauIn</span> Bekerja?</h2>
        <div className="flex justify-between items-start relative">
          <div className="absolute top-10 left-0 w-full h-1 border-t-2 border-dashed border-gray-300 z-0"></div>
          {[
            { num: "01", icon: <FaClipboardList />, title: "Catat Aksi", desc: "Catat aksi ramah lingkunganmu setiap hari dengan mudah." },
            { num: "02", icon: <FaRobot />, title: "AI Menganalisis", desc: "AI menganalisis aksimu dan memberi insight personal yang cerdas." },
            { num: "03", icon: <FaStar />, title: "Dapatkan Poin", desc: "Setiap aksi positif akan memberikan Eco Score yang bisa kamu lihat." },
            { num: "04", icon: <FaTrophy />, title: "Ikut Challenge", desc: "Ikuti tantangan seru dan selesaikan misi untuk meraih hadiah menarik." },
            { num: "05", icon: <FaGlobe />, title: "Berdampak Nyata", desc: "Lihat laporan dampakmu dan kontribusimu untuk bumi yang lebih baik." }
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative z-10 w-64 bg-white px-4">
              <div className="w-12 h-12 bg-white border-4 border-brand text-brand font-bold rounded-full flex items-center justify-center text-lg mb-4">
                {step.num}
              </div>
              <div className="w-24 h-24 bg-brand-light rounded-full flex items-center justify-center text-4xl text-brand mb-6 shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-base text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* System Flow */}
      <section className="w-full px-16 py-24 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-16">Alur Sistem <span className="text-brand">HijauIn</span></h2>
        <div className="flex items-center justify-center gap-4">
          {[
            "Pengguna", "Catat Aksi", "AI Green Coach", "Eco Score", "Dashboard", "Laporan Dampak"
          ].map((node, i, arr) => (
            <div key={i} className="flex items-center gap-4">
              <div className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-gray-200 font-bold text-xl text-gray-800">
                {node}
              </div>
              {i < arr.length - 1 && <FaArrowRight className="text-2xl text-brand" />}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}