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
  FaMobileAlt,
  FaShieldAlt,
  FaRegCheckCircle,
  FaNetworkWired,
} from "react-icons/fa";

export default function TentangKami() {
  return (
    <div className="bg-white flex flex-col items-center w-full pb-24">
      {/* Hero Section */}
      <section className="max-w-1080p relative flex flex-col items-center justify-center w-full px-16 pt-24 pb-16 mx-auto overflow-hidden bg-white">
        <div className="flex items-center justify-between w-full mb-16">
          {/* Left Text Content */}
          <div className="z-10 w-1/2 pr-12">
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D9EFD8] bg-[#F4FAF5] px-4 py-2 text-[13px] font-semibold text-[#11773D]">
              <FaLeaf className="text-[12px]" />
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
            {[
              {
                icon: <FaBullseye />,
                title: "Aksi Kecil\nDampak Besar",
                desc: "Setiap aksi sederhana yang\n kamu lakukan, berkontribusi\n untuk perubahan besar\n bagi bumi.",
              },
              {
                icon: <FaUsers />,
                title: "Bersama\nKomunitas",
                desc: "Bergerak bersama komunitas\n peduli lingkungan untuk\n menginspirasi dan saling\n mendukung.",
              },
              {
                icon: <FaChartBar />,
                title: "Data & Teknologi\nuntuk Perubahan",
                desc: "Menggunakan teknologi dan data\n untuk melacak, memahami, dan\n memaksimalkan dampak positif\n kita bersama.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex gap-5 p-8 ${
                  index !== 2 ? "border-r border-[#EEF2F1]" : ""
                }`}
              >
                {/* Icon */}
                <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full bg-[#F2FAF4]">
                  <div className="text-[34px] text-[#11773D]">{item.icon}</div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="mb-3 whitespace-pre-line text-[20px] font-bold leading-[1.3] text-[#0B0F1F]">
                    {item.title}
                  </h3>

                  <p className="text-[15px] whitespace-pre-line leading-8 text-[#667085]">
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
          {/* MISI */}
          <div className="rounded-[20px] border border-[#E8ECEA] bg-white p-7 shadow-sm">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#F2FAF4]">
                <div className="text-[34px] text-[#11773D]">
                  <FaBullseye />
                </div>
              </div>

              <h3 className="text-[30px] font-bold text-[#0B0F1F]">Misi</h3>
            </div>

            <p className="text-[16px] leading-8 text-[#667085]">
              Memberdayakan setiap individu melalui teknologi dan komunitas
              untuk melakukan aksi positif bagi lingkungan setiap hari.
            </p>
          </div>

          {/* VISI */}
          <div className="rounded-[20px] border border-[#E8ECEA] bg-white p-7 shadow-sm">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#F2FAF4]">
                <div className="text-[34px] text-[#11773D]">
                  <FaEye />
                </div>
              </div>

              <h3 className="text-[30px] font-bold text-[#0B0F1F]">Visi</h3>
            </div>

            <p className="text-[16px] leading-8 text-[#667085]">
              Menjadi platform terdepan di Indonesia yang mendorong gaya hidup
              berkelanjutan melalui teknologi, edukasi, dan kolaborasi
              komunitas.
            </p>
          </div>

          {/* NILAI */}
          <div className="rounded-[20px] border border-[#E8ECEA] bg-white p-7 shadow-sm">
            <div className="mb-5 flex items-center gap-4">
              <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-[#F2FAF4]">
                <div className="text-[34px] text-[#11773D]">
                  <FaHeart />
                </div>
              </div>

              <h3 className="text-[30px] font-bold text-[#0B0F1F]">
                Nilai Kami
              </h3>
            </div>

            <ul className="space-y-4">
              {[
                "Peduli Lingkungan",
                "Inovatif & Adaptif",
                "Kolaboratif",
                "Transparan & Terpercaya",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[16px] font-medium text-[#667085]"
                >
                  <FaCheckCircle className="text-[14px] text-[#6BC047]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Perjalanan HijauIn */}
      <section className="max-w-1080p w-full px-16 py-24 mx-auto text-center bg-white">
        <h2 className="mb-24 text-4xl font-bold text-left text-gray-900">
          Perjalanan <span className="text-primary">HijauIn</span>{" "}
          <FaLeaf className="text-primary inline" />
        </h2>
        <div className="relative flex items-start justify-between w-full">
          {/* Dotted Line Behind Circles */}
          <div className="top-8 absolute left-0 z-0 w-full h-1 border-t-2 border-gray-300 border-dashed"></div>

          {[
            {
              icon: <FaLeaf />,
              year: "2022",
              title:
                "Berawal dari ide kecil untuk mendorong kebiasaan hijau di sekitar kita.",
            },
            {
              icon: <FaUsers />,
              year: "2023",
              title:
                "HijauIn mulai dikembangkan dan membangun komunitas pertama.",
            },
            {
              icon: <FaGlobe />,
              year: "2024",
              title:
                "Platform resmi diluncurkan dan ribuan pengguna mulai bergabung.",
            },
            {
              icon: <FaNetworkWired />,
              year: "2025",
              title:
                "Ekspansi ke berbagai kota di Indonesia dan bekerja sama dengan berbagai organisasi.",
            },
            {
              icon: <FaTree />,
              year: "Masa Depan",
              title:
                "Terus berinovasi untuk menciptakan dampak positif yang lebih besar bagi bumi.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="relative z-10 flex flex-col items-center w-48 px-2 text-center bg-white"
            >
              <div className="bg-primary flex items-center justify-center w-16 h-16 mb-6 text-2xl font-bold text-white border-4 border-white rounded-full shadow-md">
                {item.icon}
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {item.year}
              </h3>
              <p className="text-base leading-relaxed text-gray-500">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Dampak yang Telah Kami Ciptakan */}
      <section className="max-w-1080p w-full px-16 py-12 mx-auto bg-white">
        <h2 className="mb-10 text-3xl font-bold text-gray-900">
          Dampak yang Telah Kami Ciptakan{" "}
          <FaLeaf className="text-primary inline" />
        </h2>

        {/* Single Wide Container for Stats */}
        <div className="rounded-3xl flex items-center justify-between px-6 py-10 bg-white border border-gray-100 shadow-sm">
          {[
            {
              val: "125.430+",
              lbl: "Aksi Hijau Tercatat",
              icon: <FaLeaf className="text-primary" />,
            },
            {
              val: "15.000+",
              lbl: "Komunitas Aktif",
              icon: <FaUsers className="text-primary" />,
            },
            {
              val: "320+",
              lbl: "Kota di Indonesia",
              icon: <FaGlobe className="text-primary" />,
            },
            {
              val: "82.340+ kg",
              lbl: "CO₂ Berhasil Dikurangi",
              icon: (
                <div className="text-primary text-2xl font-black tracking-tighter">
                  CO<sub className="text-lg">2</sub>
                </div>
              ),
            },
            {
              val: "5.243",
              lbl: "Pohon Ditanam",
              icon: <FaTree className="text-primary" />,
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-4 px-6 ${idx !== 4 ? "border-r border-gray-200" : ""} flex-1 justify-center`}
            >
              <div className="shrink-0 text-4xl">{stat.icon}</div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">
                  {stat.val}
                </div>
                <div className="whitespace-nowrap text-base font-medium text-gray-500">
                  {stat.lbl}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mengapa HijauIn Section */}
      <section className="max-w-1080p bg-gray-50 flex items-center w-full gap-16 px-16 py-24 mx-auto">
        <div className="h-175 relative w-1/2">
          <Image
            src="https://picsum.photos/seed/phoneappmockup/800/1000"
            alt="App Preview"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-1/2 pr-8">
          <h2 className="mb-12 text-4xl font-bold text-gray-900">
            Mengapa <span className="text-primary">HijauIn?</span>{" "}
            <FaLeaf className="text-primary inline" />
          </h2>
          <div className="space-y-6">
            {[
              {
                icon: <FaMobileAlt />,
                title: "Mudah Digunakan",
                desc: "Antarmuka yang sederhana membuat siapa saja bisa mulai hidup hijau dengan mudah.",
              },
              {
                icon: <FaGlobe />,
                title: "Dampak Nyata",
                desc: "Setiap aksimu tercatat dan memberikan dampak positif nyata untuk bumi.",
              },
              {
                icon: <FaUsers />,
                title: "Komunitas Positif",
                desc: "Bergabung dengan ribuan orang yang memiliki visi yang sama untuk bumi yang lebih baik.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Aman & Terpercaya",
                desc: "Data kamu aman bersama kami dan hanya digunakan untuk tujuan kebaikan.",
              },
            ].map((feat, idx) => (
              <div
                key={idx}
                className="rounded-3xl hover:shadow-md flex items-center gap-6 p-8 transition bg-white border border-gray-100 shadow-sm"
              >
                <div className="bg-primary-light text-primary rounded-2xl shrink-0 flex items-center justify-center w-16 h-16 text-3xl">
                  {feat.icon}
                </div>
                <div className="grow">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {feat.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600">
                    {feat.desc}
                  </p>
                </div>
                <div className="text-primary shrink-0 ml-4 text-3xl">
                  <FaRegCheckCircle />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-1080p w-full px-16 pt-12 pb-24 mx-auto">
        <div className="mx-auto bg-primary-light rounded-[3rem] p-12 flex items-center justify-between relative shadow-sm border border-green-50 overflow-hidden">
          {/* Left Illustration */}
          <div className="w-[30%] relative h-75 flex items-center justify-center z-10">
            <Image
              src="https://picsum.photos/seed/aboutctapeople/500/500"
              alt="Join us"
              fill
              className="object-contain"
            />
          </div>

          {/* Center Text */}
          <div className="w-[40%] text-left px-8 z-10">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900">
              Yuk, wujudkan masa depan <br /> yang lebih hijau bersama{" "}
              <span className="text-primary">HijauIn!</span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Satu langkah kecil dari kita, bisa menjadi perubahan besar untuk
              bumi yang kita cintai.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex flex-col items-end w-[30%] gap-4 z-10">
            <button className="bg-primary hover:bg-green-700 rounded-2xl flex items-center justify-center w-full gap-3 py-5 text-lg font-bold text-white transition shadow-lg">
              Daftar Gratis Sekarang <FaArrowRight />
            </button>
            <button className="border-primary text-primary hover:bg-primary-light rounded-2xl flex items-center justify-center w-full gap-3 py-5 text-lg font-bold transition bg-white border-2">
              Lihat Cara Kerja <FaArrowRight />
            </button>
          </div>

          {/* Decorative Leaves */}
          <FaLeaf className="top-10 left-1/3 text-primary opacity-20 -rotate-12 absolute text-5xl transform" />
          <FaLeaf className="bottom-10 right-10 text-primary opacity-10 absolute text-6xl transform rotate-45" />
        </div>
      </section>
    </div>
  );
}
