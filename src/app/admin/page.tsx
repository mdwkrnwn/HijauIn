"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  FaBell,
  FaChevronDown,
  FaCheck,
  FaFire,
  FaChevronRight,
} from "react-icons/fa6";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { FiCheckSquare, FiMessageCircle, FiAward } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { CalendarDays } from "lucide-react";
import Image from "next/image";

const data = [
  { day: "Sen", eco: 60, co2: 140 },
  { day: "Sel", eco: 130, co2: 260 },
  { day: "Rab", eco: 110, co2: 280 },
  { day: "Kam", eco: 190, co2: 360 },
  { day: "Jum", eco: 80, co2: 280 },
  { day: "Sab", eco: 190, co2: 360 },
  { day: "Min", eco: 300, co2: 490 },
];

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 mx-auto -mt-5">
      <header className="lg:flex-row lg:items-center rounded-3xl relative flex flex-col items-start justify-between gap-4 p-8 overflow-hidden ">
        <div className="lg:w-1/2 z-10 w-full">
          <h1 className="mb-2 text-3xl font-bold">Halo, Dwi! 👋</h1>
          <h2 className="mb-2 text-xl font-bold">Selamat datang kembali!</h2>
          <p className=" text-base text-gray-600">
            Teruslah beraksi, karena setiap langkah kecil <br /> berdampak besar
            bagi bumi kita. 🌱
          </p>
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

        {/* Abstract Header Image Integration */}
        <div className="lg:w-1/2 absolute top-2 right-60  z-0 flex justify-end w-full h-full">
          <Image
            width={800}
            height={400}
            src="/assets/dashboard/main.png"
            alt="Nature landscape"
            className="object-cover w-full h-full rounded-l-full"
          />
        </div>
      </header>

      {/* Analytics Row 1 */}
      <div className="grid z-100 -mt-10 grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-12">
        {/* Eco Score */}
        {/* Eco Score */}
        <div className="rounded-[24px] bg-white p-7 shadow-sm xl:col-span-4">
          <div className="flex h-full">
            {/* Left */}
            <div className="flex flex-1 flex-col justify-between pr-7">
              <div className="flex items-center gap-2">
                <h3 className="text-[22px] font-semibold text-[#101828]">
                  Eco Score
                </h3>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EEF8F0]">
                  <MdOutlineEnergySavingsLeaf className="text-[#11773D] text-[18px]" />
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-[64px] font-semibold leading-none text-[#11773D]">
                  2.450
                </h2>

                <p className="mt-3 text-[18px] font-medium text-[#667085]">
                  Eco Point
                </p>

                <div className="mt-8 flex items-center gap-2 text-[18px] font-semibold text-[#11773D]">
                  <span>▲</span>
                  <span>120 dari kemarin</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="mx-2 w-px bg-[#EAECF0]" />

            {/* Right */}
            <div className="flex w-[180px] flex-col items-center justify-between pl-7">
              <div className="text-center">
                <p className="text-[18px] font-semibold text-[#667085]">
                  Level
                </p>

                <p className="mt-1 text-[20px] font-bold text-[#11773D]">
                  Eco Guardian
                </p>
              </div>

              <div className="relative mt-4">
                <Image
                  src="/assets/dashboard/ecoguardian.png"
                  alt="Eco Guardian"
                  width={90}
                  height={90}
                  className="object-contain"
                />

                <div className="absolute -bottom-2 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-[#11773D] text-[12px] font-bold text-white">
                  12
                </div>
              </div>

              <div className="mt-5 w-full">
                <div className="h-[10px] overflow-hidden rounded-full bg-[#DCE7DE]">
                  <div
                    className="h-full rounded-full bg-[#11773D]"
                    style={{ width: "76%" }}
                  />
                </div>

                <p className="mt-3 text-center text-[18px] font-semibold text-[#475467]">
                  760 / 1000 XP
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Aksi Hari Ini */}
        <div className="rounded-3xl bg-white p-6 shadow-sm xl:col-span-2">
          {/* Header */}
          <div className="mb-8 flex items-center gap-3">
            <CalendarDays
              className="h-7 w-7 text-[#11773D]"
              strokeWidth={2.2}
            />

            <h3 className="text-[22px] font-semibold text-[#101828]">
              Aksi Hari Ini
            </h3>
          </div>

          {/* Counter */}
          <div>
            <div className="flex items-end gap-2">
              <span className="text-[58px] font-bold leading-none text-[#11773D]">
                3
              </span>

              <span className="text-[58px] font-bold leading-none text-[#11773D]">
                / 5
              </span>
            </div>

            <p className="mt-3 text-[20px] font-semibold text-[#475467]">
              Selesai
            </p>

            {/* Progress */}
            <div className="mt-8 h-[10px] w-full overflow-hidden rounded-full bg-[#DFE7E2]">
              <div
                className="h-full rounded-full bg-[#11773D]"
                style={{ width: "60%" }}
              />
            </div>

            {/* Footer */}
            <p className="mt-7 text-[15px] font-medium text-[#667085]">
              Teruskan! Kamu bisa lebih hebat lagi! 💚
            </p>
          </div>
        </div>
        {/* Aksi Hari Ini */}
        <div className="rounded-[24px] bg-white p-8 shadow-sm xl:col-span-4">
          {/* Header */}
          <h3 className="mb-8 flex items-center gap-2 text-[22px] font-semibold text-[#101828]">
            <MdOutlineEnergySavingsLeaf className="text-[22px] text-[#11773D]" />
            Dampak Hari Ini
          </h3>

          {/* Content */}
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

              <p className="mt-3 text-[20px] font-bold text-[#11773D]">45 L</p>
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

              <p className="mt-3 text-[20px] font-bold text-[#11773D]">2 kWh</p>
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
        {/* Streak */}
        <div className="flex h-[320px] flex-col justify-between rounded-[24px] border border-[#EAECF0] bg-white p-7 shadow-[0_4px_20px_rgba(16,24,40,0.04)] xl:col-span-2">
          {/* Header */}
          <h3 className="flex items-center gap-2 text-[22px] font-semibold text-[#101828]">
            <FaFire className="text-[#FF8A00] text-[22px]" />
            Streak
          </h3>

          {/* Content */}
          <div className="flex items-end justify-between">
            <div className="">
              <h2 className="text-[32px] font-semibold leading-none text-[#11773D]">
                12
              </h2>

              <p className="mt-2 text-[15px] font-semibold text-[#475467]">
                Hari
              </p>

              <p className="mt-8 text-[15px] font-medium leading-9 text-[#667085]">
                Pertahankan
                <br />
                streak-mu!
              </p>
            </div>

            <Image
              src="/assets/dashboard/streak.png"
              alt="Fire"
              width={100}
              height={100}
              className="object-contain ml-3"
            />
          </div>
        </div>
      </div>

      {/* Middle Row Layout */}
      <div className="lg:grid-cols-12 grid grid-cols-1 gap-4">
        {/* Progress Mingguan */}
        <div className="h-[470px] rounded-[24px] bg-white p-8 shadow-sm lg:col-span-5 w-[580px]">
          <div className="mb-8 -mt-5 flex items-center justify-between">
            <h3 className="text-[22px] font-semibold text-[#101828]">
              Progress Mingguan
            </h3>

            <select className="rounded-xl border border-[#EAECF0] px-5 py-3 text-[16px] font-semibold text-[#344054] outline-none">
              <option>Minggu Ini</option>
            </select>
          </div>

          <div className="mb-8 flex gap-10">
            <div className="flex items-center gap-3">
              <span className="h-3 w-8 rounded-full bg-[#11773D]" />
              <span className="text-[17px] font-medium text-[#667085]">
                Eco Point
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="h-3 w-8 rounded-full bg-[#7AC943]" />
              <span className="text-[17px] font-medium text-[#667085]">
                CO₂ Dihindari (kg)
              </span>
            </div>
          </div>

          <div className="h-[280px] -ml-5">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="eco" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#11773D" stopOpacity={0.15} />
                    <stop offset="100%" stopColor="#11773D" stopOpacity={0} />
                  </linearGradient>

                  <linearGradient id="co2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7AC943" stopOpacity={0.22} />
                    <stop offset="100%" stopColor="#7AC943" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <CartesianGrid vertical={false} stroke="#F2F4F7" />

                <XAxis
                  dataKey="day"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "#667085", fontSize: 14 }}
                />

                <YAxis
                  domain={[0, 500]}
                  tickCount={6}
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "#667085", fontSize: 14 }}
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="co2"
                  stroke="#7AC943"
                  strokeWidth={3}
                  fill="url(#co2)"
                />

                <Area
                  type="monotone"
                  dataKey="eco"
                  stroke="#11773D"
                  strokeWidth={3}
                  fill="url(#eco)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Misi Hari Ini */}
        <div className="rounded-[24px] h-[470px] w-[480px] -ml-10 bg-white p-6 shadow-sm lg:col-span-4">
          {/* Header */}
          <div className="mb-5 flex items-center justify-between">
            <h3 className="text-[22px] font-semibold text-[#101828]">
              Misi Hari Ini
            </h3>

            <button className="text-[16px] font-semibold text-[#11773D]">
              Lihat Semua
            </button>
          </div>

          {/* Mission List */}
          <div className="overflow-hidden rounded-2xl border border-[#EAECF0]">
            {[
              { title: "Bawa tumbler", point: "+20", done: true },
              { title: "Matikan lampu 1 jam", point: "+20", done: true },
              { title: "Naik transportasi umum", point: "+30", done: true },
              { title: "Hemat air 20 liter", point: "+20", done: false },
              { title: "Tanam tanaman", point: "+50", done: false },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-[#EAECF0] px-5 py-4 last:border-b-0"
              >
                <div className="flex items-center gap-4">
                  {item.done ? (
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#11773D]">
                      <FaCheck className="text-[12px] text-white" />
                    </div>
                  ) : (
                    <div className="h-6 w-6 rounded-full border-2 border-[#D0D5DD]" />
                  )}

                  <span className="text-[18px] font-medium text-[#344054]">
                    {item.title}
                  </span>
                </div>

                <span className="text-[18px] font-bold text-[#11773D]">
                  {item.point}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <button className="mt-6 flex w-full items-center justify-center gap-2 text-[18px] font-semibold text-[#11773D] transition hover:gap-3">
            Lihat Semua Misi
            <FaChevronRight className="text-sm" />
          </button>
        </div>

        {/* AI Green Coach */}
        <div className="lg:col-span-3 -ml-13 flex h-[470px] flex-col rounded-[24px] bg-white p-7 shadow-sm">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-[22px] font-semibold text-[#101828]">
              AI Green Coach
            </h3>

            <span className="rounded-full bg-[#EEF8F0] px-3 py-1 text-[15px] font-semibold text-[#11773D]">
              Baru
            </span>
          </div>

          {/* Content */}
          <div className="flex flex-1 items-center gap-6">
            {/* Robot */}
            <div className="flex-shrink-0">
              <Image
                src="/assets/dashboard/ai.png"
                alt="AI Robot"
                width={120}
                height={120}
                className="object-contain -mt-20"
              />
            </div>

            {/* Right */}
            <div className="flex flex-1 flex-col">
              {/* Bubble */}
              <div className="relative rounded-[20px] -mt-8 bg-[#F8FAFC] p-6">
                <div className="absolute left-[-8px]  h-4 w-4 rotate-45 bg-[#F8FAFC]" />

                <h4 className="mb-3 text-[22px] font-bold text-[#101828]">
                  Halo Dwi! 👋
                </h4>

                <p className="text-[14px] leading-7 text-[#667085]">
                  Kemarin kamu berhasil menghemat 1,2 kg CO₂.
                </p>

                <p className=" text-[14px] leading-7 text-[#667085]">
                  Jika hari ini kamu naik transportasi umum lagi, kita bisa
                  menghemat lebih banyak emisi!
                </p>
              </div>

              {/* Button */}
              <button className="mt-2 -ml-20 flex h-[50px] items-center justify-center gap-3 rounded-[14px] bg-[#11773D] text-[20px] font-semibold text-white transition hover:bg-[#0D6433]">
                Tanya Sekarang
                <FiMessageCircle className="text-[22px]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row Layout */}
      <div className="lg:grid-cols-3 grid grid-cols-1 gap-6">
        {/* Challenge Aktif */}
        <div className="rounded-3xl p-6 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[22px] font-semibold text-[#0B0F1F]">
              Challenge Aktif
            </h3>
            <button className="text-[#11773D] flex items-center gap-1 text-base font-bold">
              Lihat Semua <FaChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-[#11773D]-light flex items-center justify-center w-44 h-44 rounded-full">
              <Image
                src="/assets/dashboard/plastic.png"
                alt="Bottle"
                className="size-40 mix-blend-multiply object-cover rounded-full mb-8 -ml-8"
                height={1000}
                width={1000}
              />
            </div>
            <div className="flex-1 -mt-8">
              <h4 className="mb-1 text-xl font-bold">30 Hari Tanpa Plastik</h4>
              <div className="mb-3 text-base font-semibold text-gray-500">
                Hari <span className="text-[#11773D] font-bold">12</span> / 30
              </div>
              <div className="w-full h-2 mb-4 bg-gray-200 rounded-full">
                <div className="bg-[#11773D] h-2 rounded-full w-[40%]"></div>
              </div>
              <div className="flex items-center gap-4 text-base font-bold text-gray-600">
                <span className="flex items-center gap-1">
                  <FaCheck className="text-success" /> 500 Eco Point
                </span>
                <span className="flex items-center gap-1">
                  <FiAward className="text-success" /> Eco Badge
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Terbaru */}
        <div className="rounded-[24px] bg-white p-7 shadow-sm">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-[22px] font-semibold text-[#101828]">
              Achievement Terbaru
            </h3>

            <button className="flex items-center gap-2 text-[17px] font-semibold text-[#11773D] transition hover:gap-3">
              Lihat Semua
              <FaArrowRight className="text-sm" />
            </button>
          </div>

          {/* Achievement */}
          <div className="grid grid-cols-4 gap-8">
            {/* Badge 1 */}
            <div className="flex flex-col items-center">
              <Image
                src="/assets/dashboard/ecowarrior.png"
                alt="Eco Warrior"
                width={95}
                height={95}
                className="object-contain"
              />

              <h4 className="mt-4 text-[15px] w-[100px] ml-5 font-semibold text-[#344054]">
                Eco Warrior
              </h4>

              <p className="mt-2 text-[16px] font-medium text-[#11773D]">
                Diperoleh
              </p>
            </div>

            {/* Badge 2 */}
            <div className="flex flex-col items-center">
              <Image
                src="/assets/dashboard/plastic-free.png"
                alt="Plastic Free"
                width={95}
                height={95}
                className="object-contain"
              />

              <h4 className="mt-4 text-[15px] w-[100px] ml-5 font-semibold text-[#344054]">
                Plastic Free
              </h4>

              <p className="mt-2 text-[16px] font-medium text-[#11773D]">
                Diperoleh
              </p>
            </div>

            {/* Badge 3 */}
            <div className="flex flex-col items-center">
              <Image
                src="/assets/dashboard/water-saver.png"
                alt="Water Saver"
                width={95}
                height={95}
                className="object-contain"
              />

              <h4 className="mt-4 text-[15px] w-[100px] ml-5 font-semibold text-[#344054]">
                Water Saver
              </h4>

              <p className="mt-2 text-[16px] font-medium text-[#667085]">80%</p>
            </div>

            {/* Badge 4 */}
            <div className="flex flex-col items-center opacity-50">
              <Image
                src="/assets/dashboard/earth.png"
                alt="Earth Lover"
                width={120}
                height={120}
                className="object-contain grayscale"
              />

              <h4 className="mt-5 text-[15px] w-[100px] ml-5 font-semibold text-[#344054]">
                Earth Lover
              </h4>

              <p className="mt-2 text-[16px] font-semibold text-[#667085]">
                40%
              </p>
            </div>
          </div>
        </div>

        {/* Aktivitas Terbaru */}
        <div className="rounded-3xl p-6 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-[#0B0F1F]">
              Aktivitas Terbaru
            </h3>
            <button className="text-[#11773D] flex items-center gap-1 text-base font-bold">
              Lihat Semua <FaChevronRight className="w-3 h-3" />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {/* Item 1 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-[#EEF8F0] p-3">
                  <Image
                    src="/assets/tumbler.png"
                    alt="Membawa Tumbler"
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <div>
                  <div className="text-base font-bold text-[#0B0F1F]">
                    Membawa tumbler
                  </div>
                  <div className="text-base text-gray-500">
                    Hari ini • 08.30
                  </div>
                </div>
              </div>

              <span className="text-success text-base font-bold">+20 poin</span>
            </div>

            {/* Item 2 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-[#F2F4F7] p-3">
                  <Image
                    src="/assets/bus.png"
                    alt="Transportasi Umum"
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <div>
                  <div className="text-base font-bold text-[#0B0F1F]">
                    Naik transportasi umum
                  </div>
                  <div className="text-base text-gray-500">
                    Hari ini • 07.45
                  </div>
                </div>
              </div>

              <span className="text-success text-base font-bold">+30 poin</span>
            </div>

            {/* Item 3 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-[#EAF6FF] p-3">
                  <Image
                    src="/assets/air.png"
                    alt="Hemat Air"
                    width={24}
                    height={24}
                    className="h-6 w-6 object-contain"
                  />
                </div>

                <div>
                  <div className="text-base font-bold text-[#0B0F1F]">
                    Hemat air 20 liter
                  </div>
                  <div className="text-base text-gray-500">Kemarin • 18.20</div>
                </div>
              </div>

              <span className="text-success text-base font-bold">+20 poin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
