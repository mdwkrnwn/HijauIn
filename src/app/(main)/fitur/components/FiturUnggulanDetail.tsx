import Image from "next/image";
import { FaChartLine, FaLeaf, FaTrophy } from "react-icons/fa";

export function FiturUnggulanDetail() {
  const detailsData = [
    {
      id: 'eco-score',
      title: 'Eco Score & Level',
      icon: <FaChartLine />,
      description: 'Setiap aksi kecilmu menghasilkan poin dan menaikkan level kepedulianmu.',
      imageSrc: 'https://picsum.photos/seed/eco-score/800/600',
      bullets: [
        'Poin dari setiap aksi yang kamu lakukan',
        'Level dan Badge sebagai bentuk pencapaian',
        'Track progress harian, mingguan, dan bulanan',
      ],
    },
    {
      id: 'challenge-misi',
      title: 'Challenge & Misi',
      icon: <FaTrophy />,
      description: 'Buat perubahan jadi lebih menyenangkan dengan tantangan dan misi.',
      imageSrc: 'https://picsum.photos/seed/challenge/800/600',
      bullets: [
        'Challenge harian, mingguan, dan bulanan',
        'Reward menarik untuk setiap pencapaian',
        'Bersama komunitas untuk dampak lebih besar',
      ],
    },
    {
      id: 'impact-report',
      title: 'Laporan Dampak Nyata',
      icon: <FaChartLine />,
      description: 'Lihat seberapa besar dampak positif dari aksi hijau yang kamu lakukan.',
      imageSrc: 'https://picsum.photos/seed/impact-report/800/600',
      bullets: [
        'Data real-time dan akurat',
        'Visualisasi dampak yang mudah dipahami',
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
          <div
            key={item.id}
            className="bg-white rounded-3xl overflow-hidden shadow-sm"
          >
            {/* Image Container (Left on odd, Right on even) */}
            <div className="w-full lg:w-1/2 relative min-h-60 md:min-h-80 lg:min-h-100">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text Content Container */}
            <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-16 flex flex-col justify-center">
              {/* Header / Title */}
              <div className="inline-flex items-center gap-3 text-primary text-xl md:text-2xl font-bold mb-4 md:mb-6">
                {item.icon} {item.title}
              </div>

              {/* Description */}
              <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8">
                {item.description}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 md:space-y-4 text-sm md:text-lg text-gray-600">
                {item.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaLeaf className="text-primary mt-1 shrink-0" />
                    <span>{bullet}</span>
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
