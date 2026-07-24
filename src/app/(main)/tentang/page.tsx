// src/app/tentang/page.tsx
import Image from 'next/image';
import {
  FaLeaf, FaBullseye, FaEye, FaHeart, FaCheckCircle,
  FaUsers, FaChartBar, FaGlobe, FaArrowRight, FaTree
} from 'react-icons/fa';

export default function TentangKami() {
  return (
    <div className="flex flex-col items-center w-full pb-24 bg-white">
      {/* Hero Section */}
      <section className=" w-full px-16 py-24 text-center">
        <div className="bg-primary-light text-primary inline-flex items-center gap-2 px-4 py-2 mb-8 text-base font-semibold rounded-full shadow-sm">
          <FaLeaf /> Tentang HijauIn
        </div>
        <h1 className="max-w-4xl mx-auto mb-8 text-6xl font-extrabold leading-tight text-gray-900">
          Teknologi untuk Hidup yang <span className="text-primary">Lebih Hijau</span>
        </h1>
        <p className="max-w-3xl mx-auto mb-10 text-xl text-gray-600">
          HijauIn adalah platform digital yang menghubungkan teknologi, kebiasaan positif, dan komunitas untuk menciptakan dampak nyata bagi bumi dan generasi mendatang.
        </p>
        <button className="border-primary text-primary hover:bg-primary-light flex items-center gap-3 px-8 py-4 mx-auto mb-16 text-lg font-bold transition bg-white border-2 rounded-full">
          Misi Kami <FaArrowRight />
        </button>
        <div className="w-full h-[500px] relative rounded-[3rem] overflow-hidden shadow-xl mb-16">
          <Image src="https://picsum.photos/seed/abouthero/1600/600" alt="Sustainable City" fill className="object-cover" />
        </div>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-3 gap-8 text-left">
          <div className="rounded-2xl flex items-start gap-6 p-8 bg-white border border-gray-100 shadow-sm">
            <div className="bg-primary-light text-primary flex items-center justify-center flex-shrink-0 w-16 h-16 text-3xl rounded-full"><FaBullseye /></div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Aksi Kecil Dampak Besar</h3>
              <p className="text-base text-gray-600">Setiap aksi sederhana yang kamu lakukan, berkontribusi untuk perubahan besar bagi bumi.</p>
            </div>
          </div>
          <div className="rounded-2xl flex items-start gap-6 p-8 bg-white border border-gray-100 shadow-sm">
            <div className="bg-primary-light text-primary flex items-center justify-center flex-shrink-0 w-16 h-16 text-3xl rounded-full"><FaUsers /></div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Bersama Komunitas</h3>
              <p className="text-base text-gray-600">Bergerak bersama komunitas peduli lingkungan untuk menginspirasi dan saling mendukung.</p>
            </div>
          </div>
          <div className="rounded-2xl flex items-start gap-6 p-8 bg-white border border-gray-100 shadow-sm">
            <div className="bg-primary-light text-primary flex items-center justify-center flex-shrink-0 w-16 h-16 text-3xl rounded-full"><FaChartBar /></div>
            <div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">Data & Teknologi untuk Perubahan</h3>
              <p className="text-base text-gray-600">Menggunakan teknologi dan data untuk melacak, memahami, dan memaksimalkan dampak positif kita bersama.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Misi, Visi & Nilai Kami */}
      <section className="bg-gray-50 w-full px-16 py-24">
        <div className=" mx-auto">
          <h2 className="mb-12 text-4xl font-bold">Misi, Visi & Nilai Kami <FaLeaf className="text-primary inline" /></h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="rounded-3xl p-10 bg-white border border-gray-100 shadow-sm">
              <div className="bg-primary-light text-primary rounded-2xl flex items-center justify-center w-20 h-20 mb-8 text-4xl"><FaBullseye /></div>
              <h3 className="mb-4 text-3xl font-bold">Misi</h3>
              <p className="text-lg leading-relaxed text-gray-600">Memberdayakan setiap individu dan komunitas untuk melakukan aksi positif bagi lingkungan setiap hari.</p>
            </div>
            <div className="rounded-3xl p-10 bg-white border border-gray-100 shadow-sm">
              <div className="bg-primary-light text-primary rounded-2xl flex items-center justify-center w-20 h-20 mb-8 text-4xl"><FaEye /></div>
              <h3 className="mb-4 text-3xl font-bold">Visi</h3>
              <p className="text-lg leading-relaxed text-gray-600">Menjadi platform terdepan di Indonesia yang mendorong gaya hidup berkelanjutan melalui teknologi, edukasi, dan kolaborasi komunitas.</p>
            </div>
            <div className="rounded-3xl p-10 bg-white border border-gray-100 shadow-sm">
              <div className="bg-primary-light text-primary rounded-2xl flex items-center justify-center w-20 h-20 mb-8 text-4xl"><FaHeart /></div>
              <h3 className="mb-4 text-3xl font-bold">Nilai Kami</h3>
              <ul className="space-y-4 text-lg font-medium text-gray-600">
                <li className="flex items-center gap-3"><FaCheckCircle className="text-primary" /> Peduli Lingkungan</li>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-primary" /> Inovatif & Adaptif</li>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-primary" /> Kolaboratif</li>
                <li className="flex items-center gap-3"><FaCheckCircle className="text-primary" /> Transparan & Terpercaya</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Perjalanan HijauIn */}
      <section className="w-full px-16 py-24 text-center bg-white">
        <h2 className="mb-20 text-4xl font-bold">Perjalanan <span className="text-primary">HijauIn</span> <FaLeaf className="text-primary inline" /></h2>
        <div className=" relative flex items-start justify-between mx-auto">
          <div className="top-8 bg-primary-light -z-10 absolute left-0 w-full h-1"></div>
          {[
            { icon: <FaLeaf />, year: "2022", title: "Berawal dari ide kecil untuk mendorong kebiasaan hijau di sekitar kita." },
            { icon: <FaUsers />, year: "2023", title: "HijauIn mulai dikembangkan dan membangun komunitas pertama." },
            { icon: <FaGlobe />, year: "2024", title: "Platform resmi diluncurkan dan ribuan pengguna mulai bergabung." },
            { icon: <FaTree />, year: "2025", title: "Ekspansi ke berbagai kota di Indonesia dan bekerja sama dengan berbagai organisasi." },
            { icon: <FaTree />, year: "Masa Depan", title: "Terus berinovasi untuk menciptakan dampak positif yang lebih besar bagi bumi." }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center w-48 px-2 bg-white">
              <div className="bg-primary flex items-center justify-center w-16 h-16 mb-6 text-2xl font-bold text-white border-4 border-white rounded-full shadow-lg">
                {item.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">{item.year}</h3>
              <p className="text-base text-gray-600">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dampak yang Telah Kami Ciptakan */}
      <section className="w-full px-16 py-12 bg-white">
        <div className=" mx-auto">
          <h2 className="mb-10 text-3xl font-bold">Dampak yang Telah Kami Ciptakan <FaLeaf className="text-primary inline" /></h2>
          <div className="grid grid-cols-5 gap-4">
            {[
              { val: "125.430+", lbl: "Aksi Hijau Tercatat", icon: <FaLeaf className="text-primary" /> },
              { val: "15.000+", lbl: "Komunitas Aktif", icon: <FaUsers className="text-primary" /> },
              { val: "320+", lbl: "Kota di Indonesia", icon: <FaGlobe className="text-primary" /> },
              { val: "82.340+ kg", lbl: "CO2 Berhasil Dikurangi", icon: <div className="text-primary text-2xl font-bold">CO2</div> },
              { val: "5.243", lbl: "Pohon Ditanam", icon: <FaTree className="text-primary" /> }
            ].map((stat, idx) => (
              <div key={idx} className="rounded-2xl flex flex-col items-center p-6 text-center bg-white border border-gray-100 shadow-sm">
                <div className="mb-4 text-4xl">{stat.icon}</div>
                <div className="mb-1 text-2xl font-bold text-gray-900">{stat.val}</div>
                <div className="text-base text-gray-500">{stat.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mengapa HijauIn Section */}
      <section className=" flex items-center w-full gap-16 px-16 py-24 mx-auto">
        <div className="w-1/2 relative h-[600px]">
          <Image src="https://picsum.photos/seed/phoneappmock/800/800" alt="App Preview" fill className="object-contain" />
        </div>
        <div className="w-1/2">
          <h2 className="mb-10 text-4xl font-bold">Mengapa <span className="text-primary">HijauIn?</span> <FaLeaf className="text-primary inline" /></h2>
          <div className="space-y-6">
            {[
              { icon: <FaCheckCircle />, title: "Mudah Digunakan", desc: "Antarmuka yang sederhana membuat siapa saja bisa mulai hidup hijau dengan mudah." },
              { icon: <FaGlobe />, title: "Dampak Nyata", desc: "Setiap aksimu tercatat dan memberikan dampak positif nyata untuk bumi." },
              { icon: <FaUsers />, title: "Komunitas Positif", desc: "Bergabung dengan ribuan orang yang memiliki visi yang sama untuk bumi yang lebih baik." },
              { icon: <FaCheckCircle />, title: "Aman & Terpercaya", desc: "Data kamu aman bersama kami dan hanya digunakan untuk tujuan kebaikan." }
            ].map((feat, idx) => (
              <div key={idx} className="rounded-2xl flex items-start gap-6 p-6 bg-white border border-gray-100 shadow-sm">
                <div className="bg-primary-light text-primary rounded-xl flex items-center justify-center flex-shrink-0 w-16 h-16 text-3xl">{feat.icon}</div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{feat.title}</h3>
                  <p className="text-base text-gray-600">{feat.desc}</p>
                </div>
                <div className="text-primary mt-2 ml-auto text-2xl"><FaCheckCircle /></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full px-16 py-12">
        <div className=" mx-auto bg-primary-light rounded-[3rem] p-16 flex items-center justify-between relative shadow-sm border border-green-50">
          <div className="w-1/3 relative h-[300px] flex items-center justify-center">
            <Image src="https://picsum.photos/seed/aboucta/400/400" alt="Join us" fill className="object-contain" />
          </div>
          <div className="w-1/3 text-left">
            <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900">Yuk, wujudkan masa depan yang lebih hijau bersama <span className="text-primary">HijauIn!</span></h2>
            <p className="text-lg text-gray-700">Satu langkah kecil dari kita, bisa menjadi perubahan besar untuk bumi yang kita cintai.</p>
          </div>
          <div className="flex flex-col items-end w-1/3 gap-4">
            <button className="bg-primary hover:bg-green-700 flex items-center justify-center w-64 gap-3 py-4 text-lg font-bold text-white transition rounded-full shadow-lg">
              Daftar Gratis Sekarang <FaArrowRight />
            </button>
            <button className="border-primary text-primary hover:bg-primary-light flex items-center justify-center w-64 gap-3 py-4 text-lg font-bold transition bg-white border-2 rounded-full">
              Lihat Cara Kerja <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}