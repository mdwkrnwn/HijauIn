"use client";

import { useState } from "react";
import Image from "next/image";

import { FiCalendar, FiArrowRight, FiMapPin, FiEdit2, FiPhone,FiMail,FiChevronRight } from "react-icons/fi";

import { User } from "@supabase/supabase-js";
export type userProfiles = {
  id: string;
  full_name: string;
  avatar_url: string;
  bio: string;
  city: string;
  eco_score: number;
  level: number;
  xp: number;
  streak: number;
  created_at: string;
};
export default function Profil({
  user,
  userProfiles,
}: {
  user: User;
  userProfiles: userProfiles;
}) {
  const [activeTab, setActiveTab] = useState<"ringkasan" | "pengaturan">(
    "ringkasan",
  );

  return (
    <div className="w-full flex flex-col gap-6 mt-4">
      {/* Header Section */}
      {/* <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold flex items-center gap-2 text-gray-800">
          Profil Saya <MdOutlineEnergySavingsLeaf className="text-[#11773D]" />
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
          <div className="relative overflow-hidden rounded-[28px] border border-[#E7EFE6] bg-[#F8FCF7] px-14 py-10">
            {/* Background kanan */}
            <Image
              src="/assets/profil/main.png" // background daun
              alt=""
              fill
              className="pointer-events-none object-contain object-right-bottom"
            />

            <div className="relative z-10 flex items-center gap-12">
              {/* Avatar */}
              <div className="relative shrink-0">
                <div className="relative -mt-40 h-[150px] w-[150px] overflow-hidden rounded-full border-[4px] border-white bg-white">
                  <Image
                    src="/assets/avatar.png"
                    alt={userProfiles.full_name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Edit Avatar */}
                <button className="absolute bottom-2 -right-2 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-md transition hover:bg-gray-50">
                  <FiEdit2 size={22} className="text-[#11773D]" />
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col">
                {/* Nama */}
                <div className="mb-5 flex items-center gap-4">
                  <h1 className="text-[38px] font-semibold text-[#101828]">
                    {userProfiles.full_name}
                  </h1>

                  <span className="rounded-full bg-[#EAF7EC] px-3 py-1 text-[15px] font-semibold text-[#11773D]">
                    Eco Guardian
                  </span>
                </div>

                {/* Info */}
                <div className="mb-5 flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-[17px] font-medium text-[#475467]">
                    <FiCalendar size={22} />
                    Bergabung sejak{" "}
                    {new Date(user.created_at).toLocaleDateString("id-ID", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>

                  <div className="flex items-center gap-3 text-[17px] font-medium text-[#475467]">
                    <FiMapPin size={22} />
                    {userProfiles.city ?? "Indonesia"}
                  </div>
                </div>

                {/* Bio */}
                <p className="mb-8 max-w-[560px] text-[17px] leading-[42px] text-[#475467]">
                  Berusaha menjadi versi terbaik untuk bumi <br /> dengan
                  langkah kecil setiap hari.
                </p>

                {/* Button */}
                <button className="flex h-[60px] w-fit items-center gap-3 rounded-2xl border-2 border-[#11773D] px-8 text-[18px] font-semibold text-[#11773D] transition hover:bg-[#F4FBF5]">
                  <FiEdit2 size={22} />
                  Edit Profil
                </button>
              </div>
            </div>
          </div>

          {/* Dynamic Content Section */}
          <div className="bg-white rounded-4xl p-6 lg:p-8 shadow-sm flex flex-col gap-8 border border-gray-100">
            {/* Tabs */}
            <div className="flex items-center gap-8 border-b border-gray-100 overflow-x-auto">
              <button
                onClick={() => setActiveTab("ringkasan")}
                className={`text-base font-bold pb-4 whitespace-nowrap border-b-2 transition-colors ${activeTab === "ringkasan" ? "text-[#11773D] border-[#11773D]" : "text-gray-500 border-transparent hover:text-gray-800"}`}
              >
                Ringkasan
              </button>
              <button
                onClick={() => setActiveTab("pengaturan")}
                className={`text-base font-bold pb-4 whitespace-nowrap border-b-2 transition-colors ${activeTab === "pengaturan" ? "text-[#11773D] border-[#11773D]" : "text-gray-500 border-transparent hover:text-gray-800"}`}
              >
                Pengaturan
              </button>
            </div>

            {/* TAB CONTENT: RINGKASAN */}
            {activeTab === "ringkasan" && (
              <div className="flex flex-col gap-8 animate-in fade-in duration-300">
                {/* Ringkasan Pencapaian */}
                <div>
                  <h3 className="mb-5 text-[25px] font-semibold text-[#101828]">
                    Ringkasan Pencapaian
                  </h3>

                  <div className="grid grid-cols-4 gap-5">
                    <AchievementCard
                      image="/assets/challange/point.png"
                      value="1.250"
                      label="Total Poin"
                    />

                    <AchievementCard
                      image="/assets/challange/t.png"
                      value="8"
                      label="Challenge Selesai"
                    />

                    <AchievementCard
                      image="/assets/challange/eco.png"
                      value="8"
                      label="Badge Dimiliki"
                    />

                    <AchievementCard
                      image="/assets/profil/calendar.png"
                      value={userProfiles.streak.toString()}
                      label="Hari Aktif Konsisten"
                    />
                  </div>
                </div>

                {/* Tentang Saya */}
                <div>
                  <h3 className="mb-6 text-[25px] font-semibold text-[#101828]">
                    Tentang Saya
                  </h3>

                  <div className="rounded-[22px] border border-[#EAECF0] bg-white">
                    <InfoRow
                      icon={<FiMail size={22} />}
                      label="Email"
                      value={user.email!}
                    />

                    <InfoRow
                      icon={<FiPhone size={22} />}
                      label="Nomor Telepon"
                      value={user.phone?.length ? user.phone : "-"}
                    />

                    <InfoRow
                      icon={<FiMapPin size={22} />}
                      label="Lokasi"
                      value={userProfiles.city ?? "-"}
                      borderBottom={false}
                    />
                  </div>
                </div>

                {/* Footer Banner Inside Card */}
                <div className="relative overflow-hidden rounded-[24px] bg-[#F5FAF5] px-10 py-8">
                  <div className="relative z-10">
                    <h3 className="mb-3 text-[25px] font-semibold text-[#11773D]">
                      Teruslah beraksi untuk bumi! 🌱
                    </h3>

                    <p className="text-[16px] font-medium text-[#475467]">
                      Setiap langkah kecilmu membawa perubahan besar.
                    </p>
                  </div>

                  <Image
                    src="/assets/profil/bumi.png"
                    alt=""
                    width={200}
                    height={100}
                    className="absolute bottom-0 right-8 object-contain"
                  />
                </div>
              </div>
            )}

            {/* TAB CONTENT: PENGATURAN */}
            {activeTab === "pengaturan" && (
              <div className="flex flex-col gap-6 animate-in fade-in duration-300">
                <h3 className="font-bold text-lg text-gray-800">
                  Pengaturan Akun
                </h3>
                <p className="text-base text-gray-500 font-medium">
                  Opsi pengaturan akan ditampilkan di sini.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right Column (Span 1) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Level & Progress */}
          <div className="rounded-[28px] border border-[#EAECF0] bg-white p-8">
            <h3 className="mb-8 text-[20px] font-semibold text-[#101828]">
              Level & Progress
            </h3>

            {/* Level */}
            <div className="mb-8 flex items-center gap-8">
              <Image
                src="/assets/profil/lv.png"
                alt="Level Badge"
                width={80}
                height={80}
                className="object-contain"
              />

              <div>
                <h2 className="text-[30px] font-semibold leading-none text-[#101828]">
                  Level 12
                </h2>

                <p className="mt-3 text-[20px] font-medium text-[#344054]">
                  Eco Guardian
                </p>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-4 h-[10px] overflow-hidden rounded-full bg-[#DDE3DE]">
              <div
                className="h-full rounded-full bg-[#11773D]"
                style={{ width: "76%" }}
              />
            </div>

            <div className="mb-14 flex justify-end">
              <span className="text-[18px] font-semibold text-[#344054]">
                760 / 1000 XP
              </span>
            </div>

            {/* Footer */}
            <div className="flex items-end justify-between">
              <p className="text-[18px] font-medium text-[#344054]">
                240 XP lagi untuk naik level!
              </p>

              {/* <Image
                src="/assets/profil/leaf.png"
                alt=""
                width={42}
                height={42}
                className="object-contain opacity-70"
              /> */}
            </div>
          </div>

          {/* Badge Saya */}
          <div className="rounded-[28px] border border-[#EAECF0] bg-white p-8">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-[20px] font-semibold text-[#101828]">
                Badge Saya
              </h3>

              <button className="text-[18px] font-semibold text-[#11773D] hover:underline">
                Lihat Semua
              </button>
            </div>

            <div className="grid grid-cols-4 gap-6">
              <BadgeItem
                image="/assets/profil/eco-warrior.png"
                label="Eco Warrior"
              />

              <BadgeItem image="/assets/profil/water.png" label="Water Saver" />

              <BadgeItem
                image="/assets/profil/green-starter.png"
                label="Green Starter"
              />

              <BadgeItem
                image="/assets/profil/energi.png"
                label="Energy Saver"
              />
            </div>
          </div>

          {/* Aktivitas Terakhir */}
          <div className="rounded-[28px] border border-[#EAECF0] bg-white p-8">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-[20px] font-semibold text-[#101828]">
                Aktivitas Terakhir
              </h3>

              <button className="text-[18px] font-semibold text-[#11773D] hover:underline">
                Lihat Semua
              </button>
            </div>

            <div className="flex flex-col gap-7">
              <ActivityRow
                image="/assets/tumbler.png"
                title="Membawa Tumbler"
                action="Mencatat aktivitas"
                time="2 jam yang lalu"
                points="+20 Poin"
                pointsColor="text-[#11773D]"
              />

              <ActivityRow
                image="/assets/air.png"
                title="Hemat Air"
                action="Mencatat aktivitas"
                time="5 jam yang lalu"
                points="+15 Poin"
                pointsColor="text-[#11773D]"
              />

              <ActivityRow
                image="/assets/petir.png"
                title="Hemat Energi"
                action="Mencatat aktivitas"
                time="1 hari yang lalu"
                points="+15 Poin"
                pointsColor="text-[#11773D]"
                imageWidth={34}
                imageHeight={34}
              />

              <ActivityRow
                image="/assets/dashboard-komunitas/green.png"
                title="Hijau Bersama"
                action="Mengikuti komunitas"
                time="2 hari yang lalu"
                points="-"
                pointsColor="text-[#98A2B3]"
              />
            </div>

            <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#EAECF0] py-4 text-[18px] font-semibold text-[#11773D] transition hover:bg-[#F8FAF8]">
              Lihat Semua Aktivitas
              <FiArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Subcomponents

type AchievementCardProps = {
  image: string;
  value: string;
  label: string;
};

function AchievementCard({ image, value, label }: AchievementCardProps) {
  return (
    <div className="rounded-[22px] border border-[#EAECF0] bg-white px-7 py-8">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-[18px] w-[58px] items-center justify-center rounded-full bg-[#F5FAF5]">
          <Image
            src={image}
            alt=""
            width={38}
            height={38}
            className="object-contain"
          />
        </div>

        <h4 className="text-[30px] font-semibold leading-none text-[#101828]">
          {value}
        </h4>
      </div>

      <p className="text-center text-[15px] font-medium leading-8 text-[#475467]">
        {label}
      </p>
    </div>
  );
}
type InfoRowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  borderBottom?: boolean;
};

function InfoRow({ icon, label, value, borderBottom = true }: InfoRowProps) {
  return (
    <div
      className={`flex items-center justify-between px-8 py-7 ${
        borderBottom ? "border-b border-[#EAECF0]" : ""
      }`}
    >
      <div className="flex items-center gap-5">
        <div className="text-[#475467]">{icon}</div>

        <span className="w-[170px] text-[18px] font-medium text-[#475467]">
          {label}
        </span>

        <span className="text-[18px] font-medium text-[#475467]">{value}</span>
      </div>

      <FiChevronRight size={22} className="text-[#475467]" />
    </div>
  );
}

type BadgeItemProps = {
  image: string;
  label: string;
  imageWidth?: number;
  imageHeight?: number;
};

function BadgeItem({
  image,
  label,
  imageWidth = 82,
  imageHeight = 82,
}: BadgeItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Ellipse */}
      <div className="flex h-[96px] w-[96px] items-center justify-center rounded-full bg-[#F6FAF5]">
        <Image
          src={image}
          alt={label}
          width={imageWidth}
          height={imageHeight}
          className="object-contain"
        />
      </div>

      <p className="mt-4 text-[16px] font-medium text-[#475467]">{label}</p>
    </div>
  );
}

type ActivityRowProps = {
  image: string;
  title: string;
  action: string;
  time: string;
  points: string;
  pointsColor: string;
  imageWidth?: number;
  imageHeight?: number;
};

function ActivityRow({
  image,
  title,
  action,
  time,
  points,
  pointsColor,
  imageWidth = 30,
  imageHeight = 30,
}: ActivityRowProps) {
  return (
    <div className="flex items-center justify-between">
      {/* Left */}
      <div className="flex items-start gap-4">
        <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#EEF4EC]">
          <Image
            src={image}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            className="object-contain"
          />
        </div>

        <div>
          <p className="text-[13px] font-medium text-[#667085]">{action}</p>

          <h4 className="mt-1 text-[18px] font-semibold text-[#344054]">
            {title}
          </h4>

          <p className="mt-1 text-[13px] font-medium text-[#667085]">{time}</p>
        </div>
      </div>

      {/* Right */}
      <p className={`text-[24px] font-semibold ${pointsColor}`}>{points}</p>
    </div>
  );
}
