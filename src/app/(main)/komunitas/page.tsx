// src/app/komunitas/page.tsx
import Image from 'next/image';
import {
  FaUsers, FaLeaf, FaGlobe, FaCalendarAlt, FaMapMarkerAlt,
  FaCheckCircle, FaHeart, FaLightbulb, FaTrophy, FaChartLine,
  FaUserPlus, FaChevronRight, FaRegClock, FaCloud, FaTrashAlt, FaTree
} from 'react-icons/fa';

export default function Komunitas() {
  const impacts = [
    {
      icon: <FaUsers />,
      title: 'Bergerak Bersama',
      desc: 'Bersama komunitas, dampak yang dihasilkan akan jauh lebih besar.'
    },
    {
      icon: <FaLightbulb />,
      title: 'Dapatkan Inspirasi',
      desc: 'Temukan ide, tips, dan inspirasi aksi hijau dari berbagai komunitas.'
    },
    {
      icon: <FaTrophy />,
      title: 'Raih Penghargaan',
      desc: 'Ikuti kegiatan komunitas dan dapatkan badge serta reward menarik.'
    },
    {
      icon: <FaChartLine />,
      title: 'Lihat Dampak Nyata',
      desc: 'Pantau dampak aksi komunitas mu secara real-time di dashboard.'
    },
    {
      icon: <FaHeart />,
      title: 'Perluas Jaringan',
      desc: 'Kenali teman baru yang punya visi yang sama untuk bumi yang lebih baik.'
    }
  ];

  return (
    <div className="bg-gray-50 flex flex-col items-center w-full pb-24">

      {/* Hero Section */}
      <section className="relative w-full h-[700px] flex items-center px-16 bg-white overflow-hidden">
        {/* Background & Gradient */}
        <div className="absolute inset-0 z-0">
          <Image src="https://picsum.photos/seed/commhero2/1920/1080" alt="Community Hero" fill className="object-cover" />
          <div className="bg-gradient-to-r from-white via-white/90 to-transparent absolute inset-0 w-3/4"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-3xl">
          <div className="text-brand bg-brand-light inline-flex items-center gap-2 px-4 py-2 mb-6 text-base font-bold border border-green-100 rounded-full shadow-sm">
            <FaLeaf /> Komunitas HijauIn
          </div>
          <h1 className="text-7xl mb-8 font-extrabold leading-tight text-gray-900">
            Bersama Kita Bisa <br /> <span className="text-brand">Mengubah Dunia</span>
          </h1>
          <p className="max-w-2xl mb-10 text-xl leading-relaxed text-gray-700">
            Gabung dengan komunitas hijau di seluruh Indonesia, berbagi aksi, inspirasi, dan ciptakan dampak positif untuk bumi kita.
          </p>
          <div className="flex gap-6">
            <button className="bg-brand hover:bg-green-700 rounded-xl flex items-center gap-3 px-8 py-4 text-lg font-bold text-white transition shadow-lg">
              <FaUserPlus /> Gabung Komunitas
            </button>
            <button className="hover:bg-gray-50 rounded-xl flex items-center gap-3 px-8 py-4 text-lg font-bold text-gray-800 transition bg-white border-2 border-gray-200">
              <FaUsers /> Jelajahi Komunitas
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-1080p relative z-20 w-full px-16 mx-auto -mt-16">
        <div className="rounded-[2.5rem] flex items-center justify-between p-12 bg-white border border-gray-100 shadow-xl">
          {[
            { value: "15.000+", label: "Komunitas Aktif", icon: <FaUsers /> },
            { value: "125.430+", label: "Aksi Hijau Tercatat", icon: <FaLeaf /> },
            { value: "320+", label: "Kota di Indonesia", icon: <FaGlobe /> },
            { value: "5.243", label: "Kegiatan Telah Dilakukan", icon: <FaCalendarAlt /> }
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <div className="text-brand text-5xl">{stat.icon}</div>
              <div>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-lg font-medium text-gray-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jelajahi Komunitas Hijau */}
      <section className="max-w-1080p relative w-full px-16 py-24 mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Jelajahi Komunitas Hijau <FaLeaf className="text-brand inline" /></h2>
          <button className="text-brand hover:underline flex items-center gap-2 text-lg font-bold">
            Lihat Semua Komunitas <FaChevronRight className="text-base" />
          </button>
        </div>

        <div className="relative">
          <div className="grid grid-cols-5 gap-6">
            {[
              { img: "com1", title: "Green Campus", loc: "Surabaya, Jawa Timur", mem: "1.243", tag: "Edukasi" },
              { img: "com2", title: "Ocean Warriors", loc: "Bali, Bali", mem: "982", tag: "Konservasi Laut" },
              { img: "com3", title: "Zero Waste Indonesia", loc: "Bandung, Jawa Barat", mem: "1.856", tag: "Sampah & Daur Ulang" },
              { img: "com4", title: "Bike for Earth", loc: "Yogyakarta, DI Yogyakarta", mem: "764", tag: "Transportasi Hijau" },
              { img: "com5", title: "Tree Lovers", loc: "Bogor, Jawa Barat", mem: "1.112", tag: "Konservasi Alam" }
            ].map((com, idx) => (
              <div key={idx} className="rounded-3xl hover:shadow-xl group flex flex-col overflow-hidden transition bg-white border border-gray-200">
                <div className="relative h-48 overflow-hidden">
                  <Image src={`https://picsum.photos/seed/${com.img}/400/300`} alt={com.title} fill className="group-hover:scale-105 object-cover transition duration-500" />
                  <div className="bottom-[-20px] left-6 absolute flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-md z-10">
                    <FaLeaf className="text-brand text-xl" />
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-grow p-6 pt-10">
                  <div>
                    <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900">{com.title}</h3>
                    <div className="flex items-center gap-2 mb-4 text-base font-medium text-gray-500">
                      <FaMapMarkerAlt className="flex-shrink-0" /> {com.loc}
                    </div>
                  </div>
                  <div>
                    <div className="text-brand flex items-center gap-2 mb-6 text-base font-bold">
                      <FaUsers /> <span className="text-gray-700">{com.mem} anggota</span>
                    </div>
                    <div className="inline-block px-4 py-2 text-base font-medium text-gray-600 bg-gray-100 rounded-lg">
                      {com.tag}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Carousel Button */}
          <button className="-right-6 top-1/2 w-14 h-14 hover:text-brand hover:scale-105 absolute z-10 flex items-center justify-center text-xl text-gray-800 transition -translate-y-1/2 bg-white border border-gray-100 rounded-full shadow-lg">
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* Kegiatan Mendatang */}
      <section className="max-w-1080p w-full px-16 pb-24 mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Kegiatan Mendatang <FaLeaf className="text-brand inline" /></h2>
          <button className="text-brand hover:underline flex items-center gap-2 text-lg font-bold">
            Lihat Semua Kegiatan <FaChevronRight className="text-base" />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {[
            { img: "act1", date: "25", month: "MEI", title: "Aksi Tanam 1.000 Pohon di Bukit Hijau", loc: "Bogor, Jawa Barat", time: "07.00 - 12.00 WIB", p: "+128" },
            { img: "act2", date: "01", month: "JUN", title: "Beach Clean Up Pantai Kuta", loc: "Bali, Bali", time: "06.30 - 10.30 WITA", p: "+86" },
            { img: "act3", date: "08", month: "JUN", title: "Workshop Eco Living Zero Waste", loc: "Bandung, Jawa Barat", time: "09.00 - 13.00 WIB", p: "+64" },
            { img: "act4", date: "15", month: "JUN", title: "Gowes Hijau Keliling Kota", loc: "Yogyakarta, DI Yogyakarta", time: "06.00 - 09.00 WIB", p: "+97" }
          ].map((act, idx) => (
            <div key={idx} className="rounded-3xl hover:shadow-xl group flex flex-col overflow-hidden transition bg-white border border-gray-200">
              <div className="relative h-48 overflow-hidden">
                <Image src={`https://picsum.photos/seed/${act.img}/400/300`} alt={act.title} fill className="group-hover:scale-105 object-cover transition duration-500" />
                <div className="bg-brand-dark rounded-br-2xl absolute top-0 left-0 flex flex-col items-center px-4 py-3 text-white">
                  <span className="text-2xl font-bold leading-none">{act.date}</span>
                  <span className="text-base font-medium">{act.month}</span>
                </div>
              </div>
              <div className="flex flex-col flex-grow p-6">
                <h3 className="flex-grow mb-4 text-xl font-bold leading-tight text-gray-900">{act.title} <FaLeaf className="text-brand inline ml-1" /></h3>
                <div className="flex items-center gap-2 mb-2 text-base font-medium text-gray-500">
                  <FaMapMarkerAlt className="text-brand flex-shrink-0" /> {act.loc}
                </div>
                <div className="flex items-center gap-2 mb-6 text-base font-medium text-gray-500">
                  <FaRegClock className="text-brand flex-shrink-0" /> {act.time}
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex -space-x-3">
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-200 border-2 border-white rounded-full"><Image src="https://picsum.photos/seed/u1/100" fill alt="user" /></div>
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-200 border-2 border-white rounded-full"><Image src="https://picsum.photos/seed/u2/100" fill alt="user" /></div>
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-200 border-2 border-white rounded-full"><Image src="https://picsum.photos/seed/u3/100" fill alt="user" /></div>
                  </div>
                  <span className="text-base font-bold text-gray-600">{act.p} peserta</span>
                </div>
                <hr className="mb-4 border-gray-100" />
                <button className="text-brand hover:bg-brand-light rounded-xl flex items-center justify-center w-full gap-2 py-2 text-base font-bold transition">
                  <FaUserPlus /> Ikut Kegiatan
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kenapa Gabung Komunitas */}
      <section className="w-full px-16 py-24 bg-white">
        <h2 className="mb-20 text-4xl font-bold text-center text-gray-900">
          Kenapa Gabung Komunitas HijauIn? <FaLeaf className="text-brand inline" />
        </h2>

        <div className="max-w-1080p relative flex items-start justify-between mx-auto">
          {/* Garis Dashed Penghubung */}
          <div className="top-10 absolute left-0 z-0 w-full h-1 border-t-2 border-gray-200 border-dashed"></div>

          {impacts.map((item, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center w-56 px-2 text-center bg-white">
              <div className="text-brand flex items-center justify-center w-20 h-20 mb-6 text-4xl bg-white border-2 border-gray-100 rounded-full shadow-sm">
                {item.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-base leading-relaxed text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="max-w-1080p w-full px-16 pb-24 mx-auto bg-white">
        <div className="bg-[#14532d] rounded-[3rem] p-12 flex items-center justify-between shadow-xl relative overflow-hidden gap-10">

          {/* Kiri: Gambar */}
          <div className="w-1/3 h-[300px] relative rounded-3xl overflow-hidden shadow-inner">
            <Image src="https://picsum.photos/seed/commcta/600/600" alt="Join Community" fill className="object-cover" />
          </div>

          {/* Tengah: Teks & Tombol */}
          <div className="flex flex-col justify-center w-1/3 text-white">
            <h2 className="mb-4 text-4xl font-bold leading-tight">
              Yuk, jadi bagian dari gerakan perubahan!
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-300">
              Satu aksi kecil dari kita, bisa menjadi perubahan besar untuk masa depan bumi yang lebih baik.
            </p>
            <div className="flex gap-4">
              <button className="bg-brand rounded-xl hover:bg-green-600 flex items-center justify-center flex-1 gap-2 px-6 py-4 text-base font-bold text-white transition">
                Gabung Sekarang <FaUserPlus />
              </button>
              <button className="rounded-xl hover:bg-white/10 flex items-center justify-center flex-1 gap-2 px-6 py-4 text-base font-bold text-white transition bg-transparent border border-white">
                Buat Komunitasmu <FaUsers />
              </button>
            </div>
          </div>

          {/* Kanan: Box Aktivitas */}
          <div className="w-1/3 bg-[#114022] rounded-3xl p-8 border border-[#1b5e33]">
            <h3 className="mb-6 text-xl font-bold text-white">Aktivitas Komunitas Hari Ini</h3>
            <ul className="space-y-6 text-base text-gray-200">
              <li className="flex justify-between items-center border-b border-[#1b5e33] pb-4">
                <span className="flex items-center gap-3"><FaLeaf className="text-brand-light text-xl" /> Aksi Hijau</span>
                <span className="text-xl font-bold text-white">245</span>
              </li>
              <li className="flex justify-between items-center border-b border-[#1b5e33] pb-4">
                <span className="flex items-center gap-3"><FaCloud className="text-brand-light text-xl" /> CO₂ Berhasil Dikurangi</span>
                <span className="text-xl font-bold text-white">2.340 kg</span>
              </li>
              <li className="flex justify-between items-center border-b border-[#1b5e33] pb-4">
                <span className="flex items-center gap-3"><FaTrashAlt className="text-brand-light text-xl" /> Sampah Terkumpul</span>
                <span className="text-xl font-bold text-white">1.250 kg</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="flex items-center gap-3"><FaTree className="text-brand-light text-xl" /> Pohon Ditanam</span>
                <span className="text-xl font-bold text-white">320</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}