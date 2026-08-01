"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { userProfiles } from "../profil/profil";
import { getCurrentLevel, getLevelProgress } from "@/utils/level";
import { CiBellOn } from "react-icons/ci";
import { useState } from "react";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { FaChevronDown, FaSignOutAlt } from "react-icons/fa";
type HeaderConfigType = Record<
  string,
  {
    title: string;
    subtitle: string | null;
    description: string;
    src?: string;
  }
>;
export default function Header({
  userProfile,
  notifications,
}: {
  userProfile: userProfiles;
  notifications: any[];
}) {
  const pathname = usePathname() as keyof typeof headerConfig;
  const router = useRouter();
  const headerConfig = {
    "/admin": {
      title: `Halo, ${userProfile.full_name.split(" ")[0]}! 👋`,
      subtitle: "Selamat datang kembali!",
      description:
        "Teruslah beraksi, karena setiap langkah kecil <br /> berdampak besar bagi bumi kita. 🌱",
      src: "/assets/dashboard/main.png",
    },
    "/admin/aktivitas": {
      title: "Aktivitas 🌱",
      subtitle: null,
      description: "Catat dan lihat semua aksi hijau yang kamu lakukan.",
      src: "/assets/aktivitas/m.png",
    },
    "/admin/ai-assistant": {
      title: "AI Assistant ✨",
      subtitle: null,
      description: "Asisten cerdasmu untuk hidup lebih hijau setiap hari.",
      src: undefined,
    },
    "/admin/challenge": {
      title: "Challenge 🌱",
      subtitle: null,
      description: "Ikuti challenge seru dan raih poin serta badge spesial!",
      src: "/assets/challange/main.png",
    },
    "/admin/komunitas": {
      title: "Komunitas 🌱",
      subtitle: null,
      description: "Bersama komunitas, wujudkan bumi yang lebih hijau!",
      src: "/assets/dashboard-komunitas/main.png",
    },
    "/admin/profil": {
      title: "Profil Saya 🌿",
      subtitle: null,
      description: "kelola informasi profil dan pengaturan akun anda",
      // src: undefined
    },
  } as HeaderConfigType;

  // Use current route config or default to '/' if path is not found
  const currentConfig = headerConfig[pathname];
  const levelInfo = getCurrentLevel(userProfile.xp);

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

  const [openProfileMenu, setOpenProfileMenu] = useState(false);

  const handleLogout = async () => {
    // contoh
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <header className="lg:flex-row lg:items-center rounded-3xl relative flex flex-col items-start justify-between gap-4 z-0 p-8 pb-12">
      <div className="lg:w-1/2 z-10 w-full">
        {currentConfig && (
          <>
            <h1 className="mb-2 text-3xl font-bold">{currentConfig.title}</h1>
            {/* Conditionally render the subtitle only if it exists (Dashboard route) */}
            {currentConfig.subtitle && (
              <h2 className="mb-2 text-xl font-bold">
                {currentConfig.subtitle}
              </h2>
            )}
            <p className="text-base text-gray-600">
              {renderDescription(currentConfig.description)}
            </p>
            {/* Abstract Header Image Integration */}
            {currentConfig.src && (
              <div className="lg:w-1/2 absolute top-2 right-60 -z-10 flex justify-end w-full h-full">
                <Image
                  width={800}
                  height={400}
                  src={currentConfig.src}
                  alt="Nature landscape"
                  className="object-cover w-full h-full"
                />
              </div>
            )}
          </>
        )}
      </div>

      <div className="absolute top-8 right-8 z-10 hidden items-center gap-6 lg:flex">
        {/* Notification */}
        <div className="relative cursor-pointer">
          <CiBellOn className="size-8 text-primary" />
          <span className="bg-primary absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full text-sm font-bold text-white">
            {notifications.length ?? 0}
          </span>
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setOpenProfileMenu((prev) => !prev)}
            className="flex cursor-pointer items-center gap-3"
          >
            <Image
              width={50}
              height={50}
              src="/assets/avatar.png"
              alt="Profile"
              className="h-10 w-10 rounded-full object-cover"
            />

            <div className="text-right">
              <div className="text-center text-[18px] font-bold">
                {userProfile.full_name}
              </div>

              <div className="text-secondary ml-5 text-center text-[13px]">
                {levelInfo.title}
              </div>
            </div>

            <FaChevronDown
              className={`ml-2 h-4 w-4 text-gray-400 transition-transform duration-200 ${
                openProfileMenu ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          {openProfileMenu && (
            <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-gray-100 bg-white p-2 shadow-lg">
              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-semibold text-red-600 transition-all duration-200 hover:bg-red-50"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100">
                  <FaSignOutAlt />
                </div>

                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
