import React from 'react'
import { FaArrowRight, FaEye, FaLeaf } from 'react-icons/fa'
import Image from 'next/image'

function BottomCTA() {
  return (
    <div><section className="px-16">
      <div className="bg-primary-light rounded-[3rem] p-16 flex items-center justify-between relative overflow-hidden shadow-sm">
        {/* Ilustrasi Kiri */}
        <div className="h-75 relative flex items-center justify-center w-1/3">
          <Image src="https://picsum.photos/seed/bottomcta/400/400" alt="People holding earth" fill className="object-contain" />
        </div>

        {/* Teks Tengah */}
        <div className="z-10 w-1/3 px-8 text-center">
          <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900">
            Yuk, mulai langkah kecil untuk perubahan besar!
          </h2>
          <p className="text-lg text-gray-700">
            Bersama HijauIn, mari ciptakan lingkungan yang lebih bersih, sehat, dan berkelanjutan.
          </p>
        </div>

        {/* Tombol Kanan */}
        <div className="z-10 flex flex-col items-end justify-center w-1/3 gap-4">
          <button className="bg-primary hover:bg-green-700 flex items-center justify-center w-64 gap-3 py-4 text-lg font-bold text-white transition rounded-full shadow-lg">
            Daftar Gratis Sekarang <FaArrowRight />
          </button>
          <button className="border-primary text-primary hover:bg-primary-light flex items-center justify-center w-64 gap-3 py-4 text-lg font-bold transition bg-white border-2 rounded-full">
            <FaEye /> Lihat Cara Kerja
          </button>
        </div>

        {/* Ornamen Daun Latar (opsional untuk mempermanis) */}
        <FaLeaf className="top-10 left-10 text-primary opacity-10 absolute text-6xl transform -rotate-45" />
        <FaLeaf className="bottom-10 right-10 text-8xl text-primary opacity-10 absolute transform rotate-45" />
      </div>
    </section></div>
  )
}

export default BottomCTA