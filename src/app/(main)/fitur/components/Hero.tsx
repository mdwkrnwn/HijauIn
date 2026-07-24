import Image from "next/image";
import { FaLeaf } from "react-icons/fa";
export function Hero({ }) {
  return <section className='flex flex-row'>
    <div className="w-3/7 z-1 px-4 sm:px-8 md:px-16 py-16 md:py-24 text-center">
      <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-primary font-semibold text-sm md:text-base mb-6 shadow-sm border border-green-100">
        <FaLeaf className="text-primary" /> Fitur HijauIn
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
        Semua Fitur HijauIn <br /> Dalam{' '}
        <span className="text-primary">Satu Platform</span>
      </h1>
      <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto mt-6 mb-10 px-4">
        Dirancang untuk membantumu mencatat aksi ramah lingkungan,
        memantau dampak, mendapatkan insight AI, dan terhubung dengan
        komunitas yang peduli bumi.
      </p>
      <button className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-full text-base md:text-lg font-bold hover:bg-primary hover:text-white transition shadow-sm">
        Lihat Semua Fitur
      </button>
    </div>
    <div className='w-4/7'>
      <Image src="/assets/fitur/main.png" alt="Earth Graphic" style={{
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 30%, black)'
      }} width={1492} height={1054} />
    </div>
  </section>;
}
