// src/app/tentang/page.tsx
import Image from "next/image";
import {
  FaLeaf,
  FaBullseye,
  FaEye,
  FaHeart,
  FaCheckCircle,
  FaUsers,
  FaChartBar,
  FaGlobe,
  FaArrowRight,
  FaTree,
  FaCheck,
  FaMobileAlt,
  FaShieldAlt,
  FaRegCheckCircle,
  FaNetworkWired,
} from "react-icons/fa";

const values = [
  {
    icon: "/assets/tentang-kami/target.png",
    title: "Aksi Kecil\nDampak Besar",
    desc: "Setiap aksi sederhana yang\nkamu lakukan, berkontribusi\nuntuk perubahan besar\nbagi bumi.",
  },
  {
    icon: "/assets/tentang-kami/person.png",
    title: "Bersama\nKomunitas",
    desc: "Bergerak bersama komunitas\npeduli lingkungan untuk\nmenginspirasi dan saling\nmendukung.",
  },
  {
    icon: "/assets/tentang-kami/chart.png",
    title: "Data & Teknologi\nuntuk Perubahan",
    desc: "Menggunakan teknologi dan data\nuntuk melacak, memahami, dan\nmemaksimalkan dampak positif\nkita bersama.",
  },
];

const missions = [
  {
    icon: "/assets/tentang-kami/target.png",
    title: "Misi",
    desc: "Memberdayakan setiap individu\nmelalui teknologi dan komunitas\nuntuk melakukan aksi positif bagi\nlingkungan setiap hari.",
  },
  {
    icon: "/assets/tentang-kami/eye.png",
    title: "Visi",
    desc: "Menjadi platform terdepan di Indonesia\nyang mendorong gaya hidup berkelanjutan\nmelalui teknologi, edukasi, dan\nkolaborasi komunitas.",
  },
  {
    icon: "/assets/tentang-kami/lovr.png",
    title: "Nilai Kami",
    values: [
      "Peduli Lingkungan",
      "Inovatif & Adaptif",
      "Kolaboratif",
      "Transparan & Terpercaya",
    ],
  },
];

const journey = [
  {
    icon: "/assets/tentang-kami/tanaman.png",
    year: "2022",
    desc: "Berawal dari ide kecil\nuntuk mendorong\nkebiasaan hijau di\nsekitar kita.",
  },
  {
    icon: "/assets/tentang-kami/person2.png",
    year: "2023",
    desc: "HijauIn mulai\ndikembangkan dan\nmembangun komunitas\npertama.",
  },
  {
    icon: "/assets/tentang-kami/roket.png",
    year: "2024",
    desc: "Platform resmi diluncurkan\ndan ribuan pengguna\nmulai bergabung.",
  },
  {
    icon: "/assets/tentang-kami/bumi.png",
    year: "2025",
    desc: "Ekspansi ke berbagai\nkota di Indonesia dan\nbekerja sama dengan\nberbagai organisasi.",
  },
  {
    icon: "/assets/tentang-kami/pohon.png",
    year: "Masa Depan",
    desc: "Terus berinovasi untuk\nmenciptakan dampak\npositif yang lebih besar\nbagi bumi.",
  },
];

const stats = [
  {
    icon: "/assets/tentang-kami/daun.png",
    value: "125.430+",
    label: "Aksi Hijau Tercatat",
  },
  {
    icon: "/assets/tentang-kami/person2.png",
    value: "15.000+",
    label: "Komunitas Aktif",
  },
  {
    icon: "/assets/tentang-kami/bumi.png",
    value: "320+",
    label: "Kota di Indonesia",
  },
  {
    icon: "/assets/tentang-kami/co2.png",
    value: "82.340+ kg",
    label: "CO₂ Berhasil Dikurangi",
  },
  {
    icon: "/assets/tentang-kami/pohon.png",
    value: "5.243",
    label: "Pohon Ditanam",
  },
];

const features = [
  {
    icon: "/assets/tentang-kami/hp2.png",
    title: "Mudah Digunakan",
    desc: "Antarmuka yang sederhana membuat siapa saja\nbisa mulai hidup hijau dengan mudah.",
  },
  {
    icon: "/assets/tentang-kami/bumi2.png",
    title: "Dampak Nyata",
    desc: "Setiap aksimu tercatat dan memberikan dampak\npositif nyata untuk bumi.",
  },
  {
    icon: "/assets/tentang-kami/person3.png",
    title: "Komunitas Positif",
    desc: "Bergabung dengan ribuan orang yang memiliki\nvisi yang sama untuk bumi yang lebih baik.",
  },
  {
    icon: "/assets/tentang-kami/keamanan.png",
    title: "Aman & Terpercaya",
    desc: "Data kamu aman bersama kami dan hanya digunakan\nuntuk tujuan kebaikan.",
  },
];

