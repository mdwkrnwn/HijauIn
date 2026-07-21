// src/app/edukasi/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaCalendarAlt, FaClock, FaCheckCircle, FaWhatsapp, FaFacebook, FaTwitter, FaLink, FaLeaf } from 'react-icons/fa';

export default function ArticleDetail() {
  return (
    <div className="w-full bg-gray-50 flex flex-col items-center pb-24">
      {/* Breadcrumb & Header */}
      <div className="w-full  px-16 py-12 bg-white">
        <Link href="/edukasi" className="inline-flex items-center gap-2 text-brand font-bold text-base mb-8 hover:underline">
          <FaArrowLeft /> Kembali ke Edukasi
        </Link>
        <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mb-6 max-w-4xl">
          Kurangi Plastik Sekali Pakai dalam 7 Hari <FaLeaf className="inline text-brand" />
        </h1>
        <div className="flex items-center gap-6 text-base text-gray-600 mb-10">
          <span className="bg-brand-light text-brand px-4 py-2 rounded-full font-bold">Tips</span>
          <span className="flex items-center gap-2"><FaCalendarAlt /> 12 Mei 2024</span>
          <span className="flex items-center gap-2"><FaClock /> 5 menit baca</span>
        </div>
        <div className="w-full h-150 relative rounded-3xl overflow-hidden shadow-lg">
          <Image src="https://picsum.photos/seed/articlemain/1600/600" alt="Article Header" fill className="object-cover" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full  px-16 py-16 flex gap-16 items-start">
        {/* Left Column - Article Text */}
        <article className="w-2/3 bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
          <p className="text-xl text-gray-700 leading-relaxed mb-10">
            Plastik sekali pakai membutuhkan ratusan tahun untuk terurai dan mencemari lingkungan kita. Yuk, ikuti tantangan 7 hari ini untuk mengurangi penggunaan <strong>plastik dan mulai hidup lebih hijau!</strong>
          </p>

          <div className="space-y-10 relative">
            <div className="absolute left-6 top-6 bottom-6 w-1 bg-gray-200 z-0"></div>
            {[
              { day: "Hari 1", title: "Bawa Botol Minum Sendiri", desc: "Biasakan membawa botol minum isi ulang ke mana pun kamu pergi." },
              { day: "Hari 2", title: "Tolak Sedotan Plastik", desc: "Gunakan sedotan stainless atau tanpa sedotan. Bumi akan berterima kasih!" },
              { day: "Hari 3", title: "Bawa Tas Belanja Sendiri", desc: "Tas kain lebih kuat, bisa dipakai berulang kali, dan ramah lingkungan." },
              { day: "Hari 4", title: "Pilih Produk Tanpa Plastik", desc: "Pilih produk dengan kemasan ramah lingkungan atau isi ulang." },
              { day: "Hari 5", title: "Gunakan Wadah Makan Sendiri", desc: "Bawa kotak makan sendiri untuk mengurangi styrofoam dan plastik." },
              { day: "Hari 6", title: "Hindari Kantong Plastik", desc: "Biasakan menolak kantong plastik saat berbelanja." },
              { day: "Hari 7", title: "Evaluasi dan Bagikan", desc: "Lihat perubahan kecil yang kamu buat dan ajak orang lain untuk melakukan hal yang sama!" }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-8 relative z-10">
                <div className="w-14 h-14 rounded-full bg-brand text-white flex items-center justify-center text-2xl shrink-0 shadow-md">
                  <FaLeaf />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.day} – {step.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-brand-light p-8 rounded-2xl flex items-center gap-6">
            <FaLeaf className="text-5xl text-brand shrink-0" />
            <p className="text-lg text-gray-800 font-medium italic">
              Perubahan besar dimulai dari langkah-langkah kecil yang kita lakukan setiap hari. Yuk, terus konsisten untuk masa depan bumi yang lebih baik!
            </p>
          </div>
        </article>

        {/* Right Column - Sidebar */}
        <aside className="w-1/3 space-y-8">
          {/* Author Box */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Penulis</h4>
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-brand-light flex items-center justify-center">
                <FaLeaf className="text-4xl text-brand" />
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900 flex items-center gap-2">Tim HijauIn <FaCheckCircle className="text-brand text-base" /></div>
                <p className="text-base text-gray-500">Bersama menebar inspirasi untuk hidup lebih hijau.</p>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Bagikan Artikel</h4>
            <div className="flex gap-4 text-3xl">
              <button className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center hover:opacity-80 transition"><FaWhatsapp /></button>
              <button className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:opacity-80 transition"><FaFacebook /></button>
              <button className="w-14 h-14 rounded-full bg-sky-500 text-white flex items-center justify-center hover:opacity-80 transition"><FaTwitter /></button>
              <button className="w-14 h-14 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center hover:bg-gray-300 transition"><FaLink /></button>
            </div>
          </div>

          {/* Related Articles Box */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Artikel Terkait</h4>
            <div className="space-y-6">
              {[
                { img: "rel1", title: "Mengenal Jenis Sampah dan Cara Mengelolanya", time: "5 menit baca" },
                { img: "rel2", title: "10 Cara Hemat Energi di Rumah", time: "4 menit baca" },
                { img: "rel3", title: "Pentingnya Menjaga Ekosistem Laut", time: "6 menit baca" }
              ].map((rel, idx) => (
                <div key={idx} className="flex gap-4 items-center group cursor-pointer">
                  <div className="w-24 h-24 relative rounded-xl overflow-hidden shrink-0">
                    <Image src={`https://picsum.photos/seed/${rel.img}/150/150`} alt={rel.title} fill className="object-cover group-hover:scale-110 transition" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-brand transition">{rel.title}</h5>
                    <div className="text-base text-gray-500 flex items-center gap-2"><FaClock /> {rel.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}