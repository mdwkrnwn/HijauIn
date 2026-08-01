"use client";

import { useState } from "react";
import CreateActivityModal from "./components/CreateActivityModal";
import { useActivity } from "@/hooks/useActivity";
import { supabase } from "@/utils/supabase";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { IoLeaf } from "react-icons/io5";
import { FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa6";
import Swal from "sweetalert2";
import {
  MdOutlineEnergySavingsLeaf,
  MdFilterList,
  MdDateRange,
} from "react-icons/md";
import Image from "next/image";
const showComingSoon = () => {
  Swal.fire({
    icon: "info",
    title: "Segera Hadir 🚀",
    text: "Fitur filter kategori dan tanggal sedang dalam pengembangan.",
    confirmButtonColor: "#11773D",
    confirmButtonText: "Mengerti",
  });
};

export default function AktivitasPage() {
  const [openModal, setOpenModal] = useState(false);
  const activity = useActivity();
  const { activities, getActivities, loading } = activity;
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [showAll, setShowAll] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "semua" | "hari" | "minggu" | "bulan"
  >("semua");

  useEffect(() => {
    console.log("Activities:", activities);

    async function loadActivities() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return;

      await getActivities(user.id);
    }

    loadActivities();
  }, []);

  const activityImageMap: Record<string, string> = {
    "Membawa Tumbler": "/assets/tumbler.png",
    "Naik Transportasi Umum": "/assets/bus.png",
    "Hemat Air 20 Liter": "/assets/air.png",
    "Matikan Lampu 1 Jam": "/assets/lampu.png",
    "Pilah Sampah": "/assets/sampah.png",
    "Menanam Pohon": "/assets/menanampohon.png",
  };

  const badgeColorMap: Record<
    string,
    {
      bg: string;
      text: string;
    }
  > = {
    Kebiasaan: {
      bg: "bg-[#EEF8F0]",
      text: "text-[#11773D]",
    },

    Transportasi: {
      bg: "bg-[#EEF8F0]",
      text: "text-[#11773D]",
    },

    Penghematan: {
      bg: "bg-[#F1F9FC]",
      text: "text-[#286FBD]",
    },

    Lingkungan: {
      bg: "bg-[#EEF8F0]",
      text: "text-[#11773D]",
    },
  };

  const filteredActivities = activities.filter((activity) => {
    // Filter kategori
    if (
      selectedCategory !== "Semua" &&
      activity.category?.name !== selectedCategory
    ) {
      return false;
    }

    // Filter tab
    if (activeTab === "semua") return true;

    const activityDate = new Date(activity.activity_date);
    const now = new Date();

    if (activeTab === "hari") {
      return activityDate.toDateString() === now.toDateString();
    }

    if (activeTab === "minggu") {
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());

      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      return activityDate >= startOfWeek && activityDate <= endOfWeek;
    }

    if (activeTab === "bulan") {
      return (
        activityDate.getMonth() === now.getMonth() &&
        activityDate.getFullYear() === now.getFullYear()
      );
    }

    return true;
  });

  const visibleActivities = showAll
    ? filteredActivities
    : filteredActivities.slice(0, 6);

  const groupedActivities = visibleActivities.reduce(
    (acc, activity) => {
      const date = new Date(activity.activity_date);

      const key = date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push(activity);

      return acc;
    },
    {} as Record<string, typeof activities>,
  );

  const totalActivities = filteredActivities.length;

  return (
    <div className="flex flex-col gap-6 mx-auto">
      {/* Main Grid Layout */}
      <div className="lg:grid-cols-3 grid z-100 grid-cols-1 gap-6">
        {/* Left Column (Span 2) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Catat Aksi Hijau */}
          <div className="flex flex-col items-center justify-between gap-8 rounded-[24px] bg-gradient-to-r from-[#FFFFFF] via-[#F8FCF9] to-[#EEF8F0] px-8 py-7 shadow-sm lg:flex-row">
            {/* Left */}
            <div className="w-full lg:w-[42%]">
              <h2 className="text-[32px] font-bold text-[#101828]">
                Catat Aksi Hijau
              </h2>

              <p className="mt-5 text-[18px] font-medium leading-9 text-[#667085]">
                Mulai catat aksi kecilmu hari ini dan
                <br />
                dapatkan poin serta dampak positif!
              </p>

              <button
                onClick={() => setOpenModal(true)}
                className="mt-8 flex h-[56px] w-[190px] items-center justify-center gap-3 rounded-[14px] bg-[#11773D] text-[18px] font-semibold text-white transition hover:bg-[#0D6433]"
              >
                <FaPlus className="text-[18px]" />
                Catat Aksi
              </button>
            </div>

            {/* Right */}
            <div className="flex w-full justify-end lg:w-[58%]">
              <Image
                src="/assets/aktivitas/catat.png"
                alt="Clipboard Illustration"
                width={420}
                height={280}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Riwayat Aktivitas */}
          <div className=" rounded-3xl flex flex-col flex-1 p-6 bg-white shadow-sm">
            <div className="lg:flex-row lg:items-center flex flex-col items-start justify-between gap-4 mb-6">
              <h3 className="text-xl font-bold text-[#0B0F1F]">
                Riwayat Aktivitas
              </h3>
              <div className="lg:w-auto flex items-center w-full gap-3">
                <button
                  onClick={showComingSoon}
                  className="lg:flex-none rounded-xl flex items-center justify-between flex-1 gap-2 px-4 py-2 text-base font-semibold text-gray-700 bg-white border border-gray-200"
                >
                  <MdFilterList className="w-5 h-5 text-gray-500" />
                  Semua Kategori
                  <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                </button>

                <button
                  onClick={showComingSoon}
                  className="lg:flex-none rounded-xl flex items-center justify-between flex-1 gap-2 px-4 py-2 text-base font-semibold text-gray-700 bg-white border border-gray-200"
                >
                  <MdDateRange className="w-5 h-5 text-gray-500" />
                  Pilih Tanggal
                  <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-6 mb-6 overflow-x-auto border-b border-gray-100">
              <button
                onClick={() => setActiveTab("semua")}
                className={`whitespace-nowrap pb-3 text-base font-bold border-b-2 ${
                  activeTab === "semua"
                    ? "text-[#11773D] border-[#11773D]"
                    : "text-gray-500 border-transparent"
                }`}
              >
                Semua
              </button>
              <button
                onClick={() => setActiveTab("hari")}
                className={`whitespace-nowrap pb-3 text-base font-bold border-b-2 ${
                  activeTab === "hari"
                    ? "text-[#11773D] border-[#11773D]"
                    : "text-gray-500 border-transparent"
                }`}
              >
                Hari Ini
              </button>
              <button
                onClick={() => setActiveTab("minggu")}
                className={`whitespace-nowrap pb-3 text-base font-bold border-b-2 ${
                  activeTab === "minggu"
                    ? "text-[#11773D] border-[#11773D]"
                    : "text-gray-500 border-transparent"
                }`}
              >
                Minggu Ini
              </button>
              <button
                onClick={() => setActiveTab("bulan")}
                className={`whitespace-nowrap pb-3 text-base font-bold border-b-2 ${
                  activeTab === "bulan"
                    ? "text-[#11773D] border-[#11773D]"
                    : "text-gray-500 border-transparent"
                }`}
              >
                Bulan Ini
              </button>
            </div>

            {/* List Hari Ini */}
            <div
              className={`space-y-8 pr-2 ${
                showAll ? "max-h-[900px] overflow-y-auto" : ""
              }`}
            >
              {loading && (
                <div className="space-y-4">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-gray-100 bg-white p-4"
                    >
                      <div className="flex items-center justify-between">
                        {/* Left */}
                        <div className="flex items-center gap-4">
                          <Skeleton className="h-14 w-14 rounded-full" />

                          <div className="space-y-3">
                            <Skeleton className="h-5 w-52 rounded-lg" />
                            <Skeleton className="h-4 w-28 rounded-lg" />
                          </div>

                          <Skeleton className="ml-4 h-7 w-28 rounded-full" />
                        </div>

                        {/* Right */}
                        <div className="flex items-center gap-8">
                          <div className="space-y-2 text-right">
                            <Skeleton className="ml-auto h-6 w-14 rounded-lg" />
                            <Skeleton className="ml-auto h-4 w-10 rounded-lg" />
                          </div>

                          <Skeleton className="h-5 w-5 rounded-full" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {!loading && filteredActivities.length === 0 && (
                <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-gray-200 py-20">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#EEF8F0]">
                    <IoLeaf className="text-4xl text-[#11773D]" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    Belum Ada Aktivitas
                  </h3>

                  <p className="mt-3 max-w-md text-center text-[#667085] leading-7">
                    Belum ada aktivitas yang tercatat. Yuk mulai aksi hijau
                    pertamamu!
                  </p>
                </div>
              )}
              {!loading &&
                filteredActivities.length > 0 &&
                Object.entries(groupedActivities).map(([date, list]) => {
                  const totalPoint = list.reduce(
                    (sum, item) => sum + item.point,
                    0,
                  );

                  return (
                    <div key={date}>
                      <div className="flex justify-between mb-4">
                        <span className="font-bold text-gray-700">{date}</span>

                        <span className="flex items-center gap-1 font-bold">
                          Total: {totalPoint} poin
                          <MdOutlineEnergySavingsLeaf className="text-[#11773D]" />
                        </span>
                      </div>

                      <div className="space-y-4">
                        {list.map((activity) => {
                          const badge =
                            badgeColorMap[
                              activity.category?.name ?? "Kebiasaan"
                            ];

                          return (
                            <div
                              key={activity.id}
                              className="rounded-2xl hover:shadow-md group flex items-center justify-between border border-gray-100 p-4 transition-shadow cursor-pointer"
                            >
                              <div className="flex w-full items-center justify-between py-2">
                                {/* LEFT */}
                                <div className="flex items-center gap-4">
                                  {/* Icon */}
                                  <div
                                    className={`flex h-14 w-14 items-center justify-center rounded-full ${badge.bg}`}
                                  >
                                    <Image
                                      src={
                                        activityImageMap[activity.title] ??
                                        "/assets/tumbler.png"
                                      }
                                      alt={activity.title}
                                      width={28}
                                      height={28}
                                      className="object-contain"
                                    />
                                  </div>

                                  {/* Title */}
                                  <div className="flex w-[500px] items-center gap-5">
                                    <div>
                                      <h4 className="text-[18px] font-semibold leading-none text-[#344054]">
                                        {activity.title}
                                      </h4>

                                      <p className="mt-2 text-[15px] font-medium text-[#667085]">
                                        {new Date(
                                          activity.activity_date,
                                        ).toLocaleTimeString("id-ID", {
                                          hour: "2-digit",
                                          minute: "2-digit",
                                        })}{" "}
                                        WIB
                                      </p>
                                    </div>

                                    <span
                                      className={`rounded-full px-3 py-1 text-[13px] font-semibold ${badge.bg} ${badge.text}`}
                                    >
                                      {activity.category?.name}
                                    </span>
                                  </div>
                                </div>

                                {/* RIGHT */}
                                <div className="flex items-center gap-8">
                                  <div className="text-right leading-none">
                                    <p className="text-[20px] font-semibold text-[#11773D]">
                                      +{activity.point}
                                    </p>

                                    <p className="mt-1 text-[14px] font-medium text-[#667085]">
                                      poin
                                    </p>
                                  </div>

                                  <FaChevronRight className="text-[15px] text-[#98A2B3]" />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
            </div>

            {!showAll && totalActivities > 5 && (
              <button
                onClick={() => setShowAll(true)}
                className="text-[#11773D] hover:underline mt-5 rounded-2xl flex items-center justify-center w-full gap-2 py-4 text-base font-bold border border-gray-200 transition"
              >
                Muat Lebih Banyak
                <FaChevronDown className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Right Column (Span 1) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Ringkasan Aktivitas */}
          <div className="rounded-[24px] bg-white p-7 shadow-sm">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-[22px] font-semibold text-[#101828]">
                Ringkasan Aktivitas
              </h3>

              <select className="rounded-xl border border-[#EAECF0] bg-white px-6 py-2 text-[15px] font-semibold text-[#344054] outline-none">
                <option>Hari Ini</option>
              </select>
            </div>

            {/* Summary */}
            <div className="mb-8 flex items-center justify-between">
              {/* Left */}
              <div className="pr-8">
                <p className="text-[16px] font-semibold text-[#667085]">
                  Total Poin
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <h2 className="text-[52px] font-bold leading-none text-[#11773D]">
                    120
                  </h2>

                  <MdOutlineEnergySavingsLeaf className="text-[28px] text-[#11773D]" />
                </div>

                <p className="mt-5 text-[16px] font-medium text-[#667085]">
                  Dari 3 aksi
                </p>
              </div>

              {/* Divider */}
              <div className="h-[120px] w-px bg-[#EAECF0]" />

              {/* Circle */}
              <div className="flex flex-col items-center pl-8">
                <div className="relative h-[120px] w-[120px]">
                  <svg
                    className="-rotate-90"
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="48"
                      stroke="#E6EFE8"
                      strokeWidth="10"
                      fill="none"
                    />

                    <circle
                      cx="60"
                      cy="60"
                      r="48"
                      stroke="#11773D"
                      strokeWidth="10"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="301.6"
                      strokeDashoffset="120.6"
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[30px] font-bold text-[#11773D]">
                      60%
                    </span>

                    <MdOutlineEnergySavingsLeaf className="mt-1 text-[20px] text-[#11773D]" />
                  </div>
                </div>

                <p className="mt-4 text-center text-[16px] font-semibold text-[#667085]">
                  dari target harian
                </p>
              </div>
            </div>

            {/* Target */}
            <div className="rounded-2xl bg-[#F7FBF8] p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[16px] font-semibold text-[#344054]">
                  Target Harian
                </span>

                <span className="text-[16px] font-semibold text-[#344054]">
                  200 poin
                </span>
              </div>

              <div className="h-[10px] overflow-hidden rounded-full bg-[#DCE7DE]">
                <div
                  className="h-full rounded-full bg-[#11773D]"
                  style={{ width: "60%" }}
                />
              </div>
            </div>
          </div>

          {/* Insight Minggu Ini */}
          <div className="rounded-[24px] bg-white p-7 shadow-sm">
            {/* Header */}
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-[22px] font-semibold text-[#101828]">
                Insight Minggu Ini
              </h3>

              <button className="text-[16px] font-semibold text-[#11773D]">
                Lihat Detail
              </button>
            </div>

            {/* Top */}
            <div className="mb-8 flex items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-[18px] font-semibold leading-8 text-[#344054]">
                  Kamu telah menghemat
                </p>

                <h2 className="mt-2 text-[42px] font-bold leading-none text-[#11773D]">
                  2,3 kg CO₂
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#667085]">
                  Pertahankan konsistensimu
                  <br />
                  untuk bumi yang lebih baik.
                </p>
              </div>

              <Image
                src="/assets/aktivitas/bumi.png"
                alt="Earth"
                width={135}
                height={135}
                className="object-contain"
              />
            </div>

            {/* Bottom Stats */}
            <div className="rounded-[20px] bg-[#F7FBF8] px-5 py-6">
              <div className="grid -ml-8 grid-cols-4">
                {/* CO2 */}
                <div className="flex flex-col w-[190px] -ml-7 mt-8 items-center  px-4">
                  <Image
                    src="/assets/co2.png"
                    alt="CO2"
                    width={60}
                    height={60}
                    className="mb-4 object-contain"
                  />

                  <p className="text-[14px] font-medium text-[#667085]">
                    CO₂ Dihindari
                  </p>

                  <p className="mt-3 text-[20px] font-bold text-[#11773D]">
                    1,2 kg
                  </p>
                </div>

                {/* Air */}
                <div className="flex flex-col items-center w-[190px] mt-3  -ml-8 px-4">
                  <Image
                    src="/assets/air.png"
                    alt="Air"
                    width={38}
                    height={38}
                    className="mb-5 object-contain"
                  />

                  <p className="text-[14px] font-medium text-[#667085]">
                    Air Dihemat
                  </p>

                  <p className="mt-3 text-[20px] font-bold text-[#11773D]">
                    45 L
                  </p>
                </div>

                {/* Energi */}
                <div className="flex -ml-8 flex-col w-[190px] mt-3 items-center  px-4">
                  <Image
                    src="/assets/dashboard/petir.png"
                    alt="Energi"
                    width={38}
                    height={38}
                    className="mb-4 object-contain"
                  />

                  <p className="text-[14px] font-medium text-[#667085]">
                    Energi Dihemat
                  </p>

                  <p className="mt-3 text-[20px] font-bold text-[#11773D]">
                    2 kWh
                  </p>
                </div>

                {/* Pohon */}
                <div className="flex flex-col w-[190px] -ml-5 items-center px-4">
                  <Image
                    src="/assets/pohon.png"
                    alt="Pohon"
                    width={60}
                    height={60}
                    className="mb-4 object-contain"
                  />

                  <p className="text-[14px] font-medium text-[#667085]">
                    Pohon Ditanam
                  </p>

                  <p className="mt-3 text-[20px] font-bold text-[#11773D]">
                    1 Pohon
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kategori Aktivitas */}
          <div className="rounded-[24px] bg-white p-7 shadow-sm">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-[22px] font-semibold text-[#101828]">
                Kategori Aktivitas
              </h3>

              <button className="text-[17px] font-semibold text-[#11773D]">
                Lihat Semua
              </button>
            </div>

            <div className="space-y-7">
              {/* Kebiasaan */}
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF8F0]">
                  <Image
                    src="/assets/tumbler.png"
                    alt="Tumbler"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>

                <div className="w-[160px]">
                  <p className="text-[18px] font-semibold text-[#344054]">
                    Kebiasaan
                  </p>
                </div>

                <div className="flex-1">
                  <div className="h-[12px] overflow-hidden rounded-full bg-[#E4ECE5]">
                    <div
                      className="h-full rounded-full bg-[#11773D]"
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>

                <span className="w-[70px] text-right text-[18px] font-semibold text-[#667085]">
                  5 aksi
                </span>
              </div>

              {/* Transportasi */}
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF8F0]">
                  <Image
                    src="/assets/bus.png"
                    alt="Bus"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>

                <div className="w-[160px]">
                  <p className="text-[18px] font-semibold text-[#344054]">
                    Transportasi
                  </p>
                </div>

                <div className="flex-1">
                  <div className="h-[12px] overflow-hidden rounded-full bg-[#E4ECE5]">
                    <div
                      className="h-full rounded-full bg-[#11773D]"
                      style={{ width: "50%" }}
                    />
                  </div>
                </div>

                <span className="w-[70px] text-right text-[18px] font-semibold text-[#667085]">
                  3 aksi
                </span>
              </div>

              {/* Penghematan */}
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF8F0]">
                  <Image
                    src="/assets/air.png"
                    alt="Water"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>

                <div className="w-[160px]">
                  <p className="text-[18px] font-semibold text-[#344054]">
                    Penghematan
                  </p>
                </div>

                <div className="flex-1">
                  <div className="h-[12px] overflow-hidden rounded-full bg-[#E4ECE5]">
                    <div
                      className="h-full rounded-full bg-[#11773D]"
                      style={{ width: "65%" }}
                    />
                  </div>
                </div>

                <span className="w-[70px] text-right text-[18px] font-semibold text-[#667085]">
                  4 aksi
                </span>
              </div>

              {/* Lingkungan */}
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF8F0]">
                  <Image
                    src="/assets/daun.png"
                    alt="Leaf"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>

                <div className="w-[160px]">
                  <p className="text-[18px] font-semibold text-[#344054]">
                    Lingkungan
                  </p>
                </div>

                <div className="flex-1">
                  <div className="h-[12px] overflow-hidden rounded-full bg-[#E4ECE5]">
                    <div
                      className="h-full rounded-full bg-[#11773D]"
                      style={{ width: "55%" }}
                    />
                  </div>
                </div>

                <span className="w-[70px] text-right text-[18px] font-semibold text-[#667085]">
                  2 aksi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateActivityModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        activity={activity}
      />
    </div>
  );
}
