import Image from "next/image";

export function FiturUnggulan() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 pt-12">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          Fitur Unggulan <span className="text-primary">HijauIn</span>
        </h2>
        <p className="text-base md:text-xl text-gray-500 mt-2">
          Berbagai fitur inovatif untuk membantumu hidup lebih hijau setiap hari.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {[{
          title: 'Catat Aksi Harian',
          src: "/assets/beranda/catataksi3.png",
          desc: 'Pilih dan catat aksi ramah lingkungan dengan mudah setiap hari.'
        }, {
          title: 'Eko Score',
          src: "/assets/beranda/eco-score2.png",
          desc: 'Dapatkan poin dari setiap aksi dan pantau perkembangan Eko Score-mu.'
        }, {
          title: 'AI Green Coach',
          src: "/assets/beranda/",
          desc: 'AI menganalisis aktivitasmu dan memberikan rekomendasi personal setiap hari.'
        }, {
          title: 'Challenge & Misi',
          src: "/assets/beranda/",
          desc: 'Ikuti berbagai tantangan seru, selesaikan misi, dan raih badge serta reward menarik.'
        }, {
          title: 'Komunitas Aktif',
          src: "/assets/beranda/",
          desc: 'Bergabung dengan komunitas hijau, berbagi inspirasi, dan bergerak bersama.'
        }, {
          title: 'Laporan Dampak',
          src: "/assets/beranda/",
          desc: 'Lihat laporan dampak positif dari setiap aksi yang kamu lakukan secara real-time.'
        }, {
          title: 'Peta Dampak',
          src: "/assets/beranda/",
          desc: 'Lihat peta sebaran aksi hijau dari berbagai kota dan komunitas di Indonesia.'
        }, {
          title: 'Edukasi & Inspirasi',
          src: "/assets/beranda/",
          desc: 'Akses artikel, infografis, video, dan tips untuk hidup lebih ramah lingkungan.'
        }].map((item, idx) => <div key={idx} className="bg-white border border-gray-200 p-6 md:p-8 rounded-3xl hover:shadow-xl transition flex flex-col items-center text-center">
          <div className="size-16 relative md:w-20 md:h-20 bg-primary-light text-primary rounded-full flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6">
            <Image src={item.src} alt={item.title} fill className="object-cover" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{item.title}</h3>
          <p className="text-sm md:text-lg text-gray-600">{item.desc}</p>
        </div>)}
      </div>
    </section>
  );
}
