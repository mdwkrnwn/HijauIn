import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const steps = [
  {
    num: "1",
    src: "/assets/beranda/catataksi3.png",
    width: 100,
    height: 100,
    mt: 2,
    title: "Catat Aksi",
    desc: (
      <>
        Catat aksi ramah lingkungan
        <br />
        yang kamu lakukan setiap hari.
      </>
    ),
  },
  {
    num: "2",
    src: "/assets/beranda/dapatkanpoin.png",
    width: 200,
    height: 200,
    mt: 20,
    title: "Dapatkan Poin",
    desc: (
      <>
        Setiap aksi memberimu
        <br />
        poin dan meningkatkan
        <br />
        Eco Score-mu.
      </>
    ),
  },
  {
    num: "3",
    src: "/assets/beranda/pantaudampak.png",
    width: 95,
    height: 95,
    mt: 0,
    title: "Pantau Dampak",
    desc: (
      <>
        Lihat statistik dan laporan
        <br />
        dampak positif dari
        <br />
        aksimu.
      </>
    ),
  },
  {
    num: "4",
    src: "/assets/beranda/ikutchallange.png",
    width: 88,
    height: 88,
    mt: 4,
    title: "Ikuti Challenge",
    desc: (
      <>
        Selesaikan tantangan
        <br />
        seru dan dapatkan badge
        <br />
        serta reward.
      </>
    ),
  },
  {
    num: "5",
    src: "/assets/beranda/berdampakdunia.png",
    width: 90,
    height: 90,
    mt: 1,
    title: "Berdampak Nyata",
    desc: (
      <>
        Bersama-sama menciptakan
        <br />
        perubahan positif untuk
        <br />
        bumi yang lebih baik.
      </>
    ),
  },
];

export default function CaraKerja() {
  return (
    <section className="px-16 py-9 text-center">
      {/* Heading */}
      <h2
        data-aos="fade-up"
        data-aos-duration="700"
        className="text-[40px] font-semibold text-[#0B0F1F]"
      >
        Cara Kerja <span className="text-[#076635]">HijauIn</span>
      </h2>

      {/* Steps */}
      <div className="mt-20 flex items-start justify-between">
        {steps.map((step, index) => (
          <div key={step.num} className="flex items-start">
            {/* Item */}
            <div
              data-aos="fade-up"
              data-aos-delay={index * 180}
              data-aos-duration="700"
              className="group relative flex w-[200px] flex-col items-center"
            >
              {/* Number */}
              <div className="absolute left-3 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#076635] text-sm font-bold text-white shadow-md">
                {step.num}
              </div>

              {/* Icon */}
              <div className="relative flex h-[120px] w-[120px] items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,#F8FCF6_0%,#EEF8EC_55%,#E3F2DF_100%)] shadow-[0_8px_30px_rgba(109,170,94,0.12)]" />

                <div className="absolute left-1/2 top-1/2 h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/35 blur-md" />

                <Image
                  src={step.src}
                  alt={step.title}
                  width={280}
                  height={280}
                  className="relative z-10 object-contain transition-transform duration-300 group-hover:scale-105"
                  style={{
                    width: `${step.width}px`,
                    height: `${step.height}px`,
                    marginTop: `${step.mt}px`,
                  }}
                />
              </div>

              {/* Title */}
              <h3 className="mt-6 text-[20px] font-semibold text-[#0B0F1F]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[14px] leading-5 text-[#667085]">
                {step.desc}
              </p>
            </div>

            {/* Connector */}
            {index !== steps.length - 1 && (
              <div
                data-aos="fade-right"
                data-aos-delay={index * 180 + 100}
                data-aos-duration="600"
                className="mx-10 mt-[42px] flex items-center"
              >
                <div className="w-14 border-t-2 border-dashed border-[#22A75D]" />
                <FaArrowRight className="ml-2 text-[#22A75D]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}