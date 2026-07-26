// src/app/edukasi/page.tsx
import Image from 'next/image';
import {
  FaSearch, FaLeaf, FaRecycle, FaTint,
  FaTree, FaPlayCircle, FaCheckCircle, FaClock, FaEye,
  FaBolt, FaHeart, FaLock, FaChevronRight
} from 'react-icons/fa';

export default function EdukasiUtama() {
  return (
    <div className="flex flex-col items-center w-full pb-24 bg-white">

      {/* Hero Section */}
      <section className="max-w-1080p relative flex items-center justify-between w-full px-16 py-24 mx-auto overflow-hidden">

        {/* Left Content */}
        <div className="z-10 w-[55%]">
          <div className="text-brand bg-brand-light inline-flex items-center gap-2 px-4 py-2 mb-8 text-base font-bold border border-green-100 rounded-full shadow-sm">
            <FaLeaf /> Edukasi Hijau
          </div>
          <h1 className="text-7xl mb-6 font-extrabold leading-tight text-gray-900">
            Belajar, Peduli,<br /> Aksi <span className="text-brand">untuk Bumi</span>
          </h1>
          <p className="max-w-xl mb-12 text-xl leading-relaxed text-gray-600">
            Temukan berbagai artikel, panduan, dan tips seputar lingkungan untuk menambah wawasan dan menginspirasi aksi positif setiap hari.
          </p>

          <div className="flex max-w-xl p-2 mb-12 bg-white border border-gray-200 rounded-full shadow-md">
            <input type="text" placeholder="Cari artikel, topik, atau panduan..." className="w-full px-6 text-base text-gray-700 bg-transparent outline-none" />
            <button className="bg-brand w-14 h-14 hover:bg-green-700 shrink-0 flex items-center justify-center text-xl text-white transition rounded-full shadow-sm">
              <FaSearch />
            </button>
          </div>

          <div className="flex flex-col gap-4">
            <span className="text-base font-bold text-gray-900">Topik Populer</span>
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2 px-5 py-2.5 text-base font-bold text-gray-700 bg-white border border-gray-200 rounded-full hover:border-brand cursor-pointer transition shadow-sm"><FaRecycle className="text-brand" /> Sampah & Daur Ulang</span>
              <span className="flex items-center gap-2 px-5 py-2.5 text-base font-bold text-gray-700 bg-white border border-gray-200 rounded-full hover:border-brand cursor-pointer transition shadow-sm"><FaBolt className="text-yellow-500" /> Hemat Energi</span>
              <span className="flex items-center gap-2 px-5 py-2.5 text-base font-bold text-gray-700 bg-white border border-gray-200 rounded-full hover:border-brand cursor-pointer transition shadow-sm"><FaTint className="text-blue-500" /> Hemat Air</span>
              <span className="flex items-center gap-2 px-5 py-2.5 text-base font-bold text-gray-700 bg-white border border-gray-200 rounded-full hover:border-brand cursor-pointer transition shadow-sm"><FaLeaf className="text-brand" /> Gaya Hidup Hijau</span>
              <span className="flex items-center gap-2 px-5 py-2.5 text-base font-bold text-gray-700 bg-white border border-gray-200 rounded-full hover:border-brand cursor-pointer transition shadow-sm"><FaTree className="text-green-700" /> Konservasi Alam</span>
            </div>
          </div>
        </div>

        {/* Right Content - Circular Hero Image */}
        <div className="w-[45%] relative flex justify-end items-center">
          {/* Decorative Background Blob/Circle */}
          <div className="top-1/2 left-1/2 w-175 h-175 bg-brand-light -z-10 opacity-60 absolute -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

          <div className="relative w-137.5 h-137.5 rounded-full overflow-hidden shadow-2xl border-8 border-white z-10">
            <Image src="https://picsum.photos/seed/eduglobe/800/800" alt="Education Earth Globe" fill className="object-cover" />
          </div>

          {/* Floating Leaves Decoration */}
          <FaLeaf className="top-10 left-10 text-brand absolute text-4xl transform -rotate-45 opacity-50" />
          <FaLeaf className="bottom-20 right-10 text-brand opacity-30 absolute text-5xl transform rotate-45" />
        </div>
      </section>

      {/* Rekomendasi untuk Kamu */}
      <section className="max-w-1080p w-full px-16 py-16 mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Rekomendasi untuk Kamu <FaLeaf className="text-brand inline" /></h2>
          <button className="text-brand hover:underline flex items-center gap-2 text-lg font-bold">
            Lihat Semua <FaChevronRight className="text-base" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {[
            { img: "edu1", tag: "Edukasi", title: "Mengenal Jenis Sampah dan Cara Mengelolanya", desc: "Memahami jenis sampah adalah langkah awal untuk mengelola sampah dengan benar.", time: "5 menit baca", view: "1.2K dibaca" },
            { img: "edu2", tag: "Panduan", title: "10 Cara Hemat Energi di Rumah", desc: "Langkah sederhana yang bisa kamu lakukan untuk menghemat energi setiap hari.", time: "4 menit baca", view: "980 dibaca" },
            { img: "edu3", tag: "Tips", title: "Kurangi Plastik Sekali Pakai dalam 7 Hari", desc: "Tantangan 7 hari untuk mengurangi penggunaan plastik sekali pakai.", time: "3 menit baca", view: "2.1K dibaca" },
            { img: "edu4", tag: "Edukasi", title: "Pentingnya Menjaga Ekosistem Laut", desc: "Laut adalah sumber kehidupan. Yuk, jaga bersama kelestariannya!", time: "6 menit baca", view: "1.6K dibaca" }
          ].map((item, idx) => (
            <div key={idx} className="rounded-3xl hover:shadow-xl group flex flex-col overflow-hidden transition bg-white border border-gray-200 cursor-pointer">
              <div className="relative h-56 overflow-hidden">
                <Image src={`https://picsum.photos/seed/${item.img}/400/300`} alt={item.title} fill className="group-hover:scale-105 object-cover transition duration-500" />
                <div className="top-4 left-4 bg-white/90 backdrop-blur text-brand absolute px-4 py-2 text-base font-bold rounded-lg shadow-sm">
                  {item.tag}
                </div>
              </div>
              <div className="grow flex flex-col p-8">
                <h3 className="mb-4 text-xl font-bold leading-snug text-gray-900">{item.title}</h3>
                <p className="grow mb-8 text-base leading-relaxed text-gray-600">{item.desc}</p>
                <div className="text-brand bg-brand-light/40 rounded-xl flex items-center justify-between px-4 py-2 text-base font-bold">
                  <span className="flex items-center gap-2"><FaClock /> {item.time}</span>
                  <span className="flex items-center gap-2"><FaEye /> {item.view}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kategori Edukasi */}
      <section className="bg-gray-50 w-full py-24">
        <div className="max-w-1080p px-16 mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Kategori Edukasi <FaLeaf className="text-brand inline" /></h2>
            <button className="text-brand hover:underline flex items-center gap-2 text-lg font-bold">
              Lihat Semua Kategori <FaChevronRight className="text-base" />
            </button>
          </div>
          <div className="grid grid-cols-6 gap-6">
            {[
              { icon: <FaRecycle />, name: "Sampah & Daur Ulang", count: "24 artikel", color: "text-brand" },
              { icon: <FaBolt />, name: "Hemat Energi", count: "18 artikel", color: "text-yellow-500" },
              { icon: <FaTint />, name: "Hemat Air", count: "16 artikel", color: "text-blue-500" },
              { icon: <FaLeaf />, name: "Gaya Hidup Hijau", count: "32 artikel", color: "text-brand" },
              { icon: <FaTree />, name: "Konservasi Alam", count: "21 artikel", color: "text-green-700" },
              { icon: <FaHeart />, name: "Kesehatan Lingkungan", count: "14 artikel", color: "text-brand" }
            ].map((cat, idx) => (
              <div key={idx} className="rounded-4xl hover:shadow-lg hover:border-brand/30 min-h-55 flex flex-col items-center justify-center p-8 text-center transition bg-white border border-gray-100 shadow-sm cursor-pointer">
                <div className={`text-5xl ${cat.color} mb-6 bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center`}>
                  {cat.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold leading-tight text-gray-900">{cat.name}</h3>
                <p className="text-base font-medium text-gray-500">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Edukasi Pilihan */}
      <section className="max-w-1080p w-full px-16 py-24 mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Video Edukasi Pilihan <FaLeaf className="text-brand inline" /></h2>
          <button className="text-brand hover:underline flex items-center gap-2 text-lg font-bold">
            Lihat Semua <FaChevronRight className="text-base" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {[
            { img: "vid1", title: "Energi Terbarukan untuk Masa Depan", dur: "06:45", views: "1.4K ditonton" },
            { img: "vid2", title: "3R: Reduce, Reuse, Recycle", dur: "05:30", views: "2.3K ditonton" },
            { img: "vid3", title: "Cara Menanam Pohon dengan Benar", dur: "07:12", views: "1.9K ditonton" },
            { img: "vid4", title: "Lindungi Laut, Lindungi Kehidupan", dur: "04:58", views: "1.8K ditonton" }
          ].map((vid, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="rounded-4xl relative h-48 mb-6 overflow-hidden shadow-md">
                <Image src={`https://picsum.photos/seed/${vid.img}/400/250`} alt={vid.title} fill className="group-hover:scale-105 object-cover transition duration-500" />
                <div className="bg-black/30 group-hover:bg-black/50 absolute inset-0 flex items-center justify-center transition">
                  <FaPlayCircle className="opacity-90 text-6xl text-white rounded-full shadow-xl" />
                </div>
                <div className="bottom-4 right-4 bg-black/80 absolute px-3 py-1 text-base font-bold text-white rounded-lg">
                  {vid.dur}
                </div>
              </div>
              <h3 className="group-hover:text-brand mb-3 text-xl font-bold leading-snug text-gray-900 transition">{vid.title}</h3>
              <div className="text-brand bg-brand-light w-max flex items-center gap-2 px-3 py-1 text-base font-bold rounded-lg">
                <FaCheckCircle className="text-brand" /> {vid.views}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Infografis Populer */}
      <section className="max-w-1080p w-full px-16 pb-24 mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Infografis Populer</h2>
          <button className="text-brand hover:underline flex items-center gap-2 text-lg font-bold">
            Lihat Semua <FaChevronRight className="text-base" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {[
            { title: "Jejak Karbon", desc: "Apa itu dan bagaimana menguranginya?", views: "1.2K dilihat", icon: <FaLeaf className="text-[5rem] text-[#bbf7d0]" />, bg: "bg-[#f0fdf4]" },
            { title: "Hemat Air", desc: "Mulai dari hal kecil di rumah", views: "980 dilihat", icon: <FaTint className="text-[5rem] text-[#bae6fd]" />, bg: "bg-[#f0f9ff]" },
            { title: "Daur Ulang", desc: "Proses sederhana, dampak luar biasa", views: "1.5K dilihat", icon: <FaRecycle className="text-[5rem] text-[#d9f99d]" />, bg: "bg-[#f7fee7]" },
            { title: "Manfaat Menanam Pohon", desc: "Untuk bumi yang lebih baik", views: "1.8K dilihat", icon: <FaTree className="text-[5rem] text-[#a7f3d0]" />, bg: "bg-[#ecfdf5]" }
          ].map((info, idx) => (
            <div key={idx} className={`${info.bg} rounded-4xl hover:shadow-lg flex items-center justify-between p-8 transition border border-white cursor-pointer overflow-hidden relative`}>
              <div className="relative z-10 flex-1 pr-4">
                <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900">{info.title}</h3>
                <p className="mb-6 text-base leading-snug text-gray-600">{info.desc}</p>
                <div className="text-brand w-max flex items-center gap-2 px-3 py-1 text-base font-bold bg-white rounded-lg shadow-sm">
                  <FaEye /> {info.views}
                </div>
              </div>
              <div className="-right-6 -bottom-4 opacity-80 -rotate-12 absolute z-0 transform">
                {info.icon}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-1080p w-full px-16 pb-24 mx-auto">
        <div className="bg-linear-to-br from-brand-light to-white rounded-[3rem] p-16 flex items-center justify-between border border-green-100 shadow-sm relative overflow-hidden">

          <div className="w-[55%] z-10">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900">
              Terus Belajar, Terus Beraksi <br /> untuk Bumi yang <span className="text-brand">Lebih Baik</span>
            </h2>
            <p className="mb-10 text-xl text-gray-600">
              Dapatkan artikel terbaru, tips menarik, dan informasi edukasi langsung ke email kamu. <FaLeaf className="text-brand inline" />
            </p>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl flex max-w-lg p-2 bg-white border border-gray-200 shadow-sm">
                <input type="email" placeholder="Masukkan email kamu" className="w-full px-6 text-lg bg-transparent outline-none" />
                <button className="bg-brand hover:bg-green-700 whitespace-nowrap rounded-xl px-8 py-4 text-lg font-bold text-white transition">
                  Berlangganan
                </button>
              </div>
              <p className="text-brand flex items-center gap-2 mt-2 text-base font-bold">
                <FaLock /> Kami tidak akan membagikan email kamu ke pihak lain.
              </p>
            </div>
          </div>

          <div className="w-[45%] relative h-87.5 z-10">
            <Image src="https://picsum.photos/seed/newsletterread2/600/400" alt="Newsletter Illustration" fill className="object-contain" />
          </div>

          {/* Decorative Elements */}
          <div className="bg-green-50 blur-3xl absolute top-0 right-0 w-64 h-64 transform translate-x-1/2 -translate-y-1/2 rounded-full opacity-50"></div>
          <div className="bg-green-50 blur-3xl absolute bottom-0 left-0 w-64 h-64 transform -translate-x-1/2 translate-y-1/2 rounded-full opacity-50"></div>
        </div>
      </section>

    </div>
  );
}