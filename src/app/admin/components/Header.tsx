"use client";

import React from "react";
import { FaBell, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";
type HeaderConfigType = Record<string, {
  title: string,
  subtitle: string | null,
  description: string,
  src?: string
}>
export default function Header() {
  const pathname = usePathname() as keyof typeof headerConfig

  const headerConfig = {
    "/admin": {
      title: "Halo, Dwi! 👋",
      subtitle: "Selamat datang kembali!",
      description: "Teruslah beraksi, karena setiap langkah kecil <br /> berdampak besar bagi bumi kita. 🌱",
      src: "/assets/dashboard/main.png"
    },
    "/admin/aktivitas": {
      title: "Aktivitas 🌱",
      subtitle: null,
      description: "Catat dan lihat semua aksi hijau yang kamu lakukan.",
      src: "/assets/aktivitas/m.png"
    },
    "/admin/ai-assistant": {
      title: "AI Assistant ✨",
      subtitle: null,
      description: "Asisten cerdasmu untuk hidup lebih hijau setiap hari.",
      src: undefined
    },
    "/admin/challenge": {
      title: "Challenge 🌱",
      subtitle: null,
      description: "Ikuti challenge seru dan raih poin serta badge spesial!",
      src: "/assets/challange/main.png"
    },
    "/admin/komunitas": {
      title: "Komunitas 🌱",
      subtitle: null,
      description: "Bersama komunitas, wujudkan bumi yang lebih hijau!",
      src: "/assets/dashboard-komunitas/main.png"
    },
    "/admin/profil": {
      title: "Profil Saya 🌿",
      subtitle: null,
      description: "kelola informasi profil dan pengaturan akun anda",
      // src: undefined
    },
  } as HeaderConfigType;

  // Use current route config or default to '/' if path is not found
  const currentConfig = headerConfig[pathname]


  // Helper to safely render HTML line breaks in the description
  const renderDescription = (desc: string) => {
    if (!desc) return null;
    const parts = desc.split("<br />");
    return parts.map((part, index) => (
      <React.Fragment key={index}>
        {part}
        {index < parts.length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <header className="lg:flex-row lg:items-center rounded-3xl relative flex flex-col items-start justify-between gap-4 -z-10 p-8 pb-12">
      <div className="lg:w-1/2 z-10 w-full">
        {currentConfig &&
          <>
            <h1 className="mb-2 text-3xl font-bold">{currentConfig.title}</h1>
            {/* Conditionally render the subtitle only if it exists (Dashboard route) */}
            {currentConfig.subtitle && (
              <h2 className="mb-2 text-xl font-bold">{currentConfig.subtitle}</h2>
            )}
            <p className="text-base text-gray-600">
              {renderDescription(currentConfig.description)}
            </p>
            {/* Abstract Header Image Integration */}
            {currentConfig.src &&
              <div className="lg:w-1/2 absolute top-2 right-60 -z-10 flex justify-end w-full h-full">
                <Image
                  width={800}
                  height={400}
                  src={currentConfig.src}
                  alt="Nature landscape"
                  className="object-cover w-full h-full"
                />
              </div>
            }
          </>
        }
      </div>

      <div className="lg:flex top-8 right-8 absolute z-10 items-center hidden gap-6">
        <div className="relative cursor-pointer">
          <FaBell className="w-6 h-6 text-gray-600" />
          <span className="-top-1 -right-1 bg-danger absolute flex items-center justify-center w-5 h-5 text-base font-bold text-white rounded-full">
            3
          </span>
        </div>
        <div className="flex items-center gap-3 cursor-pointer">
          <Image
            width={50}
            height={50}
            src="https://picsum.photos/id/1005/50/50"
            alt="Profile"
            className="object-cover w-10 h-10 rounded-full"
          />
          <div className="text-right">
            <div className="text-base font-bold">Dwi Kurniawan</div>
            <div className="text-secondary text-base">Eco Guardian</div>
          </div>
          <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
        </div>
      </div>


    </header>
  );
}