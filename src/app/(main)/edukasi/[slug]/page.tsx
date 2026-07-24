// src/app/edukasi/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowLeft, FaCalendarAlt, FaClock, FaCheckCircle,
  FaWhatsapp, FaFacebook, FaTwitter, FaLink, FaLeaf, FaUsers,
  FaTint
} from 'react-icons/fa';

export default function DetailEdukasi() {
  return (
    <div className="bg-gray-50 flex flex-col items-center w-full pb-24">
      {/* Header Container */}
      <div className="max-w-1080p w-full px-16 py-12 bg-white">
        <Link href="/edukasi" className="text-primary hover:underline inline-flex items-center gap-2 mb-8 text-base font-bold">
          <FaArrowLeft /> Kembali ke Edukasi
        </Link>
        <h1 className="max-w-4xl mb-6 text-5xl font-extrabold leading-tight text-gray-900">
          Kurangi Plastik Sekali Pakai dalam 7 Hari <FaLeaf className="text-primary inline" />
        </h1>
        <div className="flex items-center gap-6 mb-10 text-base font-medium text-gray-600">
          <span className="bg-primary-light text-primary px-4 py-1 text-sm font-bold rounded-md">Tips</span>
          <span className="flex items-center gap-2"><FaCalendarAlt /> 12 Mei 2024</span>
          <span className="flex items-center gap-2"><FaClock /> 5 menit baca</span>
        </div>
        <div className="w-full h-[500px] relative rounded-3xl overflow-hidden shadow-lg border border-gray-100">
          <Image src="https://picsum.photos/seed/eduheader/1600/600" alt="Reduce Plastic" fill className="object-cover" />
          <div className="top-1/2 left-16 bg-white/90 backdrop-blur rounded-2xl absolute max-w-sm p-8 transform -translate-y-1/2">
            <h2 className="mb-2 text-4xl font-bold text-gray-900">7 hari kecil, dampak besar <br />untuk bumi kita.</h2>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-1080p bg-gray-50 flex items-start w-full gap-12 px-16 pt-12">
        {/* Left Column */}
        <article className="w-2/3">
          <p className="rounded-3xl p-8 mb-12 text-xl leading-relaxed text-gray-700 bg-white border border-gray-100 shadow-sm">
            Plastik sekali pakai membutuhkan ratusan tahun untuk terurai dan mencemari lingkungan kita. Yuk, ikuti tantangan 7 hari ini untuk mengurangi penggunaan <strong>plastik dan mulai hidup lebih hijau!</strong>
          </p>

          <div className="relative mb-16 ml-4 space-y-10">
            <div className="left-6 top-6 bottom-6 absolute z-0 w-1 bg-gray-300"></div>
            {[
              { icon: <FaTint />, day: "Hari 1", title: "Bawa Botol Minum Sendiri", desc: "Biasakan membawa botol minum isi ulang ke mana pun kamu pergi." },
              { icon: <FaCheckCircle />, day: "Hari 2", title: "Tolak Sedotan Plastik", desc: "Gunakan sedotan stainless atau tanpa sedotan. Bumi akan berterima kasih!" },
              { icon: <FaLeaf />, day: "Hari 3", title: "Bawa Tas Belanja Sendiri", desc: "Tas kain lebih kuat, bisa dipakai berulang kali, dan ramah lingkungan." },
              { icon: <FaLeaf />, day: "Hari 4", title: "Pilih Produk Tanpa Plastik", desc: "Pilih produk dengan kemasan ramah lingkungan atau isi ulang." },
              { icon: <FaCheckCircle />, day: "Hari 5", title: "Gunakan Wadah Makan Sendiri", desc: "Bawa kotak makan sendiri untuk mengurangi styrofoam dan plastik." },
              { icon: <FaCheckCircle />, day: "Hari 6", title: "Hindari Kantong Plastik", desc: "Biasakan menolak kantong plastik saat berbelanja." },
              { icon: <FaUsers />, day: "Hari 7", title: "Evaluasi dan Bagikan", desc: "Lihat perubahan kecil yang kamu buat dan ajak orang lain untuk melakukan hal yang sama!" }
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex items-start gap-8">
                <div className="w-14 h-14 bg-primary ring-4 ring-gray-50 flex items-center justify-center flex-shrink-0 text-2xl text-white rounded-full shadow-md">
                  {step.icon}
                </div>
                <div className="pt-2">
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">{step.day} – {step.title}</h3>
                  <p className="text-lg leading-relaxed text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary-light/40 rounded-2xl border-primary-light flex items-center gap-6 p-8 mb-16 border">
            <FaLeaf className="text-primary flex-shrink-0 text-4xl" />
            <p className="text-lg italic font-medium text-gray-800">
              Perubahan besar dimulai dari langkah-langkah kecil yang kita lakukan setiap hari. Yuk, terus konsisten untuk masa depan bumi yang lebih baik!
            </p>
          </div>

          {/* Artikel Lainnya (Bottom Left) */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-gray-900">Artikel Lainnya</h3>
              <button className="text-primary hover:underline flex items-center gap-2 text-lg font-bold">Lihat Semua &rarr;</button>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {[
                { img: "art1", tag: "Edukasi", title: "Manfaat Menanam Pohon untuk Lingkungan", time: "6 menit baca" },
                { img: "art2", tag: "Tips", title: "5 Tips Mengurangi Sampah di Pantai", time: "4 menit baca" },
                { img: "art3", tag: "Edukasi", title: "Daur Ulang: Langkah Kecil Dampak Besar", time: "5 menit baca" }
              ].map((art, idx) => (
                <div key={idx} className="rounded-2xl hover:shadow-md overflow-hidden transition bg-white border border-gray-100 shadow-sm cursor-pointer">
                  <div className="relative h-32">
                    <Image src={`https://picsum.photos/seed/${art.img}/300/200`} alt={art.title} fill className="object-cover" />
                    <div className="bottom-2 left-2 bg-primary absolute px-2 py-1 text-sm font-bold text-white rounded">{art.tag}</div>
                  </div>
                  <div className="p-4">
                    <h4 className="line-clamp-2 mb-4 text-lg font-bold text-gray-900">{art.title}</h4>
                    <div className="flex items-center gap-2 text-base font-medium text-gray-500">
                      <FaClock className="text-primary" /> {art.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Right Column - Sidebar */}
        <aside className="w-1/3 space-y-8">
          {/* Penulis Box */}
          <div className="rounded-3xl p-8 bg-white border border-gray-100 shadow-sm">
            <h4 className="mb-6 text-xl font-bold text-gray-900">Penulis</h4>
            <div className="flex items-center gap-6">
              <div className="bg-primary-light flex items-center justify-center flex-shrink-0 w-16 h-16 border border-green-100 rounded-full">
                <FaLeaf className="text-primary text-3xl" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1 text-xl font-bold text-gray-900">Tim HijauIn <FaCheckCircle className="text-primary text-base" /></div>
                <p className="text-base leading-tight text-gray-500">Bersama menebar inspirasi untuk hidup lebih hijau.</p>
              </div>
            </div>
          </div>

          {/* Bagikan Artikel */}
          <div className="rounded-3xl p-8 bg-white border border-gray-100 shadow-sm">
            <h4 className="mb-6 text-xl font-bold text-gray-900">Bagikan Artikel</h4>
            <div className="flex gap-4 text-2xl">
              <button className="hover:opacity-80 flex items-center justify-center w-12 h-12 text-white transition bg-green-500 rounded-full"><FaWhatsapp /></button>
              <button className="hover:opacity-80 flex items-center justify-center w-12 h-12 text-white transition bg-blue-600 rounded-full"><FaFacebook /></button>
              <button className="bg-sky-500 hover:opacity-80 flex items-center justify-center w-12 h-12 text-white transition rounded-full"><FaTwitter /></button>
              <button className="hover:bg-gray-300 flex items-center justify-center w-12 h-12 text-gray-600 transition bg-gray-200 rounded-full"><FaLink /></button>
            </div>
          </div>

          {/* Artikel Terkait */}
          <div className="rounded-3xl p-8 bg-white border border-gray-100 shadow-sm">
            <h4 className="mb-6 text-xl font-bold text-gray-900">Artikel Terkait</h4>
            <div className="space-y-6">
              {[
                { img: "rel1", title: "Mengenal Jenis Sampah dan Cara Mengelolanya", time: "5 menit baca" },
                { img: "rel2", title: "10 Cara Hemat Energi di Rumah", time: "4 menit baca" },
                { img: "rel3", title: "Pentingnya Menjaga Ekosistem Laut", time: "6 menit baca" }
              ].map((rel, idx) => (
                <div key={idx} className="group flex items-center gap-4 cursor-pointer">
                  <div className="rounded-xl relative flex-shrink-0 w-24 h-24 overflow-hidden shadow-sm">
                    <Image src={`https://picsum.photos/seed/${rel.img}/150/150`} alt={rel.title} fill className="group-hover:scale-105 object-cover transition" />
                  </div>
                  <div>
                    <h5 className="line-clamp-2 group-hover:text-primary mb-2 text-base font-bold text-gray-900 transition">{rel.title}</h5>
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-500"><FaClock className="text-primary" /> {rel.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="bg-primary-light/50 rounded-3xl border-primary-light flex flex-col items-center p-8 text-center border shadow-sm">
            <h4 className="mb-4 text-2xl font-bold text-gray-900">Yuk, jadi bagian dari perubahan!</h4>
            <p className="mb-8 text-base text-gray-700">
              Setiap langkah kecil yang kamu ambil hari ini, membawa perubahan besar untuk masa depan bumi.
            </p>
            <button className="bg-primary rounded-xl hover:bg-green-700 flex items-center justify-center w-full gap-3 py-4 mb-6 text-lg font-bold text-white transition shadow-md">
              Gabung Komunitas <FaUsers />
            </button>
            <div className="relative w-full h-32">
              <Image src="https://picsum.photos/seed/earthcta/300/150" alt="Earth" fill className="object-contain" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}