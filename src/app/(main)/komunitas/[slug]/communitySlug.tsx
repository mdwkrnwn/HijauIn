// src/app/komunitas/[slug]/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import {
  FaArrowLeft, FaMapMarkerAlt, FaUsers, FaLeaf, FaGlobe,
  FaCalendarAlt, FaShareAlt, FaEnvelope, FaPhone, FaInstagram,
  FaCommentDots, FaTrash, FaTree, FaClock
} from 'react-icons/fa';
import { Community } from '../page';

export default function DetailKomunitas({ community }: { community: Community }) {
  return (
    <div className="bg-gray-50 flex flex-col items-center w-full">
      <div className="w-full px-16 py-12">
        <Link href="/komunitas" className="text-primary hover:underline inline-flex items-center gap-2 mb-8 text-base font-bold">
          <FaArrowLeft /> Kembali ke Komunitas
        </Link>

        {/* Main Banner Card */}
        <div className="bg-white rounded-[3rem] p-10 flex gap-10 shadow-sm border border-gray-100 items-stretch">
          <div className="flex flex-col justify-between w-1/2 py-6">
            <div>
              <div className="bg-primary-light rounded-3xl flex items-center justify-center w-24 h-24 mb-8 border border-green-100">
                <FaLeaf className="text-primary text-5xl" />
              </div>
              <h1 className="mb-4 text-6xl font-extrabold text-gray-900">{community.name} <FaLeaf className="text-primary inline" /></h1>
              <div className="flex items-center gap-3 mb-8 text-xl font-medium text-gray-600">
                <FaMapMarkerAlt className="text-primary" /> {community.city}
              </div>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                {community.caption}
              </p>
              <div className="flex flex-wrap gap-3 mb-12">
                {community.tags.map((e, idx) =>
                  <span key={idx} className="bg-primary-light/50 text-primary border-primary-light px-4 py-2 text-base font-medium border rounded-full">{e}</span>
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-primary rounded-xl hover:bg-green-700 flex items-center gap-3 px-8 py-4 text-lg font-bold text-white transition">
                Gabung Komunitas <FaUsers />
              </button>
              <button className="rounded-xl hover:bg-gray-50 flex items-center gap-3 px-8 py-4 text-lg font-bold text-gray-700 transition bg-white border-2 border-gray-200">
                Bagikan <FaShareAlt />
              </button>
            </div>
          </div>
          <div className="w-1/2 relative rounded-4xl overflow-hidden">
            <Image src={community.image} alt="Community Activity" fill className="object-cover" />
            <div className="bottom-6 right-6 rounded-2xl absolute flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-lg">
              <div className="flex -space-x-4">
                <div className="relative w-12 h-12 overflow-hidden border-2 border-white rounded-full"><Image src="https://picsum.photos/seed/u1/100" alt="u1" fill /></div>
                <div className="relative w-12 h-12 overflow-hidden border-2 border-white rounded-full"><Image src="https://picsum.photos/seed/u2/100" alt="u2" fill /></div>
                <div className="relative w-12 h-12 overflow-hidden border-2 border-white rounded-full"><Image src="https://picsum.photos/seed/u3/100" alt="u3" fill /></div>
              </div>
              <div>
                <div className="text-xl font-bold leading-tight text-gray-900">{community.member_count}+</div>
                <div className="text-base text-gray-500">Anggota Aktif</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="rounded-3xl flex justify-between p-10 mt-8 bg-white border border-gray-100 shadow-sm">
          {[
            { icon: <FaUsers />, val: "15.000+", lbl: "Komunitas Aktif" },
            { icon: <FaLeaf />, val: "125.430+", lbl: "Aksi Hijau Tercatat" },
            { icon: <FaGlobe />, val: "320+", lbl: "Kota di Indonesia" },
            { icon: <FaCalendarAlt />, val: "5.243", lbl: "Kegiatan Telah Dilakukan" }
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-5">
              <div className="text-primary text-5xl">{stat.icon}</div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{stat.val}</div>
                <div className="text-base font-medium text-gray-500">{stat.lbl}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex w-full gap-10 px-16">
        {/* Left Column */}
        <div className="w-2/3 space-y-10">
          {/* Tentang Komunitas */}
          <div className="rounded-3xl p-10 bg-white border border-gray-100 shadow-sm">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Tentang Komunitas <FaLeaf className="text-primary inline" /></h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              {community.name} adalah {community.caption}
            </p>
            <div className="bg-gray-50 rounded-2xl grid grid-cols-4 gap-6 p-6 border border-gray-100">
              <div>
                <div className="text-primary flex items-center gap-2 mb-2 font-bold"><FaCalendarAlt /> Didirikan</div>
                <div className="text-base font-medium text-gray-800">{new Date(community.created_at).toLocaleString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}</div>
              </div>
              <div>
                <div className="text-primary flex items-center gap-2 mb-2 font-bold"><FaUsers /> Tipe Komunitas</div>
                <div className="text-base font-medium text-gray-800">{community.tags[0]}</div>
              </div>
              <div>
                <div className="text-primary flex items-center gap-2 mb-2 font-bold"><FaMapMarkerAlt /> Lokasi</div>
                <div className="text-base font-medium text-gray-800">{community.city}</div>
              </div>
              <div>
                <div className="text-primary flex items-center gap-2 mb-2 font-bold"><FaGlobe /> Bahasa</div>
                <div className="text-base font-medium text-gray-800">Indonesia</div>
              </div>
            </div>
          </div>

          {/* Kegiatan Terbaru */}
          <div className="rounded-3xl p-10 bg-white border border-gray-100 shadow-sm">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">Kegiatan Terbaru <FaLeaf className="text-primary inline" /></h2>
            <div className="space-y-6">
              {[
                { date: "25 MEI", title: "Aksi Tanam 1000 Pohon di Bukit Hijau", loc: "Bogor, Jawa Barat", time: "07.00 - 12.00 WIB", img: "acta", p: "+128" },
                { date: "01 JUN", title: "Beach Clean Up Pantai Kuta", loc: "Bali, Bali", time: "06.30 - 10.30 WITA", img: "actb", p: "+86" },
                { date: "08 JUN", title: "Workshop Eco Living Zero Waste", loc: "Bandung, Jawa Barat", time: "09.00 - 13.00 WIB", img: "actc", p: "+64" },
                { date: "15 JUN", title: "Gowes Hijau Keliling Kota", loc: "Yogyakarta, DI Yogyakarta", time: "06.00 - 09.00 WIB", img: "actd", p: "+97" }
              ].map((act, idx) => (
                <div key={idx} className="rounded-2xl hover:shadow-md flex items-center gap-6 p-4 transition bg-white border border-gray-200 cursor-pointer">
                  <div className="rounded-xl relative flex-shrink-0 w-32 h-32 overflow-hidden">
                    <Image src={`https://picsum.photos/seed/${act.img}/200/200`} alt={act.title} fill className="object-cover" />
                    <div className="top-2 left-2 bg-primary-dark/90 absolute flex flex-col items-center justify-center px-2 py-1 font-bold text-white rounded-lg">
                      <div className="text-xl leading-none">{act.date.split(' ')[0]}</div>
                      <div className="text-sm leading-none">{act.date.split(' ')[1]}</div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="mb-3 text-xl font-bold text-gray-900">{act.title} <FaLeaf className="text-primary inline text-base" /></h3>
                    <div className="flex flex-col gap-2 text-base font-medium text-gray-500">
                      <span className="flex items-center gap-2"><FaMapMarkerAlt /> {act.loc}</span>
                      <span className="flex items-center gap-2"><FaClock /> {act.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-4">
                    <div className="flex -space-x-3">
                      <div className="relative w-8 h-8 overflow-hidden bg-gray-300 border-2 border-white rounded-full"><Image src="https://picsum.photos/seed/pa/50" alt="p" fill /></div>
                      <div className="relative w-8 h-8 overflow-hidden bg-gray-300 border-2 border-white rounded-full"><Image src="https://picsum.photos/seed/pb/50" alt="p" fill /></div>
                      <div className="relative w-8 h-8 overflow-hidden bg-gray-300 border-2 border-white rounded-full"><Image src="https://picsum.photos/seed/pc/50" alt="p" fill /></div>
                    </div>
                    <span className="text-base font-bold text-gray-600">{act.p} peserta</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-primary hover:bg-primary-light rounded-xl flex items-center justify-center w-full gap-2 py-4 mt-8 text-lg font-bold transition">
              Lihat Semua Kegiatan &rarr;
            </button>
          </div>

          {/* Galeri Kegiatan */}
          <div className="rounded-3xl p-10 bg-white border border-gray-100 shadow-sm">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Galeri Kegiatan <FaLeaf className="text-primary inline" /></h2>
              <button className="text-primary hover:underline flex items-center gap-2 text-lg font-bold">Lihat Semua Galeri &rarr;</button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {['gal1', 'gal2', 'gal3', 'gal4'].map((img, i) => (
                <div key={i} className="rounded-xl hover:opacity-80 relative w-full h-32 overflow-hidden transition shadow-sm cursor-pointer">
                  <Image src={`https://picsum.photos/seed/${img}/200/200`} alt="Gallery" fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA Banner */}

        </div>

        {/* Right Column (Sidebar) */}
        <div className="w-1/3 space-y-8">
          {/* Informasi Kontak */}
          <div className="rounded-3xl p-8 bg-white border border-gray-100 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Informasi Kontak</h3>
            <ul className="space-y-6 text-lg font-medium text-gray-700">
              <li className="flex items-center gap-4"><div className="text-primary w-8 text-2xl"><FaEnvelope /></div> greencampus@hijauin.id</li>
              <li className="flex items-center gap-4"><div className="text-primary w-8 text-2xl"><FaPhone /></div> +62 812-3456-7890</li>
              <li className="flex items-center gap-4"><div className="text-primary w-8 text-2xl"><FaInstagram /></div> @greencampus.id</li>
            </ul>
          </div>

          {/* Koordinator */}
          <div className="rounded-3xl p-8 bg-white border border-gray-100 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Koordinator</h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 overflow-hidden rounded-full shadow-sm"><Image src="https://picsum.photos/seed/coord2/100" alt="Coordinator" fill className="object-cover" /></div>
              <div>
                <div className="text-xl font-bold text-gray-900">Rina Lestari</div>
                <div className="text-base text-gray-500">Koordinator Utama</div>
              </div>
            </div>
            <button className="bg-primary-light text-primary rounded-xl hover:bg-green-100 flex items-center justify-center w-full gap-3 py-4 text-lg font-bold transition border border-green-200">
              <FaCommentDots /> Kirim Pesan
            </button>
          </div>

          {/* Fokus Kami */}
          <div className="rounded-3xl p-8 bg-white border border-gray-100 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Fokus Kami</h3>
            <ul className="space-y-6 text-lg font-medium text-gray-700">
              <li className="flex items-center gap-4"><div className="bg-primary-light text-primary flex items-center justify-center w-10 h-10 text-xl rounded-lg"><FaLeaf /></div> Aksi Hijau</li>
              <li className="flex items-center gap-4"><div className="bg-primary-light text-primary flex items-center justify-center w-10 h-10 text-xl rounded-lg"><FaGlobe /></div> Edukasi Lingkungan</li>
              <li className="flex items-center gap-4"><div className="bg-primary-light text-primary flex items-center justify-center w-10 h-10 text-xl rounded-lg"><FaTrash /></div> Pengelolaan Sampah</li>
              <li className="flex items-center gap-4"><div className="bg-primary-light text-primary flex items-center justify-center w-10 h-10 text-xl rounded-lg"><FaTree /></div> Penghijauan Kampus</li>
            </ul>
          </div>
        </div>

      </div>
      <div className='w-full px-10'>

        <div className="bg-primary-light rounded-4xl border-green-50 relative flex items-center justify-between w-full p-10 mt-16 overflow-hidden border shadow-sm">
          <div className="flex items-center gap-8">
            <div className="relative w-32 h-32">
              <Image src="https://picsum.photos/seed/sproutcta/200/200" alt="Sprout" fill className="object-contain" />
            </div>
            <div>
              <h2 className="mb-2 text-3xl font-bold text-gray-900">Gabung bersama <span className="text-primary">Green Campus</span></h2>
              <p className="text-lg text-gray-700">Bersama kita wujudkan kampus hijau, bersih, dan berkelanjutan.</p>
            </div>
          </div>
          <button className="bg-primary rounded-xl hover:bg-green-700 shrink-0 flex items-center gap-3 px-8 py-4 text-lg font-bold text-white transition">
            Gabung Komunitas <FaUsers />
          </button>
        </div>
      </div>
    </div>
  );
}