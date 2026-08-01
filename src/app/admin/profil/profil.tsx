"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaPen, FaRegEnvelope, FaPhone, FaChevronRight,
  FaTrophy, FaLeaf, FaArrowRight
} from "react-icons/fa6";
import {
  MdOutlineEnergySavingsLeaf, MdOutlineWaterDrop, MdBolt
} from "react-icons/md";
import { FiCalendar, FiUsers } from "react-icons/fi";
import { FaMapMarkerAlt, FaShieldAlt } from "react-icons/fa";
import { User } from "@supabase/supabase-js";

export default function Profil({ user, userProfiles }: {
  user: User, userProfiles: {
    id: string
    full_name: string
    avatar_url: string
    bio: any
    city: any
    eco_score: number
    level: number
    xp: number
    streak: number
    created_at: string
  }
}) {
  const [activeTab, setActiveTab] = useState<'ringkasan' | 'pengaturan'>('ringkasan');

  return (
    <div className="w-full flex flex-col gap-6 mt-4">

      {/* Header Section */}
      {/* <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold flex items-center gap-2 text-gray-800">
          Profil Saya <MdOutlineEnergySavingsLeaf className="text-primary" />
        </h1>
        <p className="text-base text-gray-600 font-medium">
          Kelola informasi profil dan pengaturan akun Anda.
        </p>
      </header> */}

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Left Column (Span 2) */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Main Profile Card */}
          <div className="bg-primary-light/30 border border-primary-light rounded-4xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-8 shadow-sm">
            {/* Background Decoration */}
            <div className="absolute w-full h-full -right-1/5  pointer-events-none opacity-50 z-0 mix-blend-multiply">
              <Image
                src={"/assets/challange/main.png"}
                alt="Nature Background"
                fill
                className="object-cover mask-image-linear-gradient"
                style={{ maskImage: 'linear-gradient(to left, black, transparent)' }}
              />
            </div>

            {/* Avatar Section */}
            <div className="relative z-10 shrink-0">
              <div className="w-32 h-32 rounded-full border-4 border-white bg-white overflow-hidden shadow-sm relative">
                <Image
                  src={userProfiles.avatar_url ?? "/assets/beranda/ava1.png"}
                  alt={userProfiles.full_name}
                  fill
                  className="object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-primary shadow-sm hover:bg-gray-50 transition-colors">
                <FaPen className="w-4 h-4" />
              </button>
            </div>

            {/* User Details */}
            <div className="relative z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <div>
                <h2 className="text-3xl font-black text-gray-800 flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
                  {userProfiles.full_name}
                  <span className="bg-primary-light text-primary text-base px-3 py-1 rounded-full font-bold">Eco Guardian</span>
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-base text-gray-600 font-bold mb-4">
                  <span className="flex items-center gap-2"><FiCalendar className="w-5 h-5" /> Bergabung sejak {new Date(user.created_at).toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}</span>
                  <span className="flex items-center gap-2"><FaMapMarkerAlt className="w-5 h-5" /> {userProfiles.city ?? "Indonesia"}</span>
                </div>
                <p className="text-base text-gray-700 font-medium leading-relaxed max-w-md mb-6">
                  Berusaha menjadi versi terbaik untuk bumi dengan langkah kecil setiap hari.
                </p>
                <button className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-2.5 rounded-xl font-bold text-base hover:bg-primary-light transition-colors">
                  <FaPen /> Edit Profil
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Content Section */}
          <div className="bg-white rounded-4xl p-6 lg:p-8 shadow-sm flex flex-col gap-8 border border-gray-100">

            {/* Tabs */}
            <div className="flex items-center gap-8 border-b border-gray-100 overflow-x-auto">
              <button
                onClick={() => setActiveTab('ringkasan')}
                className={`text-base font-bold pb-4 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'ringkasan' ? 'text-primary border-primary' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
              >
                Ringkasan
              </button>
              <button
                onClick={() => setActiveTab('pengaturan')}
                className={`text-base font-bold pb-4 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'pengaturan' ? 'text-primary border-primary' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
              >
                Pengaturan
              </button>
            </div>

            {/* TAB CONTENT: RINGKASAN */}
            {activeTab === 'ringkasan' && (
              <div className="flex flex-col gap-8 animate-in fade-in duration-300">

                {/* Ringkasan Pencapaian */}
                <div>
                  <h3 className="font-bold text-lg text-gray-800 mb-4">Ringkasan Pencapaian</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <AchievementCard icon={<FaLeaf className="w-6 h-6 text-success" />} value="1.250" label="Total Poin" />
                    <AchievementCard icon={<FaTrophy className="w-6 h-6 text-success" />} value="8" label="Challenge Selesai" />
                    <AchievementCard icon={<FaShieldAlt className="w-6 h-6 text-success" />} value="4" label="Badge Dimiliki" />
                    <AchievementCard icon={<FiCalendar className="w-6 h-6 text-success" />} value={userProfiles.streak.toString()} label="Hari Aktif Konsisten" />
                  </div>
                </div>

                {/* Tentang Saya */}
                <div className="border-t border-gray-100 pt-8">
                  <h3 className="font-bold text-lg text-gray-800 mb-4">Tentang Saya</h3>
                  <div className="flex flex-col">
                    <InfoRow icon={<FaRegEnvelope className="text-gray-400 w-5 h-5" />} label="Email" value={user.email!} />
                    <InfoRow icon={<FaPhone className="text-gray-400 w-5 h-5" />} label="Nomor Telepon" value={user.phone!.length > 0 ? user.phone! : '-'} />
                    <InfoRow icon={<FaMapMarkerAlt className="text-gray-400 w-5 h-5" />} label="Lokasi" value={userProfiles.city ?? '-'} borderBottom={false} />
                  </div>
                </div>

                {/* Footer Banner Inside Card */}
                <div className="bg-primary-light/40 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between mt-2 border border-primary-light/50 overflow-hidden relative">
                  <div className="relative z-10 mb-4 md:mb-0">
                    <h4 className="font-bold text-lg text-primary mb-1">Teruslah beraksi untuk bumi! 🌱</h4>
                    <p className="text-base text-gray-700 font-medium">Setiap langkah kecilmu membawa perubahan besar.</p>
                  </div>
                  <div className="relative z-10 w-24 h-24 shrink-0 rounded-full overflow-hidden shadow-sm border-2 border-white">
                    <Image src="https://picsum.photos/id/28/100/100" alt="Earth Globe" fill className="object-cover" />
                  </div>
                </div>

              </div>
            )}

            {/* TAB CONTENT: PENGATURAN */}
            {activeTab === 'pengaturan' && (
              <div className="flex flex-col gap-6 animate-in fade-in duration-300">
                <h3 className="font-bold text-lg text-gray-800">Pengaturan Akun</h3>
                <p className="text-base text-gray-500 font-medium">Opsi pengaturan akan ditampilkan di sini.</p>
              </div>
            )}

          </div>
        </div>

        {/* Right Column (Span 1) */}
        <div className="lg:col-span-1 flex flex-col gap-6">

          {/* Level & Progress */}
          <div className="bg-white rounded-4xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg text-gray-800 mb-6">Level & Progress</h3>

            <div className="flex items-center gap-5 mb-8">
              {/* Custom Level Hexagon Approximation */}
              <div className="relative w-18 h-18 shrink-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary rounded-xl rotate-45 transform origin-center shadow-inner"></div>
                <div className="absolute inset-1 bg-success rounded-lg rotate-45 transform origin-center"></div>
                <div className="relative z-10 text-3xl font-black text-white">12</div>
              </div>

              <div>
                <div className="font-black text-2xl text-gray-800 mb-1">Level 12</div>
                <div className="text-base text-primary font-bold">Eco Guardian</div>
              </div>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div className="bg-primary h-3 rounded-full w-[76%]"></div>
            </div>

            <div className="flex justify-end text-base font-bold text-gray-500 mb-4">
              760 / 1000 XP
            </div>

            <div className="text-base font-semibold text-gray-600 flex items-center justify-between">
              <span>240 XP lagi untuk naik level!</span>
              <MdOutlineEnergySavingsLeaf className="text-primary-light w-6 h-6 rotate-45" />
            </div>
          </div>

          {/* Badge Saya */}
          <div className="bg-white rounded-4xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-gray-800">Badge Saya</h3>
              <button className="text-primary font-bold text-base hover:underline">Lihat Semua</button>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center">
              <BadgeItem icon={<FaLeaf className="text-white w-6 h-6" />} bg="bg-success" label="Eco Warrior" />
              <BadgeItem icon={<MdOutlineWaterDrop className="text-white w-7 h-7" />} bg="bg-info" label="Water Saver" />
              <BadgeItem icon={<FiUsers className="text-white w-6 h-6" />} bg="bg-success" label="Green Starter" />
              <BadgeItem icon={<MdBolt className="text-white w-6 h-6" />} bg="bg-warning" label="Energy Saver" />
            </div>
          </div>

          {/* Aktivitas Terakhir */}
          <div className="bg-white rounded-4xl p-6 shadow-sm border border-gray-100 flex-1">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-gray-800">Aktivitas Terakhir</h3>
              <button className="text-primary font-bold text-base hover:underline">Lihat Semua</button>
            </div>

            <div className="flex flex-col gap-6">
              <ActivityRow
                icon={<MdOutlineEnergySavingsLeaf className="text-success w-6 h-6" />}
                bg="bg-success/20"
                action="Mencatat aktivitas"
                title="Membawa Tumbler"
                time="2 jam yang lalu"
                points="+20 Poin"
                pointsColor="text-success"
              />
              <ActivityRow
                icon={<MdOutlineWaterDrop className="text-info w-6 h-6" />}
                bg="bg-info/20"
                action="Mencatat aktivitas"
                title="Hemat Air"
                time="5 jam yang lalu"
                points="+15 Poin"
                pointsColor="text-success"
              />
              <ActivityRow
                icon={<MdBolt className="text-warning w-6 h-6" />}
                bg="bg-warning/20"
                action="Mencatat aktivitas"
                title="Hemat Energi"
                time="1 hari yang lalu"
                points="+15 Poin"
                pointsColor="text-success"
              />
              <ActivityRow
                icon={<FaLeaf className="text-success w-5 h-5" />}
                bg="bg-success/20"
                action="Mengikuti komunitas"
                title="Hijau Bersama"
                time="2 hari yang lalu"
                points="-"
                pointsColor="text-gray-400"
              />
            </div>

            <button className="w-full mt-8 py-4 flex items-center justify-center gap-2 text-primary font-bold text-base hover:bg-gray-50 border border-gray-100 rounded-xl transition-colors">
              Lihat Semua Aktivitas <FaArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

// Subcomponents

function AchievementCard({ icon, value, label }: { icon: React.ReactNode, value: string, label: string }) {
  return (
    <div className="border border-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2">
      <div className="mb-1">{icon}</div>
      <div className="font-black text-2xl text-gray-800">{value}</div>
      <div className="text-base text-gray-500 font-semibold leading-tight">{label}</div>
    </div>
  );
}

function InfoRow({ icon, label, value, borderBottom = true }: { icon: React.ReactNode, label: string, value: string, borderBottom?: boolean }) {
  return (
    <div className={`flex items-center justify-between py-5 ${borderBottom ? 'border-b border-gray-100' : ''} cursor-pointer group hover:bg-gray-50 transition-colors px-2 rounded-xl`}>
      <div className="flex items-center gap-4">
        {icon}
        <span className="text-base font-bold text-gray-800 w-36">{label}</span>
      </div>
      <div className="flex items-center justify-between flex-1 pl-4">
        <span className="text-base font-medium text-gray-600 truncate">{value}</span>
        <FaChevronRight className="text-gray-300 w-4 h-4 group-hover:text-primary transition-colors" />
      </div>
    </div>
  );
}

function BadgeItem({ icon, bg, label }: { icon: React.ReactNode, bg: string, label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`relative w-14 h-14 shrink-0 flex items-center justify-center`}>
        <div className={`absolute inset-0 bg-[#0B251C] rounded-xl rotate-45 transform origin-center shadow-md`}></div>
        <div className={`absolute inset-0.75 ${bg} rounded-lg rotate-45 transform origin-center border border-white/20`}></div>
        <div className="relative z-10">{icon}</div>
      </div>
      <div className="font-bold text-base text-gray-800 leading-tight mt-1">{label}</div>
    </div>
  );
}

function ActivityRow({ icon, bg, action, title, time, points, pointsColor }: {
  icon: React.ReactNode,
  bg: string,
  action: string,
  title: string,
  time: string,
  points: string,
  pointsColor: string,
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${bg}`}>
          {icon}
        </div>
        <div>
          <div className="text-base text-gray-500 font-semibold mb-0.5">{action}</div>
          <div className="font-bold text-base text-gray-800 mb-1">{title}</div>
          <div className="text-base text-gray-400 font-medium">{time}</div>
        </div>
      </div>
      <div className={`font-black text-base ${pointsColor}`}>
        {points}
      </div>
    </div>
  );
}