// src/app/cara-kerja/page.tsx
import Image from "next/image";
import {
  FaCheckCircle,
  FaClipboardList,
  FaRobot,
  FaStar,
  FaTrophy,
  FaGlobe,
  FaArrowRight,
  FaBicycle,
  FaFlask,
  FaTint,
  FaSeedling,
  FaBus,
  FaRecycle,
  FaLeaf,
} from "react-icons/fa";

const steps = [
  {
    num: "01",
    icon: "/assets/beranda/catataksi3.png",
    title: "Catat Aksi",
    desc: "Catat aksi ramah lingkunganmu setiap hari dengan mudah.",
  },
  {
    num: "02",
    icon: "/assets/beranda/ai-rekomendasi.png",
    title: "AI Menganalisis",
    desc: "AI menganalisis aksimu dan memberi insight personal yang cerdas.",
  },
  {
    num: "03",
    icon: "/assets/cara-kerja/poin.png",
    title: "Dapatkan Poin",
    desc: "Setiap aksi positif akan memberikan Eco Score yang bisa kamu lihat.",
  },
  {
    num: "04",
    icon: "/assets/beranda/ikutchallange.png",
    title: "Ikut Challenge",
    desc: "Ikuti tantangan seru dan selesaikan misi untuk meraih hadiah menarik.",
  },
  {
    num: "05",
    icon: "/assets/cara-kerja/bumi.png",
    title: "Berdampak Nyata",
    desc: "Lihat laporan dampakmu dan kontribusimu untuk bumi yang lebih baik.",
  },
];

const flows = [
  {
    icon: "/assets/beranda/person.png",
    title: "Pengguna",
    desc: "",
  },
  {
    icon: "/assets/beranda/catataksi.png",
    title: "Catat Aksi",
    desc: "Data aksi harian dikirim ke sistem",
  },
  {
    icon: "/assets/beranda/ai-rekomendasi.png",
    title: "AI Green Coach",
    desc: "AI memverifikasi dan memberi insight",
  },
  {
    icon: "/assets/beranda/eco-score.png",
    title: "Eco Score",
    desc: "Poin dihitung dan ditambahkan",
  },
  {
    icon: "/assets/beranda/pantaudampak.png",
    title: "Dashboard",
    desc: "Data ditampilkan secara real-time",
  },
  {
    icon: "/assets/cara-kerja/laporan.png",
    title: "Laporan Dampak",
    desc: "Dampak positifmu tercatat dan terukur",
  },
];

const journeys = [
  {
    day: "Senin",
    icon: "/assets/cara-kerja/sepeda.png",
    title: "Naik sepeda\nke kampus",
    point: "+30 poin",
    desc: "Mengurangi emisi\nCO₂",
  },
  {
    day: "Selasa",
    icon: "/assets/cara-kerja/botol.png",
    title: "Bawa tumbler\nsendiri",
    point: "+20 poin",
    desc: "Mengurangi sampah\nplastik",
  },
  {
    day: "Rabu",
    icon: "/assets/air.png",
    title: "Hemat air saat\nmandi",
    point: "+15 poin",
    desc: "Menghemat\npenggunaan air",
  },
  {
    day: "Kamis",
    icon: "/assets/cara-kerja/pot.png",
    title: "Menanam\ntanaman",
    point: "+40 poin",
    desc: "Meningkatkan\nkualitas udara",
  },
  {
    day: "Jumat",
    icon: "/assets/cara-kerja/bus.png",
    title: "Naik transportasi\numum",
    point: "+25 poin",
    desc: "Mengurangi polusi\nudara",
  },
  {
    day: "Sabtu",
    icon: "/assets/cara-kerja/tas.png",
    title: "Pilah sampah\nrumah",
    point: "+20 poin",
    desc: "Mendukung daur\nulang",
  },
  {
    day: "Minggu",
    icon: "/assets/cara-kerja/trophy.png",
    title: "Selesaikan\nchallenge",
    point: "+50 poin",
    desc: "Dapat badge baru\ndan reward",
  },
];

