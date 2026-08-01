"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MdDashboard, MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { userProfiles } from "../profil/profil";
import { FiHome, FiCpu, FiAward, FiUsers, FiUser } from "react-icons/fi";
import { IoLeaf } from "react-icons/io5";
import { getCurrentLevel, getLevelProgress } from "@/utils/level";

const NAV_ITEMS = [
  { name: "Dashboard", path: "/admin", icon: FiHome },
  { name: "Aktivitas", path: "/admin/aktivitas", icon: IoLeaf },
  { name: "AI Assistant", path: "/admin/ai-assistant", icon: FiCpu },
  { name: "Challenge", path: "/admin/challenge", icon: FiAward },
  { name: "Komunitas", path: "/admin/komunitas", icon: FiUsers },
  { name: "Profil", path: "/admin/profil", icon: FiUser },
];
export default function Sidebar({
  userProfile,
}: {
  userProfile: userProfiles;
}) {
  const pathname = usePathname();
  const levelInfo = getCurrentLevel(userProfile.xp);

  const progress = getLevelProgress(userProfile.xp);
  return (
    <aside className="w-70 lg:flex z-10 flex-col hidden h-screen overflow-y-auto bg-white border-r border-gray-100 row-span-2 sticky top-0">
      <div className="flex mt-4 items-center gap-4 px-6 py-5">
        <Image
          src="/assets/dashboard/logo.png"
          alt="HijauIn Logo"
          width={72}
          height={72}
          className="h-[52px] w-[52px] object-contain flex-shrink-0"
        />

        <div>
          <h1 className="text-[24px]  font-bold leading-none tracking-tight">
            <span className="text-[#0B0F1F]">Hijau</span>
            <span className="text-[#11773D]">In</span>
          </h1>

          <p className="mt-2 text-[10px] font-semibold text-[#667085]">
            Satu Langkah Hijau Setiap Hari
          </p>
        </div>
      </div>

      <nav className="flex flex-1 flex-col gap-3 px-5 py-3">
        {NAV_ITEMS.map((item) => {
          let isActive = pathname === item.path;

          if (pathname === "/admin" && item.path === "/admin") {
            isActive = true;
          }

          if (
            pathname.includes("komunitas") &&
            item.path === "/admin/komunitas"
          ) {
            isActive = true;
          }

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex h-[60px] items-center gap-4 rounded-2xl px-5 transition-all duration-200 ${
                isActive
                  ? "bg-[#F1F8F3] text-[#11773D]"
                  : "text-[#344054] hover:bg-[#F8FAF8]"
              }`}
            >
              <item.icon
                className={`h-6 w-6 flex-shrink-0 ${
                  isActive ? "text-[#11773D]" : "text-[#2BA24C]"
                }`}
              />

              <span className="text-[18px] font-semibold">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Promo Box */}
      <div className="bg-linear-to-b from-[#11773D]-light to-white rounded-2xl relative p-4 mx-4  overflow-hidden text-center border border-gray-100">
        <h3 className="text-[#0B0F1F] relative z-10 mb-2 text-base font-bold">
          Ayo terus jaga bumi! 🌍
        </h3>
        <p className="relative z-10 mb-4 text-base text-gray-600">
          Setiap aksi kecil berdampak besar untuk masa depan kita.
        </p>
        <Image
          src="/assets/dashboard/bum.png"
          alt="Earth"
          width={200}
          height={150}
          className=" opacity-90 relative z-10 object-cover w-full h-32"
        />
      </div>

      {/* User Profile Mini */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/avatar.png"
              alt="Dwi Kurniawan"
              width={48}
              height={48}
              className="shrink-0 object-cover w-12 h-12 rounded-full"
            />
            <div>
              <h4 className="text-base font-bold">{userProfile.full_name}</h4>
              <span className="text-secondary flex items-center gap-1 text-base">
                <MdOutlineEnergySavingsLeaf />
                {levelInfo.title}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
          <div
            className="bg-[#11773D] h-2.5 rounded-full transition-all duration-500"
            style={{
              width: `${progress.progress}%`,
            }}
          />
        </div>
        <div className="flex justify-between text-base font-semibold text-gray-500">
          <span>Level {levelInfo.level}</span>
          <span>
            {progress.currentXp} / {progress.nextXp} XP
          </span>
        </div>
      </div>
    </aside>
  );
}
