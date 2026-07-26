"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { MdDashboard, MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { FiActivity, FiAward, FiUsers, FiUser } from "react-icons/fi";
import { FaRobot } from "react-icons/fa";
import { IoLeaf } from "react-icons/io5";

const NAV_ITEMS = [
  { name: "Dashboard", path: "/admin", icon: MdDashboard },
  { name: "Aktivitas", path: "/admin/aktivitas", icon: FiActivity },
  { name: "AI Assistant", path: "/admin/ai-assistant", icon: FaRobot },
  { name: "Challenge", path: "/admin/challenge", icon: FiAward },
  { name: "Komunitas", path: "/admin/komunitas", icon: FiUsers },
  { name: "Profil", path: "/admin/profil", icon: FiUser },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-70 lg:flex fixed z-10 flex-col hidden h-full overflow-y-auto bg-white border-r border-gray-100">
      <div className="flex items-center gap-3 p-6">
        <div className="bg-primary p-2 text-white rounded-lg">
          <IoLeaf className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-primary text-xl font-bold">HijauIn</h1>
          <p className="text-base text-gray-500">Satu Langkah Hijau Setiap Hari</p>
        </div>
      </div>

      <nav className="flex flex-col flex-1 gap-2 px-4 py-2">
        {NAV_ITEMS.map((item) => {
          let isActive = pathname === item.path;
          if (pathname === '/admin' && item.path === '/admin') {
            isActive = true;
          }
          if (pathname.includes("komunitas") && item.path === '/admin/komunitas') {
            isActive = true;
          }
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl font-semibold transition-colors ${isActive
                ? "bg-primary-light text-primary"
                : "text-gray-500 hover:bg-gray-50"
                }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="text-base">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Promo Box */}
      <div className="bg-linear-to-b from-primary-light to-white rounded-2xl relative p-4 mx-4 mb-4 overflow-hidden text-center border border-gray-100">
        <h3 className="text-primary relative z-10 mb-2 text-base font-bold">Ayo terus jaga bumi! 🌍</h3>
        <p className="relative z-10 mb-4 text-base text-gray-600">Setiap aksi kecil berdampak besar untuk masa depan kita.</p>
        <Image src="https://picsum.photos/id/1043/200/150" alt="Earth" width={200} height={150} className="rounded-xl opacity-90 relative z-10 object-cover w-full h-32" />
      </div>

      {/* User Profile Mini */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <Image src="https://picsum.photos/id/1005/50/50" alt="Dwi Kurniawan" width={48} height={48} className="shrink-0 object-cover w-12 h-12 rounded-full" />
            <div>
              <h4 className="text-base font-bold">Dwi Kurniawan</h4>
              <span className="text-secondary flex items-center gap-1 text-base">
                <MdOutlineEnergySavingsLeaf /> Eco Guardian
              </span>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
          <div className="bg-primary h-2.5 rounded-full w-[76%]"></div>
        </div>
        <div className="flex justify-between text-base font-semibold text-gray-500">
          <span>Level 12</span>
          <span>760 / 1000 XP</span>
        </div>
      </div>
    </aside>
  );
}