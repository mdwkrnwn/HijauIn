// src/app/komunitas/page.tsx
import Image from 'next/image';
import { FaUsers, FaLeaf, FaGlobe, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaHeart, FaLightbulb } from 'react-icons/fa';

export default function Komunitas() {
  return (
    <div className="w-full flex flex-col items-center pb-24">
      {/* Hero Section */}
      <section className="w-full h-175 relative flex items-center justify-start px-16">
        <Image src="https://picsum.photos/seed/commhero/1920/1080" alt="Community Hero" fill className="object-cover absolute inset-0 -z-10" />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 to-transparent -z-10"></div>

        <div className="max-w-3xl text-white z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur border border-white/30 px-4 py-2 rounded-full font-semibold text-base mb-6">
            <FaLeaf /> Komunitas HijauIn
          </div>
          <h1 className="text-7xl font-extrabold leading-tight mb-6">
            Bersama Kita Bisa <br /> <span className="text-brand-light">Mengubah Dunia</span>
          </h1>
          <p className="text-2xl text-gray-200 mb-10 leading-relaxed">
            Gabung dengan komunitas hijau di seluruh Indonesia, berbagi aksi, inspirasi, dan ciptakan dampak positif untuk bumi kita.
          </p>
          <div className="flex gap-6">
            <button className="bg-brand text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-700 transition">
              Gabung Komunitas
            </button>
            <button className="bg-white/20 backdrop-blur border border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/30 transition">
              Jelajahi Komunitas
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full px-16 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-xl p-12 flex justify-between items-center border border-gray-100">
          {[
            { value: "15.000+", label: "Komunitas Aktif", icon: <FaUsers /> },
            { value: "125.430+", label: "Aksi Hijau Tercatat", icon: <FaLeaf /> },
            { value: "320+", label: "Kota di Indonesia", icon: <FaGlobe /> },
            { value: "5.243", label: "Kegiatan Telah Dilakukan", icon: <FaCalendarAlt /> }
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

      {/* Explore Communities */}
      <section className="w-full px-16 py-24">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Jelajahi Komunitas Hijau <FaLeaf className="inline text-brand" /></h2>
          <button className="text-brand font-bold text-lg hover:underline">Lihat Semua Komunitas &rarr;</button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {[
            { img: "com1", title: "Green Campus", loc: "Surabaya, Jawa Timur", mem: "1.243", tag: "Edukasi" },
            { img: "com2", title: "Ocean Warriors", loc: "Bali, Bali", mem: "982", tag: "Konservasi Laut" },
            { img: "com3", title: "Zero Waste Indonesia", loc: "Bandung, Jawa Barat", mem: "1.856", tag: "Sampah & Daur Ulang" },
            { img: "com4", title: "Bike for Earth", loc: "Yogyakarta, DI Yogyakarta", mem: "764", tag: "Transportasi Hijau" }
          ].map((com, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition group">
              <div className="h-48 relative overflow-hidden">
                <Image src={`https://picsum.photos/seed/${com.img}/400/300`} alt={com.title} fill className="object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                  <FaLeaf className="text-brand text-xl" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{com.title}</h3>
                <div className="text-base text-gray-500 flex items-center gap-2 mb-4"><FaMapMarkerAlt /> {com.loc}</div>
                <div className="flex items-center gap-2 text-base font-bold text-gray-700 mb-6">
                  <FaUsers className="text-brand" /> {com.mem} anggota
                </div>
                <div className="inline-block bg-gray-100 px-4 py-2 rounded-lg text-base text-gray-600 font-medium">
                  {com.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Join Process */}
      <section className="w-full px-16 py-24 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">Kenapa Gabung Komunitas HijauIn? <FaLeaf className="inline text-brand" /></h2>
        <div className="flex justify-between items-start relative max-w-6xl mx-auto">
          <div className="absolute top-12 left-0 w-full h-1 border-t-2 border-dashed border-brand-light z-0"></div>
          {[
            { icon: <FaUsers />, title: "Bergerak Bersama", desc: "Bersama komunitas, dampak yang dihasilkan akan jauh lebih besar." },
            { icon: <FaLightbulb />, title: "Dapatkan Inspirasi", desc: "Temukan ide, tips, dan inspirasi aksi hijau dari berbagai komunitas." },
            { icon: <FaCheckCircle />, title: "Raih Penghargaan", desc: "Ikuti kegiatan komunitas dan dapatkan badge serta reward menarik." },
            { icon: <FaGlobe />, title: "Lihat Dampak Nyata", desc: "Pantau dampak aksi komunitas mu secara real-time di dashboard." },
            { icon: <FaHeart />, title: "Perluas Jaringan", desc: "Kenali teman baru yang punya visi yang sama untuk bumi yang lebih baik." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative z-10 w-48 bg-gray-50 px-2">
              <div className="w-24 h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center text-4xl text-brand mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-base text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}