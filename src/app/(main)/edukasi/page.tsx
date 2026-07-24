// src/app/edukasi/page.tsx
import Image from 'next/image';
import {
  FaSearch, FaLeaf, FaRecycle, FaLightbulb, FaTint,
  FaTree, FaPlayCircle, FaCheckCircle, FaClock, FaEye
} from 'react-icons/fa';

export default function EdukasiUtama() {
  return (
    <div className="flex flex-col items-center w-full pb-24 bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-light to-white relative flex items-center justify-between w-full px-16 py-24">
        <div className="max-w-1080p z-10 w-1/2">
          <div className="text-primary inline-flex items-center gap-2 px-4 py-2 mb-6 text-base font-semibold bg-white border border-green-100 rounded-full shadow-sm">
            <FaLeaf /> Edukasi Hijau
          </div>
          <h1 className="mb-6 text-6xl font-extrabold leading-tight text-gray-900">
            Belajar, Peduli,<br /> Aksi <span className="text-primary">untuk Bumi</span>
          </h1>
          <p className="max-w-lg mb-10 text-xl text-gray-600">
            Temukan berbagai artikel, panduan, dan tips seputar lingkungan untuk menambah wawasan dan menginspirasi aksi positif setiap hari.
          </p>
          <div className="flex max-w-xl p-2 mb-8 bg-white border border-gray-200 rounded-full shadow-md">
            <input type="text" placeholder="Cari artikel, topik, atau panduan..." className="w-full px-6 text-base bg-transparent outline-none" />
            <button className="bg-primary w-14 h-14 hover:bg-green-700 flex items-center justify-center text-xl text-white rounded-full">
              <FaSearch />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-primary text-base font-bold">Topik Populer</span>
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-2 px-4 py-2 text-base font-medium bg-white border border-gray-200 rounded-full"><FaRecycle className="text-primary" /> Sampah & Daur Ulang</span>
              <span className="flex items-center gap-2 px-4 py-2 text-base font-medium bg-white border border-gray-200 rounded-full"><FaLightbulb className="text-yellow-500" /> Hemat Energi</span>
              <span className="flex items-center gap-2 px-4 py-2 text-base font-medium bg-white border border-gray-200 rounded-full"><FaTint className="text-blue-500" /> Hemat Air</span>
              <span className="flex items-center gap-2 px-4 py-2 text-base font-medium bg-white border border-gray-200 rounded-full"><FaLeaf className="text-primary" /> Gaya Hidup Hijau</span>
              <span className="flex items-center gap-2 px-4 py-2 text-base font-medium bg-white border border-gray-200 rounded-full"><FaTree className="text-green-700" /> Konservasi Alam</span>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative h-[600px]">
          <Image src="https://picsum.photos/seed/eduhero/1000/800" alt="Education Hero" fill className="object-contain" />
        </div>
      </section>

      {/* Rekomendasi untuk Kamu */}
      <section className="max-w-1080p w-full px-16 py-16">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Rekomendasi untuk Kamu <FaLeaf className="text-primary inline" /></h2>
          <button className="text-primary hover:underline text-lg font-bold">Lihat Semua &rarr;</button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {[
            { img: "e1", tag: "Edukasi", title: "Mengenal Jenis Sampah dan Cara Mengelolanya", desc: "Memahami jenis sampah adalah langkah awal untuk mengelola sampah dengan benar.", time: "5 menit baca", view: "1.2K dibaca" },
            { img: "e2", tag: "Panduan", title: "10 Cara Hemat Energi di Rumah", desc: "Langkah sederhana yang bisa kamu lakukan untuk menghemat energi setiap hari.", time: "4 menit baca", view: "980 dibaca" },
            { img: "e3", tag: "Tips", title: "Kurangi Plastik Sekali Pakai dalam 7 Hari", desc: "Tantangan 7 hari untuk mengurangi penggunaan plastik sekali pakai.", time: "3 menit baca", view: "2.1K dibaca" },
            { img: "e4", tag: "Edukasi", title: "Pentingnya Menjaga Ekosistem Laut", desc: "Laut adalah sumber kehidupan. Yuk, jaga bersama kelestariannya!", time: "6 menit baca", view: "1.6K dibaca" }
          ].map((item, idx) => (
            <div key={idx} className="rounded-3xl hover:shadow-xl group flex flex-col overflow-hidden transition bg-white border border-gray-200 cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <Image src={`https://picsum.photos/seed/${item.img}/400/300`} alt={item.title} fill className="group-hover:scale-105 object-cover transition duration-500" />
                <div className="top-4 left-4 bg-primary-light/90 backdrop-blur text-primary absolute px-4 py-2 text-base font-bold rounded-lg">
                  {item.tag}
                </div>
              </div>
              <div className="flex flex-col flex-grow p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="flex-grow mb-6 text-base text-gray-600">{item.desc}</p>
                <div className="flex items-center justify-between text-base font-medium text-gray-500">
                  <span className="flex items-center gap-2"><FaClock className="text-primary" /> {item.time}</span>
                  <span className="flex items-center gap-2"><FaEye className="text-primary" /> {item.view}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kategori Edukasi */}
      <section className="bg-gray-50 w-full py-16">
        <div className="max-w-1080p px-16 mx-auto">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-4xl font-bold text-gray-900">Kategori Edukasi <FaLeaf className="text-primary inline" /></h2>
            <button className="text-primary hover:underline text-lg font-bold">Lihat Semua Kategori &rarr;</button>
          </div>
          <div className="grid grid-cols-6 gap-6">
            {[
              { icon: <FaRecycle />, name: "Sampah & Daur Ulang", count: "24 artikel", color: "text-primary" },
              { icon: <FaLightbulb />, name: "Hemat Energi", count: "18 artikel", color: "text-yellow-500" },
              { icon: <FaTint />, name: "Hemat Air", count: "16 artikel", color: "text-blue-500" },
              { icon: <FaLeaf />, name: "Gaya Hidup Hijau", count: "32 artikel", color: "text-primary" },
              { icon: <FaTree />, name: "Konservasi Alam", count: "21 artikel", color: "text-green-700" },
              { icon: <FaCheckCircle />, name: "Kesehatan Lingkungan", count: "14 artikel", color: "text-primary" }
            ].map((cat, idx) => (
              <div key={idx} className="rounded-2xl hover:shadow-md flex flex-col items-center p-6 text-center transition bg-white border border-gray-100 shadow-sm cursor-pointer">
                <div className={`text-5xl ${cat.color} mb-6`}>{cat.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">{cat.name}</h3>
                <p className="text-base text-gray-500">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Edukasi Pilihan */}
      <section className="max-w-1080p w-full px-16 py-16">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Video Edukasi Pilihan <FaLeaf className="text-primary inline" /></h2>
          <button className="text-primary hover:underline text-lg font-bold">Lihat Semua &rarr;</button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {[
            { img: "v1", title: "Energi Terbarukan untuk Masa Depan", dur: "06:45", views: "1.4K ditonton" },
            { img: "v2", title: "3R: Reduce, Reuse, Recycle", dur: "05:30", views: "2.3K ditonton" },
            { img: "v3", title: "Cara Menanam Pohon dengan Benar", dur: "07:12", views: "1.9K ditonton" },
            { img: "v4", title: "Lindungi Laut, Lindungi Kehidupan", dur: "04:58", views: "1.8K ditonton" }
          ].map((vid, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="rounded-2xl relative h-40 mb-4 overflow-hidden shadow-sm">
                <Image src={`https://picsum.photos/seed/${vid.img}/400/250`} alt={vid.title} fill className="group-hover:scale-105 object-cover transition duration-500" />
                <div className="bg-black/20 group-hover:bg-black/40 absolute inset-0 flex items-center justify-center transition">
                  <FaPlayCircle className="opacity-90 text-5xl text-white" />
                </div>
                <div className="bottom-2 right-2 bg-black/80 absolute px-3 py-1 text-base font-bold text-white rounded-md">
                  {vid.dur}
                </div>
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug text-gray-900">{vid.title}</h3>
              <div className="flex items-center gap-2 text-base text-gray-500"><FaEye className="text-primary" /> {vid.views}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Infografis Populer */}
      <section className="max-w-1080p w-full px-16 pb-16">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-4xl font-bold text-gray-900">Infografis Populer</h2>
          <button className="text-primary hover:underline text-lg font-bold">Lihat Semua &rarr;</button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {[
            { title: "Jejak Karbon", desc: "Apa itu dan bagaimana menguranginya?", views: "1.2K dilihat", icon: <FaLeaf /> },
            { title: "Hemat Air", desc: "Mulai dari hal kecil di rumah", views: "980 dilihat", icon: <FaTint /> },
            { title: "Daur Ulang", desc: "Proses sederhana, dampak luar biasa", views: "1.5K dilihat", icon: <FaRecycle /> },
            { title: "Manfaat Menanam Pohon", desc: "Untuk bumi yang lebih baik", views: "1.8K dilihat", icon: <FaTree /> }
          ].map((info, idx) => (
            <div key={idx} className="bg-primary-light/30 border-primary-light rounded-2xl hover:shadow-md flex items-center gap-4 p-6 transition border cursor-pointer">
              <div className="rounded-xl text-primary flex items-center justify-center flex-shrink-0 w-16 h-16 text-3xl bg-white shadow-sm">
                {info.icon}
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-gray-900">{info.title}</h3>
                <p className="mb-2 text-base leading-tight text-gray-600">{info.desc}</p>
                <div className="text-primary flex items-center gap-1 text-base font-medium"><FaEye /> {info.views}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-1080p w-full px-16 pb-16">
        <div className="bg-gray-50 rounded-[2rem] p-12 flex items-center justify-between border border-gray-100 shadow-sm">
          <div className="w-1/2">
            <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900">Terus Belajar, Terus Beraksi untuk Bumi yang <span className="text-primary">Lebih Baik</span></h2>
            <p className="mb-8 text-lg text-gray-600">Dapatkan artikel terbaru, tips menarik, dan informasi edukasi langsung ke email kamu. <FaLeaf className="text-primary inline" /></p>
            <div className="flex flex-col gap-2">
              <div className="rounded-xl flex p-2 bg-white border border-gray-200 shadow-sm">
                <input type="email" placeholder="Masukkan email kamu" className="w-full px-4 text-base outline-none" />
                <button className="bg-primary hover:bg-green-700 whitespace-nowrap px-8 py-3 text-base font-bold text-white rounded-lg">
                  Berlangganan
                </button>
              </div>
              <p className="flex items-center gap-2 mt-2 text-base text-gray-500"><FaCheckCircle className="text-primary" /> Kami tidak akan membagikan email kamu ke pihak lain.</p>
            </div>
          </div>
          <div className="w-1/3 relative h-[250px]">
            <Image src="https://picsum.photos/seed/newsletterread/400/300" alt="Newsletter" fill className="object-contain" />
          </div>
        </div>
      </section>
    </div>
  );
}