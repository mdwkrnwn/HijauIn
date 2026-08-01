// src/app/edukasi/page.tsx
"use client";
import Image from "next/image";
import {
  FaSearch,
  FaLeaf,
  FaRecycle,
  FaTint,
  FaTree,
  FaPlayCircle,
  FaCheckCircle,
  FaClock,
  FaEye,
  FaBolt,
  FaCalendarAlt,
  FaHeart,
  FaLock,
  FaChevronRight,
} from "react-icons/fa";
import Link from "next/link";
import { articles } from "@/app/data/edukasi";
import { SubmitEvent, useState } from "react";
import { useRouter } from "next/navigation";

const topics = [
  {
    icon: <FaRecycle className="text-[#11773D] text-sm" />,
    label: "Sampah & Daur Ulang",
  },
  {
    icon: <FaBolt className="text-yellow-500 text-sm" />,
    label: "Hemat Energi",
  },
  {
    icon: <FaTint className="text-sky-500 text-sm" />,
    label: "Hemat Air",
  },
  {
    icon: <FaLeaf className="text-[#11773D] text-sm" />,
    label: "Gaya Hidup Hijau",
  },
  {
    icon: <FaTree className="text-green-700 text-sm" />,
    label: "Konservasi Alam",
  },
];

const videos = [
  {
    img: "/assets/edukasi/energi.png",
    title: "Energi Terbarukan untuk\nMasa Depan",
    dur: "06:45",
    views: "1.4K ditonton",
  },
  {
    img: "/assets/edukasi/3r.png",
    title: "3R: Reduce, Reuse,\nRecycle",
    dur: "05:30",
    views: "2.3K ditonton",
  },
  {
    img: "/assets/edukasi/caramenanampohon.png",
    title: "Cara Menanam Pohon\ndengan Benar",
    dur: "07:12",
    views: "1.9K ditonton",
  },
  {
    img: "/assets/edukasi/laut.png",
    title: "Lindungi Laut, Lindungi\nKehidupan",
    dur: "04:58",
    views: "1.8K ditonton",
  },
];
const categories = [
  {
    icon: "/assets/edukasi/daur.png",
    name: "Sampah & Daur Ulang",
    count: "24 artikel",
  },
  {
    icon: "/assets/petir.png",
    name: "Hemat Energi",
    count: "18 artikel",
  },
  {
    icon: "/assets/air.png",
    name: "Hemat Air",
    count: "16 artikel",
  },
  {
    icon: "/assets/edukasi/tanaman.png",
    name: "Gaya Hidup Hijau",
    count: "32 artikel",
  },
  {
    icon: "/assets/beranda/pohon.png",
    name: "Konservasi Alam",
    count: "21 artikel",
  },
  {
    icon: "/assets/edukasi/love.png",
    name: "Kesehatan Lingkungan",
    count: "14 artikel",
  },
];

const infographics = [
  {
    img: "/assets/edukasi/kak.png",
    title: "Jejak Karbon",
    desc: "Apa itu dan bagaimana\n menguranginya?",
    views: "1.2K dilihat",
    bg: "bg-[#f0fdf4]",
  },
  {
    img: "/assets/edukasi/air.png",
    title: "Hemat Air",
    desc: "Mulai dari hal kecil\n di rumah",
    views: "980 dilihat",
    bg: "bg-[#f0f9ff]",
  },
  {
    img: "/assets/edukasi/daur.png",
    title: "Daur Ulang",
    desc: "Proses sederhana,\n dampak luar biasa",
    views: "1.5K dilihat",
    bg: "bg-[#f7fee7]",
  },
  {
    img: "/assets/edukasi/pohon.png",
    title: "Manfaat Menanam Pohon",
    desc: "Untuk bumi yang\n lebih baik",
    views: "1.8K dilihat",
    bg: "bg-[#ecfdf5]",
  },
];

