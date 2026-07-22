// src/app/tentang/page.tsx
import Image from 'next/image';
import { FaLeaf, FaEye, FaHeart, FaBullseye } from 'react-icons/fa';

export default function About() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Header Section */}
      <section className="w-full px-16 py-24 text-center bg-white relative">
        <div className="inline-flex items-center gap-2 bg-primary-light px-4 py-2 rounded-full text-primary font-semibold text-base mb-8 shadow-sm">
          <FaLeaf /> Tentang HijauIn
        </div>
        <h1 className="text-6xl font-extrabold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
          Teknologi untuk Hidup yang <span className="text-primary">Lebih Hijau</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
          HijauIn adalah platform digital yang menghubungkan teknologi, kebiasaan positif, dan komunitas untuk menciptakan dampak nyata bagi bumi dan generasi mendatang.
        </p>
        <div className="w-full max-w-6xl mx-auto h-[500px] relative rounded-[3rem] overflow-hidden shadow-2xl">
          <Image src="https://picsum.photos/seed/abouthero/1200/500" alt="Sustainable City" fill className="object-cover" />
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="w-full px-16 py-24 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">Misi, Visi & Nilai Kami <FaLeaf className="inline text-primary" /></h2>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
            <div className="w-20 h-20 bg-primary-light text-primary rounded-2xl flex items-center justify-center text-4xl mb-8">
              <FaBullseye />
            </div>
            <h3 className="text-3xl font-bold mb-4">Misi</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Memberdayakan setiap individu dan komunitas untuk melakukan aksi positif bagi lingkungan setiap hari.
            </p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
            <div className="w-20 h-20 bg-primary-light text-primary rounded-2xl flex items-center justify-center text-4xl mb-8">
              <FaEye />
            </div>
            <h3 className="text-3xl font-bold mb-4">Visi</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Menjadi platform terdepan di Indonesia yang mendorong gaya hidup berkelanjutan melalui teknologi, edukasi, dan kolaborasi.
            </p>
          </div>
          <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
            <div className="w-20 h-20 bg-primary-light text-primary rounded-2xl flex items-center justify-center text-4xl mb-8">
              <FaHeart />
            </div>
            <h3 className="text-3xl font-bold mb-4">Nilai Kami</h3>
            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-center gap-3"><FaLeaf className="text-primary" /> Peduli Lingkungan</li>
              <li className="flex items-center gap-3"><FaLeaf className="text-primary" /> Inovatif & Adaptif</li>
              <li className="flex items-center gap-3"><FaLeaf className="text-primary" /> Kolaboratif</li>
              <li className="flex items-center gap-3"><FaLeaf className="text-primary" /> Transparan & Terpercaya</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="w-full px-16 py-24 bg-white text-center">
        <h2 className="text-4xl font-bold mb-16">Perjalanan <span className="text-primary">HijauIn</span></h2>
        <div className="flex justify-between items-center relative max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-primary-light -z-10 transform -translate-y-1/2"></div>
          {[
            { year: "2022", title: "Berawal dari ide kecil untuk mendorong kebiasaan hijau di sekitar kita." },
            { year: "2023", title: "HijauIn mulai dikembangkan dan membangun komunitas pertama." },
            { year: "2024", title: "Platform resmi diluncurkan dan ribuan pengguna mulai bergabung." },
            { year: "2025", title: "Ekspansi ke berbagai kota di Indonesia dan bekerja sama dengan berbagai organisasi." },
            { year: "Masa Depan", title: "Terus berinovasi untuk menciptakan dampak positif yang lebih besar bagi bumi." }
          ].map((item, idx) => (
            <div key={idx} className="w-48 flex flex-col items-center bg-white p-2">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg border-4 border-white">
                {idx === 4 ? <FaLeaf /> : <FaLeaf className="opacity-50" />}
              </div>
              <h3 className="text-2xl font-bold mb-3">{item.year}</h3>
              <p className="text-base text-gray-600">{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}