export default function TentangKami() {
  return (
    <div className="bg-white flex flex-col items-center w-full pb-24">
      {/* Hero Section */}
      <section className="max-w-1080p relative flex flex-col items-center justify-center w-full px-16 pt-24 pb-16 mx-auto overflow-hidden bg-white">
        <div className="flex items-center justify-between w-full mb-16">
          {/* Left Text Content */}
          <div className="z-10 w-1/2 pr-12">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full  bg-[#F2FAF3] px-4 py-2 text-base font-semibold text-[#11773D]">
              <FaLeaf className="text-base" />
              Tentang HijauIn
            </div>

            {/* Heading */}
            <h1 className="mb-6 text-[60px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0B0F1F]">
              Teknologi untuk
              <br />
              Hidup yang <span className="text-[#11773D]">Lebih Hijau</span>
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-[520px] text-[18px] leading-9 text-[#667085]">
              HijauIn adalah platform digital yang menghubungkan teknologi,
              kebiasaan positif, dan komunitas untuk menciptakan dampak nyata
              bagi bumi dan generasi mendatang.
            </p>

            {/* Button */}
            <button className="flex h-[54px] items-center gap-2 rounded-xl border border-[#11773D] bg-white px-7 text-[16px] font-semibold text-[#11773D] transition hover:bg-[#F4FAF5]">
              Misi Kami
              <FaArrowRight className="text-[13px]" />
            </button>
          </div>

          {/* Right Image Content */}
          <div className="h-125 relative z-10 w-1/2">
            {/* Decorative Background Blob behind image */}
            <div className="top-1/2 left-1/2 w-150 h-150 bg-primary-light/50 -z-10 blur-3xl absolute -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            <Image
              src="/assets/tentang-kami/hero.png"
              alt="Sustainable City"
              fill
              className="object-contain"
            />
            <FaLeaf className="top-10 text-primary opacity-40 -rotate-12 absolute left-0 text-5xl transform" />
            <FaLeaf className="bottom-20 right-10 text-primary opacity-30 absolute text-6xl transform rotate-45" />
          </div>
        </div>

        <div className="z-20 w-full overflow-hidden rounded-[22px] border border-[#EEF2F1] bg-white shadow-md">
          <div className="grid grid-cols-3">
            {values.map((item, index) => (
              <div
                key={index}
                className={`flex gap-5 p-8 ${
                  index !== values.length - 1 ? "border-r border-[#EEF2F1]" : ""
                }`}
              >
                {/* Icon */}
                <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#F2FAF4]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="mb-3 whitespace-pre-line text-[20px] font-bold leading-[1.3] text-[#0B0F1F]">
                    {item.title}
                  </h3>

                  <p className="whitespace-pre-line text-[15px] leading-8 text-[#667085]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misi, Visi & Nilai Kami */}
      <section className="max-w-1080p relative w-full overflow-hidden rounded-[22px] bg-white px-16 py-20 mx-auto">
        {/* Decoration */}
        <div className="absolute -left-12 bottom-0 h-28 w-28 rounded-full bg-[#EEF8F1] blur-2xl opacity-70" />
        <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-[#EEF8F1] blur-2xl opacity-70" />

        {/* Header */}
        <div className="mb-8 flex items-center gap-1">
          <h2 className="text-[30px] font-bold text-[#0B0F1F]">
            Misi, Visi & Nilai Kami
          </h2>

          <FaLeaf className="text-[#11773D] text-lg" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-4">
          {missions.map((item, index) => (
            <div
              key={index}
              className="rounded-[20px] border border-[#E8ECEA] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              {/* Header */}
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#F2FAF4]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={38}
                    height={38}
                    className="object-contain"
                  />
                </div>

                <h3 className="text-[30px] font-bold text-[#0B0F1F]">
                  {item.title}
                </h3>
              </div>

              {/* Misi & Visi */}
              {item.desc && (
                <p className="whitespace-pre-line text-[16px] leading-8 text-[#667085]">
                  {item.desc}
                </p>
              )}

              {/* Nilai */}
              {item.values && (
                <ul className="space-y-4">
                  {item.values.map((value) => (
                    <li
                      key={value}
                      className="flex items-center gap-3 text-[16px] font-medium text-[#667085]"
                    >
                      <FaCheckCircle className="text-[14px] text-[#6BC047]" />
                      {value}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Perjalanan HijauIn */}
      <section className="max-w-1080p mx-auto w-full bg-white px-16 py-24">
        {/* Header */}
        <div className="mb-14 flex items-center gap-1">
          <h2 className="text-[30px] font-bold text-[#0B0F1F]">
            Perjalanan <span className="text-[#11773D]">HijauIn</span>
          </h2>

          <FaLeaf className="text-[#11773D] text-lg" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Green line */}
          <div className="absolute left-[70px] right-[90px] top-[34px] h-[2px] bg-[#11773D]" />

          {/* dashed end */}
          <div className="absolute right-6 top-[34px] h-[2px] w-16 border-t-2 border-dashed border-[#11773D]" />

          {/* arrow */}
          <FaArrowRight className="absolute right-0 top-[28px] text-[14px] text-[#11773D]" />

          <div className="grid grid-cols-5">
            {journey.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Circle */}
                <div className="relative z-10 mb-5 flex h-[94px] w-[94px] items-center justify-center rounded-full border border-[#EEF2F1] bg-white shadow-md">
                  <Image
                    src={item.icon}
                    alt={item.year}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>

                {/* Year */}
                <h3 className="mb-4 text-[28px] font-bold text-[#11773D]">
                  {item.year}
                </h3>

                {/* Description */}
                <p className="whitespace-pre-line text-[16px] leading-8 text-[#667085]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dampak yang Telah Kami Ciptakan */}
      <section className="max-w-1080p w-full px-16 py-20 mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center gap-1">
          <h2 className="text-[30px] font-bold text-[#0B0F1F]">
            Dampak yang Telah Kami Ciptakan
          </h2>

          <FaLeaf className="text-[#11773D] text-lg" />
        </div>

        {/* Card */}
        <div className="overflow-hidden rounded-[20px] border border-[#E8ECEA] bg-white shadow-sm">
          <div className="grid grid-cols-5">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 px-6 py-7 ${
                  index !== stats.length - 1 ? "border-r border-[#EEF2F1]" : ""
                }`}
              >
                {/* Icon */}
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={75}
                  height={75}
                  className="shrink-0 object-contain"
                />

                {/* Text */}
                <div>
                  <h3 className="text-[25px] font-bold leading-none text-[#11773D]">
                    {item.value}
                  </h3>

                  <p className="mt-2 whitespace-nowrap text-[13px] font-medium text-[#667085]">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mengapa HijauIn Section */}
      <section className="max-w-1080p bg-gray-50 flex items-center w-full gap-16 px-16 py-24 mx-auto">
        <div className="h-175 relative w-1/2">
          <Image
            src="/assets/tentang-kami/hp.png"
            alt="App Preview"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-1/2 pr-8">
          {/* Header */}
          <div className="mb-8 flex items-center gap-1">
            <h2 className="text-[35px] font-semibold text-[#0B0F1F]">
              Mengapa <span className="text-[#11773D]">HijauIn?</span>
            </h2>

            <FaLeaf className="text-[#11773D] text-lg" />
          </div>

          {/* List */}
          <div className="space-y-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center rounded-[18px] border border-[#E8ECEA] bg-white px-6 py-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Icon */}
                <div className="mr-5 flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#F2FAF4]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={45}
                    height={45}
                    className="object-contain"
                  />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="mb-2 text-[20px] font-bold text-[#0B0F1F]">
                    {item.title}
                  </h3>

                  <p className="whitespace-pre-line text-[15px] leading-7 text-[#667085]">
                    {item.desc}
                  </p>
                </div>

                {/* Check */}
                <div className="ml-5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#11773D]">
                  <FaCheck className="text-[13px] text-[#11773D]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-1080p mx-auto w-full px-16 pt-12 pb-24">
        <div className="relative flex h-[220px] overflow-hidden rounded-[22px] border border-[#E8ECEA] bg-[#F5FBF6] px-10 shadow-sm">
          {/* Left Illustration */}
          <div className="absolute bottom-0 left-8 z-10 h-[350px] w-[280px]">
            <Image
              src="/assets/tentang-kami/cta.png"
              alt="CTA"
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>

          {/* Content */}
          <div className="ml-[300px] flex w-[42%] flex-col justify-center">
            <h2 className="mb-4 text-[24px] font-bold leading-[1.35] text-[#0B0F1F]">
              Yuk, wujudkan masa depan
              <br />
              yang lebih hijau bersama{" "}
              <span className="text-[#11773D]">HijauIn!</span>
            </h2>

            <p className="text-[16px] leading-8 text-[#667085]">
              Satu langkah kecil dari kita, bisa menjadi perubahan besar
              <br />
              untuk bumi yang kita cintai.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex w-[20%] flex-col justify-center gap-4">
            <button className="group flex h-[48px] items-center justify-center gap-3 rounded-xl bg-[#11773D] px-6 text-[16px] font-semibold text-white transition hover:bg-[#0E6534]">
              Daftar Gratis Sekarang
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                <FaArrowRight className="text-[12px]" />
              </span>
            </button>

            <button className="group flex h-[48px] items-center justify-center gap-3 rounded-xl border border-[#11773D] bg-white px-6 text-[16px] font-semibold text-[#11773D] transition hover:bg-[#F2FAF4]">
              Lihat Cara Kerja
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#11773D] text-white">
                <FaArrowRight className="text-[12px]" />
              </span>
            </button>
          </div>

          {/* Right Leaves */}
          <Image
            src="/assets/tentang-kami/duan.png"
            alt="Leaves"
            width={120}
            height={180}
            className="absolute bottom-0 top-10 right-0 object-contain"
          />
        </div>
      </section>
    </div>
  );
}