const features = [
  {
    icon: <FaCheckCircle className="text-[#11773D] text-2xl" />,
    title: "Mudah Dilakukan",
    desc: "Langkah sederhana yang bisa kamu lakukan kapan saja dan di mana saja.",
  },
  {
    icon: "/assets/beranda/ai-rekomendasi.png",
    title: "Insight Personal",
    desc: "AI memberikan rekomendasi yang sesuai dengan kebiasaan dan gaya hidupmu.",
  },
  {
    icon: "/assets/beranda/ikutchallange.png",
    title: "Motivasi Konsisten",
    desc: "Challenge, poin, dan badge membuatmu lebih semangat untuk terus beraksi.",
  },
  {
    icon: "/assets/cara-kerja/bumi.png",
    title: "Dampak Nyata",
    desc: "Setiap aksi tercatat dan memberikan dampak positif nyata untuk bumi.",
  },
];

export default function HowItWorks() {
  return (
    <div className="flex flex-col bg-white items-center w-full">
      {/* Header Section */}
      <section className=" relative flex w-full px-16 pt-24 overflow-hidden text-left">
        <div className="w-1/2">
          <div className="text-[#11773D] inline-flex items-center gap-2 px-4 py-2 mb-8 text-base font-semibold bg-white rounded-full shadow-sm">
            <FaCheckCircle /> Cara Kerja HijauIn
          </div>
          <h1 className="mb-8 text-6xl font-bold leading-tight text-gray-900">
            5 Langkah Mudah <br /> Menuju Bumi yang <br />
            <span className="text-[#11773D]">Lebih Hijau</span>
          </h1>
          <p className=" mb-12 text-xl text-gray-600">
            HijauIn membantumu mencatat aksi ramah lingkungan, mendapatkan{" "}
            <br />
            insight dari AI, dan melihat dampak nyatanya. <br /> Semua dalam
            satu platform.
          </p>
          <button className="border-[#11773D] text-[#11773D] hover:bg-[#11773D] hover:text-white px-8 py-4 mb-12 text-lg font-bold transition bg-white border-2 rounded-full">
            Lihat Fitur Lengkap &rarr;
          </button>
        </div>
        <div className="h-150 relative w-1/2 mx-auto overflow-hidden">
          <Image
            src="/assets/cara-kerja/her.png"
            alt="App Mockup"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* 5 Steps Diagram */}
      <section className="w-full px-16 py-24">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Bagaimana <span className="text-[#11773D]">HijauIn</span> Bekerja?
          </h2>

          <p className="mt-3 text-lg text-gray-500">
            <span className="font-semibold text-[#11773D]">HijauIn</span>{" "}
            bekerja dalam 5 langkah sederhana yang saling terhubung.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex justify-between">
          {/* Garis */}
          <div className="absolute top-[17px] left-0 right-0 border-t-2 border-dashed border-gray-300" />

          {steps.map((step) => (
            <div
              key={step.num}
              className="relative z-10 flex w-56 flex-col items-center text-center"
            >
              {/* Nomor */}
              <div className="mb-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#046B06] text-sm font-bold text-white shadow">
                {step.num}
              </div>

              {/* Lingkaran */}
              <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-[#F1F8F2] shadow-sm">
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={68}
                  height={68}
                  className="object-contain"
                />
              </div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="max-w-[180px] text-base leading-8 text-gray-500">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* System Flow */}
      <section className="w-full px-16 py-24">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Alur Sistem <span className="text-[#11773D]">HijauIn</span>
          </h2>

          <p className="mt-3 text-lg text-gray-500">
            Data dan informasi mengalir untuk memberikan pengalaman terbaik.
          </p>
        </div>

        {/* Flow */}
        <div className="mt-16 flex items-start justify-between">
          {flows.map((item, index) => (
            <div key={index} className="flex items-start">
              {/* Node */}
              <div className="flex w-40 flex-col items-center text-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#F2F8F2]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                {item.desc && (
                  <p className="mt-3 text-base leading-7 text-gray-500">
                    {item.desc}
                  </p>
                )}
              </div>

              {/* Arrow */}
              {index < flows.length - 1 && (
                <div className="mx-5 mt-10">
                  <FaArrowRight className="text-lg text-[#11773D]" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Perjalanan Aksi Pengguna */}
      <section className="w-full px-16 pt-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Perjalanan Aksi Pengguna</h2>

          <p className="mt-4 text-xl text-gray-500">
            Contoh perjalanan aksi hijau dalam 1 minggu.
          </p>
        </div>

        {/* Cards */}
        <div className="relative mt-14">
          {/* timeline */}
          <div className="absolute bottom-[-22px] left-0 right-0 border-t-2 border-dashed border-gray-200"></div>

          <div className="flex justify-between gap-4">
            {journeys.map((item) => (
              <div key={item.day} className="flex w-full flex-col items-center">
                {/* card */}
                <div className="relative w-full rounded-2xl border border-gray-100 bg-white px-4 pb-8 pt-10 shadow-sm">
                  {/* hari */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-md bg-[#11773D] px-5 py-1 text-sm font-bold text-white">
                    {item.day}
                  </div>

                  {/* icon */}
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#F3F8F2]">
                    <Image
                      src={item.icon}
                      alt={item.day}
                      width={52}
                      height={52}
                    />
                  </div>

                  <h3 className="mt-5 whitespace-pre-line text-center text-lg font-bold leading-7 text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-center text-xl font-bold text-[#11773D]">
                    {item.point}
                  </p>

                  <p className="mt-4 whitespace-pre-line text-center text-sm leading-7 text-gray-500">
                    {item.desc}
                  </p>
                </div>

                {/* titik timeline */}
                <div className="relative z-10 mt-8 h-3 w-3 rounded-full bg-[#11773D]"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div className="relative mt-16 mx-auto flex max-w-6xl items-center justify-between overflow-hidden rounded-[40px]  bg-white px-10 py-8">
          {/* Ellipse Background */}
          <div className="absolute left-0 top-1/2 h-56 w-[1020px] -translate-y-1/2 rounded-full bg-[#EEF8EE]" />

          {/* Content */}
          <div className="relative z-10 flex items-center gap-6">
            <Image
              src="/assets/cara-kerja/daun.png"
              alt=""
              width={120}
              height={120}
              className="-ml-5"
            />

            <div>
              <p className="text-lg -mt-8 text-gray-500">Total Mingguan</p>

              <p className="text-4xl mt-5 font-bold text-[#11773D]">
                +200 poin
              </p>
            </div>

            <div className="mx-6 h-20 w-px bg-green-200"></div>

            <p className="max-w-md text-xl font-medium leading-9 text-gray-700">
              Terus konsisten dan tingkatkan dampak positifmu untuk bumi setiap
              hari!
            </p>
          </div>

          {/* Earth */}
          <Image
            src="/assets/cara-kerja/bumi2.png"
            alt=""
            width={200}
            height={200}
            className="relative z-10"
          />
        </div>
      </section>

      {/* Mengapa Cara Ini Efektif */}
      <section className="w-full bg-white px-16 pt-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Mengapa Cara Ini Efektif?
          </h2>
        </div>

        <div className="grid grid-cols-4 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white px-6 py-5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F2F8F2]">
                  {typeof item.icon === "string" ? (
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                  ) : (
                    item.icon
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="mt-4 pl-16 text-base leading-8 text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="w-full bg-white px-16 py-24">
        <div
          className="mx-auto flex items-center justify-between overflow-hidden rounded-[32px] border border-green-100 px-8 py-6"
          style={{
            background:
              "linear-gradient(90deg, #F8FCF8 0%, #FFFFFF 45%, #F8FCF8 100%)",
          }}
        >
          {/* Left Image */}
          <div className="relative w-[360px] shrink-0">
            <Image
              src="/assets/cara-kerja/siapmulai.png"
              alt=""
              width={360}
              height={260}
              className="h-[240px] w-auto object-contain"
            />
          </div>

          {/* Text */}
          <div className="mx-8 flex-1">
            <h2 className="max-w-lg text-[38px] font-bold leading-tight text-gray-900">
              Siap memulai perjalanan{" "}
              <span className="text-[#11773D]">hijau</span>mu hari ini?
            </h2>

            <p className="mt-4 max-w-lg text-xl leading-9 text-gray-600">
              Bersama HijauIn, setiap langkah kecilmu membawa perubahan besar
              untuk bumi.
            </p>
          </div>

          {/* Button */}
          <div className="flex flex-col gap-4">
            <button className="flex w-[290px] items-center justify-between rounded-2xl bg-[#11773D] px-8 py-5 text-md font-semibold text-white transition hover:bg-green-800">
              Daftar Gratis Sekarang
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#11773D]">
                <FaArrowRight className="text-sm" />
              </span>
            </button>

            <button className="flex w-[290px] items-center justify-between rounded-2xl border-2 border-[#11773D] bg-white px-8 py-5 text-md font-semibold text-[#11773D] transition hover:bg-green-50">
              Lihat Fitur Lengkap
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#11773D]">
                <FaArrowRight className="text-sm" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
