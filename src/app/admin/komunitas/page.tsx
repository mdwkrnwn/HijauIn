"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaPlus, FaChevronRight, FaChevronDown, FaChevronLeft,
  FaHeart, FaRegComment, FaShare, FaRecycle, FaBus
} from "react-icons/fa6";
import {
  MdOutlineEnergySavingsLeaf, MdFilterList, MdOutlineWaterDrop,
  MdPark, MdBolt, MdCategory, MdLocationOn
} from "react-icons/md";
import { FiUsers, FiAward, FiSettings, FiMoreHorizontal, FiCalendar } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";

export default function KomunitasPage() {
  const [activeTab, setActiveTab] = useState<'beranda' | 'saya' | 'temukan'>('beranda');

  return (
    <div className="flex flex-col w-full gap-6 mx-auto">

      {/* Header Section */}
      {/* <header className="rounded-3xl relative flex items-center justify-between p-8 overflow-hidden bg-white shadow-sm">
        <div className="lg:w-1/2 relative z-10 w-full">
          <h1 className="flex items-center gap-2 mb-2 text-3xl font-extrabold">
            Komunitas <MdOutlineEnergySavingsLeaf className="text-primary" />
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
                onClick={() => setActiveTab('beranda')}
                className={`text-base font-bold pb-4 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'beranda' ? 'text-primary border-primary' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
              >
                Beranda
              </button>
              <button
                onClick={() => setActiveTab('saya')}
                className={`text-base font-bold pb-4 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'saya' ? 'text-primary border-primary' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
              >
                Komunitas Saya
              </button>
              <button
                onClick={() => setActiveTab('temukan')}
                className={`text-base font-bold pb-4 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'temukan' ? 'text-primary border-primary' : 'text-gray-500 border-transparent hover:text-gray-800'}`}
              >
                Temukan Komunitas
              </button>
            </div>

            {/* TAB CONTENT: BERANDA */}
            {activeTab === 'beranda' && (
              <div className="animate-in fade-in flex flex-col gap-8 duration-300">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <BiSearch className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                    <input type="text" placeholder="Cari komunitas atau topik..." className="rounded-xl focus:border-primary w-full py-3 pl-12 pr-4 text-base font-semibold border border-gray-200 outline-none" />
                  </div>
                  <button className="bg-primary-light text-primary rounded-xl hover:bg-primary hover:text-white flex items-center gap-2 px-6 py-3 text-base font-bold transition-colors">
                    <FaPlus /> Buat Komunitas
                  </button>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">Komunitas Populer</h3>
                    <button className="text-primary flex items-center gap-1 text-base font-bold">Lihat Semua <FaChevronRight className="w-4 h-4" /></button>
                  </div>
                  <div className="flex items-center gap-4 pb-4 overflow-x-auto">
                    <PopularCard img="https://picsum.photos/id/111/80/80" title="Hijau Bersama" members="12.450" />
                    <PopularCard img="https://picsum.photos/id/112/80/80" title="Peduli Lingkungan" members="8.230" />
                    <PopularCard icon={<FaRecycle className="text-success w-10 h-10" />} title="Zero Waste ID" members="6.890" />
                    <PopularCard icon={<FaBus className="w-10 h-10 text-gray-600" />} title="Go Green" members="5.120" />
                    <PopularCard icon={<MdPark className="text-success w-10 h-10" />} title="Tanam Pohon" members="4.560" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">Postingan Terbaru</h3>
                    <button className="flex items-center gap-2 px-3 py-1 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg">
                      Terbaru <FaChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-6">
                    <PostCard
                      avatar="https://picsum.photos/id/64/50/50" name="Sinta Ayu" badge="Eco Guardian"
                      community="Hijau Bersama" time="2 jam yang lalu"
                      text="Baru saja ikut aksi bersih-bersih pantai di Bali bersama komunitas lokal! Seru banget bisa ketemu banyak orang yang punya visi sama 🌊💚"
                      likes="128" comments="24"
                      image="https://picsum.photos/id/16/600/300"
                    />
                    <PostCard
                      avatar="https://picsum.photos/id/65/50/50" name="Raka Pratama" badge="Eco Hero"
                      community="Zero Waste ID" time="5 jam yang lalu"
                      text="Tips simpel mengurangi plastik sekali pakai di rumah: 1. Bawa tumbler sendiri 2. Gunakan tas belanja kain 3. Pilih produk isi ulang ... Selengkapnya"
                      likes="96" comments="18"
                      image="https://picsum.photos/id/17/600/300"
                    />
                  </div>
                  <button className="text-primary hover:bg-gray-50 rounded-2xl flex items-center justify-center w-full gap-2 py-4 mt-4 text-base font-bold transition-colors border border-gray-200">
                    Lihat Semua Postingan
                  </button>
                </div>
              </div>
            )}

            {/* TAB CONTENT: KOMUNITAS SAYA */}
            {activeTab === 'saya' && (
              <div className="animate-in fade-in flex flex-col gap-8 duration-300">
                <div className="flex items-center gap-4">
                  <div className="relative flex-1">
                    <BiSearch className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                    <input type="text" placeholder="Cari komunitas saya..." className="rounded-xl focus:border-primary w-full py-3 pl-12 pr-4 text-base font-semibold border border-gray-200 outline-none" />
                  </div>
                  <button className="bg-primary-light text-primary rounded-xl hover:bg-primary hover:text-white flex items-center gap-2 px-6 py-3 text-base font-bold transition-colors">
                    <FaPlus /> Buat Komunitas
                  </button>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-bold text-gray-800">Komunitas yang Saya Ikuti</h3>
                  <div className="flex flex-col gap-4">
                    <MyCommunityRow img="https://picsum.photos/id/111/80/80" title="Hijau Bersama" desc="Bersama menanam harapan, bersama menjaga bumi." date="Bergabung sejak 12 Mar 2025" members="12.450" posts="320" />
                    <MyCommunityRow icon={<FaRecycle className="text-success w-8 h-8" />} title="Zero Waste ID" desc="Mengurangi sampah, menciptakan masa depan berkelanjutan." date="Bergabung sejak 20 Feb 2025" members="6.890" posts="158" />
                    <MyCommunityRow img="https://picsum.photos/id/112/80/80" title="Peduli Lingkungan" desc="Aksi kecil, dampak besar untuk lingkungan sekitar kita." date="Bergabung sejak 5 Jan 2025" members="8.230" posts="186" />
                    <MyCommunityRow icon={<MdPark className="text-success w-8 h-8" />} title="Tanam Pohon" desc="Satu pohon hari ini, sejuta oksigen untuk nanti." date="Bergabung sejak 18 Apr 2025" members="4.560" posts="102" />
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-bold text-gray-800">Komunitas yang Saya Buat</h3>
                  <div className="flex flex-col gap-4">
                    <MyCommunityRow icon={<FaBus className="w-8 h-8 text-gray-600" />} title="Go Green" desc="Gaya hidup hijau, pilihan bijak untuk bumi yang lebih baik." date="Dibuat pada 10 Feb 2025" members="5.120" posts="97" isCreator />
                  </div>
                </div>

                <div className="bg-primary-light rounded-2xl flex items-center justify-between p-6 mt-4">
                  <div className="flex items-center gap-6">
                    <div className="text-primary relative flex items-center justify-center w-16 h-16 bg-white rounded-full">
                      <FiUsers className="w-8 h-8" />
                      <div className="-bottom-1 -right-1 bg-success absolute flex items-center justify-center w-6 h-6 text-white border-2 border-white rounded-full"><FaPlus className="w-3 h-3" /></div>
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-bold text-gray-800">Bangun komunitasmu sendiri!</h4>
                      <p className="text-base text-gray-600">Ajak lebih banyak orang untuk beraksi bersama dan ciptakan dampak positif yang lebih besar.</p>
                    </div>
                  </div>
                  <button className="bg-primary rounded-xl hover:bg-primary-dark shrink-0 flex items-center gap-2 px-6 py-3 text-base font-bold text-white transition-colors">
                    Buat Komunitas Sekarang <FaChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* TAB CONTENT: TEMUKAN KOMUNITAS */}
            {activeTab === 'temukan' && (
              <div className="animate-in fade-in flex flex-col gap-8 duration-300">
                <div className="md:flex-row flex flex-col items-center gap-4">
                  <div className="relative flex-1 w-full">
                    <BiSearch className="left-4 top-1/2 absolute w-5 h-5 text-gray-400 -translate-y-1/2" />
                    <input type="text" placeholder="Cari komunitas..." className="rounded-xl focus:border-primary w-full py-3 pl-12 pr-4 text-base font-semibold border border-gray-200 outline-none" />
                  </div>
                  <button className="md:w-auto rounded-xl flex items-center justify-between w-full gap-2 px-4 py-3 text-base font-semibold text-gray-700 bg-white border border-gray-200">
                    <MdCategory className="w-5 h-5 text-gray-400" /> Kategori <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                  </button>
                  <button className="md:w-auto rounded-xl flex items-center justify-between w-full gap-2 px-4 py-3 text-base font-semibold text-gray-700 bg-white border border-gray-200">
                    <MdLocationOn className="w-5 h-5 text-gray-400" /> Lokasi <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                  </button>
                  <button className="md:w-auto rounded-xl hover:bg-gray-50 flex items-center justify-between w-full gap-2 px-4 py-3 text-base font-semibold text-gray-700 transition-colors bg-white border border-gray-200">
                    <MdFilterList className="w-5 h-5" /> Filter
                  </button>
                </div>

                <div>
                  <h3 className="mb-4 text-lg font-bold text-gray-800">Kategori Populer</h3>
                  <div className="flex items-center gap-4 pb-2 overflow-x-auto">
                    <CategoryCard icon={<MdOutlineEnergySavingsLeaf className="text-success w-8 h-8" />} title="Lingkungan" count="1.245 komunitas" />
                    <CategoryCard icon={<FaRecycle className="w-8 h-8 text-gray-600" />} title="Sampah & Daur Ulang" count="987 komunitas" />
                    <CategoryCard icon={<MdBolt className="text-warning w-8 h-8" />} title="Energi & Iklim" count="876 komunitas" />
                    <CategoryCard icon={<FiAward className="text-info w-8 h-8" />} title="Edukasi" count="654 komunitas" />
                    <CategoryCard icon={<MdOutlineWaterDrop className="text-primary w-8 h-8" />} title="Gaya Hidup Hijau" count="1.032 komunitas" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-800">Semua Komunitas</h3>
                    <button className="flex items-center gap-2 px-3 py-1 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg">
                      Terbaru <FaChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-4">
                    <DiscoverRow img="https://picsum.photos/id/111/80/80" title="Hidup Hijau Indonesia" verified tag="Lingkungan" desc="Komunitas untuk berbagi tips dan aksi nyata menuju hidup yang lebih ramah lingkungan." loc="Jakarta, Indonesia" date="Dibuat 12 Jan 2024" members="12.450" posts="320" />
                    <DiscoverRow icon={<FaRecycle className="text-success w-8 h-8" />} title="Zero Waste ID" verified tag="Sampah & Daur Ulang" desc="Kurangi sampah, mulai dari hal kecil di kehidupan sehari-hari. Bumi bersih, hidup lebih baik!" loc="Bandung, Indonesia" date="Dibuat 20 Feb 2024" members="6.890" posts="158" />
                    <DiscoverRow icon={<FaBus className="w-8 h-8 text-gray-600" />} title="Go Green" verified tag="Gaya Hidup Hijau" desc="Gaya hidup hijau ini, pilihan bijak untuk bumi yang lebih baik." loc="Yogyakarta, Indonesia" date="Dibuat 10 Mar 2024" members="5.120" posts="97" />
                    <DiscoverRow icon={<MdPark className="text-success w-8 h-8" />} title="Tanam Pohon" tag="Lingkungan" desc="Satu pohon hari ini, sejuta oksigen untuk nanti." loc="Surabaya, Indonesia" date="Dibuat 18 Apr 2024" members="4.560" posts="102" />
                  </div>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center gap-2 mt-4">
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-gray-400 border border-gray-200 rounded-lg"><FaChevronLeft /></button>
                  <button className="bg-primary flex items-center justify-center w-10 h-10 text-base font-bold text-white rounded-lg">1</button>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-base font-bold text-gray-600 border border-gray-200 rounded-lg">2</button>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-base font-bold text-gray-600 border border-gray-200 rounded-lg">3</button>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-base font-bold text-gray-600 border border-gray-200 rounded-lg">4</button>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-base font-bold text-gray-600 border border-gray-200 rounded-lg">5</button>
                  <span className="mx-1 font-bold text-gray-400">...</span>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-base font-bold text-gray-600 border border-gray-200 rounded-lg">10</button>
                  <button className="hover:bg-gray-50 flex items-center justify-center w-10 h-10 text-gray-600 border border-gray-200 rounded-lg"><FaChevronRight /></button>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Right Column (Span 1) - Static Sidebar */}
        <div className="lg:col-span-1 flex flex-col gap-6">

          {/* Ringkasan Komunitas */}
          <div className="rounded-3xl p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800">Ringkasan Komunitas</h3>
              <button className="text-primary text-base font-bold">Lihat Detail</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="mb-2 text-base font-bold text-gray-500">Komunitas Bergabung</div>
                <div className="text-success flex items-center gap-2 text-3xl font-black">
                  5 <FiUsers className="w-6 h-6" />
                </div>
              </div>
              <div>
                <div className="mb-2 text-base font-bold text-gray-500">Total Anggota</div>
                <div className="flex items-center gap-2 text-3xl font-black text-gray-800">
                  28.450 <FiUsers className="text-success w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Aktivitas Komunitas */}
          <div className="rounded-3xl p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Aktivitas Komunitas</h3>
              <button className="text-primary text-base font-bold">Lihat Detail</button>
            </div>
            <div className="text-primary flex items-center gap-2 mb-1 text-3xl font-black">
              320 <MdOutlineEnergySavingsLeaf className="w-5 h-5" />
            </div>
            <div className="mb-6 text-base font-bold text-gray-500">Aktivitas Minggu Ini</div>

            <div className="relative flex items-end justify-between h-48 gap-2 px-2 pt-4 pb-1 border-b border-l border-gray-200">
              <div className="absolute -left-7.5 bottom-1 flex flex-col justify-between h-full text-base text-gray-400 font-semibold text-right">
                <span>250</span><span>200</span><span>150</span><span>100</span><span>50</span><span>0</span>
              </div>

              <div className="bg-success w-full rounded-t-sm" style={{ height: '30%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '60%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '45%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '45%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '100%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '80%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '45%' }}></div>
            </div>
            <div className="flex justify-between px-2 mt-3 text-base font-semibold text-gray-500">
              <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span>
            </div>
          </div>

          {/* Top Kontributor */}
          <div className="rounded-3xl p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800">Top Kontributor</h3>
              <button className="text-primary text-base font-bold">Lihat Semua</button>
            </div>
            <div className="flex flex-col gap-4">
              <ContributorRow rank={1} avatar="https://picsum.photos/id/1005/50/50" name="Dwi Kurniawan" badge="Eco Guardian" score="2.450" />
              <ContributorRow rank={2} avatar="https://picsum.photos/id/64/50/50" name="Sinta Ayu" badge="Eco Warrior" score="1.980" />
              <ContributorRow rank={3} avatar="https://picsum.photos/id/65/50/50" name="Raka Pratama" badge="Eco Hero" score="1.650" />
              <ContributorRow rank={4} avatar="https://picsum.photos/id/66/50/50" name="Bagas Aditya" badge="Eco Lover" score="1.250" />
              <ContributorRow rank={5} avatar="https://picsum.photos/id/67/50/50" name="Maya Lestari" badge="Eco Starter" score="980" />
            </div>
          </div>

          {/* Komunitas yang Mungkin Kamu Suka */}
          <div className="rounded-3xl p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800">Komunitas yang Mungkin Kamu Suka</h3>
              <button className="text-primary text-base font-bold">Lihat Semua</button>
            </div>
            <div className="flex flex-col gap-4">
              <SuggestionRow icon={<MdOutlineWaterDrop className="text-info w-6 h-6" />} bg="bg-info/20" title="Clean Up Indonesia" members="2.890 anggota" />
              <SuggestionRow icon={<MdOutlineEnergySavingsLeaf className="text-success w-6 h-6" />} bg="bg-success/20" title="Green Lifestyle ID" members="3.210 anggota" />
              <SuggestionRow icon={<MdBolt className="text-warning w-6 h-6" />} bg="bg-warning/20" title="Energy Saving" members="2.250 anggota" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Subcomponents

function PopularCard({ img, icon, title, members }: { img?: string, icon?: React.ReactNode, title: string, members: string }) {
  return (
    <div className="rounded-2xl min-w-40 hover:border-primary flex flex-col items-center justify-center p-4 transition-colors border border-gray-100 cursor-pointer">
      <div className="bg-gray-50 flex items-center justify-center w-20 h-20 mb-3 overflow-hidden rounded-full">
        {img ? <Image src={img} alt={title} width={80} height={80} className="object-cover w-full h-full" /> : icon}
      </div>
      <div className="mb-1 text-base font-bold text-center text-gray-800">{title}</div>
      <div className="mb-3 text-base text-gray-500">{members} anggota</div>
      <button className="border-primary text-primary hover:bg-primary hover:text-white w-full py-2 text-base font-bold transition-colors border rounded-lg">
        Bergabung
      </button>
    </div>
  );
}

function PostCard({ avatar, name, badge, community, time, text, likes, comments, image }: {
  avatar: string,
  name: string,
  badge: string,
  community: string,
  time: string,
  text: string,
  likes: string,
  comments: string,
  image: string
}) {
  return (
    <div className="rounded-2xl p-5 border border-gray-100">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <Image src={avatar} alt={name} width={48} height={48} className="object-cover w-12 h-12 rounded-full" />
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-lg font-bold text-gray-800">{name}</h4>
              <span className="bg-primary-light text-primary text-base px-2 py-0.5 rounded-full font-bold">{badge}</span>
            </div>
            <div className="text-base text-gray-500">di <span className="font-bold text-gray-700">{community}</span> • {time}</div>
          </div>
        </div>
        <button className="hover:text-gray-600 text-gray-400"><FiMoreHorizontal className="w-6 h-6" /></button>
      </div>
      <p className="mb-4 text-base leading-relaxed text-gray-800">{text}</p>
      {image && (
        <div className="rounded-xl relative h-64 mb-4 overflow-hidden">
          <Image src={image} alt="Post Content" fill className="object-cover" />
        </div>
      )}
      <div className="flex items-center gap-6 pt-2">
        <button className="hover:text-danger flex items-center gap-2 text-base font-bold text-gray-500 transition-colors">
          <FaHeart className="text-danger w-5 h-5" /> {likes}
        </button>
        <button className="hover:text-primary flex items-center gap-2 text-base font-bold text-gray-500 transition-colors">
          <FaRegComment className="w-5 h-5" /> {comments}
        </button>
        <button className="hover:text-primary flex items-center gap-2 text-base font-bold text-gray-500 transition-colors">
          <FaShare className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

function MyCommunityRow({ img, icon, title, desc, date, members, posts, isCreator = false }: {
  img?: string,
  icon?: React.ReactNode,
  title: string,
  desc: string,
  date: string,
  members: string,
  posts: string,
  isCreator?: boolean
}) {
  return (
    <div className="rounded-2xl hover:shadow-md flex items-center justify-between p-4 transition-shadow border border-gray-100">
      <div className="flex items-center flex-1 gap-4">
        <div className="bg-gray-50 shrink-0 flex items-center justify-center w-20 h-20 overflow-hidden rounded-full">
          {img ? <Image src={img} alt={title} width={80} height={80} className="object-cover w-full h-full" /> : icon}
        </div>
        <div className="flex-1 pr-4">
          <div className="mb-1 text-xl font-bold text-gray-800">{title}</div>
          <div className="mb-2 text-base text-gray-600">{desc}</div>
          <div className="flex items-center gap-2 text-base font-semibold text-gray-500">
            <FiCalendar /> {date}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="text-center">
          <div className="text-success text-xl font-black">{members}</div>
          <div className="text-base text-gray-500">Anggota</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-black text-gray-800">{posts}</div>
          <div className="text-base text-gray-500">Postingan</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="border-primary text-primary hover:bg-primary-light flex items-center gap-2 px-4 py-2 text-base font-bold transition-colors border rounded-lg">
            <FiSettings /> Kelola
          </button>
          <button className="hover:text-gray-600 p-2 text-gray-400"><FiMoreHorizontal className="w-6 h-6" /></button>
        </div>
      </div>
    </div>
  );
}

function CategoryCard({ icon, title, count }: { icon: React.ReactNode, title: string, count: string }) {
  return (
    <div className="rounded-2xl min-w-45 hover:border-primary flex flex-col items-center justify-center p-4 transition-colors bg-white border border-gray-100 cursor-pointer">
      <div className="bg-gray-50 flex items-center justify-center w-16 h-16 mb-3 rounded-full">
        {icon}
      </div>
      <div className="mb-1 text-lg font-bold text-center text-gray-800">{title}</div>
      <div className="text-base text-center text-gray-500">{count}</div>
    </div>
  );
}

function DiscoverRow({ img, icon, title, verified, tag, desc, loc, date, members, posts }: {
  img?: string,
  icon?: React.ReactNode,
  title: string,
  verified?: boolean,
  tag: string,
  desc: string,
  loc: string,
  date: string,
  members: string,
  posts: string
}) {
  return (
    <div className="rounded-2xl hover:shadow-md flex items-center justify-between p-5 transition-shadow border border-gray-100">
      <div className="flex items-start flex-1 gap-4">
        <div className="bg-gray-50 shrink-0 flex items-center justify-center w-24 h-24 overflow-hidden rounded-full">
          {img ? <Image src={img} alt={title} width={96} height={96} className="object-cover w-full h-full" /> : icon}
        </div>
        <div className="flex-1 pr-4">
          <div className="flex items-center gap-3 mb-1">
            <h4 className="text-xl font-bold text-gray-800">{title}</h4>
            {verified && <span className="bg-success p-1 text-white rounded-full"><FaCheck className="w-3 h-3" /></span>}
          </div>
          <div className="mb-2 inline-block bg-primary-light text-primary text-base px-3 py-0.5 rounded-full font-bold">{tag}</div>
          <div className="mb-3 text-base text-gray-600">{desc}</div>
          <div className="flex items-center gap-6 text-base font-semibold text-gray-500">
            <span className="flex items-center gap-1"><MdLocationOn className="w-5 h-5" /> {loc}</span>
            <span className="flex items-center gap-1"><FiCalendar className="w-5 h-5" /> {date}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div className="text-center">
          <div className="flex items-center gap-1 text-xl font-black text-gray-800"><FiUsers className="text-success" /> {members}</div>
          <div className="text-base text-gray-500">Anggota</div>
        </div>
        <div className="text-center">
          <div className="flex items-center gap-1 text-xl font-black text-gray-800"><FaRegComment className="text-primary" /> {posts}</div>
          <div className="text-base text-gray-500">Postingan</div>
        </div>
        <button className="border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 text-base font-bold transition-colors border rounded-lg">
          Bergabung
        </button>
      </div>
    </div>
  );
}

function ContributorRow({ rank, avatar, name, badge, score }: {
  rank: number,
  avatar: string,
  name: string,
  badge: string,
  score: string
}) {
  const rankColors = ["bg-warning text-white", "bg-gray-300 text-gray-700", "bg-orange-400 text-white"];
  const badgeClass = rank <= 3 ? rankColors[rank - 1] : "bg-gray-100 text-gray-600 border border-gray-200";

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-base ${badgeClass}`}>
          {rank}
        </div>
        <Image src={avatar} alt={name} width={40} height={40} className="object-cover w-10 h-10 rounded-full" />
        <div>
          <div className="text-base font-bold text-gray-800">{name}</div>
          <div className="text-success text-base font-semibold">{badge}</div>
        </div>
      </div>
      <div className="flex items-center gap-1 text-base font-bold text-gray-800">
        {score} <MdOutlineEnergySavingsLeaf className="text-success" />
      </div>
    </div>
  );
}

function SuggestionRow({ icon, bg, title, members }: {
  icon: React.ReactNode,
  bg: string,
  title: string,
  members: string
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bg}`}>
          {icon}
        </div>
        <div>
          <div className="text-base font-bold text-gray-800">{title}</div>
          <div className="text-base font-semibold text-gray-500">{members}</div>
        </div>
      </div>
      <button className="border border-gray-200 text-primary px-3 py-1.5 rounded-lg font-bold text-base hover:bg-primary-light transition-colors">
        Bergabung
      </button>
    </div>
  );
}

// Quick fallback for missing FaCheck to avoid breaking DiscoverRow above
const FaCheck = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);