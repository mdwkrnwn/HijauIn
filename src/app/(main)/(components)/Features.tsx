import Image from "next/image";

const features = [
  {
    src: "/assets/beranda/catataksi.png",
    title: "Catat Aksi Harian",
    desc: "Catat berbagai aksi hijau seperti hemat energi, pilah sampah, dan transportasi ramah lingkungan.",
  },
  {
    src: "/assets/beranda/eco-score.png",
    title: "Eco Score",
    desc: "Dapatkan poin dari setiap aksi dan pantau skor eco score-mu secara real-time.",
  },
  {
    src: "/assets/beranda/ai-rekomendasi.png",
    title: "AI Rekomendasi",
    desc: "Dapatkan rekomendasi aksi hijau yang personal dan sesuai dengan kebiasaanmu.",
  },
  {
    src: "/assets/beranda/challange.png",
    title: "Challenge & Misi",
    desc: "Ikuti tantangan seru dan selesaikan misi untuk kumpulkan poin dan hadiah menarik.",
  },
  {
    src: "/assets/beranda/komunitas.png",
    title: "Komunitas Aktif",
    desc: "Bergabung dengan komunitas peduli bumi dan berbagi pengalaman hijau bersama.",
  },
  {
    src: "/assets/beranda/report.png",
    title: "Laporan Dampak",
    desc: "Lihat laporan dampak positif dari setiap aksi yang kamu lakukan.",
  },
];

export default function Features() {
  return (
    <section className="px-16 py-9 text-center">
      {/* Heading */}
      <h2 className="text-[40px] font-semibold leading-tight text-[#0B0F1F]">
        Fitur Unggulan <span className="text-[#076635]">HijauIn</span>
      </h2>

      <p className="mt-4 text-[18px] text-[#667085]">
        Semua yang kamu butuhkan untuk hidup lebih hijau dalam satu platform
      </p>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-6 gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex min-h-[420px] flex-col items-center rounded-2xl border border-[#ECECEC] bg-white px-7 py-10 shadow-[0_6px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Icon */}
            <Image
              src={feature.src}
              alt={feature.title}
              width={260}
              height={260}
              className="h-[260] w-[260] -mt-10 object-contain"
            />

            {/* Title */}
            <h3 className="mt-7 text-[20px] font-semibold text-[#0B0F1F]">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="mt-5 text-[15px] leading-8 text-[#667085]">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}