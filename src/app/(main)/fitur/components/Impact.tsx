import React from "react";
import {
  FaLeaf,
  FaCloud,
  FaTint,
  FaBolt,
  FaTree,
  FaUsers,
  FaUniversity,
} from "react-icons/fa";

export function Impact() {
  const impacts = [
    {
      icon: <FaLeaf className="text-primary text-5xl" />,
      value: "125.430+ kg",
      label: "Sampah Dikelola",
    },
    {
      icon: <FaCloud className="text-primary text-5xl" />,
      value: "82.340+ kg",
      label: "CO₂ Berhasil Dikurangi",
    },
    {
      icon: <FaTint className="text-sky-500 text-5xl" />,
      value: "1.250.000+ L",
      label: "Air Berhasil Dihemat",
    },
    {
      icon: <FaBolt className="text-amber-400 text-5xl" />,
      value: "215.430+ kWh",
      label: "Energi Berhasil Dihemat",
    },
    {
      icon: <FaTree className="text-primary text-5xl" />,
      value: "5.243",
      label: "Pohon Ditanam",
    },
    {
      icon: <FaUsers className="text-primary text-5xl" />,
      value: "15.000+",
      label: "Pengguna Aktif",
    },
    {
      icon: <FaUniversity className="text-primary text-5xl" />,
      value: "320+",
      label: "Komunitas Bergabung",
    },
  ];

  return (
    <section className="sm:px-8 md:px-12 md:py-16 w-full px-4 py-12">
      <div className="mx-auto text-center">
        {/* Header Section */}
        <h2 className="md:text-4xl mb-2 text-3xl font-bold text-gray-900">
          Dampak Nyata Bersama <span className="text-primary">HijauIn</span>
        </h2>
        <p className="mb-12 text-xl text-gray-500">
          Setiap aksi kecil yang kamu lakukan, memberikan perubahan besar untuk bumi.
        </p>

        {/* Impact Metrics Grid */}
        <div className="sm:grid-cols-4 lg:grid-cols-7 sm:divide-y-0 sm:divide-x gap-y-6 sm:gap-y-0 grid grid-cols-2 divide-y divide-gray-200">
          {impacts.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-start px-2 py-2 text-center"
            >
              <div className="size-12 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <p className="text-emerald-700 mb-1 text-2xl font-bold">
                {item.value}
              </p>
              <p className="text-xl font-medium text-gray-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}