// src/app/tentang/page.tsx
import Image from 'next/image';
import {
  FaLeaf, FaBullseye, FaEye, FaHeart, FaCheckCircle,
  FaUsers, FaChartBar, FaGlobe, FaArrowRight, FaTree,
  FaMobileAlt, FaShieldAlt, FaRegCheckCircle, FaNetworkWired
} from 'react-icons/fa';

export default function TentangKami() {
  return (
    <div className="bg-gray-50 flex flex-col items-center w-full pb-24">

      {/* Hero Section */}
      <section className="max-w-1080p relative flex flex-col items-center justify-center w-full px-16 pt-24 pb-16 mx-auto overflow-hidden bg-white">
        <div className="flex items-center justify-between w-full mb-16">
          {/* Left Text Content */}
          <div className="z-10 w-1/2 pr-12">
            <div className="bg-primary-light text-primary inline-flex items-center gap-2 px-4 py-2 mb-6 text-base font-bold border border-green-100 rounded-full shadow-sm">
              <FaLeaf /> Tentang HijauIn
            </div>
            <h1 className="mb-6 text-6xl font-extrabold leading-tight text-gray-900">
              Teknologi untuk <br /> Hidup yang <span className="text-primary">Lebih Hijau</span>
            </h1>
            <p className="max-w-lg mb-10 text-xl leading-relaxed text-gray-600">
              HijauIn adalah platform digital yang menghubungkan teknologi, kebiasaan positif, dan komunitas untuk menciptakan dampak nyata bagi bumi dan generasi mendatang.
            </p>
            <button className="border-primary text-primary hover:bg-primary-light w-max flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold transition bg-white border-2 rounded-full">
              Misi Kami <FaArrowRight />
            </button>
          </div>

          {/* Right Image Content */}
          <div className="h-125 relative z-10 w-1/2">
            {/* Decorative Background Blob behind image */}
            <div className="top-1/2 left-1/2 w-150 h-150 bg-primary-light/50 -z-10 blur-3xl absolute -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <Image src="https://picsum.photos/seed/abouthero3/800/800" alt="Sustainable City" fill className="object-contain" />
            <FaLeaf className="top-10 text-primary opacity-40 -rotate-12 absolute left-0 text-5xl transform" />
            <FaLeaf className="bottom-20 right-10 text-primary opacity-30 absolute text-6xl transform rotate-45" />
          </div>
        </div>

        {/* 3 Value Cards (Aksi, Komunitas, Teknologi) */}
        <div className="z-20 grid w-full grid-cols-3 gap-8 text-left">
          <div className="rounded-3xl hover:shadow-xl flex items-start gap-6 p-8 transition bg-white border border-gray-100 shadow-md">
            <div className="bg-primary-light text-primary shrink-0 rounded-2xl flex items-center justify-center w-16 h-16 text-3xl">
              <FaBullseye />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900">Aksi Kecil <br /> Dampak Besar</h3>
              <p className="text-base leading-relaxed text-gray-600">Setiap aksi sederhana yang kamu lakukan, berkontribusi untuk perubahan besar bagi bumi.</p>
            </div>
          </div>
          <div className="rounded-3xl hover:shadow-xl flex items-start gap-6 p-8 transition bg-white border border-gray-100 shadow-md">
            <div className="bg-primary-light text-primary shrink-0 rounded-2xl flex items-center justify-center w-16 h-16 text-3xl">
              <FaUsers />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900">Bersama <br /> Komunitas</h3>
              <p className="text-base leading-relaxed text-gray-600">Bergerak bersama komunitas peduli lingkungan untuk menginspirasi dan saling mendukung.</p>
            </div>
          </div>
          <div className="rounded-3xl hover:shadow-xl flex items-start gap-6 p-8 transition bg-white border border-gray-100 shadow-md">
            <div className="bg-primary-light text-primary shrink-0 rounded-2xl flex items-center justify-center w-16 h-16 text-3xl">
              <FaChartBar />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900">Data & Teknologi <br /> untuk Perubahan</h3>
              <p className="text-base leading-relaxed text-gray-600">Menggunakan teknologi dan data untuk melacak, memahami, dan memaksimalkan dampak positif kita bersama.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Misi, Visi & Nilai Kami */}
      <section className="bg-gray-50 max-w-1080p w-full px-16 py-24 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-gray-900">Misi, Visi & Nilai Kami <FaLeaf className="text-primary inline" /></h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="rounded-3xl flex flex-col items-start p-10 bg-white border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-light text-primary rounded-2xl shrink-0 flex items-center justify-center w-16 h-16 text-3xl"><FaBullseye /></div>
              <h3 className="text-3xl font-bold text-gray-900">Misi</h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-600">Memberdayakan setiap individu dan komunitas untuk melakukan aksi positif bagi lingkungan setiap hari.</p>
          </div>

          <div className="rounded-3xl flex flex-col items-start p-10 bg-white border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-light text-primary rounded-2xl shrink-0 flex items-center justify-center w-16 h-16 text-3xl"><FaEye /></div>
              <h3 className="text-3xl font-bold text-gray-900">Visi</h3>
            </div>
            <p className="text-lg leading-relaxed text-gray-600">Menjadi platform terdepan di Indonesia yang mendorong gaya hidup berkelanjutan melalui teknologi, edukasi, dan kolaborasi komunitas.</p>
          </div>

          <div className="rounded-3xl flex flex-col items-start p-10 bg-white border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary-light text-primary rounded-2xl shrink-0 flex items-center justify-center w-16 h-16 text-3xl"><FaHeart /></div>
              <h3 className="text-3xl font-bold text-gray-900">Nilai Kami</h3>
            </div>
            <ul className="w-full space-y-4 text-lg font-medium text-gray-600">
              <li className="flex items-center gap-3"><FaCheckCircle className="text-primary" /> Peduli Lingkungan</li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-primary" /> Inovatif & Adaptif</li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-primary" /> Kolaboratif</li>
              <li className="flex items-center gap-3"><FaCheckCircle className="text-primary" /> Transparan & Terpercaya</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Perjalanan HijauIn */}
      <section className="max-w-1080p w-full px-16 py-24 mx-auto text-center bg-white">
        <h2 className="mb-24 text-4xl font-bold text-left text-gray-900">Perjalanan <span className="text-primary">HijauIn</span> <FaLeaf className="text-primary inline" /></h2>
        <div className="relative flex items-start justify-between w-full">
          {/* Dotted Line Behind Circles */}
          <div className="top-8 absolute left-0 z-0 w-full h-1 border-t-2 border-gray-300 border-dashed"></div>

          {[
            { icon: <FaLeaf />, year: "2022", title: "Berawal dari ide kecil untuk mendorong kebiasaan hijau di sekitar kita." },
            { icon: <FaUsers />, year: "2023", title: "HijauIn mulai dikembangkan dan membangun komunitas pertama." },
            { icon: <FaGlobe />, year: "2024", title: "Platform resmi diluncurkan dan ribuan pengguna mulai bergabung." },
            { icon: <FaNetworkWired />, year: "2025", title: "Ekspansi ke berbagai kota di Indonesia dan bekerja sama dengan berbagai organisasi." },
            { icon: <FaTree />, year: "Masa Depan", title: "Terus berinovasi untuk menciptakan dampak positif yang lebih besar bagi bumi." }
          ].map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center w-48 px-2 text-center bg-white">
              <div className="bg-primary flex items-center justify-center w-16 h-16 mb-6 text-2xl font-bold text-white border-4 border-white rounded-full shadow-md">
                {item.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">{item.year}</h3>
              <p className="text-base leading-relaxed text-gray-500">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dampak yang Telah Kami Ciptakan */}
      <section className="max-w-1080p w-full px-16 py-12 mx-auto bg-white">
        <h2 className="mb-10 text-3xl font-bold text-gray-900">Dampak yang Telah Kami Ciptakan <FaLeaf className="text-primary inline" /></h2>

        {/* Single Wide Container for Stats */}
        <div className="rounded-3xl flex items-center justify-between px-6 py-10 bg-white border border-gray-100 shadow-sm">
          {[
            { val: "125.430+", lbl: "Aksi Hijau Tercatat", icon: <FaLeaf className="text-primary" /> },
            { val: "15.000+", lbl: "Komunitas Aktif", icon: <FaUsers className="text-primary" /> },
            { val: "320+", lbl: "Kota di Indonesia", icon: <FaGlobe className="text-primary" /> },
            { val: "82.340+ kg", lbl: "CO₂ Berhasil Dikurangi", icon: <div className="text-primary text-2xl font-black tracking-tighter">CO<sub className="text-lg">2</sub></div> },
            { val: "5.243", lbl: "Pohon Ditanam", icon: <FaTree className="text-primary" /> }
          ].map((stat, idx) => (
            <div key={idx} className={`flex items-center gap-4 px-6 ${idx !== 4 ? 'border-r border-gray-200' : ''} flex-1 justify-center`}>
              <div className="shrink-0 text-4xl">{stat.icon}</div>
              <div className="text-left">
                <div className="text-2xl font-extrabold text-gray-900">{stat.val}</div>
                <div className="whitespace-nowrap text-base font-medium text-gray-500">{stat.lbl}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mengapa HijauIn Section */}
      <section className="max-w-1080p bg-gray-50 flex items-center w-full gap-16 px-16 py-24 mx-auto">
        <div className="h-175 relative w-1/2">
          <Image src="https://picsum.photos/seed/phoneappmockup/800/1000" alt="App Preview" fill className="object-contain" />
        </div>
        <div className="w-1/2 pr-8">
          <h2 className="mb-12 text-4xl font-bold text-gray-900">Mengapa <span className="text-primary">HijauIn?</span> <FaLeaf className="text-primary inline" /></h2>
          <div className="space-y-6">
            {[
              { icon: <FaMobileAlt />, title: "Mudah Digunakan", desc: "Antarmuka yang sederhana membuat siapa saja bisa mulai hidup hijau dengan mudah." },
              { icon: <FaGlobe />, title: "Dampak Nyata", desc: "Setiap aksimu tercatat dan memberikan dampak positif nyata untuk bumi." },
              { icon: <FaUsers />, title: "Komunitas Positif", desc: "Bergabung dengan ribuan orang yang memiliki visi yang sama untuk bumi yang lebih baik." },
              { icon: <FaShieldAlt />, title: "Aman & Terpercaya", desc: "Data kamu aman bersama kami dan hanya digunakan untuk tujuan kebaikan." }
            ].map((feat, idx) => (
              <div key={idx} className="rounded-3xl hover:shadow-md flex items-center gap-6 p-8 transition bg-white border border-gray-100 shadow-sm">
                <div className="bg-primary-light text-primary rounded-2xl shrink-0 flex items-center justify-center w-16 h-16 text-3xl">
                  {feat.icon}
                </div>
                <div className="grow">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{feat.title}</h3>
                  <p className="text-base leading-relaxed text-gray-600">{feat.desc}</p>
                </div>
                <div className="text-primary shrink-0 ml-4 text-3xl">
                  <FaRegCheckCircle />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-1080p w-full px-16 pt-12 pb-24 mx-auto">
        <div className="mx-auto bg-primary-light rounded-[3rem] p-12 flex items-center justify-between relative shadow-sm border border-green-50 overflow-hidden">

          {/* Left Illustration */}
          <div className="w-[30%] relative h-75 flex items-center justify-center z-10">
            <Image src="https://picsum.photos/seed/aboutctapeople/500/500" alt="Join us" fill className="object-contain" />
          </div>

          {/* Center Text */}
          <div className="w-[40%] text-left px-8 z-10">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900">
              Yuk, wujudkan masa depan <br /> yang lebih hijau bersama <span className="text-primary">HijauIn!</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Satu langkah kecil dari kita, bisa menjadi perubahan besar untuk bumi yang kita cintai.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col items-end w-[30%] gap-4 z-10">
            <button className="bg-primary hover:bg-green-700 rounded-2xl flex items-center justify-center w-full gap-3 py-5 text-lg font-bold text-white transition shadow-lg">
              Daftar Gratis Sekarang <FaArrowRight />
            </button>
            <button className="border-primary text-primary hover:bg-primary-light rounded-2xl flex items-center justify-center w-full gap-3 py-5 text-lg font-bold transition bg-white border-2">
              Lihat Cara Kerja <FaArrowRight />
            </button>
          </div>

          {/* Decorative Leaves */}
          <FaLeaf className="top-10 left-1/3 text-primary opacity-20 -rotate-12 absolute text-5xl transform" />
          <FaLeaf className="bottom-10 right-10 text-primary opacity-10 absolute text-6xl transform rotate-45" />
        </div>
      </section>

    </div>
  );
}