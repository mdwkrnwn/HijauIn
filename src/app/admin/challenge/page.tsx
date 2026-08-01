"use client";

import { useState } from "react";
import {
  FaChevronRight,
  FaChevronDown,
  FaChevronLeft,
} from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import {
  MdFilterList,
} from "react-icons/md";
import { FiCalendar } from "react-icons/fi";

import Image from "next/image";
const data = [
  { day: "Sen", value: 160 },
  { day: "Sel", value: 270 },
  { day: "Rab", value: 200 },
  { day: "Kam", value: 200 },
  { day: "Jum", value: 390 },
  { day: "Sab", value: 320 },
  { day: "Min", value: 200 },
];
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
} from "recharts";

export default function ChallengePage() {
  const tabs: {
    key: "aktif" | "semua" | "selesai";
    label: string;
  }[] = [
    { key: "aktif", label: "Challenge Aktif" },
    { key: "semua", label: "Semua Challenge" },
    { key: "selesai", label: "Selesai" },
  ];

  const [activeTab, setActiveTab] = useState<"aktif" | "semua" | "selesai">(
    "aktif",
  );

  return (
    <div className="flex flex-col w-full gap-6  mx-auto">
      {/* Header Section */}
      

      {/* Main Grid Layout */}
      <div className="lg:grid-cols-3 grid grid-cols-1 gap-6 ">
        {/* Left Column (Span 2) - Dynamic Content */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Main Content Card */}
          <div className="rounded-3xl flex flex-col flex-1 p-6 bg-white shadow-sm">
            {/* Tabs */}
            <div className="mb-8 flex items-center gap-10 border-b border-[#EAECF0]">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`pb-4 text-[16px] font-semibold transition ${
                    activeTab === tab.key
                      ? "border-b-2 border-[#11773D] text-[#11773D]"
                      : "border-b-2 border-transparent text-[#667085]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB CONTENT: AKTIF */}
            {activeTab === "aktif" && (
              <div className="animate-in fade-in flex flex-col gap-8 duration-300">
                {/* Active Highlight */}
                <div className="rounded-[20px] border border-[#EAECF0] p-6 flex items-center gap-6">
                  <div className="bg-[#11773D]-light shrink-0 flex items-center justify-center w-32 h-32 overflow-hidden rounded-full relative">
                    <div className="relative h-[120px] w-[120px] shrink-0">
                      <Image
                        src="/assets/dashboard/plastic.png"
                        alt=""
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <span className="inline-flex rounded-full bg-[#EEF8EF] px-3 py-1 text-[12px] font-semibold text-[#11773D]">
                      Tantangan Aktif
                    </span>
                    <h2 className="mt-3 text-[30px] font-bold text-[#101828]">
                      30 Hari Tanpa Plastik
                    </h2>
                    <p className="mt-2 max-w-[420px] text-[15px] leading-7 text-[#667085]">
                      Kurangi penggunaan plastik sekali pakai selama 30 hari
                      berturut-turut.
                    </p>
                  </div>
                  <div className="lg:w-1/3 flex flex-col w-full gap-3">
                    <div className="flex items-end gap-2">
                      <span className="text-[34px] font-bold text-[#11773D]">
                        12
                      </span>

                      <span className="pb-1 text-[18px] text-[#98A2B3]">
                        / 30 Hari
                      </span>
                    </div>
                    <div className="mt-4 h-[8px] w-full rounded-full bg-[#DDE3DE]">
                      <div
                        className="h-full rounded-full bg-[#11773D]"
                        style={{ width: "40%" }}
                      />
                    </div>
                    <div className="mt-5 flex items-center gap-5">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/challange/point.png"
                          width={18}
                          height={18}
                          alt=""
                        />

                        <span className="text-[14px] font-medium">
                          500 Eco Point
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/challange/eco.png"
                          width={18}
                          height={18}
                          alt=""
                        />

                        <span className="text-[14px] font-medium">
                          Eco Warrior
                        </span>
                      </div>
                    </div>
                    <div className="mt-5 inline-flex items-center w-[220px] gap-2 rounded-full bg-[#FFF7E8] px-3 py-2">
                      <span className="text-[14px] font-semibold text-[#C76B00]">
                        12 Hari Berturut-turut
                      </span>

                      <Image
                        src="/assets/challange/api.png"
                        width={16}
                        height={16}
                        alt=""
                        className="ml-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Challenge Lainnya List */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-[#0B0F1F]">
                      Challenge Lainnya
                    </h3>
                    <button className="text-[#11773D] flex items-center gap-1 text-base font-bold">
                      Lihat Semua <FaChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <ChallengeRow
                      image="/assets/challange/water.png"
                      title="Hemat Air Setiap Hari"
                      desc="Hemat penggunaan air selama 14 hari."
                      progress="8 / 14 Hari"
                      percent="57%"
                      point="200"
                    />

                    <ChallengeRow
                      image="/assets/challange/transportasi.png"
                      title="Naik Transportasi Umum"
                      desc="Gunakan transportasi umum selama 10 hari."
                      progress="6 / 10 Hari"
                      percent="60%"
                      point="250"
                    />

                    <ChallengeRow
                      image="/assets/challange/sampah.png"
                      title="Pilah Sampah di Rumah"
                      desc="Pilah sampah organik dan anorganik selama 7 hari."
                      progress="5 / 7 Hari"
                      percent="71%"
                      point="150"
                    />

                    <ChallengeRow
                      image="/assets/challange/tanam.png"
                      title="Tanam dan Rawat Pohon"
                      desc="Tanam atau rawat pohon selama 30 hari."
                      progress="10 / 30 Hari"
                      percent="33%"
                      point="300"
                    />

                    <ChallengeRow
                      image="/assets/petir.png"
                      title="Hemat Energi di Rumah"
                      desc="Hemat penggunaan listrik selama 14 hari."
                      progress="7 / 14 Hari"
                      percent="50%"
                      point="200"
                    />
                  </div>
                </div>

                {/* Cara Kerja */}
                <div className="border-[#EAECF0]">
                  <h3 className="mb-8 text-[22px] font-semibold text-[#101828]">
                    Cara Kerja Challenge
                  </h3>

                  <div className="flex items-start justify-between">
                    <StepCard
                      image="/assets/challange/pilih.png"
                      title="1. Pilih Challenge"
                      imageWidth={58}
                      imageHeight={58}
                      desc="Pilih challenge yang kamu ingin ikuti."
                    />

                    <FaArrowRight
                      className="mt-6 hidden text-[#11773D] md:block"
                      size={20}
                    />

                    <StepCard
                      image="/assets/challange/aksi.png"
                      title="2. Lakukan Aksi"
                      imageWidth={78}
                      imageHeight={78}
                      desc="Lakukan aksi hijau sesuai target challenge."
                    />

                    <FaArrowRight
                      className="mt-6 hidden text-[#11773D] md:block"
                      size={20}
                    />

                    <StepCard
                      image="/assets/challange/dapatkanpoin.png"
                      title="3. Dapatkan Poin"
                      imageWidth={76}
                      imageHeight={76}
                      desc="Setiap aksi yang tervalidasi memberi poin."
                    />

                    <FaArrowRight
                      className="mt-6 hidden text-[#11773D] md:block"
                      size={20}
                    />

                    <StepCard
                      image="/assets/challange/reward.png"
                      title="4. Raih Reward"
                      imageWidth={74}
                      imageHeight={74}
                      desc="Selesaikan challenge dan raih reward spesial!"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: SEMUA */}
            {activeTab === "semua" && (
              <div className="animate-in fade-in flex flex-col gap-6 duration-300">
                {/* Filters */}
                <div className="md:flex-row flex flex-col items-center gap-4">
                  <button className="md:w-auto rounded-xl flex items-center justify-between w-full gap-2 px-4 py-3 text-base font-semibold text-gray-700 bg-white border border-gray-200">
                    <MdFilterList className="w-5 h-5 text-gray-500" /> Semua
                    Kategori{" "}
                    <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                  </button>
                  <div className="relative flex-1 w-full">
                    <BiSearch className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Cari challenge..."
                      className="rounded-xl focus:border-[#11773D] w-full py-3 pl-12 pr-4 text-base font-semibold border border-gray-200 outline-none"
                    />
                  </div>
                  <button className="md:w-auto rounded-xl flex items-center justify-between w-full gap-2 px-4 py-3 text-base font-semibold text-gray-700 bg-white border border-gray-200">
                    Terbaru{" "}
                    <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                  </button>
                </div>

                {/* Extended List */}
                <div className="flex flex-col gap-4">
                  <ChallengeRowDetailed
                    image="/assets/challange/30hari.png"
                    title="30 Hari Tanpa Plastik"
                    tag="Kebiasaan"
                    tagColor="bg-[#E8F5E9] text-[#11773D]"
                    desc="Kurangi penggunaan plastik sekali pakai selama 30 hari berturut-turut."
                    progress="12 / 30 Hari"
                    percent="40%"
                    point="500"
                    badge="Eco Warrior"
                    badgeImage="/assets/challange/ecowarrior.png"
                  />
                  <ChallengeRowDetailed
                    image="/assets/challange/water.png"
                    title="Hemat Air Setiap Hari"
                    tag="Penghematan"
                    tagColor="bg-[#E3F2FD] text-[#2196F3]"
                    desc="Hemat penggunaan air selama 14 hari."
                    progress="8 / 14 Hari"
                    percent="57%"
                    point="200"
                    badge="Water Saver"
                    badgeImage="/assets/challange/ecowarrior.png"
                  />
                  <ChallengeRowDetailed
                    image="/assets/challange/transportasi.png"
                    title="Naik Transportasi Umum"
                    tag="Transportasi"
                    tagColor="bg-[#E8F5E9] text-[#11773D]"
                    desc="Gunakan transportasi umum selama 10 hari."
                    progress="6 / 10 Hari"
                    percent="60%"
                    point="250"
                    badge="Eco Hero"
                    badgeImage="/assets/challange/ecowarrior.png"
                  />
                  <ChallengeRowDetailed
                    image="/assets/challange/sampah.png"
                    title="Pilah Sampah di Rumah"
                    tag="Lingkungan"
                    tagColor="bg-[#E8F5E9] text-[#11773D]"
                    desc="Pilah sampah organik dan anorganik selama 7 hari."
                    progress="5 / 7 Hari"
                    percent="71%"
                    point="150"
                    badge="Green Starter"
                    badgeImage="/assets/challange/ecowarrior.png"
                  />
                  <ChallengeRowDetailed
                    image="/assets/challange/tanam.png"
                    title="Tanam dan Rawat Pohon"
                    tag="Lingkungan"
                    tagColor="bg-[#E8F5E9] text-[#11773D]"
                    desc="Tanam atau rawat pohon selama 30 hari."
                    progress="10 / 30 Hari"
                    percent="33%"
                    point="300"
                    badge="Earth Lover"
                    badgeImage="/assets/challange/ecowarrior.png"
                  />
                  <ChallengeRowDetailed
                    image="/assets/petir.png"
                    imageWidth={45}
                    imageHeight={45}
                    title="Hemat Energi di Rumah"
                    tag="Penghematan"
                    tagColor="bg-[#E3F2FD] text-[#2196F3]"
                    desc="Hemat penggunaan listrik selama 14 hari."
                    progress="7 / 14 Hari"
                    percent="50%"
                    point="200"
                    badge="Energy Saver"
                    badgeImage="/assets/challange/ecowarrior.png"
                  />
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-gray-400 border border-gray-200 rounded-lg">
                    <FaChevronLeft />
                  </button>
                  <button className="bg-[#11773D] flex items-center justify-center w-10 h-10 text-base font-bold text-white rounded-lg">
                    1
                  </button>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-base font-bold text-gray-600 border border-gray-200 rounded-lg">
                    2
                  </button>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-base font-bold text-gray-600 border border-gray-200 rounded-lg">
                    3
                  </button>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-base font-bold text-gray-600 border border-gray-200 rounded-lg">
                    4
                  </button>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-base font-bold text-gray-600 border border-gray-200 rounded-lg">
                    5
                  </button>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-gray-600 border border-gray-200 rounded-lg">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            )}

            {/* TAB CONTENT: SELESAI */}
            {activeTab === "selesai" && (
              <div className="animate-in fade-in flex flex-col h-full gap-6 duration-300">
                <div>
                  <h3 className="mb-1 text-xl font-bold text-[#0B0F1F]">
                    Challenge yang Telah Selesai
                  </h3>
                  <p className="mb-6 text-base text-gray-600">
                    Terus konsisten! Setiap langkah kecil membawa perubahan
                    besar.
                  </p>
                </div>

                <div className="flex flex-col flex-1 gap-4">
                  <CompletedRow
                    image="/assets/challange/sampah.png"
                    title="Pilah Sampah di Rumah"
                    desc="Pilah sampah organik dan anorganik selama 7 hari."
                    date="Selesai pada 12 Mei 2025"
                    point="150"
                    badge="Green Starter"
                    badgeImage="/assets/challange/g.png"
                    badgeMr="-mr-9"
                  />

                  <CompletedRow
                    image="/assets/challange/water.png"
                    title="Hemat Air Setiap Hari"
                    desc="Hemat penggunaan air selama 14 hari."
                    date="Selesai pada 30 April 2025"
                    point="200"
                    badge="Water Saver"
                    badgeImage="/assets/challange/water-saver.png"
                    badgeMr="-mr-7"
                  />

                  <CompletedRow
                    image="/assets/challange/transportasi.png"
                    title="Naik Transportasi Umum"
                    desc="Gunakan transportasi umum selama 10 hari."
                    date="Selesai pada 20 April 2025"
                    point="250"
                    badge="Eco Hero"
                    badgeImage="/assets/challange/g.png"
                  />

                  <CompletedRow
                    image="/assets/challange/tanam.png"
                    title="Tanam dan Rawat Pohon"
                    desc="Tanam atau rawat pohon selama 30 hari."
                    date="Selesai pada 10 April 2025"
                    point="300"
                    badge="Earth Lover"
                    badgeMr="-mr-5"
                    badgeImage="/assets/challange/earth.png"
                  />

                  <CompletedRow
                    image="/assets/petir.png"
                    imageWidth={48}
                    imageHeight={48}
                    title="Hemat Energi di Rumah"
                    desc="Hemat penggunaan listrik selama 14 hari."
                    date="Selesai pada 5 April 2025"
                    point="200"
                    badgeMr="-mr-9"
                    badge="Energy Saver"
                    badgeImage="/assets/challange/listrik.png"
                  />
                </div>

                {/* Pencapaian Totalmu */}
                <div className="relative mt-8 rounded-[28px] bg-[#F8FBF8] px-8 py-7 overflow-hidden">
                  {/* Daun kanan atas */}
                  <Image
                    src="/assets/challange/point.png"
                    alt=""
                    width={35}
                    height={35}
                    className="absolute right-5 top-0"
                  />

                  <h3 className="mb-6 text-[20px] font-semibold text-[#11773D]">
                    Pencapaian Totalmu
                  </h3>

                  <div className="grid grid-cols-4 gap-6">
                    {/* Card 1 */}
                    <div className="flex items-center gap-5 rounded-[20px] bg-white px-7 py-7">
                      <Image
                        src="/assets/challange/point.png"
                        alt=""
                        width={52}
                        height={52}
                      />

                      <div>
                        <h4 className="text-[38px] font-semibold leading-none text-[#101828]">
                          1.250
                        </h4>

                        <p className="mt-3 text-[16px] leading-7 text-[#475467]">
                          Total Poin
                          <br />
                          Diperoleh
                        </p>
                      </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-center gap-5 rounded-[20px] bg-white px-7 py-7">
                      <Image
                        src="/assets/challange/t.png"
                        alt=""
                        width={52}
                        height={52}
                      />

                      <div>
                        <h4 className="text-[38px] font-semibold leading-none text-[#101828]">
                          8
                        </h4>

                        <p className="mt-3 text-[16px] leading-7 text-[#475467]">
                          Challenge
                          <br />
                          Selesai
                        </p>
                      </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex items-center gap-5 rounded-[20px] bg-white px-7 py-7">
                      <Image
                        src="/assets/challange/g.png"
                        alt=""
                        width={52}
                        height={52}
                      />

                      <div>
                        <h4 className="text-[38px] font-semibold leading-none text-[#101828]">
                          4
                        </h4>

                        <p className="mt-3 text-[16px] leading-7 text-[#475467]">
                          Badge
                          <br />
                          Diperoleh
                        </p>
                      </div>
                    </div>

                    {/* Card 4 */}
                    <div className="flex items-center gap-5 rounded-[20px] bg-white px-7 py-7">
                      <div className="flex h-[52px] w-[52px] items-center justify-center">
                        <FiCalendar className="h-[42px] w-[42px] text-[#16A34A]" />
                      </div>

                      <div>
                        <h4 className="text-[38px] font-semibold leading-none text-[#101828]">
                          28
                        </h4>

                        <p className="mt-3 text-[16px] leading-7 text-[#475467]">
                          Hari Aktif
                          <br />
                          Konsisten
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column (Span 1) - Static Sidebar */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Ringkasan Challenge */}
          <div className="rounded-[24px] border border-[#EAECF0] bg-white p-7 shadow-sm">
            {/* Title */}
            <h3 className="mb-10 text-[22px] font-semibold text-[#101828]">
              Ringkasan Challenge
            </h3>

            <div className="flex items-center">
              {/* Total Poin */}
              <div className="flex-1">
                <p className="mb-4 text-[16px] font-medium text-[#667085]">
                  Total Poin
                </p>

                <div className="flex items-center gap-2">
                  <span className="text-[54px] font-semibold leading-none text-[#11773D]">
                    1.250
                  </span>

                  <Image
                    src="/assets/challange/point.png"
                    alt="Leaf"
                    width={26}
                    height={26}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="mx-10 h-20 w-px bg-[#EAECF0]" />

              {/* Challenge */}
              <div className="flex-1">
                <p className="mb-4 text-[16px] font-medium text-[#667085]">
                  Challenge Selesai
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-[54px] font-semibold leading-none text-[#11773D]">
                    8
                  </span>

                  <Image
                    src="/assets/challange/t.png"
                    alt="Trophy"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Progress Mingguan */}
          <div className="rounded-[24px] border border-[#EAECF0] bg-white p-7 shadow-sm">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-[22px] font-semibold text-[#101828]">
                Progress Mingguan
              </h3>

              <button className="text-[15px] font-semibold text-[#11773D] hover:underline">
                Lihat Detail
              </button>
            </div>

            {/* Total */}
            <div className="mb-1 flex items-center gap-2">
              <span className="text-[54px] font-semibold leading-none text-[#11773D]">
                320
              </span>

              <Image
                src="/assets/challange/point.png"
                alt="Leaf"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>

            <p className="mb-8 text-[18px] font-medium text-[#667085]">Poin</p>

            {/* Chart */}
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={data}
                  margin={{
                    top: 10,
                    right: 10,
                    left: -15,
                    bottom: 10,
                  }}
                  barCategoryGap="35%"
                >
                  <defs>
                    <linearGradient id="greenBar" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8BCB5E" />
                      <stop offset="100%" stopColor="#11773D" />
                    </linearGradient>
                  </defs>

                  <CartesianGrid
                    stroke="#EAECF0"
                    vertical={false}
                    strokeDasharray=""
                  />

                  <XAxis
                    dataKey="day"
                    tick={{
                      fill: "#667085",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <YAxis
                    domain={[0, 400]}
                    ticks={[0, 100, 200, 300, 400]}
                    tick={{
                      fill: "#667085",
                      fontSize: 13,
                    }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <Bar dataKey="value" radius={[8, 8, 8, 8]} barSize={12}>
                    {data.map((_, i) => (
                      <Cell key={i} fill="url(#greenBar)" />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Badge yang Didapat */}
          <div className="rounded-[24px] border border-[#EAECF0] bg-white p-7 shadow-sm">
            {/* Header */}
            <div className="mb-10 flex items-center justify-between">
              <h3 className="text-[22px] font-semibold text-[#101828]">
                Badge yang Didapat
              </h3>

              <button className="text-[15px] font-semibold text-[#11773D] hover:underline">
                Lihat Semua
              </button>
            </div>

            {/* Badge List */}
            <div className="grid grid-cols-4 gap-8">
              {/* Eco Warrior */}
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/challange/ecowarrior.png"
                  alt="Eco Warrior"
                  width={78}
                  height={78}
                  className="mb-4 object-contain"
                />

                <p className="text-center text-[18px] font-medium text-[#344054]">
                  Eco Warrior
                </p>
              </div>

              {/* Water Saver */}
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/challange/water-saver.png"
                  alt="Water Saver"
                  width={78}
                  height={78}
                  className="mb-4 object-contain"
                />

                <p className="text-center text-[18px] font-medium text-[#344054]">
                  Water Saver
                </p>
              </div>

              {/* Green Starter */}
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/challange/green.png"
                  alt="Green Starter"
                  width={78}
                  height={78}
                  className="mb-4 object-contain"
                />

                <p className="text-center text-[18px] font-medium text-[#344054]">
                  Green Starter
                </p>
              </div>

              {/* Earth Lover */}
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/challange/earth.png"
                  alt="Earth Lover"
                  width={78}
                  height={78}
                  className="mb-4 object-contain"
                />

                <p className="text-center text-[18px] font-medium text-[#344054]">
                  Earth Lover
                </p>
              </div>
            </div>
          </div>

          {/* Tips Hari Ini */}
          <div className="relative overflow-hidden rounded-[24px] border border-[#EAECF0] bg-white p-7 shadow-sm">
            <div className="flex items-center justify-between">
              {/* Left */}
              <div className="max-w-[48%]">
                {/* Header */}
                <div className="mb-8 flex items-center gap-3">
                  <Image
                    src="/assets/challange/point.png"
                    alt="Leaf"
                    width={28}
                    height={28}
                    className="object-contain"
                  />

                  <h3 className="text-[22px] font-semibold text-[#101828]">
                    Tips Hari Ini
                  </h3>
                </div>

                {/* Content */}
                <p className="text-[18px] leading-[52px] font-medium text-[#344054]">
                  Matikan lampu saat tidak digunakan untuk menghemat energi dan
                  kurangi emisi CO₂.
                </p>
              </div>

              {/* Right Image */}
              <div className="flex items-center justify-center">
                <Image
                  src="/assets/challange/bumi.png"
                  alt="Earth"
                  width={220}
                  height={220}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Subcomponents for specific rows

function ChallengeRow({
  image,
  title,
  desc,
  progress,
  percent,
  point,
}: {
  image: string;
  title: string;
  desc: string;
  progress: string;
  percent: string;
  point: string;
}) {
  return (
    <div className="group flex items-center justify-between border-b border-[#EAECF0] py-5 transition">
      {/* Left */}
      <div className="flex flex-1 items-center gap-5">
        <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#EEF4EC]">
          <div className="relative h-[42px] w-[42px]">
            <Image src={image} alt={title} fill className="object-contain" />
          </div>
        </div>

        <div>
          <h4 className="text-[22px] font-semibold text-[#101828]">{title}</h4>

          <p className="mt-1 text-[15px] text-[#667085]">{desc}</p>
        </div>
      </div>

      {/* Progress */}
      <div className="mr-10 w-[170px]">
        <p className="mb-2 text-[15px] font-semibold text-[#11773D]">
          {progress}
        </p>

        <div className="h-[7px] rounded-full bg-[#DDE3DE]">
          <div
            className="h-full rounded-full bg-[#11773D]"
            style={{ width: percent }}
          />
        </div>
      </div>

      {/* Point */}
      <div className="mr-6 w-[70px] text-right">
        <p className="text-[24px] font-bold text-[#11773D]">{point}</p>

        <p className="text-[14px] text-[#667085]">Poin</p>
      </div>

      {/* Arrow */}
      <FaChevronRight
        size={14}
        className="text-[#98A2B3] transition group-hover:text-[#11773D]"
      />
    </div>
  );
}

type ChallengeRowDetailedProps = {
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  title: string;
  tag: string;
  tagColor: string;
  desc: string;
  progress: string;
  percent: string;
  point: string;
  badge: string;
  badgeImage: string;
};
function ChallengeRowDetailed({
  image,
  imageWidth = 70,
  imageHeight = 70,
  title,
  tag,
  tagColor,
  desc,
  progress,
  percent,
  point,
  badge,
  badgeImage,
}: ChallengeRowDetailedProps) {
  const [current, total] = progress.split("/");

  return (
    <div className="group flex items-center justify-between border-b border-[#EAECF0] py-4">
      {/* LEFT */}
      <div className="flex flex-1 items-center gap-6">
        {/* Icon */}
        <div className="flex h-[86px] w-[86px] items-center justify-center rounded-full bg-[#EEF4EC]">
          <Image
            src={image}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            className="object-contain"
          />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-[20px] font-semibold text-[#101828]">{title}</h3>

          <span
            className={`mt-2 inline-flex rounded-full px-3 py-1 text-[13px] font-semibold ${tagColor}`}
          >
            {tag}
          </span>

          <p className="mt-3 max-w-[330px] text-[15px] leading-8 text-[#667085]">
            {desc}
          </p>
        </div>
      </div>

      {/* CENTER */}
      <div className="w-[230px]">
        <div className="mb-3">
          <span className="text-[36px] font-semibold text-[#11773D]">
            {current.trim()}
          </span>

          <span className="ml-2 text-[18px] font-medium text-[#667085]">
            / {total.trim()}
          </span>
        </div>

        <div className="h-[6px] rounded-full bg-[#DDE3DE]">
          <div
            className="h-full rounded-full bg-[#11773D]"
            style={{ width: percent }}
          />
        </div>

        <div className="mt-4 flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/challange/point.png"
              alt=""
              width={18}
              height={18}
            />

            <span className="text-[18px] font-semibold text-[#11773D]">
              {point}
            </span>

            <span className="text-[15px] w-[100px] text-[#667085]">
              Eco Point
            </span>
          </div>

          <div className="flex items-center -ml-5 gap-2">
            <Image src={badgeImage} alt="" width={18} height={18} />

            <span className="text-[15px] w-[200px] font-medium text-[#475467]">
              {badge}
            </span>
          </div>
        </div>
      </div>

      {/* Arrow */}
      <button className="ml-8">
        <FiChevronRight
          size={20}
          className="text-[#98A2B3] transition-colors group-hover:text-[#11773D]"
        />
      </button>
    </div>
  );
}

type CompletedRowProps = {
  image: string;
  title: string;
  desc: string;
  date: string;
  point: string;
  badge: string;
  badgeImage: string;
  imageWidth?: number;
  imageHeight?: number;
  badgeMl?: string;
  badgeMr?: string;
};

function CompletedRow({
  image,
  title,
  desc,
  date,
  point,
  badge,
  badgeImage,
  imageWidth = 70,
  imageHeight = 70,
  badgeMl = "ml-0",
  badgeMr = "mr-0",
}: CompletedRowProps) {
  return (
    <div className="group flex items-center justify-between rounded-[20px] border border-[#EAECF0] px-6 py-5 transition hover:shadow-sm">
      {/* LEFT */}
      <div className="flex flex-1 items-center gap-6">
        <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full bg-[#EEF4EC]">
          <Image
            src={image}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            className="object-contain"
          />
        </div>

        <div>
          <h3 className="text-[20px] font-semibold text-[#101828]">{title}</h3>

          <p className="mt-2 text-[15px] text-[#667085]">{desc}</p>

          <div className="mt-3 flex items-center gap-2 text-[14px] text-[#667085]">
            <FiCalendar size={15} />
            {date}
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="mr-8 flex flex-col items-end gap-4">
        <p className="text-[26px] font-semibold text-[#11773D]">
          +{point} Poin
        </p>

        <div
          className={`flex items-center gap-2 rounded-full bg-[#F8FAF8] px-4 py-2 ${badgeMl} ${badgeMr}`}
        >
          <Image src={badgeImage} alt={badge} width={22} height={22} />

          <span className="text-[15px] font-medium text-[#475467] whitespace-nowrap">
            {badge}
          </span>
        </div>
      </div>

      {/* Arrow */}
      <button>
        <FiChevronRight
          size={20}
          className="text-[#98A2B3] transition group-hover:text-[#11773D]"
        />
      </button>
    </div>
  );
}

function StepCard({
  image,
  title,
  desc,
  imageWidth = 62,
  imageHeight = 62,
}: {
  image: string;
  title: string;
  desc: string;
  imageWidth?: number;
  imageHeight?: number;
}) {
  return (
    <div className="flex w-[170px] flex-col items-center text-center">
      <Image
        src={image}
        alt={title}
        width={imageWidth}
        height={imageHeight}
        className="mb-5 object-contain"
      />

      <h4 className="text-[16px] font-semibold text-[#101828]">{title}</h4>

      <p className="mt-2 text-[14px] leading-6 text-[#667085]">{desc}</p>
    </div>
  );
}
