// src/app/edukasi/page.tsx
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
  FaHeart,
  FaLock,
  FaChevronRight,
} from "react-icons/fa";

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
  return (
    <div className="flex flex-col items-center w-full pb-24 bg-white">
      {/* Hero Section */}
      <section className="max-w-1080p relative flex items-center justify-between w-full px-16 py-24 mx-auto overflow-hidden">
        {/* Left Content */}
        <div className="z-10 flex w-[55%] mb-30 flex-col justify-center">
          {/* Badge */}
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#F2FAF3] px-3 py-1.5 text-sm font-semibold text-[#11773D]">
            <FaLeaf className="text-xs" />
            Edukasi Hijau
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-[60px] font-bold leading-[1.08] tracking-tight text-[#0B0F1F]">
            Belajar, Peduli,
            <br />
            Aksi <span className="text-[#11773D]">untuk Bumi</span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-[520px] text-lg leading-9 text-gray-500">
            Temukan berbagai artikel, panduan, dan tips seputar lingkungan untuk
            menambah wawasan dan menginspirasi aksi positif setiap hari.
          </p>

          {/* Search */}
          <div className="mb-8 flex max-w-[500px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <input
              placeholder="Cari artikel, topik, atau panduan..."
              className="flex-1 px-6 text-base outline-none"
            />

            <button className="flex h-14 w-14 items-center justify-center bg-[#] text-white">
              <FaSearch />
            </button>
          </div>

          {/* Popular */}
          <p className="mb-4 text-base font-semibold text-[#0B0F1F]">Topik Populer</p>

          <div className="flex flex-wrap gap-3">
            {topics.map((topic, index) => (
              <button
                key={index}
                className="flex items-center h-[55px] gap-2 rounded-full border border-gray-100 bg-[#F4F7F4] px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-[#] hover:bg-[#]-light hover:text-[#]"
              >
                {topic.icon}
                <span>{topic.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Content - Circular Hero Image */}
        <div className="relative flex w-[45%] items-center mb-20 justify-end">
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
      <section className="max-w-1080p w-full px-16 py-16 mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-3xl font-bold text-[#0B0F1F]">
            Rekomendasi untuk Kamu <FaLeaf className="text-[#11773D] inline" />
          </h2>
          <button className="text-[#11773D] hover:underline flex items-center gap-2 text-lg font-bold">
            Lihat Semua <FaChevronRight className="text-base" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              img: "/assets/edukasi/edu1.png",
              tag: "Edukasi",
              title: "Mengenal Jenis Sampah\n dan Cara Mengelolanya",
              desc: "Memahami jenis sampah adalah langkah awal untuk mengelola sampah dengan benar.",
              time: "5 menit baca",
              view: "1.2K dibaca",
            },
            {
              img: "/assets/edukasi/edu2.png",
              tag: "Panduan",
              title: "10 Cara Hemat Energi\n di Rumah",
              desc: "Langkah sederhana yang bisa kamu lakukan untuk menghemat energi setiap hari.",
              time: "4 menit baca",
              view: "980 dibaca",
            },
            {
              img: "/assets/edukasi/edu3.png",
              tag: "Tips",
              title: "Kurangi Plastik Sekali Pakai\n dalam 7 Hari",
              desc: "Tantangan 7 hari untuk mengurangi penggunaan plastik sekali pakai.",
              time: "3 menit baca",
              view: "2.1K dibaca",
            },
            {
              img: "/assets/edukasi/edu4.png",
              tag: "Edukasi",
              title: "Pentingnya Menjaga\n Ekosistem Laut",
              desc: "Laut adalah sumber kehidupan. Yuk, jaga bersama kelestariannya!",
              time: "6 menit baca",
              view: "1.6K dibaca",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-[18px] border border-[#E8ECEA] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-full bg-[#CFEEC6] px-3 py-1 text-xs font-semibold text-[#3E8D2F]">
                  {item.tag}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 whitespace-pre-line text-[22px] font-bold leading-[1.25] text-[#0B0F1F]">
                  {item.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-6 text-[#667085]">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between border-t border-[#EEF2F1] pt-4 text-xs font-medium text-[#6B7280]">
                  <span className="flex items-center gap-1.5">
                    <FaClock className="text-[11px] text-[#7CB342]" />
                    {item.time}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <FaEye className="text-[11px] text-[#7CB342]" />
                    {item.view}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kategori Edukasi */}
      <section className="bg-white w-full py-24">
        <div className="max-w-1080p px-16 mx-auto">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="flex items-center gap-1 text-[30px] font-bold text-[#0B0F1F]">
              Kategori Edukasi
              <FaLeaf className="text-[#11773D] text-lg" />
            </h2>

            <button className="flex items-center gap-1 text-sm font-semibold text-[#11773D] transition hover:gap-2">
              Lihat Semua Kategori
              <FaChevronRight className="text-[11px]" />
            </button>
          </div>
          <div className="grid grid-cols-6 gap-5">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="group flex h-[190px] cursor-pointer flex-col items-center justify-center rounded-[18px] border border-[#EEF2F1] bg-[#F5F8F6] px-5 py-6 text-center  transition-all duration-300 hover:-translate-y-1 hover:border-[#11773D]/20 hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F2F8F3]">
                  <Image
                    src={cat.icon}
                    alt={cat.name}
                    width={200}
                    height={200}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mb-2 text-[15px] font-semibold leading-5 text-[#0B0F1F]">
                  {cat.name}
                </h3>

                <p className="text-[13px] font-medium text-[#11773D]">
                  {cat.count}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Edukasi Pilihan */}
      <section className="max-w-1080p w-full px-16 py-24 mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="flex items-center gap-1 text-[30px] font-bold text-[#0B0F1F]">
            Video Edukasi Pilihan
            <FaLeaf className="text-[#11773D] text-lg" />
          </h2>

          <button className="flex items-center gap-1 text-sm font-semibold text-[#11773D] transition hover:gap-2">
            Lihat Semua
            <FaChevronRight className="text-[11px]" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-6 ">
          {videos.map((vid, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-[18px] h-[340px]  bg-[#F7F9F6]  transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer"
            >
              <div className="relative h-[195px] overflow-hidden  rounded-[18px]">
                <Image
                  src={vid.img}
                  alt="image"
                  fill
                  className="object-cover transition duration-500 rounded-3xl  group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/15 transition group-hover:bg-black/25">
                  <FaPlayCircle className="text-[38px] text-white/90 drop-shadow-md transition group-hover:scale-110" />
                </div>

                {/* Duration */}
                <div className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-semibold text-white">
                  {vid.dur}
                </div>
              </div>

              <div className="p-4"> </div>

              <h3 className="ml-5 mb-3 whitespace-pre-line text-[18px] font-bold leading-[1.35] text-[#0B0F1F]">
                {vid.title}
              </h3>

              <div className="flex items-center  ml-5 gap-1.5 text-[12px] font-medium text-[#7A8A81]">
                <FaCheckCircle className="text-[11px] text-[#8BC34A]" />
                {vid.views}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Infografis Populer */}
      <section className="max-w-1080p w-full px-16 pb-24 mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="flex items-center gap-1 text-[30px] font-bold text-[#0B0F1F]">
            Infografis Populer
            <FaLeaf className="text-[#11773D] text-lg" />
          </h2>

          <button className="flex items-center gap-1 text-sm font-semibold text-[#11773D] transition hover:gap-2">
            Lihat Semua
            <FaChevronRight className="text-[11px]" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {infographics.map((info, idx) => (
            <div
              key={idx}
              className={`${info.bg} group relative h-[210px] overflow-hidden rounded-[18px] border border-[#E9F0EA] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer`}
            >
              <div className="relative z-10 w-[45%]">
                <h3 className="mb-3 text-[18px] font-bold leading-tight text-[#0B0F1F]">
                  {info.title}
                </h3>

                <p className="mb-6 text-[13px] whitespace-pre-line leading-relaxed text-gray-600">
                  {info.desc}
                </p>

                <div className="flex items-center gap-1 text-[11px] font-medium text-[#7A8A81]">
                  <FaEye className="text-[10px] text-[#8BC34A]" />
                  {info.views}
                </div>
              </div>

              {/* Image */}
              <div className="absolute right-0 bottom-5 transition-transform duration-300 group-hover:scale-105">
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
      <section className="max-w-1080p w-full px-16 pb-24 mx-auto">
        <div className="relative flex h-[230px] items-center overflow-hidden rounded-[22px] border border-[#E8EFE9] bg-gradient-to-r from-[#F7FBF8] via-white to-[#F4FAF6] px-10 shadow-sm">
          {/* Left */}
          <div className="w-[36%]">
            <h2 className="mb-4 text-[24px] font-bold leading-[1.35] text-[#0B0F1F]">
              Terus Belajar, Terus Beraksi
              <br />
              untuk Bumi yang <span className="text-[#11773D]">Lebih Baik</span>
            </h2>

            <p className="text-[15px] leading-7 text-[#667085]">
              Dapatkan artikel terbaru, tips menarik, dan informasi edukasi <br />
              langsung ke email kamu.
              <FaLeaf className="ml-1 inline text-[13px] text-[#11773D]" />
            </p>
          </div>

          {/* Center */}
          <div className="flex w-[34%] flex-col justify-center">
            <div className="flex h-[52px] overflow-hidden rounded-xl border border-[#E4E7EC] bg-white shadow-sm">
              <input
                type="email"
                placeholder="Masukkan email kamu"
                className="flex-1 px-5 text-[14px] outline-none"
              />

              <button className="bg-[#11773D] px-6 text-[14px] font-semibold text-white hover:bg-[#0E6534]">
                Berlangganan
              </button>
            </div>

            <p className="mt-3 flex items-center gap-2 text-[12px] text-[#667085]">
              <FaLock className="text-[#11773D]" />
              Kami tidak akan membagikan email kamu ke pihak lain.
            </p>
          </div>

          {/* Right */}
          <div className="flex w-[30%] mt-10 justify-end self-end">
            <Image
              src="/assets/edukasi/belajar.png"
              alt="Newsletter"
              width={380}
              height={280}
              className="object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
