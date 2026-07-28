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
      className="relative z-10 mt-5 px-16 py-16"
    >
      <div className="flex items-center rounded-[25px] border border-[#ECECEC] bg-white py-8 shadow-lg">
        {stats.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            data-aos-duration="700"
            className={`flex flex-1 items-center justify-center gap-2 px-5 ${
              index !== stats.length - 1
                ? "border-r border-[#ECECEC]"
                : ""
            }`}
          >
            {/* Icon */}
            <Image
              src={item.icon}
              alt={item.line1}
              width={150}
              height={150}
              className="h-[80px] w-[80px] -ml-15 flex-shrink-0 object-contain"
            />

            {/* Text */}
            <div className="ml-5 min-w-0">
              <h3 className="whitespace-nowrap text-[25px] font-bold leading-none text-[#076635]">
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