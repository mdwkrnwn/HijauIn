// src/app/cara-kerja/page.tsx
import Image from 'next/image';
import {
  FaCheckCircle, FaClipboardList, FaRobot, FaStar, FaTrophy,
  FaGlobe, FaArrowRight, FaBicycle, FaFlask, FaTint,
  FaSeedling, FaBus, FaRecycle, FaLeaf
} from 'react-icons/fa';

export default function HowItWorks() {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Header Section */}
      <section className="relative w-full px-16 py-24 overflow-hidden text-center">
        <div className="text-primary inline-flex items-center gap-2 px-4 py-2 mb-8 text-base font-semibold bg-white rounded-full shadow-sm">
          <FaCheckCircle /> Cara Kerja HijauIn
        </div>
        <h1 className="max-w-4xl mx-auto mb-8 text-6xl font-extrabold leading-tight text-gray-900">
          5 Langkah Mudah Menuju Bumi yang <span className="text-primary">Lebih Hijau</span>
        </h1>
        <p className="max-w-3xl mx-auto mb-12 text-xl text-gray-600">
          HijauIn membantumu mencatat aksi ramah lingkungan, mendapatkan insight dari AI, dan melihat dampak nyatanya. Semua dalam satu platform.
        </p>
        <button className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 mb-12 text-lg font-bold transition bg-white border-2 rounded-full">
          Lihat Fitur Lengkap &rarr;
        </button>
        <div className="relative w-250 h-125 mx-auto rounded-t-[3rem] overflow-hidden shadow-2xl border-4 border-white">
          <Image src="https://picsum.photos/seed/appmockup/1000/500" alt="App Mockup" fill className="object-cover" />
        </div>
      </section>

      {/* 5 Steps Diagram */}
      <section className="w-full px-16 py-24">
        <h2 className="mb-24 text-4xl font-bold text-center">Bagaimana <span className="text-primary">HijauIn</span> Bekerja?</h2>
        <div className=" relative flex items-start justify-between mx-auto">
          <div className="top-10 absolute left-0 z-0 w-full h-1 border-t-2 border-gray-300 border-dashed"></div>
          {[
            { num: "01", icon: <FaClipboardList />, title: "Catat Aksi", desc: "Catat aksi ramah lingkunganmu setiap hari dengan mudah." },
            { num: "02", icon: <FaRobot />, title: "AI Menganalisis", desc: "AI menganalisis aksimu dan memberi insight personal yang cerdas." },
            { num: "03", icon: <FaStar />, title: "Dapatkan Poin", desc: "Setiap aksi positif akan memberikan Eco Score yang bisa kamu lihat." },
            { num: "04", icon: <FaTrophy />, title: "Ikut Challenge", desc: "Ikuti tantangan seru dan selesaikan misi untuk meraih hadiah menarik." },
            { num: "05", icon: <FaGlobe />, title: "Berdampak Nyata", desc: "Lihat laporan dampakmu dan kontribusimu untuk bumi yang lebih baik." }
          ].map((step, idx) => (
            <div key={idx} className=" relative z-10 flex flex-col items-center w-64 px-4 text-center">
              <div className="border-primary text-primary flex items-center justify-center w-12 h-12 mb-4 text-lg font-bold bg-white border-4 rounded-full">
                {step.num}
              </div>
              <div className="bg-primary-light text-primary flex items-center justify-center w-24 h-24 mb-6 text-4xl rounded-full shadow-sm">
                {step.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
              <p className="text-base text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* System Flow */}
      <section className="w-full px-16 py-24 text-center">
        <h2 className="mb-6 text-4xl font-bold">Alur Sistem <span className="text-primary">HijauIn</span></h2>
        <p className="mb-16 text-xl text-gray-600">Data dan informasi mengalir untuk memberikan pengalaman terbaik.</p>
        <div className=" flex flex-wrap items-center justify-center gap-6 mx-auto">
          {[
            { label: "Pengguna", icon: <FaCheckCircle /> },
            { label: "Catat Aksi", icon: <FaClipboardList /> },
            { label: "AI Green Coach", icon: <FaRobot /> },
            { label: "Eco Score", icon: <FaStar /> },
            { label: "Dashboard", icon: <FaCheckCircle /> },
            { label: "Laporan Dampak", icon: <FaGlobe /> }
          ].map((node, i, arr) => (
            <div key={i} className="flex items-center gap-6">
              <div className="rounded-2xl flex flex-col items-center w-48 gap-3 px-8 py-6 bg-white border border-gray-200 shadow-sm">
                <div className="text-primary text-3xl">{node.icon}</div>
                <div className="text-lg font-bold text-center text-gray-800">{node.label}</div>
              </div>
              {i < arr.length - 1 && <FaArrowRight className="text-2xl text-gray-400" />}
            </div>
          ))}
        </div>
      </section>

      {/* Perjalanan Aksi Pengguna */}
      <section className=" w-full px-16 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">Perjalanan Aksi Pengguna</h2>
          <p className="text-xl text-gray-600">Contoh perjalanan aksi hijau dalam 1 minggu.</p>
        </div>

        <div className=" relative flex items-stretch justify-between gap-4 mx-auto">
          <div className="top-1/2 absolute left-0 z-0 w-full h-1 border-t-2 border-gray-200 border-dashed"></div>
          {[
            { day: "Senin", icon: <FaBicycle />, title: "Naik sepeda ke kampus", poin: "+30 poin", desc: "Mengurangi emisi CO2" },
            { day: "Selasa", icon: <FaFlask />, title: "Bawa tumbler sendiri", poin: "+20 poin", desc: "Mengurangi sampah plastik" },
            { day: "Rabu", icon: <FaTint />, title: "Hemat air saat mandi", poin: "+15 poin", desc: "Menghemat penggunaan air" },
            { day: "Kamis", icon: <FaSeedling />, title: "Menanam tanaman", poin: "+40 poin", desc: "Meningkatkan kualitas udara" },
            { day: "Jumat", icon: <FaBus />, title: "Naik transportasi umum", poin: "+25 poin", desc: "Mengurangi polusi udara" },
            { day: "Sabtu", icon: <FaRecycle />, title: "Pilah sampah rumah", poin: "+20 poin", desc: "Mendukung daur ulang" },
            { day: "Minggu", icon: <FaTrophy />, title: "Selesaikan challenge", poin: "+50 poin", desc: "Dapat badge baru dan reward" }
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl relative z-10 flex flex-col items-center w-full overflow-hidden text-center bg-white border border-gray-200 shadow-sm">
              <div className="bg-primary w-full py-2 text-base font-bold text-white">
                {item.day}
              </div>
              <div className="flex flex-col items-center justify-between h-full p-6">
                <div>
                  <div className="text-primary flex justify-center mb-4 text-4xl">{item.icon}</div>
                  <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900">{item.title}</h3>
                </div>
                <div className="w-full">
                  <div className="text-primary mb-2 text-base font-bold">{item.poin}</div>
                  <p className="text-sm leading-tight text-gray-500">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Points Banner */}
        <div className=" bg-primary-light rounded-2xl flex items-center justify-between p-8 mx-auto mt-12 border border-green-100 shadow-sm">
          <div className="flex items-center gap-6">
            <div className="text-lg font-medium text-gray-600">Total Mingguan</div>
            <div className="text-primary text-5xl font-extrabold">+200 poin</div>
          </div>
          <div className="flex items-center gap-6">
            <p className="max-w-md text-lg font-medium text-gray-700">
              Terus konsisten dan tingkatkan dampak positifmu untuk bumi setiap hari!
            </p>
            <FaGlobe className="text-primary text-5xl opacity-50" />
          </div>
        </div>
      </section>

      {/* Mengapa Cara Ini Efektif */}
      <section className="bg-gray-50 w-full px-16 py-24">
        <h2 className="mb-16 text-4xl font-bold text-center">Mengapa Cara Ini Efektif?</h2>
        <div className=" grid grid-cols-4 gap-8 mx-auto">
          {[
            { icon: <FaCheckCircle />, title: "Mudah Dilakukan", desc: "Langkah sederhana yang bisa kamu lakukan kapan saja dan di mana saja." },
            { icon: <FaRobot />, title: "Insight Personal", desc: "AI memberikan rekomendasi yang sesuai dengan kebiasaan dan gaya hidupmu." },
            { icon: <FaTrophy />, title: "Motivasi Konsisten", desc: "Challenge, poin, dan badge membuatmu lebih semangat untuk terus beraksi." },
            { icon: <FaLeaf />, title: "Dampak Nyata", desc: "Setiap aksi tercatat dan memberikan dampak positif nyata untuk bumi." }
          ].map((feature, idx) => (
            <div key={idx} className="rounded-2xl flex flex-col gap-4 p-8 bg-white border border-gray-100 shadow-sm">
              <div className="bg-primary-light rounded-xl text-primary flex items-center justify-center w-16 h-16 mb-2 text-3xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-base leading-relaxed text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="w-full px-16 py-24">
        <div className="bg-primary-light rounded-[3rem] p-16 flex items-center justify-between mx-auto relative overflow-hidden shadow-sm">
          <div className="h-75 relative w-1/3">
            <Image src="https://picsum.photos/seed/ctahighfive/400/400" alt="High Five" fill className="object-contain" />
          </div>

          <div className="z-10 w-1/3 px-6 text-left">
            <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900">
              Siap memulai perjalanan <span className="text-primary">hijau</span> mu hari ini?
            </h2>
            <p className="text-lg text-gray-700">
              Bersama HijauIn, setiap langkah kecilmu membawa perubahan besar untuk bumi.
            </p>
          </div>

          <div className="z-10 flex flex-col items-end w-1/3 gap-4">
            <button className="bg-primary hover:bg-green-700 w-64 py-4 text-lg font-bold text-white transition rounded-full shadow-lg">
              Daftar Gratis Sekarang &rarr;
            </button>
            <button className="border-primary text-primary hover:bg-primary-light w-64 py-4 text-lg font-bold transition bg-white border-2 rounded-full">
              Lihat Fitur Lengkap &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}