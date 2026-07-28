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
    icon: <FaRecycle className="text-primary text-sm" />,
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
    icon: <FaLeaf className="text-primary text-sm" />,
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
    title: "Energi Terbarukan untuk Masa Depan",
    dur: "06:45",
    views: "1.4K ditonton",
  },
  {
    img: "/assets/edukasi/3r.png",
    title: "3R: Reduce, Reuse, Recycle",
    dur: "05:30",
    views: "2.3K ditonton",
  },
  {
    img: "/assets/edukasi/laut.png",
    title: "Cara Menanam Pohon dengan Benar",
    dur: "07:12",
    views: "1.9K ditonton",
  },
  {
    img: "/assets/edukasi/caramenanampohon.png",
    title: "Lindungi Laut, Lindungi Kehidupan",
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
    img: "/assets/edukasi/kaki.png",
    title: "Jejak Karbon",
    desc: "Apa itu dan bagaimana menguranginya?",
    views: "1.2K dilihat",
    bg: "bg-[#f0fdf4]",
  },
  {
    img: "/assets/edukasi/air.png",
    title: "Hemat Air",
    desc: "Mulai dari hal kecil di rumah",
    views: "980 dilihat",
    bg: "bg-[#f0f9ff]",
  },
  {
    img: "/assets/edukasi/daur.png",
    title: "Daur Ulang",
    desc: "Proses sederhana, dampak luar biasa",
    views: "1.5K dilihat",
    bg: "bg-[#f7fee7]",
  },
  {
    img: "/assets/edukasi/pohon.png",
    title: "Manfaat Menanam Pohon",
    desc: "Untuk bumi yang lebih baik",
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
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#F2FAF3] px-3 py-1.5 text-sm font-semibold text-primary">
            <FaLeaf className="text-xs" />
            Edukasi Hijau
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-[60px] font-extrabold leading-[1.08] tracking-tight text-gray-900">
            Belajar, Peduli,
            <br />
            Aksi <span className="text-primary">untuk Bumi</span>
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

            <button className="flex h-14 w-14 items-center justify-center bg-primary text-white">
              <FaSearch />
            </button>
          </div>

          {/* Popular */}
          <p className="mb-4 text-base font-semibold text-primary">
            Topik Populer
          </p>

          <div className="flex flex-wrap gap-3">
            {topics.map((topic, index) => (
              <button
                key={index}
                className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-primary hover:bg-primary-light hover:text-primary"
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
          <h2 className="text-4xl font-bold text-gray-900">
            Rekomendasi untuk Kamu <FaLeaf className="text-primary inline" />
          </h2>
          <button className="text-primary hover:underline flex items-center gap-2 text-lg font-bold">
            Lihat Semua <FaChevronRight className="text-base" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {[
            {
              img: "/assets/edukasi/edu1.png",
              tag: "Edukasi",
              title: "Mengenal Jenis Sampah dan Cara Mengelolanya",
              desc: "Memahami jenis sampah adalah langkah awal untuk mengelola sampah dengan benar.",
              time: "5 menit baca",
              view: "1.2K dibaca",
            },
            {
              img: "/assets/edukasi/edu2.png",
              tag: "Panduan",
              title: "10 Cara Hemat Energi di Rumah",
              desc: "Langkah sederhana yang bisa kamu lakukan untuk menghemat energi setiap hari.",
              time: "4 menit baca",
              view: "980 dibaca",
            },
            {
              img: "/assets/edukasi/edu3.png",
              tag: "Tips",
              title: "Kurangi Plastik Sekali Pakai dalam 7 Hari",
              desc: "Tantangan 7 hari untuk mengurangi penggunaan plastik sekali pakai.",
              time: "3 menit baca",
              view: "2.1K dibaca",
            },
            {
              img: "/assets/edukasi/edu4.png",
              tag: "Edukasi",
              title: "Pentingnya Menjaga Ekosistem Laut",
              desc: "Laut adalah sumber kehidupan. Yuk, jaga bersama kelestariannya!",
              time: "6 menit baca",
              view: "1.6K dibaca",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl hover:shadow-xl group flex flex-col overflow-hidden transition bg-white border border-gray-200 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="top-4 left-4 bg-white/90 backdrop-blur text-primary absolute px-4 py-2 text-base font-bold rounded-lg shadow-sm">
                  {item.tag}
                </div>
              </div>
              <div className="grow flex flex-col p-8">
                <h3 className="mb-4 text-xl font-bold leading-snug text-gray-900">
                  {item.title}
                </h3>
                <p className="grow mb-8 text-base leading-relaxed text-gray-600">
                  {item.desc}
                </p>
                <div className="text-primary bg-primary-light/40 rounded-xl flex items-center justify-between px-4 py-2 text-base font-bold">
                  <span className="flex items-center gap-2">
                    <FaClock /> {item.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaEye /> {item.view}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kategori Edukasi */}
      <section className="bg-gray-50 w-full py-24">
        <div className="max-w-1080p px-16 mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Kategori Edukasi <FaLeaf className="text-primary inline" />
            </h2>
            <button className="text-primary hover:underline flex items-center gap-2 text-lg font-bold">
              Lihat Semua Kategori <FaChevronRight className="text-base" />
            </button>
          </div>
          <div className="grid grid-cols-6 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="group flex min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-[32px] border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#F4FAF5]">
                  <Image
                    src={cat.icon}
                    alt={cat.name}
                    width={48}
                    height={48}
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900">
                  {cat.name}
                </h3>

                <p className="text-base text-gray-500">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Edukasi Pilihan */}
      <section className="max-w-1080p w-full px-16 py-24 mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Video Edukasi Pilihan <FaLeaf className="text-primary inline" />
          </h2>
          <button className="text-primary hover:underline flex items-center gap-2 text-lg font-bold">
            Lihat Semua <FaChevronRight className="text-base" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-8">
          {videos.map((vid, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative mb-6 h-48 overflow-hidden rounded-[28px] shadow-md">
                <Image
                  src={vid.img}
                  alt={vid.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/40">
                  <FaPlayCircle className="text-6xl text-white opacity-90 drop-shadow-lg" />
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 right-4 rounded-lg bg-black/80 px-3 py-1 text-sm font-semibold text-white">
                  {vid.dur}
                </div>
              </div>

              <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900 transition group-hover:text-primary">
                {vid.title}
              </h3>

              <div className="flex w-max items-center gap-2 rounded-lg bg-primary-light px-3 py-1 text-sm font-semibold text-primary">
                <FaCheckCircle />
                {vid.views}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Infografis Populer */}
      <section className="max-w-1080p w-full px-16 pb-24 mx-auto">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Infografis Populer
          </h2>
          <button className="text-primary hover:underline flex items-center gap-2 text-lg font-bold">
            Lihat Semua <FaChevronRight className="text-base" />
          </button>
        </div>
        <div className="grid grid-cols-4 gap-6">
          {infographics.map((info, idx) => (
            <div
              key={idx}
              className={`${info.bg} group relative overflow-hidden rounded-[32px] border border-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer`}
            >
              <div className="relative z-10">
                <h3 className="mb-3 text-xl font-bold leading-tight text-gray-900">
                  {info.title}
                </h3>

                <p className="mb-6 text-base leading-relaxed text-gray-600">
                  {info.desc}
                </p>

                <div className="flex w-max items-center gap-2 rounded-lg bg-white px-3 py-1 text-sm font-semibold text-primary shadow-sm">
                  <FaEye />
                  {info.views}
                </div>
              </div>

              {/* Image */}
              <div className="absolute -right-8 -bottom-6 z-0 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={info.img}
                  alt={info.title}
                  width={180}
                  height={180}
                  className="object-contain opacity-90"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-1080p w-full px-16 pb-24 mx-auto">
        <div className="bg-linear-to-br from-primary-light to-white rounded-[3rem] p-16 flex items-center justify-between border border-green-100 shadow-sm relative overflow-hidden">
          <div className="w-[55%] z-10">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900">
              Terus Belajar, Terus Beraksi <br /> untuk Bumi yang{" "}
              <span className="text-primary">Lebih Baik</span>
            </h2>
            <p className="mb-10 text-xl text-gray-600">
              Dapatkan artikel terbaru, tips menarik, dan informasi edukasi
              langsung ke email kamu. <FaLeaf className="text-primary inline" />
            </p>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl flex max-w-lg p-2 bg-white border border-gray-200 shadow-sm">
                <input
                  type="email"
                  placeholder="Masukkan email kamu"
                  className="w-full px-6 text-lg bg-transparent outline-none"
                />
                <button className="bg-primary hover:bg-green-700 whitespace-nowrap rounded-xl px-8 py-4 text-lg font-bold text-white transition">
                  Berlangganan
                </button>
              </div>
              <p className="text-primary flex items-center gap-2 mt-2 text-base font-bold">
                <FaLock /> Kami tidak akan membagikan email kamu ke pihak lain.
              </p>
            </div>
          </div>

          <div className="w-[45%] relative h-87.5 z-10">
            <Image
              src="/assets/edukasi/belajar.png"
              alt="Newsletter Illustration"
              fill
              className="object-contain"
            />
          </div>

          {/* Decorative Elements */}
          <div className="bg-green-50 blur-3xl absolute top-0 right-0 w-64 h-64 transform translate-x-1/2 -translate-y-1/2 rounded-full opacity-50"></div>
          <div className="bg-green-50 blur-3xl absolute bottom-0 left-0 w-64 h-64 transform -translate-x-1/2 translate-y-1/2 rounded-full opacity-50"></div>
        </div>
      </section>
    </div>
  );
}
