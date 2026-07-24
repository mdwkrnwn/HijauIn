// src/app/komunitas/page.tsx
import Image from 'next/image';
import { FaUsers, FaLeaf, FaGlobe, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaHeart, FaLightbulb, FaTrophy, FaChartLine, FaNetworkWired } from 'react-icons/fa';

export default function Komunitas() {
  const impacts = [
    {
      icon: <FaUsers className="text-primary w-8 h-8" />,
      title: 'Bergerak Bersama',
      desc: 'Bersama komunitas, dampak yang dihasilkan akan jauh lebih besar.'
    },
    {
      icon: <FaLightbulb className="text-primary w-8 h-8" />,
      title: 'Dapatkan Inspirasi',
      desc: 'Temukan ide, tips, dan inspirasi aksi hijau dari berbagai komunitas.'
    },
    {
      icon: <FaTrophy className="text-primary w-8 h-8" />,
      title: 'Raih Penghargaan',
      desc: 'Ikuti kegiatan komunitas dan dapatkan badge serta reward menarik.'
    },
    {
      icon: <FaChartLine className="text-primary w-8 h-8" />,
      title: 'Lihat Dampak Nyata',
      desc: 'Pantau dampak aksi komunitas mu secara real-time di dashboard.'
    },
    {
      icon: <FaNetworkWired className="text-primary w-8 h-8" />,
      title: 'Perluas Jaringan',
      desc: 'Kenali teman baru yang punya visi yang sama untuk bumi yang lebih baik.'
    }
  ];
  return (
    <div className="place-self-center flex flex-col items-center pb-24 *:not-first:px-16">
      {/* Hero Section */}
      <section className="h-175 flex flex-row items-center justify-start w-full pl-16">
        <div className="w-3/7 z-1">
          <div className="backdrop-blur border-white/30 inline-flex items-center gap-2 px-4 py-2 mb-6 text-base font-semibold border rounded-full">
            <FaLeaf /> Komunitas HijauIn
          </div>
          <h1 className="text-7xl mb-6 font-extrabold leading-tight">
            Bersama Kita Bisa <br /> <span className="text-primary">Mengubah Dunia</span>
          </h1>
          <p className="mb-10 text-2xl leading-relaxed">
            Gabung dengan komunitas hijau di seluruh Indonesia, berbagi aksi, inspirasi, dan ciptakan dampak positif untuk bumi kita.
          </p>
          <div className="flex gap-6">
            <button className="bg-primary hover:bg-green-700 px-8 py-4 text-lg font-bold text-white transition rounded-full">
              Gabung Komunitas
            </button>
            <button className="backdrop-blur hover:bg-white/30 px-8 py-4 text-lg font-bold transition bg-white border border-black rounded-full">
              Jelajahi Komunitas
            </button>
          </div>
        </div>
        <Image src="https://picsum.photos/1920/1080" alt="Community Hero" width={1920} height={1080} className="w-4/7"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 30%, black)'
          }}
        />

      </section>

      {/* Stats Section */}
      <section className="relative z-20 w-full -mt-16">
        <div className="rounded-3xl flex items-center justify-between p-12 bg-white border border-gray-100 shadow-xl">
          {[
            { value: "15.000+", label: "Komunitas Aktif", icon: <FaUsers /> },
            { value: "125.430+", label: "Aksi Hijau Tercatat", icon: <FaLeaf /> },
            { value: "320+", label: "Kota di Indonesia", icon: <FaGlobe /> },
            { value: "5.243", label: "Kegiatan Telah Dilakukan", icon: <FaCalendarAlt /> }
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <div className="text-primary text-5xl">{stat.icon}</div>
              <div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-lg text-gray-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Communities */}
      <section className="w-full py-24">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Jelajahi Komunitas Hijau <FaLeaf className="text-primary inline" /></h2>
          <button className="text-primary hover:underline text-lg font-bold">Lihat Semua Komunitas &rarr;</button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {[
            { img: "com1", title: "Green Campus", loc: "Surabaya, Jawa Timur", mem: "1.243", tag: "Edukasi" },
            { img: "com2", title: "Ocean Warriors", loc: "Bali, Bali", mem: "982", tag: "Konservasi Laut" },
            { img: "com3", title: "Zero Waste Indonesia", loc: "Bandung, Jawa Barat", mem: "1.856", tag: "Sampah & Daur Ulang" },
            { img: "com4", title: "Bike for Earth", loc: "Yogyakarta, DI Yogyakarta", mem: "764", tag: "Transportasi Hijau" }
          ].map((com, idx) => (
            <div key={idx} className="rounded-3xl hover:shadow-xl group overflow-hidden transition bg-white border border-gray-200">
              <div className="relative h-48 overflow-hidden">
                <Image src={`https://picsum.photos/seed/${com.img}/400/300`} alt={com.title} fill className="group-hover:scale-105 object-cover transition duration-500" />
                <div className="top-4 left-4 absolute flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md">
                  <FaLeaf className="text-primary text-xl" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">{com.title}</h3>
                <div className="flex items-center gap-2 mb-4 text-base text-gray-500"><FaMapMarkerAlt /> {com.loc}</div>
                <div className="flex items-center gap-2 mb-6 text-base font-bold text-gray-700">
                  <FaUsers className="text-primary" /> {com.mem} anggota
                </div>
                <div className="inline-block px-4 py-2 text-base font-medium text-gray-600 bg-gray-100 rounded-lg">
                  {com.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='flex flex-col items-center justify-center w-full gap-8'>
        <p className='place-self-start text-3xl font-bold text-left'>
          Kenapa Gabung Komunitas HijauIn?
        </p>
        <div className="sm:grid-cols-4 lg:grid-cols-5 sm:divide-y-0 sm:divide-x gap-y-6 sm:gap-y-0 grid grid-cols-2 divide-y divide-gray-200">
          {impacts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start px-2 py-2 text-center"
            >
              <div className="size-12 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <p className="text-emerald-700 mb-1 text-2xl font-bold">
                {item.title}
              </p>
              <p className="text-xl font-medium text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Join Process */}
      <section className="bg-gray-50 w-full py-24">
        <h2 className="mb-16 text-4xl font-bold text-center">Kenapa Gabung Komunitas HijauIn? <FaLeaf className="text-primary inline" /></h2>
        <div className="relative flex items-start justify-between max-w-6xl mx-auto">
          <div className="top-12 border-primary-light absolute left-0 z-0 w-full h-1 border-t-2 border-dashed"></div>
          {[
            { icon: <FaUsers />, title: "Bergerak Bersama", desc: "Bersama komunitas, dampak yang dihasilkan akan jauh lebih besar." },
            { icon: <FaLightbulb />, title: "Dapatkan Inspirasi", desc: "Temukan ide, tips, dan inspirasi aksi hijau dari berbagai komunitas." },
            { icon: <FaCheckCircle />, title: "Raih Penghargaan", desc: "Ikuti kegiatan komunitas dan dapatkan badge serta reward menarik." },
            { icon: <FaGlobe />, title: "Lihat Dampak Nyata", desc: "Pantau dampak aksi komunitas mu secara real-time di dashboard." },
            { icon: <FaHeart />, title: "Perluas Jaringan", desc: "Kenali teman baru yang punya visi yang sama untuk bumi yang lebih baik." }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 relative z-10 flex flex-col items-center w-48 px-2 text-center">
              <div className="text-primary flex items-center justify-center w-24 h-24 mb-6 text-4xl bg-white border border-gray-200 rounded-full shadow-sm">
                {item.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text-base text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}