import Image from "next/image";
import {
  FaRobot,
  FaChartLine,
  FaTrophy,
  FaClipboardList,
  FaLeaf,
} from "react-icons/fa";

export function FiturUnggulanDetail() {
  const detailsData = [
    {
      id: "ai-green-coach",
      title: "AI Green Coach",
      icon: <FaRobot />,
      description:
        "Punya teman pintar yang selalu membantumu menjadi lebih baik.",
      imageSrc: "/assets/fitur/green.png",
      bullets: [
        "Rekomendasi personal berdasarkan kebiasaanmu",
        "Insight dampak lingkungan secara real-time",
        "Tips harian untuk aksi yang lebih berdampak",
      ],
    },
    {
      id: "eco-score",
      title: "Eco Score & Level",
      icon: <FaChartLine />,
      description:
        "Setiap aksi kecilmu akan menghasilkan poin dan menaikkan level kepedulianmu.",
      imageSrc: "/assets/fitur/score.png",
      bullets: [
        "Poin dari setiap aksi yang kamu lakukan",
        "Level dan badge sebagai bentuk pencapaian",
        "Track progress harian, mingguan, dan bulanan",
      ],
    },
    {
      id: "challenge",
      title: "Challenge & Misi Seru",
      icon: <FaTrophy />,
      description:
        "Buat perubahan jadi lebih menyenangkan dengan tantangan dan misi.",
      imageSrc: "/assets/fitur/challangeaktif.png",
      bullets: [
        "Challenge harian, mingguan, dan bulanan",
        "Reward menarik untuk setiap pencapaian",
        "Bersama komunitas untuk dampak lebih besar",
      ],
    },
    {
      id: "laporan",
      title: "Laporan Dampak Nyata",
      icon: <FaClipboardList />,
      description:
        "Lihat seberapa besar dampak positif dari aksi hijau yang kamu lakukan.",
      imageSrc: "/assets/fitur/laporan.png",
      bullets: [
        "Data real-time dan akurat",
        "Visualisasi dampak yang mudah dipahami",
        "Bagikan dampakmu ke media sosial",
      ],
    },
  ];
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 mt-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
        Fitur Unggulan Secara Detail
      </h2>
      <div className="flex flex-col gap-8 *:flex *:flex-col lg:*:flex-row lg:*:even:flex-row-reverse">
        {/* Detail 1 — Eco Score & Level */}
        {detailsData.map((item) => (
          <div key={item.id} className="bg-white overflow-hidden">
            {/* Image Container (Left on odd, Right on even) */}
            <div className="w-full lg:w-1/2 relative min-h-60 md:min-h-80 lg:min-h-100">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Text Content Container */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-12">
              {/* Header */}
              <div className="flex items-center gap-5 mb-8">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF7EF] text-[#077C3A] text-3xl">
                  {item.icon}
                </div>

                <h3 className="text-[38px] font-bold leading-tight text-[#111827]">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="max-w-[560px] text-[18px] leading-8 text-[#6B7280]">
                {item.description}
              </p>

              {/* Bullet */}
              <ul className="mt-8 space-y-5">
                {item.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="mt-[11px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#077C3A]" />

                    <span className="text-[17px] leading-8 text-[#6B7280]">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
