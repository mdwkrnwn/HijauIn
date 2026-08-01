import Image from "next/image";

const stats = [
  {
    value: "125.430 kg",
    line1: "Sampah Berhasil",
    line2: "Dikelola",
    icon: "/assets/beranda/daun2.png",
  },
  {
    value: "82.340 kg",
    line1: "CO₂ Berhasil",
    line2: "Dikurangi",
    icon: "/assets/beranda/awan.png",
  },
  {
    value: "5.243",
    line1: "Pohon Berhasil",
    line2: "Ditanam",
    icon: "/assets/beranda/pohon.png",
  },
  {
    value: "15.000+",
    line1: "Pengguna Aktif",
    line2: "",
    icon: "/assets/beranda/person.png",
  },
  {
    value: "320+",
    line1: "Komunitas",
    line2: "Bergabung",
    icon: "/assets/beranda/bank.png",
  },
];

export default function Stats() {
  return (
    <section
      data-aos="fade-up"
      className="relative z-10 -mt-8 px-4 py-8 sm:-mt-12 sm:px-8 lg:-mt-25 lg:px-16 lg:py-16"
    >
      <div className="grid gap-4 rounded-[25px] border border-[#ECECEC] bg-white p-4 shadow-lg sm:p-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {stats.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            data-aos-duration="700"
            className="flex flex-col items-center justify-center gap-3 rounded-2xl p-4 text-center sm:flex-row sm:justify-start sm:text-left"
          >
            {/* Icon */}
            <Image
              src={item.icon}
              alt={item.line1}
              width={150}
              height={150}
              className="size-20 shrink-0 object-contain"
            />

            {/* Text */}
            <div className="min-w-0">
              <h3 className="text-[clamp(1.15rem,2.25vw,1.56rem)] font-bold leading-none text-[#076635]">
                {item.value}
              </h3>

              <p className="mt-2 text-[13px] leading-[22px] text-[#667085]">
                {item.line1}
                {item.line2 && (
                  <>
                    <br />
                    {item.line2}
                  </>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}