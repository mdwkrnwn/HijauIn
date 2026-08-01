"use client";

import { useState } from "react";
import {
  FaChevronRight, FaChevronDown, FaChevronLeft, FaBus, FaRecycle
} from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import {
  MdOutlineEnergySavingsLeaf, MdOutlineWaterDrop, MdPark, MdBolt, MdFilterList
} from "react-icons/md";
import { FiAward, FiTarget, FiCalendar } from "react-icons/fi";
import { FaFire } from "react-icons/fa";
import Image from "next/image";

export default function ChallengePage() {
  const [activeTab, setActiveTab] = useState<'aktif' | 'semua' | 'selesai'>('aktif');

  return (
    <div className="flex flex-col w-full gap-6 mx-auto">

      {/* Header Section */}
      {/* <header className="rounded-3xl relative flex items-center justify-between p-8 overflow-hidden bg-white shadow-sm">
        <div className="lg:w-1/2 relative z-10 w-full">
          <h1 className="flex items-center gap-2 mb-2 text-3xl font-extrabold">
            Challenge <MdOutlineEnergySavingsLeaf className="text-primary" />
          </h1>
          <p className="text-base font-medium text-gray-600">
            Ikuti challenge seru dan raih poin serta badge spesial!
          </p>
        </div>
        <div className="lg:w-2/3 absolute top-0 right-0 z-0 flex justify-end w-full h-full">
          <Image
            src="/assets/challange/main.png"
            alt="Eco Trophy Landscape"
            width={1539}
            height={400}
            className="object-contain"
          />
        </div>
      </header> */}

      {/* Main Grid Layout */}
      <div className="lg:grid-cols-3 grid grid-cols-1 gap-6">

        {/* Left Column (Span 2) - Dynamic Content */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Main Content Card */}
          <div className="rounded-3xl flex flex-col flex-1 p-6 bg-white shadow-sm">

            {/* Tabs */}
            <div className="flex items-center gap-8 mb-6 overflow-x-auto border-b border-gray-100">
              <button
                onClick={() => setActiveTab('aktif')}
                className={`text-base font-bold pb-4 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'aktif' ? 'text-primary border-primary' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
              >
                Challenge Aktif
              </button>
              <button
                onClick={() => setActiveTab('semua')}
                className={`text-base font-bold pb-4 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'semua' ? 'text-primary border-primary' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
              >
                Semua Challenge
              </button>
              <button
                onClick={() => setActiveTab('selesai')}
                className={`text-base font-bold pb-4 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'selesai' ? 'text-primary border-primary' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
              >
                Selesai
              </button>
            </div>

            {/* TAB CONTENT: AKTIF */}
            {activeTab === 'aktif' && (
              <div className="animate-in fade-in flex flex-col gap-8 duration-300">
                {/* Active Highlight */}
                <div className="rounded-2xl lg:flex-row flex flex-col items-center gap-8 p-6 border border-gray-100">
                  <div className="bg-primary-light shrink-0 flex items-center justify-center w-32 h-32 overflow-hidden rounded-full relative">
                    <Image fill src="https://picsum.photos/id/400/120/120" alt="Bottle" className="mix-blend-multiply object-cover w-full h-full" />
                  </div>
                  <div className="flex-1 w-full">
                    <span className="bg-primary-light text-primary inline-block px-3 py-1 mb-3 text-base font-bold rounded-full">Tantangan Aktif</span>
                    <h2 className="mb-2 text-2xl font-bold text-gray-800">30 Hari Tanpa Plastik</h2>
                    <p className="mb-4 text-base text-gray-600">Kurangi penggunaan plastik sekali pakai selama 30 hari berturut-turut.</p>
                  </div>
                  <div className="lg:w-1/3 flex flex-col w-full gap-3">
                    <div className="flex justify-between text-base font-bold text-gray-800">
                      <span className="text-primary text-xl">12</span>
                      <span className="text-gray-400">/ 30 Hari</span>
                    </div>
                    <div className="w-full h-3 bg-gray-200 rounded-full">
                      <div className="bg-primary h-3 rounded-full w-[40%]"></div>
                    </div>
                    <div className="flex items-center gap-4 mt-1 text-base font-bold text-gray-600">
                      <span className="flex items-center gap-1"><MdOutlineEnergySavingsLeaf className="text-success" /> 500 Eco Point</span>
                      <span className="flex items-center gap-1"><FiAward className="text-success" /> Eco Warrior</span>
                    </div>
                    <div className="bg-warning/10 text-warning w-max inline-flex items-center gap-2 px-3 py-2 mt-2 text-base font-bold rounded-lg">
                      12 Hari Berturut-turut <FaFire />
                    </div>
                  </div>
                </div>

                {/* Challenge Lainnya List */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">Challenge Lainnya</h3>
                    <button className="text-primary flex items-center gap-1 text-base font-bold">Lihat Semua <FaChevronRight className="w-4 h-4" /></button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <ChallengeRow icon={<MdOutlineWaterDrop className="text-info w-6 h-6" />} bg="bg-info/20" title="Hemat Air Setiap Hari" desc="Hemat penggunaan air selama 14 hari." progress="8 / 14 Hari" percent="57%" point="200" />
                    <ChallengeRow icon={<FaBus className="w-6 h-6 text-gray-600" />} bg="bg-gray-100" title="Naik Transportasi Umum" desc="Gunakan transportasi umum selama 10 hari." progress="6 / 10 Hari" percent="60%" point="250" />
                    <ChallengeRow icon={<FaRecycle className="text-success w-6 h-6" />} bg="bg-success/20" title="Pilah Sampah di Rumah" desc="Pilah sampah organik dan anorganik selama 7 hari." progress="5 / 7 Hari" percent="71%" point="150" />
                    <ChallengeRow icon={<MdPark className="text-success w-6 h-6" />} bg="bg-success/20" title="Tanam dan Rawat Pohon" desc="Tanam atau rawat pohon selama 30 hari." progress="10 / 30 Hari" percent="33%" point="300" />
                    <ChallengeRow icon={<MdBolt className="text-warning w-6 h-6" />} bg="bg-warning/20" title="Hemat Energi di Rumah" desc="Hemat penggunaan listrik selama 14 hari." progress="7 / 14 Hari" percent="50%" point="200" />
                  </div>
                </div>

                {/* Cara Kerja */}
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="mb-6 text-lg font-bold text-gray-800">Cara Kerja Challenge</h3>
                  <div className="md:flex-row flex flex-col items-center justify-between gap-4 text-center">
                    <StepCard icon={<FiTarget className="text-primary w-8 h-8" />} title="1. Pilih Challenge" desc="Pilih challenge yang kamu ingin ikuti." />
                    <FaChevronRight className="md:block hidden w-6 h-6 text-gray-300" />
                    <StepCard icon={<MdOutlineEnergySavingsLeaf className="w-8 h-8 text-white" />} iconBg="bg-primary" title="2. Lakukan Aksi" desc="Lakukan aksi hijau sesuai target challenge." />
                    <FaChevronRight className="md:block hidden w-6 h-6 text-gray-300" />
                    <StepCard icon={<FiAward className="text-primary w-8 h-8" />} title="3. Dapatkan Poin" desc="Setiap aksi yang tervalidasi memberi poin." />
                    <FaChevronRight className="md:block hidden w-6 h-6 text-gray-300" />
                    <StepCard icon={<FiAward className="text-primary w-8 h-8" />} title="4. Raih Reward" desc="Selesaikan challenge dan raih reward spesial!" />
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: SEMUA */}
            {activeTab === 'semua' && (
              <div className="animate-in fade-in flex flex-col gap-6 duration-300">
                {/* Filters */}
                <div className="md:flex-row flex flex-col items-center gap-4">
                  <button className="md:w-auto rounded-xl flex items-center justify-between w-full gap-2 px-4 py-3 text-base font-semibold text-gray-700 bg-white border border-gray-200">
                    <MdFilterList className="w-5 h-5 text-gray-500" /> Semua Kategori <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                  </button>
                  <div className="relative flex-1 w-full">
                    <BiSearch className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                    <input type="text" placeholder="Cari challenge..." className="rounded-xl focus:border-primary w-full py-3 pl-12 pr-4 text-base font-semibold border border-gray-200 outline-none" />
                  </div>
                  <button className="md:w-auto rounded-xl flex items-center justify-between w-full gap-2 px-4 py-3 text-base font-semibold text-gray-700 bg-white border border-gray-200">
                    Terbaru <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                  </button>
                </div>

                {/* Extended List */}
                <div className="flex flex-col gap-4">
                  <ChallengeRowDetailed iconImg="https://picsum.photos/id/400/80/80" tag="Kebiasaan" title="30 Hari Tanpa Plastik" desc="Kurangi penggunaan plastik sekali pakai selama 30 hari berturut-turut." progress="12 / 30 Hari" percent="40%" point="500" badge="Eco Warrior" badgeColor="text-success" />
                  <ChallengeRowDetailed icon={<MdOutlineWaterDrop className="text-info w-8 h-8" />} tag="Penghematan" title="Hemat Air Setiap Hari" desc="Hemat penggunaan air selama 14 hari." progress="8 / 14 Hari" percent="57%" point="200" badge="Water Saver" badgeColor="text-gray-800" />
                  <ChallengeRowDetailed icon={<FaBus className="w-8 h-8 text-gray-600" />} tag="Transportasi" title="Naik Transportasi Umum" desc="Gunakan transportasi umum selama 10 hari." progress="6 / 10 Hari" percent="60%" point="250" badge="Eco Hero" badgeColor="text-success" />
                  <ChallengeRowDetailed icon={<FaRecycle className="text-success w-8 h-8" />} tag="Lingkungan" title="Pilah Sampah di Rumah" desc="Pilah sampah organik dan anorganik selama 7 hari." progress="5 / 7 Hari" percent="71%" point="150" badge="Green Starter" badgeColor="text-gray-800" />
                  <ChallengeRowDetailed icon={<MdPark className="text-success w-8 h-8" />} tag="Lingkungan" title="Tanam dan Rawat Pohon" desc="Tanam atau rawat pohon selama 30 hari." progress="10 / 30 Hari" percent="33%" point="300" badge="Earth Lover" badgeColor="text-gray-800" />
                  <ChallengeRowDetailed icon={<MdBolt className="text-warning w-8 h-8" />} tag="Penghematan" title="Hemat Energi di Rumah" desc="Hemat penggunaan listrik selama 14 hari." progress="7 / 14 Hari" percent="50%" point="200" badge="Energy Saver" badgeColor="text-gray-800" />
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-gray-400 border border-gray-200 rounded-lg"><FaChevronLeft /></button>
                  <button className="bg-primary flex items-center justify-center w-10 h-10 text-base font-bold text-white rounded-lg">1</button>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-base font-bold text-gray-600 border border-gray-200 rounded-lg">2</button>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-base font-bold text-gray-600 border border-gray-200 rounded-lg">3</button>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-base font-bold text-gray-600 border border-gray-200 rounded-lg">4</button>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-base font-bold text-gray-600 border border-gray-200 rounded-lg">5</button>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-gray-600 border border-gray-200 rounded-lg"><FaChevronRight /></button>
                </div>
              </div>
            )}

            {/* TAB CONTENT: SELESAI */}
            {activeTab === 'selesai' && (
              <div className="animate-in fade-in flex flex-col h-full gap-6 duration-300">
                <div>
                  <h3 className="mb-1 text-xl font-bold text-gray-800">Challenge yang Telah Selesai</h3>
                  <p className="mb-6 text-base text-gray-600">Terus konsisten! Setiap langkah kecil membawa perubahan besar.</p>
                </div>

                <div className="flex flex-col flex-1 gap-4">
                  <CompletedRow icon={<FaRecycle className="text-success w-8 h-8" />} title="Pilah Sampah di Rumah" desc="Pilah sampah organik dan anorganik selama 7 hari." date="Selesai pada 12 Mei 2025" point="150" badge="Green Starter" />
                  <CompletedRow icon={<MdOutlineWaterDrop className="text-info w-8 h-8" />} title="Hemat Air Setiap Hari" desc="Hemat penggunaan air selama 14 hari." date="Selesai pada 30 April 2025" point="200" badge="Water Saver" />
                  <CompletedRow icon={<FaBus className="w-8 h-8 text-gray-600" />} title="Naik Transportasi Umum" desc="Gunakan transportasi umum selama 10 hari." date="Selesai pada 20 April 2025" point="250" badge="Eco Hero" />
                  <CompletedRow icon={<MdPark className="text-success w-8 h-8" />} title="Tanam dan Rawat Pohon" desc="Tanam atau rawat pohon selama 30 hari." date="Selesai pada 10 April 2025" point="300" badge="Earth Lover" />
                  <CompletedRow icon={<MdBolt className="text-warning w-8 h-8" />} title="Hemat Energi di Rumah" desc="Hemat penggunaan listrik selama 14 hari." date="Selesai pada 5 April 2025" point="200" badge="Energy Saver" />
                </div>

                {/* Pencapaian Totalmu */}
                <div className="pt-8 mt-8 border-t border-gray-100">
                  <h3 className="text-primary mb-4 text-lg font-bold">Pencapaian Totalmu</h3>
                  <div className="md:grid-cols-4 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl flex items-center justify-between p-4 border border-gray-100">
                      <div>
                        <div className="text-2xl font-black text-gray-800">1.250</div>
                        <div className="text-base font-semibold text-gray-500">Total Poin Diperoleh</div>
                      </div>
                      <MdOutlineEnergySavingsLeaf className="text-primary w-8 h-8" />
                    </div>
                    <div className="rounded-2xl flex items-center justify-between p-4 border border-gray-100">
                      <div>
                        <div className="text-2xl font-black text-gray-800">8</div>
                        <div className="text-base font-semibold text-gray-500">Challenge Selesai</div>
                      </div>
                      <FiAward className="text-success w-8 h-8" />
                    </div>
                    <div className="rounded-2xl flex items-center justify-between p-4 border border-gray-100">
                      <div>
                        <div className="text-2xl font-black text-gray-800">4</div>
                        <div className="text-base font-semibold text-gray-500">Badge Diperoleh</div>
                      </div>
                      <FiAward className="text-primary w-8 h-8" />
                    </div>
                    <div className="rounded-2xl flex items-center justify-between p-4 border border-gray-100">
                      <div>
                        <div className="text-2xl font-black text-gray-800">28</div>
                        <div className="text-base font-semibold text-gray-500">Hari Aktif Konsisten</div>
                      </div>
                      <FiCalendar className="text-success w-8 h-8" />
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
          <div className="rounded-3xl p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800">Ringkasan Challenge</h3>
              <button className="text-primary text-base font-bold">Lihat Detail</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="mb-2 text-base font-bold text-gray-500">Total Poin</div>
                <div className="text-primary flex items-center gap-2 text-3xl font-black">
                  1.250 <MdOutlineEnergySavingsLeaf className="w-5 h-5" />
                </div>
              </div>
              <div>
                <div className="mb-2 text-base font-bold text-gray-500">Challenge Selesai</div>
                <div className="flex items-center gap-2 text-3xl font-black text-gray-800">
                  8 <FiAward className="text-success w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Progress Mingguan */}
          <div className="rounded-3xl p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Progress Mingguan</h3>
              <button className="text-primary text-base font-bold">Lihat Detail</button>
            </div>
            <div className="text-primary flex items-center gap-2 mb-1 text-3xl font-black">
              320 <MdOutlineEnergySavingsLeaf className="w-5 h-5" />
            </div>
            <div className="mb-6 text-base font-bold text-gray-500">Poin</div>

            {/* Chart Simulation */}
            <div className="relative flex items-end justify-between h-48 gap-2 px-2 pt-4 pb-1 border-b border-l border-gray-200">
              {/* Y-axis labels */}
              <div className="absolute -left-7.5 bottom-1 flex flex-col justify-between h-full text-base text-gray-400 font-semibold text-right">
                <span>400</span><span>300</span><span>200</span><span>100</span><span>0</span>
              </div>

              {/* Bars */}
              <div className="bg-success w-full rounded-t-sm" style={{ height: '35%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '60%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '45%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '55%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '90%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '80%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '40%' }}></div>
            </div>
            <div className="flex justify-between px-2 mt-3 text-base font-semibold text-gray-500">
              <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span>
            </div>
          </div>

          {/* Badge yang Didapat */}
          <div className="rounded-3xl p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800">Badge yang Didapat</h3>
              <button className="text-primary text-base font-bold">Lihat Semua</button>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="flex flex-col items-center">
                <Image width={60} height={60} src="https://picsum.photos/id/111/60/60" alt="Badge 1" className="w-14 h-14 rounded-xl border-primary object-cover mb-2 border-2" />
                <div className="text-base font-bold leading-tight text-gray-800">Eco Warrior</div>
              </div>
              <div className="flex flex-col items-center">
                <Image width={60} height={60} src="https://picsum.photos/id/112/60/60" alt="Badge 2" className="w-14 h-14 rounded-xl border-primary object-cover mb-2 border-2" />
                <div className="text-base font-bold leading-tight text-gray-800">Water Saver</div>
              </div>
              <div className="flex flex-col items-center">
                <Image width={60} height={60} src="https://picsum.photos/id/113/60/60" alt="Badge 3" className="w-14 h-14 rounded-xl border-primary object-cover mb-2 border-2" />
                <div className="text-base font-bold leading-tight text-gray-800">Green Starter</div>
              </div>
              <div className="flex flex-col items-center">
                <Image width={60} height={60} src="https://picsum.photos/id/114/60/60" alt="Badge 4" className="w-14 h-14 rounded-xl object-cover mb-2 border-2 border-gray-800" />
                <div className="text-base font-bold leading-tight text-gray-800">Earth Lover</div>
              </div>
            </div>
          </div>

          {/* Tips Hari Ini */}
          <div className="rounded-3xl relative p-6 overflow-hidden bg-white shadow-sm">
            <h3 className="flex items-center gap-2 mb-4 text-lg font-bold text-gray-800">
              <MdOutlineEnergySavingsLeaf className="text-primary" /> Tips Hari Ini
            </h3>
            <p className="relative z-10 w-2/3 text-base text-gray-600">
              Matikan lampu saat tidak digunakan untuk menghemat energi dan kurangi emisi CO₂.
            </p>
            <div className="-right-5 -bottom-5 opacity-90 absolute z-0 w-32 h-32">
              <Image src="https://picsum.photos/id/321/150/150" alt="Earth Globe" width={150} height={150} className="object-cover w-full h-full rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Subcomponents for specific rows

function ChallengeRow({ icon, bg, title, desc, progress, percent, point }: { icon: any, bg: string, title: string, desc: string, progress: string, percent: string, point: string }) {
  return (
    <div className="rounded-2xl hover:shadow-md group flex items-center justify-between p-4 transition-shadow border border-gray-100 cursor-pointer">
      <div className="flex items-center flex-1 gap-4">
        <div className={`${bg} p-4 rounded-full`}>{icon}</div>
        <div className="flex-1">
          <div className="text-lg font-bold text-gray-800">{title}</div>
          <div className="mb-2 text-base text-gray-500">{desc}</div>
        </div>
      </div>
      <div className="w-1/3 mx-4">
        <div className="flex justify-between mb-1 text-base font-bold text-gray-600">
          <span>{progress}</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div className="bg-success h-2 rounded-full" style={{ width: percent }}></div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-right">
          <div className="text-success text-lg font-bold">{point}</div>
          <div className="text-base text-gray-400">Poin</div>
        </div>
        <FaChevronRight className="group-hover:text-primary w-5 h-5 text-gray-300 transition-colors" />
      </div>
    </div>
  );
}

function ChallengeRowDetailed({ iconImg, icon, tag, title, desc, progress, percent, point, badge, badgeColor }: { iconImg?: string, icon?: any, tag: string, title: string, desc: string, progress: string, percent: string, point: string, badge: string, badgeColor: string }) {
  return (
    <div className="rounded-2xl hover:shadow-md group flex items-center justify-between p-4 transition-shadow border border-gray-100 cursor-pointer">
      <div className="flex items-center flex-1 gap-4">
        <div className="bg-gray-50 shrink-0 flex items-center justify-center w-20 h-20 overflow-hidden rounded-full">
          {iconImg ? <Image width={64} height={64} src={iconImg} alt="icon" className="mix-blend-multiply object-cover w-16 h-16" /> : icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-1">
            <h4 className="text-xl font-bold text-gray-800">{title}</h4>
            <span className="bg-primary-light text-primary text-base px-3 py-0.5 rounded-full font-bold inline-block">{tag}</span>
          </div>
          <div className="text-base text-gray-500">{desc}</div>
        </div>
      </div>
      <div className="w-1/4 mx-6">
        <div className="flex justify-between mb-2 text-base font-bold text-gray-800">
          <span>{progress}</span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full">
          <div className="bg-primary h-3 rounded-full" style={{ width: percent }}></div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="flex items-center gap-1 text-lg font-bold text-gray-800"><MdOutlineEnergySavingsLeaf className="text-success" /> {point} Eco Point</div>
          </div>
          <div className="flex items-center gap-1 text-base font-bold text-right text-gray-800">
            <FiAward className={badgeColor} /> {badge}
          </div>
        </div>
        <FaChevronRight className="group-hover:text-primary w-5 h-5 text-gray-300 transition-colors" />
      </div>
    </div>
  );
}

function CompletedRow({ icon, title, desc, date, point, badge }: { icon: any, title: string, desc: string, date: string, point: string, badge: string }) {
  return (
    <div className="rounded-2xl hover:shadow-md group flex items-center justify-between p-5 transition-shadow border border-gray-100 cursor-pointer">
      <div className="flex items-center flex-1 gap-4">
        <div className="bg-gray-50 shrink-0 flex items-center justify-center w-16 h-16 rounded-full">
          {icon}
        </div>
        <div>
          <div className="mb-1 text-xl font-bold text-gray-800">{title}</div>
          <div className="mb-2 text-base text-gray-500">{desc}</div>
          <div className="flex items-center gap-2 text-base font-semibold text-gray-500">
            <FiCalendar /> {date}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <div className="text-success text-xl font-black">+{point} Poin</div>
        <div className="bg-gray-50 rounded-xl flex items-center gap-2 px-4 py-2 text-base font-bold text-gray-800 border border-gray-100">
          <FiAward className="text-primary w-5 h-5" /> {badge}
        </div>
      </div>
      <FaChevronRight className="group-hover:text-primary w-5 h-5 ml-6 text-gray-300 transition-colors" />
    </div>
  );
}

function StepCard({ icon, iconBg = "bg-primary-light", title, desc }: { icon: any, iconBg?: string, title: string, desc: string }) {
  return (
    <div className="max-w-50 flex flex-col items-center">
      <div className={`w-16 h-16 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <div className="mb-2 text-base font-bold text-gray-800">{title}</div>
      <div className="text-base text-gray-500">{desc}</div>
    </div>
  );
}