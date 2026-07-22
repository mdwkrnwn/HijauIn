import React from 'react'
import Image from "next/image"

function CaraKerja() {
  return (
    <section className="px-16 text-center">
      <h2 className="mb-20 text-4xl font-bold">
        Cara Kerja <span className="text-primary">HijauIn</span>
      </h2>

      <div className="grid *:mx-auto grid-cols-5">
        {/* Garis putus-putus penghubung (Dotted Line) */}
        {[
          { num: "1", src: "/assets/beranda/catataksi3.png", title: "Catat Aksi", desc: "Catat aksi ramah lingkungan yang kamu lakukan setiap hari." },
          { num: "2", src: "/assets/beranda/dapatkanpoin.png", title: "Dapatkan Poin", desc: "Setiap aksi memberimu poin dan meningkatkan Eco Score-mu." },
          { num: "3", src: "/assets/beranda/pantaudampak.png", title: "Pantau Dampak", desc: "Lihat statistik dan laporan dampak positif dari aksimu." },
          { num: "4", src: "/assets/beranda/ikutchallange.png", title: "Ikuti Challenge", desc: "Selesaikan tantangan seru dan dapatkan badge serta reward." },
          { num: "5", src: "/assets/beranda/berdampakdunia.png", title: "Berdampak Nyata", desc: "Bersama-sama menciptakan perubahan positif untuk bumi yang lebih baik." }
        ].map((step, idx) => (
          <div key={idx} className="relative z-10 grid w-48 grid-rows-[auto_1fr_auto_auto] gap-6 px-2 text-center">
            <div className="bg-primary size-10 flex items-center justify-center p-4 text-xl font-bold text-white rounded-full shadow-md">
              {step.num}
            </div>
            <div className="bg-primary-light text-primary size-50 flex justify-center rounded-full">
              <Image className='object-cover' src={step.src} alt={step.title} width={1536} height={1024} />
            </div>
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-base leading-relaxed text-gray-500">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CaraKerja