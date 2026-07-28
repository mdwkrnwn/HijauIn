import Image from "next/image";

const features = [
  {
    title: "Catat Aksi Harian",
    src: "/assets/beranda/catataksi3.png",
    desc: "Pilih dan catat aksi ramah lingkungan dengan mudah setiap hari.",
  },
  {
    title: "Eco Score",
    src: "/assets/beranda/eco-score.png",
    desc: "Dapatkan poin dari setiap aksi dan pantau perkembangan Eco Score-mu.",
  },
  {
    title: "AI Green Coach",
    src: "/assets/beranda/ai-rekomendasi.png",
    desc: "AI menganalisis aktivitasmu dan memberikan rekomendasi personal setiap hari.",
  },
  {
    title: "Challenge & Misi",
    src: "/assets/beranda/ikutchallange.png",
    desc: "Ikuti berbagai tantangan seru, selesaikan misi, dan raih badge serta reward menarik.",
  },
  {
    title: "Komunitas Aktif",
    src: "/assets/beranda/person.png",
    desc: "Bergabung dengan komunitas hijau, berbagi inspirasi, dan bergerak bersama.",
  },
  {
    title: "Laporan Dampak",
    src: "/assets/beranda/pantaudampak.png",
    desc: "Lihat laporan dampak positif dari setiap aksi yang kamu lakukan secara real-time.",
  },
  {
    title: "Peta Dampak",
    src: "/assets/fitur/petadampak.png",
    desc: "Lihat peta sebaran aksi hijau dari berbagai kota dan komunitas di Indonesia.",
  },
  {
    title: "Edukasi & Inspirasi",
    src: "/assets/fitur/edukasi.png",
    desc: "Akses artikel, infografis, video, dan tips untuk hidup lebih ramah lingkungan.",
  },
];

export default function FiturUnggulan() {
  return (
    <section className="px-16 py-9">
      {/* Heading */}
      <div className="mb-14 text-center">
        <h2 className="text-[40px] font-bold leading-none text-[#111827]">
          Fitur Unggulan <span className="text-[#11773D]">HijauIn</span>
        </h2>

        <p className="mt-4 text-[17px] text-[#667085]">
          Berbagai fitur inovatif untuk membantumu hidup lebih hijau setiap
          hari.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-3">
        {features.map((item) => (
          <div
            key={item.title}
            className="flex h-[300px] flex-col items-center rounded-[24px] border border-[#EEF2F0] bg-white px-8 pt-8 text-center shadow-[0_6px_24px_rgba(16,24,40,0.05)] transition duration-300 hover:shadow-[0_12px_32px_rgba(16,24,40,0.08)]"
          >
            <div className="relative mb-5 h-[100px] w-[100px]">
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>

            <h3 className="text-[20px] font-bold text-[#111827]">
              {item.title}
            </h3>

            <p className="mt-3 text-[15px] leading-7 text-[#667085]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
