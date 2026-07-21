// src/app/fitur/page.tsx
import Image from 'next/image';
import { FaLeaf, FaRobot, FaTrophy, FaUsers, FaChartLine, FaMapMarkerAlt, FaBookOpen } from 'react-icons/fa';

export default function Features() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Header Section */}
      <section className="w-full px-16 py-24 text-center bg-gradient-to-b from-brand-light to-white">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-brand font-semibold text-base mb-8 shadow-sm">
          <FaLeaf /> Fitur HijauIn
        </div>
        <h1 className="text-6xl font-extrabold text-gray-900 mb-8">
          Semua Fitur HijauIn <br /> Dalam <span className="text-brand">Satu Platform</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Dirancang untuk membantumu mencatat aksi ramah lingkungan, memantau dampak, mendapatkan insight AI, dan terhubung dengan komunitas yang peduli bumi.
        </p>
        <button className="bg-white border-2 border-brand text-brand px-8 py-4 rounded-full text-lg font-bold hover:bg-brand hover:text-white transition">
          Lihat Semua Fitur
        </button>
      </section>

      {/* Grid Features */}
      <section className="w-full px-16 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Fitur Unggulan <span className="text-brand">HijauIn</span></h2>
          <p className="text-xl text-gray-500">Berbagai fitur inovatif untuk membantumu hidup lebih hijau setiap hari.</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {[
            { title: "Catat Aksi Harian", icon: <FaLeaf />, desc: "Pilih dan catat aksi ramah lingkungan dengan mudah setiap hari." },
            { title: "Eco Score", icon: <FaChartLine />, desc: "Dapatkan poin dari setiap aksi dan pantau perkembangan Eco Score-mu." },
            { title: "AI Green Coach", icon: <FaRobot />, desc: "AI menganalisis aktivitasmu dan memberikan rekomendasi personal setiap hari." },
            { title: "Challenge & Misi", icon: <FaTrophy />, desc: "Ikuti berbagai tantangan seru, selesaikan misi, dan raih badge serta reward menarik." },
            { title: "Komunitas Aktif", icon: <FaUsers />, desc: "Bergabung dengan komunitas hijau, berbagi inspirasi, dan bergerak bersama." },
            { title: "Laporan Dampak", icon: <FaChartLine />, desc: "Lihat laporan dampak positif dari setiap aksi yang kamu lakukan secara real-time." },
            { title: "Peta Dampak", icon: <FaMapMarkerAlt />, desc: "Lihat peta sebaran aksi hijau dari berbagai kota dan komunitas di Indonesia." },
            { title: "Edukasi & Inspirasi", icon: <FaBookOpen />, desc: "Akses artikel, infografis, video, dan tips untuk hidup lebih ramah lingkungan." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 p-8 rounded-3xl hover:shadow-xl transition flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-light text-brand rounded-full flex items-center justify-center text-3xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-lg text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Detailed Features Layout */}
      <section className="w-full px-16 py-24 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">Fitur Unggulan Secara Detail</h2>

        {/* Detail 1 */}
        <div className="flex bg-white rounded-3xl overflow-hidden shadow-sm mb-12">
          <div className="w-1/2 relative min-h-[400px]">
            <Image src="https://picsum.photos/seed/ai/800/600" alt="AI Feature" fill className="object-cover" />
          </div>
          <div className="w-1/2 p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 text-brand text-2xl font-bold mb-6">
              <FaRobot /> AI Green Coach
            </div>
            <p className="text-xl text-gray-700 mb-8">Punya teman pintar yang selalu membantumu menjadi lebih baik.</p>
            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-center gap-3"><FaLeaf className="text-brand" /> Rekomendasi personal berdasarkan kebiasaanmu</li>
              <li className="flex items-center gap-3"><FaLeaf className="text-brand" /> Insight dampak lingkungan secara real-time</li>
              <li className="flex items-center gap-3"><FaLeaf className="text-brand" /> Tips harian untuk aksi yang lebih berdampak</li>
            </ul>
          </div>
        </div>

        {/* Detail 2 */}
        <div className="flex bg-white rounded-3xl overflow-hidden shadow-sm mb-12 flex-row-reverse">
          <div className="w-1/2 relative min-h-[400px]">
            <Image src="https://picsum.photos/seed/score/800/600" alt="Score Feature" fill className="object-cover" />
          </div>
          <div className="w-1/2 p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-3 text-brand text-2xl font-bold mb-6">
              <FaChartLine /> Eco Score & Level
            </div>
            <p className="text-xl text-gray-700 mb-8">Setiap aksi kecilmu akan menghasilkan poin dan menaikkan level kepedulianmu.</p>
            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-center gap-3"><FaLeaf className="text-brand" /> Poin dari setiap aksi yang kamu lakukan</li>
              <li className="flex items-center gap-3"><FaLeaf className="text-brand" /> Level dan Badge sebagai bentuk pencapaian</li>
              <li className="flex items-center gap-3"><FaLeaf className="text-brand" /> Track progress harian, mingguan, dan bulanan</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}