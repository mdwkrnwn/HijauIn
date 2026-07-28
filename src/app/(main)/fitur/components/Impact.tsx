import Image from "next/image";

export function Impact() {
  const impacts = [
    {
      icon: "/assets/fitur/daun.png",
      value: "125.430+ kg",
      label: "Sampah Dikelola",
    },
    {
      icon: "/assets/fitur/co2.png",
      value: "82.340+ kg",
      label: "CO₂ Berhasil Dikurangi",
    },
    {
      icon: "/assets/fitur/air.png",
      value: "1.250.000+ L",
      label: "Air Berhasil Dihemat",
    },
    {
      icon: "/assets/fitur/petir.png",
      value: "215.430+ kWh",
      label: "Energi Berhasil Dihemat",
    },
    {
      icon: "/assets/fitur/pohon.png",
      value: "5.243",
      label: "Pohon Ditanam",
    },
    {
      icon: "/assets/fitur/person.png",
      value: "15.000+",
      label: "Pengguna Aktif",
    },
    {
      icon: "/assets/fitur/bank.png",
      value: "320+",
      label: "Komunitas Bergabung",
    },
  ];

  return (
    <section className="w-full px-4 py-14 sm:px-8 md:px-12">
      <div className="mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Dampak Nyata Bersama{" "}
            <span className="text-[#11773D]">HijauIn</span>
          </h2>

          <p className="mt-3 text-base text-gray-500 md:text-lg">
            Setiap aksi kecil yang kamu lakukan, memberikan perubahan besar
            untuk bumi.
          </p>
        </div>

        {/* Impact */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-7">

          {impacts.map((item, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center text-center
                px-4 py-2
                ${index !== impacts.length - 1 ? "lg:border-r lg:border-gray-200" : ""}
              `}
            >
              {/* Icon */}
              <div className="mb-3 flex h-12 w-12 items-center justify-center">
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={180}
                  height={180}
                  className="object-contain mb-10"
                />
              </div>

              {/* Number */}
              <p className="text-[28px] font-bold leading-none text-[#11773D]">
                {item.value}
              </p>

              {/* Label */}
              <p className="mt-2 text-[15px] font-medium leading-snug text-gray-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}