export default function EdukasiUtama() {
  const [search, setSearch] = useState("");

  const filteredArticles = articles.filter((item) => {
    const keyword = search.toLowerCase();

    const content = item.content
      .map((c) => {
        if ("text" in c) return c.text;
        return "";
      })
      .join(" ")
      .toLowerCase();

    return (
      item.title.toLowerCase().includes(keyword) ||
      item.desc.toLowerCase().includes(keyword) ||
      item.tag.toLowerCase().includes(keyword) ||
      content.includes(keyword)
    );
  });
  const router = useRouter();
  function searchEdukasi(event: SubmitEvent<HTMLFormElement>): void {
    event.preventDefault();
    router.push("/edukasi/" + search);
  }

  return (
    <div className="flex flex-col items-center w-full gap-12">
      {/* Hero Section */}
      <section className="relative mx-auto mt-25 flex w-full items-center justify-between overflow-hidden px-16">
        {/* Left Content */}
        <div
          className="z-10 mb-30 flex w-[55%] flex-col justify-center"
          data-aos="fade-right"
        >
          {/* Badge */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#F2FAF3] px-3 py-1.5 text-base font-semibold text-[#11773D]"
          >
            <FaLeaf className="text-base" />
            Edukasi Hijau
          </div>

          {/* Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="mb-6 text-[60px] font-bold leading-[1.08] tracking-tight text-[#0B0F1F]"
          >
            Belajar, Peduli,
            <br />
            Aksi <span className="text-[#11773D]">untuk Bumi</span>
          </h1>

          {/* Description */}
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mb-8 max-w-130 text-lg leading-9 text-gray-500"
          >
            Temukan berbagai artikel, panduan, dan tips seputar lingkungan untuk
            menambah wawasan dan menginspirasi aksi positif setiap hari.
          </p>

          {/* Search */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="mb-8 flex h-12 max-w-125 items-center rounded-[14px] border border-[#D9EFD8] bg-white p-1 shadow-sm"
          >
            <form
              className="flex h-12 w-full items-center"
              onSubmit={searchEdukasi}
            >
              <input
                type="text"
                name="searchEdukasi"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Cari artikel, topik, atau panduan..."
                className="flex-1 bg-transparent px-4 text-[14px] text-[#0B0F1F] placeholder:text-[#A7B0B5] focus:outline-none"
              />

              <button className="flex h-12 w-12.5 -mr-1 items-center justify-center rounded-[10px] bg-[#11773D] text-white transition hover:bg-[#0E6534]">
                <FaSearch className="text-[14px]" />
              </button>
            </form>
          </div>

          {/* Popular */}
          <p
            data-aos="fade-up"
            data-aos-delay="500"
            className="mb-4 text-base font-semibold text-[#0B0F1F]"
          >
            Topik Populer
          </p>

          {/* Topics */}
          <div className="flex flex-wrap gap-3">
            {topics.map((topic, index) => (
              <button
                key={index}
                data-aos="zoom-in"
                data-aos-delay={600 + index * 100}
                className="flex h-13.75 items-center gap-2 rounded-full border border-gray-100 bg-[#F4F7F4] px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#11773D] hover:bg-[#F2FAF3] hover:text-[#11773D]"
              >
                {topic.icon}
                <span>{topic.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div
          className="relative mb-20 flex w-[45%] items-center justify-end"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <Image
            src="/assets/edukasi/hero.png"
            alt="Education Hero"
            width={650}
            height={650}
            className="h-auto w-full object-contain"
            priority
          />
        </div>
      </section>

      {/* Rekomendasi untuk Kamu */}
      <section className="mx-auto w-full px-16">
        <div
          className="mb-12 flex items-end justify-between"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="text-3xl font-bold text-[#0B0F1F]">
            Rekomendasi untuk Kamu <FaLeaf className="inline text-[#11773D]" />
          </h2>

          <button className="flex items-center gap-2 text-lg font-bold text-[#11773D] transition hover:gap-3 hover:underline">
            Lihat Semua
            <FaChevronRight className="text-base" />
          </button>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-4 gap-6">
            {filteredArticles.map((item, index) => (
              <Link
                key={item.id}
                href={`/edukasi/${item.slug}`}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                data-aos-duration="800"
                className="group block cursor-pointer overflow-hidden rounded-[18px] border border-[#E8ECEA] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-[#CFEEC6] px-3 py-1 text-xs font-semibold text-[#3E8D2F]">
                    {item.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 whitespace-pre-line text-[22px] font-bold leading-tight text-[#0B0F1F]">
                    {item.title}
                  </h3>

                  <p className="mb-5 flex-1 text-sm leading-6 text-[#667085]">
                    {item.desc}
                  </p>

                  <div className="flex items-center justify-between border-t border-[#EEF2F1] pt-4 text-xs font-medium text-[#6B7280]">
                    <span className="flex items-center gap-1.5">
                      <FaClock className="text-[11px] text-[#7CB342]" />
                      {item.readTime}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-[11px] text-[#7CB342]" />
                      {item.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-[24px] border border-dashed border-[#D9E5DD] bg-[#F8FBF9] py-20">
            <h3 className="text-2xl font-bold text-[#0B0F1F]">
              Artikel tidak ditemukan
            </h3>

            <p className="mt-2 max-w-md text-center text-[#667085]">
              Tidak ada artikel yang sesuai dengan kata kunci <b>"{search}"</b>.
              Coba gunakan kata kunci lain.
            </p>
          </div>
        )}
      </section>

      {/* Kategori Edukasi */}
      <section className="w-full bg-white">
        <div className=" mx-auto px-16">
          {/* Header */}
          <div
            className="mb-8 flex items-center justify-between"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2 className="flex items-center gap-1 text-[30px] font-bold text-[#0B0F1F]">
              Kategori Edukasi
              <FaLeaf className="text-lg text-[#11773D]" />
            </h2>

            <button className="flex items-center gap-1 text-sm font-semibold text-[#11773D] transition-all duration-300 hover:gap-2">
              Lihat Semua Kategori
              <FaChevronRight className="text-[11px]" />
            </button>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-6 gap-5">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                data-aos="zoom-in-up"
                data-aos-delay={idx * 100}
                data-aos-duration="700"
                className="group flex h-47.5 cursor-pointer flex-col items-center justify-center rounded-[18px] border border-[#EEF2F1] bg-[#F5F8F6] px-5 py-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#11773D]/20 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#F2F8F3] transition-all duration-300 group-hover:bg-[#E6F5E9]">
                  <Image
                    src={cat.icon}
                    alt={cat.name}
                    width={48}
                    height={48}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Category Name */}
                <h3 className="mb-2 min-h-10 text-[15px] font-semibold leading-5 text-[#0B0F1F]">
                  {cat.name}
                </h3>

                {/* Count */}
                <p className="text-[13px] font-medium text-[#11773D]">
                  {cat.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Edukasi Pilihan */}
      <section className=" mx-auto w-full px-16">
        {/* Header */}
        <div
          className="mb-8 flex items-center justify-between"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="flex items-center gap-1 text-[30px] font-bold text-[#0B0F1F]">
            Video Edukasi Pilihan
            <FaLeaf className="text-lg text-[#11773D]" />
          </h2>

          <button className="flex items-center gap-1 text-sm font-semibold text-[#11773D] transition-all duration-300 hover:gap-2">
            Lihat Semua
            <FaChevronRight className="text-[11px]" />
          </button>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-4 gap-6">
          {videos.map((vid, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              data-aos-duration="800"
              className="group h-85 cursor-pointer overflow-hidden rounded-[18px] bg-[#F7F9F6] transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Thumbnail */}
              <div className="relative h-48.75 overflow-hidden rounded-[18px]">
                <Image
                  src={vid.img}
                  alt={vid.title}
                  fill
                  className="rounded-[18px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/15 transition-all duration-300 group-hover:bg-black/25">
                  <FaPlayCircle className="text-[38px] text-white/90 drop-shadow-md transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Duration */}
                <div className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-semibold text-white">
                  {vid.dur}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-3 whitespace-pre-line text-[18px] font-bold leading-[1.35] text-[#0B0F1F]">
                  {vid.title}
                </h3>

                <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#7A8A81]">
                  <FaCheckCircle className="text-[11px] text-[#8BC34A]" />
                  {vid.views}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Infografis Populer */}
      <section className="mx-auto w-full px-16">
        {/* Header */}
        <div
          className="mb-8 flex items-center justify-between"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="flex items-center gap-1 text-[30px] font-bold text-[#0B0F1F]">
            Infografis Populer
            <FaLeaf className="text-lg text-[#11773D]" />
          </h2>

          <button className="flex items-center gap-1 text-sm font-semibold text-[#11773D] transition-all duration-300 hover:gap-2">
            Lihat Semua
            <FaChevronRight className="text-[11px]" />
          </button>
        </div>

        {/* Infographic Grid */}
        <div className="grid grid-cols-4 gap-5">
          {infographics.map((info, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              data-aos-duration="800"
              className={`${info.bg} group relative h-52.5 cursor-pointer overflow-hidden rounded-[18px] border border-[#E9F0EA] p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg`}
            >
              {/* Content */}
              <div className="relative z-10 w-[45%]">
                <h3 className="mb-3 text-[18px] font-bold leading-tight text-[#0B0F1F]">
                  {info.title}
                </h3>

                <p className="mb-6 whitespace-pre-line text-[13px] leading-relaxed text-gray-600">
                  {info.desc}
                </p>

                <div className="flex items-center gap-1 text-[11px] font-medium text-[#7A8A81]">
                  <FaEye className="text-[10px] text-[#8BC34A]" />
                  {info.views}
                </div>
              </div>

              {/* Image */}
              <div className="absolute bottom-5 right-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={info.img}
                  alt={info.title}
                  width={170}
                  height={170}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      {/* Newsletter */}
      <section className=" mx-auto w-full px-16">
        <div
          className="relative flex h-57.5 items-center overflow-hidden rounded-[22px] border border-[#E8EFE9] bg-linear-to-r from-[#F7FBF8] via-white to-[#F4FAF6] px-10 shadow-sm"
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          {/* Left */}
          <div
            className="w-[36%]"
            data-aos="fade-right"
            data-aos-delay="100"
            data-aos-duration="800"
          >
            <h2 className="mb-4 text-[24px] font-bold leading-[1.35] text-[#0B0F1F]">
              Terus Belajar, Terus Beraksi
              <br />
              untuk Bumi yang <span className="text-[#11773D]">Lebih Baik</span>
            </h2>

            <p className="text-[15px] leading-7 text-[#667085]">
              Dapatkan artikel terbaru, tips menarik, dan informasi edukasi
              <br />
              langsung ke email kamu.
              <FaLeaf className="ml-1 inline text-[13px] text-[#11773D]" />
            </p>
          </div>

          {/* Center */}
          <div
            className="flex w-[34%] flex-col justify-center"
            data-aos="fade-up"
            data-aos-delay="250"
            data-aos-duration="800"
          >
            <div className="flex h-13 overflow-hidden rounded-xl border border-[#E4E7EC] bg-white shadow-sm">
              <input
                type="email"
                placeholder="Masukkan email kamu"
                className="flex-1 px-5 text-[14px] outline-none"
              />

              <button className="bg-[#11773D] px-6 text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-[#0E6534]">
                Berlangganan
              </button>
            </div>

            <p className="mt-3 flex items-center gap-2 text-[12px] text-[#667085]">
              <FaLock className="text-[#11773D]" />
              Kami tidak akan membagikan email kamu ke pihak lain.
            </p>
          </div>

          {/* Right */}
          <div
            className="mt-10 flex w-[30%] justify-end self-end"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="900"
          >
            <Image
              src="/assets/edukasi/belajar.png"
              alt="Newsletter"
              width={300}
              height={280}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
