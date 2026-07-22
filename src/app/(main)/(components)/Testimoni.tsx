import React from 'react'
import { FaUsers, FaCalendarAlt, FaStar } from 'react-icons/fa'
import Image from 'next/image'

function Testimoni() {
  return (
    <section className="px-16 py-24">
      <div className="flex gap-12">
        {/* Kolom 1: Info Komunitas */}
        <div className="w-1/4">
          <h2 className="text-4xl font-bold leading-tight text-gray-900">
            Komunitas <span className="text-primary">Hijau</span>,<br /> Perubahan Nyata
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Bergabung dengan ribuan orang hebat yang sudah memulai langkah hijau untuk bumi yang lebih baik.
          </p>
          <button className="text-primary hover:border-primary flex items-center gap-3 px-6 py-3 text-base font-bold transition bg-white border-2 border-gray-200 rounded-full">
            <FaUsers /> Gabung Komunitas
          </button>
        </div>

        {/* Kolom 2: Kegiatan Terbaru */}
        <div className="flex flex-col w-2/4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Kegiatan Komunitas Terbaru</h3>
            <button className="text-primary hover:underline text-base font-bold">Lihat Semua &rarr;</button>
          </div>
          <div className="grow flex gap-4">
            {[
              { img: "act1", tag: "Bersih Pantai", title: "Bersih Pantai Anyer", p: "120", date: "12 Mei 2024" },
              { img: "act2", tag: "Tanam Pohon", title: "Tanam Pohon Mangrove", p: "95", date: "10 Mei 2024" },
              { img: "act3", tag: "Daur Ulang", title: "Workshop Daur Ulang", p: "56", date: "8 Mei 2024" }
            ].map((act, idx) => (
              <div key={idx} className="hover:shadow-md flex-1 overflow-hidden">
                <div className='relative'>
                  <div className="bottom-2 left-2 bg-primary-light text-primary absolute px-3 py-1 text-base font-bold rounded-md">
                    {act.tag}
                  </div>
                  <Image src={`https://picsum.photos/seed/${act.img}/300/200`} className='rounded-2xl' alt={act.title} height={280} width={280} />
                </div>
                <div className="p-5 font-bold">
                  <h4 className="line-clamp-1 mb-4 text-lg font-bold text-gray-900">{act.title}</h4>
                  <span className="text-primary flex items-center gap-2">
                    <FaUsers /> {act.p} peserta</span>
                  <span className="flex items-center gap-2"><FaCalendarAlt /> {act.date.split(' ')[0]} {act.date.split(' ')[1]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom 3: Testimoni (Kata Mereka) */}
        <div className="w-1/4">
          <h3 className="mb-6 text-xl font-bold text-gray-900">Kata Mereka</h3>
          <div className="space-y-4">
            {[
              { name: "Sinta Putri", text: "\"HijauIn membuatku lebih sadar dan konsisten menjaga lingkungan setiap hari.\"" },
              { name: "Budi Santoso", text: "\"Challenge-nya seru dan komunitasnya positif banget!\"" }
            ].map((testi, idx) => (
              <div key={idx} className="rounded-2xl p-5 bg-white border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="relative w-12 h-12 overflow-hidden rounded-full">
                    <Image src={`https://picsum.photos/seed/${testi.name}/100/100`} alt={testi.name} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-gray-900">{testi.name}</div>
                    <div className="flex text-base text-yellow-400">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                  </div>
                </div>
                <p className="text-base italic text-gray-600">{testi.text}</p>
              </div>
            ))}
            <div className="flex justify-center gap-2 mt-4">
              <div className="bg-primary w-2 h-2 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimoni