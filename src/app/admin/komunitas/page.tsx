"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaPlus,
  FaChevronRight,
  FaChevronDown,
  FaChevronLeft,
  FaHeart,
  FaRegComment,
  FaRecycle,
  FaBus,
} from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { MdPark, MdCategory, MdFilterList, MdLocationOn } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import {
  FiUsers,
  FiAward,
  FiSettings,
  FiMoreHorizontal,
  FiArrowRight,
  FiChevronRight,
  FiMapPin,
  FiMoreVertical,
  FiCalendar,
} from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

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

export default function KomunitasPage() {
  const [activeTab, setActiveTab] = useState<"beranda" | "saya" | "temukan">(
    "beranda",
  );

  return (
    <div className="flex flex-col w-full gap-6 mx-auto">
      {/* Header Section */}
      {/* <header className="rounded-3xl relative flex items-center justify-between p-8 overflow-hidden bg-white shadow-sm">
        <div className="lg:w-1/2 relative z-10 w-full">
          <h1 className="flex items-center gap-2 mb-2 text-3xl font-extrabold">
            Komunitas <MdOutlineEnergySavingsLeaf className="text-[#11773D]" />
          </h1>
          <p className="text-base font-medium text-gray-600">
            Bersama komunitas, wujudkan bumi yang lebih hijau!
          </p>
        </div>
        <div className="lg:w-2/3 opacity-40 lg:opacity-100 absolute top-0 right-0 z-0 flex justify-end w-full h-full">
          <Image
            src="/assets/komunitas/hero.png"
            alt="Community Landscape"
            width={800}
            height={300}
            className="mask-image-linear-gradient object-cover w-full h-full"
            style={{ maskImage: 'linear-gradient(to right, transparent, black)' }}
          />
        </div>
      </header> */}

      {/* Main Grid Layout */}
      <div className="lg:grid-cols-3 grid grid-cols-1 gap-6">
        {/* Left Column (Span 2) - Dynamic Content */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="rounded-3xl flex flex-col flex-1 p-6 bg-white shadow-sm">
            {/* Tabs */}
            <div className="flex items-center gap-8 mb-6 overflow-x-auto border-b border-gray-100">
              <button
                onClick={() => setActiveTab("beranda")}
                className={`text-base font-bold pb-4 whitespace-nowrap border-b-2 transition-colors ${activeTab === "beranda" ? "text-[#11773D] border-[#11773D]" : "text-gray-500 border-transparent hover:text-gray-800"}`}
              >
                Beranda
              </button>
              <button
                onClick={() => setActiveTab("saya")}
                className={`text-base font-bold pb-4 whitespace-nowrap border-b-2 transition-colors ${activeTab === "saya" ? "text-[#11773D] border-[#11773D]" : "text-gray-500 border-transparent hover:text-gray-800"}`}
              >
                Komunitas Saya
              </button>
              <button
                onClick={() => setActiveTab("temukan")}
                className={`text-base font-bold pb-4 whitespace-nowrap border-b-2 transition-colors ${activeTab === "temukan" ? "text-[#11773D] border-[#11773D]" : "text-gray-500 border-transparent hover:text-gray-800"}`}
              >
                Temukan Komunitas
              </button>
            </div>

            {/* TAB CONTENT: BERANDA */}
            {activeTab === "beranda" && (
              <div className="animate-in fade-in flex flex-col gap-8 duration-300">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <BiSearch className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Cari komunitas atau topik..."
                      className="rounded-xl focus:border-[#11773D] w-full py-3 pl-12 pr-4 text-base font-semibold border border-gray-200 outline-none"
                    />
                  </div>
                  <button className="flex h-[52px] items-center gap-2 rounded-xl border border-[#11773D] bg-white px-6 text-[15px] font-semibold text-[#11773D]">
                    <FaPlus size={13} />
                    Buat Komunitas
                  </button>
                </div>

                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <h3 className="text-[24px] font-semibold text-[#101828]">
                      Komunitas Populer
                    </h3>

                    <button className="flex items-center gap-2 text-[18px] font-semibold text-[#11773D]">
                      Lihat Semua
                      <FiArrowRight size={18} />
                    </button>
                  </div>

                  <div className="flex items-center gap-5 overflow-x-auto pb-2">
                    <PopularCard
                      image="/assets/dashboard-komunitas/bumi.png"
                      title="Hijau Bersama"
                      members="12.450"
                    />

                    <PopularCard
                      image="/assets/dashboard-komunitas/tanaman.png"
                      title="Peduli Lingkungan"
                      members="8.230"
                    />

                    <PopularCard
                      image="/assets/dashboard-komunitas/sampah.png"
                      title="Zero Waste ID"
                      members="6.890"
                    />

                    <PopularCard
                      image="/assets/dashboard-komunitas/bike.png"
                      title="Go Green IDN"
                      members="5.120"
                    />

                    <PopularCard
                      image="/assets/dashboard-komunitas/pohon.png"
                      title="Tanam Pohon"
                      members="4.560"
                    />

                    {/* Arrow di luar card */}
                    <button className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#EAECF0] bg-white shadow-sm">
                      <FiChevronRight size={22} className="text-[#344054]" />
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      Postingan Terbaru
                    </h3>
                    <button className="flex items-center gap-2 px-3 py-1 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg">
                      Terbaru <FaChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-6">
                    <PostCard
                      avatar="/assets/ava1.jpg"
                      image="/assets/dashboard-komunitas/post1.png"
                      name="Sinta Ayu"
                      badge="Eco Guardian"
                      community="Hijau Bersama"
                      time="2 jam yang lalu"
                      likes="128"
                      comments="24"
                      text={
                        <>
                          Baru saja ikut aksi bersih-bersih pantai di Bali
                          bersama komunitas lokal! Seru banget bisa ketemu
                          banyak orang yang punya visi sama 🌊💚
                        </>
                      }
                    />
                    <PostCard
                      avatar="/assets/ava2.jpg"
                      image="/assets/dashboard-komunitas/post2.png"
                      name="Raka Pratama"
                      badge="Eco Hero"
                      community="Zero Waste ID"
                      time="5 jam yang lalu"
                      likes="96"
                      comments="18"
                      text={
                        <>
                          Tips simpel mengurangi plastik sekali pakai di rumah:
                          <br />
                          1. Bawa tumbler sendiri
                          <br />
                          2. Gunakan tas belanja kain
                          <br />
                          3. Pilih produk isi ulang ...
                          <span className="font-semibold text-[#11773D]">
                            {" "}
                            Selengkapnya
                          </span>
                        </>
                      }
                    />
                    <PostCard
                      avatar="/assets/ava3.jpg"
                      image="/assets/dashboard-komunitas/post3.png"
                      name="Nadia Putri"
                      badge="Eco Warrior"
                      community="Tanam Pohon"
                      time="1 hari yang lalu"
                      likes="210"
                      comments="32"
                      text={
                        <>
                          Hari ini kami menanam 100 bibit pohon di daerah
                          pegunungan 🌳
                          <br />
                          Langkah kecil untuk masa depan yang lebih hijau!
                        </>
                      }
                    />
                  </div>
                  <button className="text-[#11773D] hover:bg-gray-50 rounded-2xl flex items-center justify-center w-full gap-2 py-4 mt-4 text-base font-bold transition-colors border border-gray-200">
                    Lihat Semua Postingan
                  </button>
                </div>
              </div>
            )}

            {/* TAB CONTENT: KOMUNITAS SAYA */}
            {activeTab === "saya" && (
              <div className="animate-in fade-in flex flex-col gap-8 duration-300">
                <div className="flex items-center justify-between gap-6">
                  <div className="relative flex-1">
                    <BiSearch
                      size={18}
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-[#98A2B3]"
                    />

                    <input
                      placeholder="Cari komunitas saya..."
                      className="h-[52px] w-full rounded-xl border border-[#D0D5DD] pl-12 pr-10 text-[15px] outline-none"
                    />
                  </div>

                  <button className="flex h-[52px] items-center gap-2 rounded-xl border border-[#11773D] bg-white px-6 text-[15px] font-semibold text-[#11773D]">
                    <FaPlus size={13} />
                    Buat Komunitas
                  </button>
                </div>
                <div className="-mt-2">
                  <h2 className="text-[28px] font-semibold text-[#101828]">
                    Komunitas Saya
                  </h2>

                  <p className="mt-1 text-[15px] text-[#667085]">
                    Kelola dan pantau komunitas yang kamu ikuti atau buat.
                  </p>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-bold text-gray-800">
                    Komunitas yang Saya Ikuti
                  </h3>
                  <div className="flex flex-col gap-4">
                    <MyCommunityRow
                      image="/assets/dashboard-komunitas/bumi.png"
                      title="Hijau Bersama"
                      desc="Bersama menanam harapan, bersama menjaga bumi."
                      date="Bergabung sejak 12 Mar 2025"
                      members="12.450"
                      posts="320"
                    />

                    <MyCommunityRow
                      image="/assets/dashboard-komunitas/sampah.png"
                      title="Zero Waste ID"
                      desc="Mengurangi sampah, menciptakan masa depan berkelanjutan."
                      date="Bergabung sejak 20 Feb 2025"
                      members="6.890"
                      posts="158"
                    />

                    <MyCommunityRow
                      image="/assets/dashboard-komunitas/tanaman.png"
                      title="Peduli Lingkungan"
                      desc="Aksi kecil, dampak besar untuk lingkungan sekitar kita."
                      date="Bergabung sejak 5 Jan 2025"
                      members="8.230"
                      posts="186"
                    />

                    <MyCommunityRow
                      image="/assets/dashboard-komunitas/pohon.png"
                      title="Tanam Pohon"
                      desc="Satu pohon hari ini, sejuta oksigen untuk nanti."
                      date="Bergabung sejak 18 Apr 2025"
                      members="4.560"
                      posts="102"
                    />

                    <MyCommunityRow
                      image="/assets/dashboard-komunitas/bike.png"
                      title="Go Green"
                      desc="Gaya hidup hijau, pilihan bijak untuk bumi yang lebih baik."
                      date="Dibuat pada 10 Feb 2025"
                      members="5.120"
                      posts="97"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-bold text-gray-800">
                    Komunitas yang Saya Buat
                  </h3>
                  <div className="flex flex-col gap-4">
                    <MyCommunityRow
                      image="/assets/dashboard-komunitas/bike.png"
                      title="Go Green"
                      desc="Gaya hidup hijau, pilihan bijak untuk bumi yang lebih baik."
                      date="Dibuat pada 10 Feb 2025"
                      members="5.120"
                      posts="97"
                    />
                  </div>
                </div>

                <div className="bg-[#11773D]-light rounded-2xl flex items-center justify-between p-6 mt-4">
                  <div className="flex items-center gap-6">
                    <div className="text-[#11773D] relative flex items-center justify-center w-16 h-16 bg-white rounded-full">
                      <FiUsers className="w-8 h-8" />
                      <div className="-bottom-1 -right-1 bg-success absolute flex items-center justify-center w-6 h-6 text-white border-2 border-white rounded-full">
                        <FaPlus className="w-3 h-3" />
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-bold text-gray-800">
                        Bangun komunitasmu sendiri!
                      </h4>
                      <p className="text-base text-gray-600">
                        Ajak lebih banyak orang untuk beraksi bersama dan
                        ciptakan dampak positif yang lebih besar.
                      </p>
                    </div>
                  </div>
                  <button className="bg-[#11773D] rounded-xl hover:bg-[#11773D]-dark shrink-0 flex items-center gap-2 px-6 py-3 text-base font-bold text-white transition-colors">
                    Buat Komunitas Sekarang{" "}
                    <FaChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* TAB CONTENT: TEMUKAN KOMUNITAS */}
            {activeTab === "temukan" && (
              <div className="animate-in fade-in flex flex-col gap-8 duration-300">
                <div className="md:flex-row flex flex-col items-center gap-4">
                  <div className="relative flex-1 w-full">
                    <BiSearch className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Cari komunitas..."
                      className="rounded-xl focus:border-[#11773D] w-full py-3 pl-12 pr-4 text-base font-semibold border border-gray-200 outline-none"
                    />
                  </div>
                  <button className="md:w-auto rounded-xl flex items-center justify-between w-full gap-2 px-4 py-3 text-base font-semibold text-gray-700 bg-white border border-gray-200">
                    <MdCategory className="w-5 h-5 text-gray-400" /> Kategori{" "}
                    <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                  </button>
                  <button className="md:w-auto rounded-xl flex items-center justify-between w-full gap-2 px-4 py-3 text-base font-semibold text-gray-700 bg-white border border-gray-200">
                    <MdLocationOn className="w-5 h-5 text-gray-400" /> Lokasi{" "}
                    <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                  </button>
                  <button className="md:w-auto rounded-xl hover:bg-gray-50 flex items-center justify-between w-full gap-2 px-4 py-3 text-base font-semibold text-gray-700 transition-colors bg-white border border-gray-200">
                    <MdFilterList className="w-5 h-5" /> Filter
                  </button>
                </div>

                <div>
                  <div>
                    <h3 className="mb-5 text-[24px] font-semibold text-[#101828]">
                      Kategori Populer
                    </h3>

                    <div className="flex items-center gap-4 overflow-x-auto pb-2">
                      <CategoryCard
                        image="/assets/dashboard-komunitas/leaf.png"
                        title="Lingkungan"
                        count="1.245 komunitas"
                      />

                      <CategoryCard
                        image="/assets/dashboard-komunitas/sampah2.png"
                        title="Sampah & Daur Ulang"
                        count="987 komunitas"
                      />

                      <CategoryCard
                        image="/assets/dashboard-komunitas/energi.png"
                        title="Energi & Iklim"
                        count="876 komunitas"
                        imageWidth={34}
                        imageHeight={34}
                      />

                      <CategoryCard
                        image="/assets/dashboard-komunitas/edukasi.png"
                        title="Edukasi"
                        count="654 komunitas"
                      />

                      <CategoryCard
                        image="/assets/dashboard-komunitas/gayahidup.png"
                        title="Gaya Hidup Hijau"
                        count="1.032 komunitas"
                      />

                      <button className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#EAECF0] bg-white shadow-sm">
                        <FiChevronRight size={22} className="text-[#344054]" />
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">
                      Semua Komunitas
                    </h3>
                    <button className="flex items-center gap-2 px-3 py-1 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg">
                      Terbaru <FaChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <DiscoverRow
                      image="/assets/dashboard-komunitas/bumi.png"
                      title="Hijau Hijau Indoonesia"
                      verified
                      tag="Lingkungan"
                      tagColor="bg-[#E8F5E9] text-[#11773D]"
                      desc="Komunitas untuk berbagi tips dan aksi nyata."
                      loc="Yogyakarta, Indonesia"
                      date="Dibuat 10 Mar 2024"
                      members="5.120"
                      posts="97"
                    />

                    <DiscoverRow
                      image="/assets/dashboard-komunitas/sampah.png"
                      title="Zero Waste ID"
                      verified
                      tag="Sampah & Daur Ulang"
                      tagColor="bg-[#E8F5E9] text-[#11773D]"
                      desc="Gaya hidup hijau ini, pilihan bijak untuk bumi yang lebih baik."
                      loc="Yogyakarta, Indonesia"
                      date="Dibuat 10 Mar 2024"
                      members="5.120"
                      posts="97"
                    />

                    <DiscoverRow
                      image="/assets/dashboard-komunitas/bike.png"
                      title="Go Green"
                      verified
                      tag="Gaya Hidup Hijau"
                      tagColor="bg-[#E8F5E9] text-[#11773D]"
                      desc="Gaya hidup hijau ini, pilihan bijak untuk bumi yang lebih baik."
                      loc="Yogyakarta, Indonesia"
                      date="Dibuat 10 Mar 2024"
                      members="5.120"
                      posts="97"
                    />

                    <DiscoverRow
                      image="/assets/dashboard-komunitas/pohon.png"
                      title="Tanam Pohon"
                      verified
                      tag="Lingkungan"
                      tagColor="bg-[#E8F5E9] text-[#11773D]"
                      desc="Satu pohon hari ini, sejuta oksigen untuk nanti."
                      loc="Surabaya, Indonesia"
                      date="Dibuat 18 Apr 2024"
                      members="4.560"
                      posts="102"
                    />
                  </div>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mt-4">
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
                  <span className="mx-1 font-bold text-gray-400">...</span>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-base font-bold text-gray-600 border border-gray-200 rounded-lg">
                    10
                  </button>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-gray-600 border border-gray-200 rounded-lg">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column (Span 1) - Static Sidebar */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Ringkasan Komunitas */}
          <div className="rounded-[28px] bg-white p-8 shadow-sm">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-[24px] font-semibold text-[#101828]">
                Ringkasan Komunitas
              </h3>

              <button className="text-[18px] font-semibold text-[#11773D]">
                Lihat Detail
              </button>
            </div>

            {/* Content */}
            <div className="grid grid-cols-2">
              {/* Left */}
              <div className="pr-10">
                <p className="text-[16px] w-[500px] font-medium text-[#475467]">
                  Komunitas Bergabung
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="text-[42px] font-semibold leading-none text-[#11773D]">
                    5
                  </span>

                  <Image
                    src="/assets/dashboard-komunitas/person1.png"
                    alt="Users"
                    width={34}
                    height={34}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Divider */}
              <div className="relative pl-10">
                <div className="absolute left-0 top-1/2 h-[95px] w-px -translate-y-1/2 bg-[#EAECF0]" />

                <p className="text-[16px] font-medium text-[#475467]">
                  Total Anggota
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <span className="text-[42px] font-semibold leading-none text-[#11773D]">
                    28.450
                  </span>

                  <Image
                    src="/assets/dashboard-komunitas/person2.png"
                    alt="Users"
                    width={34}
                    height={34}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Aktivitas Komunitas */}
          <div className="rounded-[24px] border border-[#EAECF0] bg-white p-7 shadow-sm">
            {/* Header */}
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-[22px] font-semibold text-[#101828]">
                Aktivitas Komunitas
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

            <p className="mb-8 text-[18px] font-medium text-[#667085]">
              Aktivitas Minggu Ini
            </p>

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

          {/* Top Kontributor */}
          <div className="rounded-3xl p-6 bg-white shadow-sm">
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-[24px] font-semibold text-[#101828]">
                Top Kontributor
              </h3>

              <button className="text-[18px] font-semibold text-[#16A34A]">
                Lihat Semua
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <ContributorRow
                rank={1}
                avatar="/assets/ava1.jpg"
                name="Dwi Kurniawan"
                badge="Eco Guardian"
                score="2.450"
              />

              <ContributorRow
                rank={2}
                avatar="/assets/ava2.jpg"
                name="Sinta Ayu"
                badge="Eco Warrior"
                score="1.980"
              />

              <ContributorRow
                rank={3}
                avatar="/assets/ava3.jpg"
                name="Raka Pratama"
                badge="Eco Hero"
                score="1.650"
              />

              <ContributorRow
                rank={4}
                avatar="/assets/ava4.jpg"
                name="Bagas Aditya"
                badge="Eco Lover"
                score="1.250"
              />

              <ContributorRow
                rank={5}
                avatar="/assets/ava5.jpg"
                name="Maya Lestari"
                badge="Eco Starter"
                score="980"
              />
            </div>
          </div>

          {/* Komunitas yang Mungkin Kamu Suka */}
          <div className="rounded-3xl p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[17px] font-bold text-gray-800">
                Komunitas yang Mungkin Kamu Suka
              </h3>
              <button className="text-[#11773D] text-[12px] font-bold">
                Lihat Semua
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <SuggestionRow
                image="/assets/dashboard-komunitas/green.png"
                title="Green Lifestyle ID"
                members="3.210 anggota"
              />

              <SuggestionRow
                image="/assets/dashboard-komunitas/aqua.png"
                title="Clean Up Indonesia"
                members="2.890 anggota"
              />

              <SuggestionRow
                image="/assets/dashboard-komunitas/energy.png"
                title="Energy Saving"
                members="2.250 anggota"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Subcomponents

type PopularCardProps = {
  image: string;
  title: string;
  members: string;
  imageWidth?: number;
  imageHeight?: number;
};

function PopularCard({
  image,
  title,
  members,
  imageWidth = 82,
  imageHeight = 82,
}: PopularCardProps) {
  return (
    <div className="w-[170px] shrink-0 rounded-[20px] border border-[#EAECF0] bg-white px-5 py-6 text-center shadow-[0_2px_10px_rgba(16,24,40,0.04)] transition hover:shadow-md">
      {/* Ellipse */}
      <div className="mx-auto mb-5 flex h-[96px] w-[96px] items-center justify-center rounded-full bg-[#EEF4EC]">
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="object-contain"
        />
      </div>

      <h4 className="text-[20px] font-semibold leading-none text-[#101828]">
        {title}
      </h4>

      <p className="mt-5 text-[15px] text-[#667085]">{members} anggota</p>

      <button className="mt-7 h-[46px] w-full rounded-[12px] border border-[#11773D] text-[18px] font-semibold text-[#11773D] transition hover:bg-[#11773D] hover:text-white">
        Bergabung
      </button>
    </div>
  );
}
type PostCardProps = {
  avatar: string;
  name: string;
  badge: string;
  community: string;
  time: string;
  text: React.ReactNode;
  likes: string;
  comments: string;
  image: string;
};

function PostCard({
  avatar,
  name,
  badge,
  community,
  time,
  text,
  likes,
  comments,
  image,
}: PostCardProps) {
  return (
    <div className="flex items-start justify-between border-b border-[#EAECF0] py-7 last:border-b-0">
      {/* LEFT */}
      <div className="flex flex-1 gap-4">
        {/* Avatar */}
        <div className="relative h-[52px] w-[52px] shrink-0 overflow-hidden rounded-full">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center gap-3">
            <h4 className="text-[20px] font-semibold text-[#101828]">{name}</h4>

            <span className="rounded-full bg-[#E8F5E9] px-3 py-1 text-[13px] font-semibold text-[#11773D]">
              {badge}
            </span>
          </div>

          {/* Community */}
          <p className="mt-1 text-[15px] text-[#667085]">
            di <span className="font-semibold text-[#475467]">{community}</span>{" "}
            • {time}
          </p>

          {/* Text */}
          <div className="mt-4 max-w-[700px] text-[17px] leading-8 text-[#344054]">
            {text}
          </div>

          {/* Action */}
          <div className="mt-6 flex items-center gap-8">
            <button className="flex items-center gap-2 text-[#667085]">
              <FaHeart className="text-[#FF5A79]" size={16} />
              <span className="text-[15px]">{likes}</span>
            </button>

            <button className="flex items-center gap-2 text-[#667085]">
              <FaRegComment size={16} />
              <span className="text-[15px]">{comments}</span>
            </button>

            <button>
              <FaShareAlt size={16} className="text-[#667085]" />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="ml-8 flex flex-col items-end">
        <button className="mb-5">
          <FiMoreHorizontal size={20} className="text-[#667085]" />
        </button>

        <Image
          src={image}
          alt=""
          width={190}
          height={120}
          className="rounded-[12px] object-cover"
        />
      </div>
    </div>
  );
}

type MyCommunityRowProps = {
  image: string;
  title: string;
  desc: string;
  date: string;
  members: string;
  posts: string;
  imageWidth?: number;
  imageHeight?: number;
};

function MyCommunityRow({
  image,
  title,
  desc,
  date,
  members,
  posts,
  imageWidth = 68,
  imageHeight = 68,
}: MyCommunityRowProps) {
  return (
    <div className="flex items-center justify-between border-b border-[#EAECF0] py-5">
      {/* LEFT */}
      <div className="flex flex-1 items-center gap-5">
        <div className="flex h-[74px] w-[74px] items-center justify-center rounded-full bg-[#EEF4EC]">
          <Image
            src={image}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            className="object-contain"
          />
        </div>

        <div>
          <h3 className="text-[24px] font-semibold text-[#101828]">{title}</h3>

          <p className="mt-1 max-w-[360px] text-[15px] leading-7 text-[#667085]">
            {desc}
          </p>

          <div className="mt-2 flex items-center gap-2 text-[14px] text-[#667085]">
            <FiCalendar size={15} />
            {date}
          </div>
        </div>
      </div>

      {/* CENTER */}
      <div className="mr-12 flex gap-14">
        <div className="text-center">
          <h4 className="text-[30px] font-semibold leading-none text-[#11773D]">
            {members}
          </h4>

          <p className="mt-2 text-[15px] text-[#667085]">Anggota</p>
        </div>

        <div className="text-center">
          <h4 className="text-[30px] font-semibold leading-none text-[#11773D]">
            {posts}
          </h4>

          <p className="mt-2 text-[15px] text-[#667085]">Postingan</p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <button className="flex h-[46px] items-center gap-2 rounded-xl border border-[#11773D] bg-white px-5 text-[15px] font-semibold text-[#11773D] transition hover:bg-[#11773D] hover:text-white">
          <FiSettings size={16} />
          Kelola
        </button>

        <button>
          <FiMoreVertical
            size={22}
            className="text-[#475467] transition hover:text-[#11773D]"
          />
        </button>
      </div>
    </div>
  );
}

type CategoryCardProps = {
  image: string;
  title: string;
  count: string;
  imageWidth?: number;
  imageHeight?: number;
};

function CategoryCard({
  image,
  title,
  count,
  imageWidth = 40,
  imageHeight = 40,
}: CategoryCardProps) {
  return (
    <div className="flex h-[202px] min-w-[140px] flex-col items-center justify-center rounded-[18px] border border-[#EAECF0] bg-white px-4 transition hover:shadow-sm">
      {/* Ellipse */}
      <div className="mb-4 flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#EEF4EC]">
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
          className="object-contain"
        />
      </div>

      <h4 className="text-center text-[16px] font-semibold leading-6 text-[#101828]">
        {title}
      </h4>

      <p className="mt-2 text-center text-[15px] text-[#667085]">{count}</p>
    </div>
  );
}

type DiscoverRowProps = {
  image: string;
  title: string;
  verified?: boolean;
  tag: string;
  tagColor: string;
  desc: string;
  loc: string;
  date: string;
  members: string;
  posts: string;
  imageScale?: number;
  imageWidth?: number;
  imageHeight?: number;
};

function DiscoverRow({
  image,
  title,
  verified,
  tag,
  tagColor,
  desc,
  loc,
  date,
  members,
  posts,
  imageWidth = 74,
  imageHeight = 74,
  imageScale,
}: DiscoverRowProps) {
  return (
    <div className="flex items-center justify-between rounded-[20px] border border-[#EAECF0] px-6 py-6">
      {/* LEFT */}
      <div className="flex flex-1 items-center gap-6">
        <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full bg-[#EEF4EC]">
          <Image
            src={image}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            className="object-contain"
            style={{
              transform: `scale(${imageScale ?? 1})`,
            }}
          />
        </div>

        <div className="max-w-[430px]">
          <div className="flex items-center gap-2">
            <h3 className="text-[20px] font-semibold text-[#101828]">
              {title}
            </h3>

            {verified && (
              <MdVerified className="h-[18px] w-[18px] text-[#16B364]" />
            )}
          </div>

          <span
            className={`mt-2 inline-flex rounded-full px-3 py-1 text-[13px] font-semibold ${tagColor}`}
          >
            {tag}
          </span>

          <p className="mt-3 text-[13px] leading-8 text-[#475467]">{desc}</p>

          <div className="mt-4 flex items-center gap-6 text-[14px] text-[#667085]">
            <div className="flex items-center gap-2">
              <FiMapPin size={15} />
              {loc}
            </div>

            <span>•</span>

            <div className="flex items-center gap-2">
              <FiCalendar size={15} />
              {date}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="mr-8 flex items-center gap-12">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <FiUsers size={18} className="text-[#11773D]" />

            <span className="text-[25px] font-semibold text-[#101828]">
              {members}
            </span>
          </div>

          <p className="mt-2 text-[15px] text-[#667085]">Anggota</p>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <FiMessageSquare size={18} className="text-[#11773D]" />

            <span className="text-[25px] font-semibold text-[#101828]">
              {posts}
            </span>
          </div>

          <p className="mt-2 text-[15px] text-[#667085]">Postingan</p>
        </div>

        <button className="flex h-[48px] items-center rounded-xl border border-[#11773D] px-7 text-[15px] font-semibold text-[#11773D] transition hover:bg-[#11773D] hover:text-white">
          Bergabung
        </button>
      </div>
    </div>
  );
}

type ContributorRowProps = {
  rank: number;
  avatar: string;
  name: string;
  badge: string;
  score: string;
};

function ContributorRow({
  rank,
  avatar,
  name,
  badge,
  score,
}: ContributorRowProps) {
  return (
    <div className="flex items-center justify-between py-2">
      {/* LEFT */}
      <div className="flex items-center gap-5">
        {/* Rank */}
        {rank <= 3 ? (
          <Image
            src={`/assets/dashboard-komunitas/rank${rank}.png`}
            alt={`Rank ${rank}`}
            width={36}
            height={36}
            className="object-contain"
          />
        ) : (
          <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full border-2 border-[#16A34A] text-[18px] font-semibold text-[#16A34A]">
            {rank}
          </div>
        )}

        {/* Avatar */}
        <div className="relative h-[52px] w-[52px] overflow-hidden rounded-full">
          <Image src={avatar} alt={name} fill className="object-cover" />
        </div>

        {/* Name */}
        <div>
          <h4 className="text-[20px] font-semibold text-[#101828]">{name}</h4>

          <p className="mt-1 text-[16px] font-medium text-[#667085]">{badge}</p>
        </div>
      </div>

      {/* Score */}
      <div className="flex items-center gap-2">
        <span className="text-[28px] font-semibold leading-none text-[#16A34A]">
          {score}
        </span>

        <Image
          src="/assets/challange/point.png"
          alt=""
          width={22}
          height={22}
        />
      </div>
    </div>
  );
}

function SuggestionRow({
  image,
  title,
  members,
  imageWidth = 34,
  imageHeight = 34,
}: {
  image: string;
  title: string;
  members: string;
  imageWidth?: number;
  imageHeight?: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EEF4EC]">
          <Image
            src={image}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            className="object-contain"
          />
        </div>

        <div>
          <div className="text-base font-bold text-gray-800">{title}</div>
          <div className="text-base font-semibold text-gray-500">{members}</div>
        </div>
      </div>

      <button className="border border-gray-200 text-[#11773D] px-3 py-1.5 rounded-lg font-bold text-base hover:bg-[#11773D]-light transition-colors">
        Bergabung
      </button>
    </div>
  );
}
// Quick fallback for missing FaCheck to avoid breaking DiscoverRow above
const FaCheck = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);
