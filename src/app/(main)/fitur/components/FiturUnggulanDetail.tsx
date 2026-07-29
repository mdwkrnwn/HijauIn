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
      <h2
        data-aos="fade-up"
        data-aos-duration="800"
        className="mb-12 text-center text-3xl font-bold md:mb-16 md:text-4xl"
      >
        Fitur Unggulan Secara Detail
      </h2>
      <div className="flex flex-col gap-8 *:flex *:flex-col lg:*:flex-row lg:*:even:flex-row-reverse">
        {/* Detail 1 — Eco Score & Level */}
        {detailsData.map((item, index) => (
          <div key={item.id} className="bg-white overflow-hidden">
            {/* Image Container (Left on odd, Right on even) */}
            <div
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-duration="900"
              className="relative min-h-60 w-full lg:min-h-100 lg:w-1/2 md:min-h-80"
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="rounded-2xl object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Text Content Container */}
            <div
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              data-aos-duration="900"
              className="flex w-full flex-col justify-center px-6 lg:w-1/2 lg:px-12"
            >
              {/* Header */}
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="mb-8 flex items-center gap-5"
              >
                <div
                  data-aos="zoom-in"
                  data-aos-delay="250"
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF7EF] text-3xl text-[#077C3A]"
                >
                  {item.icon}
                </div>

                <h3
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="text-[38px] font-bold leading-tight text-[#111827]"
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p
                data-aos="fade-up"
                data-aos-delay="400"
                className="max-w-[560px] text-[18px] leading-8 text-[#6B7280]"
              >
                {item.description}
              </p>

              {/* Bullet */}
              <ul className="mt-8 space-y-5">
                {item.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={bulletIndex}
                    data-aos="fade-up"
                    data-aos-delay={500 + bulletIndex * 120}
                    className="flex items-start gap-4"
                  >
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
