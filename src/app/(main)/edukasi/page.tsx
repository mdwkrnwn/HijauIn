// src/app/edukasi/page.tsx
import Image from 'next/image';
import { FaSearch, FaLeaf, FaRecycle, FaLightbulb, FaTint, FaTree, FaPlayCircle, FaCheckCircle, FaClock } from 'react-icons/fa';

export default function Edukasi() {
  return (
    <div className="w-full flex flex-col items-center pb-24">
      {/* Hero Section */}
      <section className="w-full px-16 py-24 bg-linear-to-br from-primary-light to-white flex justify-between items-center relative overflow-hidden">
        <div className="w-1/2 z-10">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-primary font-semibold text-base mb-6 shadow-sm border border-green-100">
            <FaLeaf /> Edukasi Hijau
          </div>
          <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Belajar, Peduli, <br /> Aksi <span className="text-primary">untuk Bumi</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-lg">
            Temukan berbagai artikel, panduan, dan tips seputar lingkungan untuk menambah wawasan dan menginspirasi aksi positif setiap hari.
          </p>
          <div className="flex bg-white rounded-full p-2 shadow-md border border-gray-200 max-w-xl mb-6">
            <input type="text" placeholder="Cari artikel, topik, atau panduan..." className="w-full px-6 text-base outline-none bg-transparent" />
            <button className="bg-primary text-white w-14 h-14 rounded-full flex items-center justify-center text-xl hover:bg-green-700">
              <FaSearch />
            </button>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-base font-bold text-gray-700">Topik Populer:</span>
            <span className="bg-white px-4 py-2 rounded-full text-base border border-gray-200 flex items-center gap-2"><FaRecycle className="text-primary" /> Sampah & Daur Ulang</span>
            <span className="bg-white px-4 py-2 rounded-full text-base border border-gray-200 flex items-center gap-2"><FaLightbulb className="text-primary" /> Hemat Energi</span>
          </div>
        </div>
        <div className="w-1/2 relative h-125">
          <Image src="https://picsum.photos/seed/eduhero/800/600" alt="Education Hero" fill className="object-contain" />
        </div>
      </section>

      {/* Recommended Articles */}
      <section className="w-full px-16 py-16">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Rekomendasi untuk Kamu <FaLeaf className="inline text-primary" /></h2>
          <button className="text-primary font-bold text-lg hover:underline">Lihat Semua &rarr;</button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {[
            { img: "edu1", tag: "Edukasi", title: "Mengenal Jenis Sampah dan Cara Mengelolanya", time: "5 menit baca" },
            { img: "edu2", tag: "Panduan", title: "10 Cara Hemat Energi di Rumah", time: "4 menit baca" },
            { img: "edu3", tag: "Tips", title: "Kurangi Plastik Sekali Pakai dalam 7 Hari", time: "3 menit baca" },
            { img: "edu4", tag: "Edukasi", title: "Pentingnya Menjaga Ekosistem Laut", time: "6 menit baca" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition cursor-pointer group">
              <div className="h-64 relative overflow-hidden">
                <Image src={`https://picsum.photos/seed/${item.img}/400/300`} alt={item.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-primary font-bold text-base">
                  {item.tag}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">{item.title}</h3>
                <div className="flex items-center gap-2 text-base text-gray-500">
                  <FaClock /> {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Categories */}
      <section className="w-full px-16 py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Kategori Edukasi <FaLeaf className="inline text-primary" /></h2>
        <div className="grid grid-cols-6 gap-6">
          {[
            { icon: <FaRecycle />, name: "Sampah & Daur Ulang", count: "24 artikel" },
            { icon: <FaLightbulb />, name: "Hemat Energi", count: "18 artikel" },
            { icon: <FaTint />, name: "Hemat Air", count: "16 artikel" },
            { icon: <FaLeaf />, name: "Gaya Hidup Hijau", count: "32 artikel" },
            { icon: <FaTree />, name: "Konservasi Alam", count: "21 artikel" },
            { icon: <FaCheckCircle />, name: "Kesehatan Lingkungan", count: "14 artikel" }
          ].map((cat, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary transition cursor-pointer">
              <div className="text-5xl text-primary mb-6">{cat.icon}</div>
              <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
              <p className="text-base text-gray-500">{cat.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Videos */}
      <section className="w-full px-16 py-16">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Video Edukasi Pilihan <FaLeaf className="inline text-primary" /></h2>
          <button className="text-primary font-bold text-lg hover:underline">Lihat Semua &rarr;</button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {[
            { img: "vid1", title: "Energi Terbarukan untuk Masa Depan", dur: "06:45" },
            { img: "vid2", title: "3R: Reduce, Reuse, Recycle", dur: "05:30" },
            { img: "vid3", title: "Cara Menanam Pohon dengan Benar", dur: "07:12" },
            { img: "vid4", title: "Lindungi Laut, Lindungi Kehidupan", dur: "04:58" }
          ].map((vid, idx) => (
            <div key={idx} className="cursor-pointer group">
              <div className="h-48 relative rounded-2xl overflow-hidden mb-4">
                <Image src={`https://picsum.photos/seed/${vid.img}/400/250`} alt={vid.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/40 transition">
                  <FaPlayCircle className="text-white text-5xl opacity-80" />
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1 rounded-lg text-base font-bold">
                  {vid.dur}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{vid.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="w-full px-16 mt-16">
        <div className="bg-primary-light rounded-3xl p-16 flex items-center justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Terus Belajar, Terus Beraksi untuk Bumi yang <span className="text-primary">Lebih Baik</span></h2>
            <p className="text-lg text-gray-600 mb-8">Dapatkan artikel terbaru, tips menarik, dan informasi edukasi langsung ke email kamu.</p>
            <div className="flex bg-white rounded-xl p-2 shadow-sm border border-gray-200">
              <input type="email" placeholder="Masukkan email kamu" className="w-full px-6 text-base outline-none" />
              <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-green-700">
                Berlangganan
              </button>
            </div>
          </div>
          <div className="w-100 h-75 relative">
            <Image src="https://picsum.photos/seed/newsletter/400/300" alt="Newsletter" fill className="object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}