// src/app/komunitas/page.tsx
import Image from "next/image";
import {
  FaUsers,
  FaLeaf,
  FaGlobeAsia,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaSeedling,
  FaHeart,
  FaLightbulb,
  FaTrophy,
  FaChartLine,
  FaUserPlus,
  FaChevronRight,
  FaRegClock,
  FaCloud,
  FaTrashAlt,
  FaTree,
} from "react-icons/fa";

export default function Komunitas() {
  const impacts = [
    {
      icon: "/assets/komunitas/person.png",
      title: "Bergerak Bersama",
      desc: "Bersama komunitas, dampak yang dihasilkan akan jauh lebih besar.",
    },
    {
      icon: "/assets/komunitas/lamp.png",
      title: "Dapatkan Inspirasi",
      desc: "Temukan ide, tips, dan inspirasi aksi hijau dari berbagai komunitas.",
    },
    {
      icon: "/assets/komunitas/piala.png",
      title: "Raih Penghargaan",
      desc: "Ikuti kegiatan komunitas dan dapatkan badge serta reward menarik.",
    },
    {
      icon: "/assets/komunitas/chart.png",
      title: "Lihat Dampak Nyata",
      desc: "Pantau dampak aksi komunitasmu secara real-time di dashboard.",
    },
    {
      icon: "/assets/komunitas/love.png",
      title: "Perluas Jaringan",
      desc: "Kenali teman baru yang punya visi yang sama untuk bumi yang lebih baik.",
    },
  ];

  const communities = [
    {
      img: "/assets/komunitas/thumb-green.png",
      logo: "GC",
      title: "Green Campus",
      loc: "Surabaya, Jawa Timur",
      mem: "1.243",
      tag: "Edukasi",
    },
    {
      img: "/assets/komunitas/ocean.png",
      logo: "OW",
      title: "Ocean Warriors",
      loc: "Bali, Bali",
      mem: "982",
      tag: "Konservasi Laut",
    },
    {
      img: "/assets/komunitas/zerowaste.png",
      logo: "ZW",
      title: "Zero Waste",
      loc: "Bandung, Jawa Barat",
      mem: "1.856",
      tag: "Sampah & Daur Ulang",
    },
    {
      img: "/assets/komunitas/bike.png",
      logo: "BF",
      title: "Bike for Earth",
      loc: "Yogyakarta, DI Yogyakarta",
      mem: "764",
      tag: "Transportasi Hijau",
    },
    {
      img: "/assets/komunitas/tree.png",
      logo: "TL",
      title: "Tree Lovers",
      loc: "Bogor, Jawa Barat",
      mem: "1.112",
      tag: "Konservasi Alam",
    },
  ];

  const events = [
    {
      img: "/assets/komunitas/aksi.png",
      date: "25",
      month: "MEI",
      title: "Aksi Tanam 1.000 Pohon\n di Bukit Hijau",
      loc: "Bogor, Jawa Barat",
      time: "07.00 - 12.00 WIB",
      p: "+128",
      avatars: [
        "/assets/ava1.jpg",
        "/assets/ava2.jpg",
        "/assets/ava3.jpg",
        "/assets/ava4.jpg",
      ],
    },
    {
      img: "/assets/komunitas/beach.png",
      date: "01",
      month: "JUN",
      title: "Beach Clean Up\n Pantai Kuta",
      loc: "Bali, Bali",
      time: "06.30 - 10.30 WITA",
      p: "+86",
      avatars: [
        "/assets/ava2.jpg",
        "/assets/ava3.jpg",
        "/assets/ava5.jpg",
        "/assets/ava6.jpg",
      ],
    },
    {
      img: "/assets/komunitas/workshop.png",
      date: "08",
      month: "JUN",
      title: "Workshop Eco Living\n Zero Waste",
      loc: "Bandung, Jawa Barat",
      time: "09.00 - 13.00 WIB",
      p: "+64",
      avatars: [
        "/assets/ava1.jpg",
        "/assets/ava5.jpg",
        "/assets/ava6.jpg",
        "/assets/ava3.jpg",
      ],
    },
    {
      img: "/assets/komunitas/goes.png",
      date: "15",
      month: "JUN",
      title: "Gowes Hijau\n Keliling Kota",
      loc: "Yogyakarta, DI Yogyakarta",
      time: "06.00 - 09.00 WIB",
      p: "+97",
      avatars: [
        "/assets/ava6.jpg",
        "/assets/ava1.jpg",
        "/assets/ava2.jpg",
        "/assets/ava4.jpg",
      ],
    },
  ];

  return (
    <div className="bg-white flex flex-col items-center w-full pb-24">
      {/* Hero Section */}
      <section className="relative w-full h-[700px] flex items-center px-16 bg-white overflow-hidden">
        {/* Background & Gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/komunitas/hero.png"
            alt="Community Hero"
            fill
            className="object-cover"
          />
          <div className="bg-gradient-to-r from-white via-white/90 to-transparent absolute inset-0 w-3/4"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 -mt-10 w-full max-w-[560px]">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#F2FAF3] px-4 py-2 text-base font-semibold text-[#11773D]">
            <FaLeaf className="text-base" />
            Komunitas HijauIn
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-[60px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0B0F1F]">
            Bersama Kita Bisa
            <br />
            <span className="text-[#11773D]">Mengubah Dunia</span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-[470px] text-[18px] leading-9 text-[#4B5563]">
            Gabung dengan komunitas hijau di seluruh Indonesia, berbagi aksi,
            inspirasi, dan ciptakan dampak positif untuk bumi kita.
          </p>

          {/* Button */}
          <div className="flex items-center gap-4">
            <button className="flex h-[56px] items-center gap-2 rounded-xl bg-[#11773D] px-7 text-[16px] font-semibold text-white transition hover:bg-[#0E6534]">
              <FaUserPlus className="text-[15px]" />
              Gabung Komunitas
            </button>

            <button className="flex h-[56px] items-center gap-2 rounded-xl border border-[#D8E0DA] bg-white px-7 text-[16px] font-semibold text-[#243126] transition hover:bg-[#F8FAF8]">
              <FaUsers className="text-[15px] text-[#11773D]" />
              Jelajahi Komunitas
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-1080p relative z-20 w-full -mt-10 px-16 mx-auto">
        <div className="flex overflow-hidden rounded-[22px] border border-[#EEF2F1] bg-white shadow-md">
          {[
            {
              value: "15.000+",
              label: "Komunitas Aktif",
              icon: <FaUsers />,
            },
            {
              value: "125.430+",
              label: "Aksi Hijau Tercatat",
              icon: <FaLeaf />,
            },
            {
              value: "320+",
              label: "Kota di Indonesia",
              icon: <FaGlobeAsia />,
            },
            {
              value: "5.243",
              label: "Kegiatan Telah Dilakukan",
              icon: <FaSeedling />,
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-1 items-center justify-center gap-4 py-8 "
            >
              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3FAF4]">
                <div className="text-[#11773D] text-[45px] -ml-5">
                  {stat.icon}
                </div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-[28px] font-bold leading-none text-[#11773D]">
                  {stat.value}
                </h3>

                <p className="mt-2 text-[15px] font-medium text-[#4B5563]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jelajahi Komunitas Hijau */}
      <section className="max-w-1080p relative w-full px-16 py-24 mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="flex items-center gap-1 text-[30px] font-bold text-[#0B0F1F]">
            Jelajahi Komunitas Hijau
            <FaLeaf className="text-[#11773D] text-lg" />
          </h2>

          <button className="flex items-center gap-1 text-sm font-semibold text-[#11773D] transition hover:gap-2">
            Lihat Semua Komunitas
            <FaChevronRight className="text-[11px]" />
          </button>
        </div>

        <div className="relative">
          <div className="grid grid-cols-5 gap-5">
            {communities.map((com, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-[18px] border border-[#E8ECEA] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative h-[195px] overflow-hidden rounded-t-[18px]">
                  <Image
                    src={com.img}
                    alt={com.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Logo */}
                <div className="absolute left-5 top-[155px] z-30 flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-white">
                  <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#EEF8F1]">
                    <span className="text-[16px] font-black text-[#11773D]">
                      {com.logo}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 pt-11">
                  <h3 className="mb-2 text-[20px] font-bold leading-[1.3] text-[#0B0F1F]">
                    {com.title}
                  </h3>

                  <div className="mb-4 flex items-center gap-2 text-[13px] text-[#667085]">
                    <FaMapMarkerAlt className="text-[#11773D]" />
                    {com.loc}
                  </div>

                  <div className="mb-4 flex items-center gap-2 text-[13px] font-medium text-[#667085]">
                    <FaUsers className="text-[#11773D]" />
                    {com.mem} anggota
                  </div>

                  <div className="inline-flex w-max rounded-full bg-[#EEF8F1] px-3 py-1 text-[12px] font-medium text-[#11773D]">
                    {com.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow */}
          <button className="absolute right-[-22px] top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105">
            <FaChevronRight className="text-[#0B0F1F]" />
          </button>
        </div>
      </section>

      {/* Kegiatan Mendatang */}
      <section className="max-w-1080p w-full px-16 pb-24 mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <h2 className="flex items-center gap-1 text-[30px] font-bold text-[#0B0F1F]">
            Kegiatan Mendatang
            <FaLeaf className="text-[#11773D] text-lg" />
          </h2>

          <button className="flex items-center gap-1 text-sm font-semibold text-[#11773D] transition hover:gap-2">
            Lihat Semua Kegiatan
            <FaChevronRight className="text-[11px]" />
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-4 gap-5">
          {events.map((act, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-[18px] border border-[#E8ECEA] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative h-[205px] overflow-hidden">
                <Image
                  src={act.img}
                  alt={act.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Date */}
                <div className="absolute left-4 top-4 flex h-[56px] w-[56px] flex-col items-center justify-center rounded-xl bg-[#11773D] text-white shadow-md">
                  <span className="text-[24px] font-bold leading-none">
                    {act.date}
                  </span>

                  <span className="mt-1 text-[10px] font-semibold tracking-wide">
                    {act.month}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col p-5">
                <h3 className="mb-4 whitespace-pre-line text-[18px] font-bold leading-[1.35] text-[#0B0F1F]">
                  {act.title}
                  <FaLeaf className="ml-1 inline text-[12px] text-[#11773D]" />
                </h3>

                {/* Location */}
                <div className="mb-2 flex items-center gap-2 text-[13px] text-[#667085]">
                  <FaMapMarkerAlt className="text-[#11773D] text-[12px]" />
                  {act.loc}
                </div>

                {/* Time */}
                <div className="mb-5 flex items-center gap-2 text-[13px] text-[#667085]">
                  <FaRegClock className="text-[#11773D] text-[12px]" />
                  {act.time}
                </div>

                {/* Participants */}
                <div className="mb-5 flex items-center">
                  <div className="flex -space-x-2">
                    {act.avatars.map((avatar, i) => (
                      <div
                        key={i}
                        className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white"
                      >
                        <Image
                          src={avatar}
                          alt="participant"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  <span className="ml-3 text-[13px] font-medium text-[#667085]">
                    {act.p} peserta
                  </span>
                </div>

                {/* Divider */}
                <div className="mb-4 h-px bg-[#EEF2F1]" />

                {/* Button */}
                <button className="flex items-center justify-center gap-2 text-[14px] font-semibold text-[#11773D] transition hover:text-[#0E6534]">
                  <FaUserPlus className="text-[13px]" />
                  Ikut Kegiatan
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Kenapa Gabung Komunitas */}
      <section className="w-full bg-white py-24">
        <div className="max-w-1080p mx-auto px-16">
          {/* Header */}
          <div className="mb-14">
            <h2 className="flex items-center gap-1 text-[30px] font-bold text-[#0B0F1F]">
              Kenapa Gabung Komunitas HijauIn?
              <FaLeaf className="text-[#11773D] text-lg" />
            </h2>
          </div>

          {/* Content */}
          <div className="grid grid-cols-5">
            {impacts.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center px-5 text-center"
              >
                {/* Divider */}
                {index !== 4 && (
                  <>
                    <div className="absolute left-[calc(50%+48px)] top-10 h-px w-[calc(100%-96px)] bg-[#E7ECE8]" />

                    <FaLeaf className="absolute left-[calc(100%-10px)] top-[30px] z-10 text-[10px] text-[#69B35A]" />
                  </>
                )}

                {/* Icon */}
                <div className="mb-6 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#F2FAF4]">
                  <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={55}
                      height={55}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-[22px] font-bold leading-[1.3] text-[#0B0F1F]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[16px] leading-8 text-[#667085]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="max-w-1080p w-full px-16 pb-24 mx-auto">
        <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-r from-[#0D4E2E] to-[#0B4A2A] shadow-lg">
          <div className="flex h-[455px]">
            {/* LEFT IMAGE */}
            <div className="relative w-[34%] overflow-hidden">
              <Image
                src="/assets/komunitas/yukjadi.png"
                alt="Join Community"
                fill
                className="object-cover"
                priority
              />

              {/* Green curve */}
              <div className="absolute -right-16 top-0 h-full w-40 rounded-l-full bg-[#0D4E2E]" />
            </div>

            {/* CENTER */}
            <div className="flex w-[36%] flex-col justify-center px-8 text-white">
              <h2 className="mb-4 text-[44px] font-medium leading-[1.35]">
                Yuk, jadi bagian dari
                <br />
                <span className="text-[#94D497]">gerakan perubahan!</span> 
              </h2>

              <p className="mb-8 text-[15px] leading-7 text-[#C6D5CC]">
                Satu aksi kecil dari kita, bisa menjadi perubahan besar untuk
                masa depan bumi yang lebih baik.
              </p>

              <div className="flex gap-3">
                <button className="flex h-[46px] items-center gap-2 rounded-xl bg-[#1D8641] px-6 text-[14px] font-medium text-white transition hover:bg-[#2F8E48]">
                  Gabung Sekarang
                  <FaUserPlus className="text-[13px]" />
                </button>

                <button className="flex h-[46px] items-center gap-2 rounded-xl border border-[#7A9B86] px-6 text-[14px] font-medium text-white transition hover:bg-white/10">
                  Buat Komunitasmu
                  <FaUsers className="text-[13px]" />
                </button>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="flex w-[30%] items-center pr-6">
              <div className="w-full rounded-2xl bg-[#1B5B39]/90 p-6">
                <h3 className="mb-5 text-[17px] font-medium text-white">
                  Aktivitas Komunitas Hari Ini
                </h3>

                <div className="space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-3 text-[14px] text-[#D8E7DE]">
                      <FaLeaf className="text-[#9FE870]" />
                      Aksi Hijau
                    </span>
                    <span className="text-[28px] font-semibold text-white">
                      245
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-3 text-[14px] text-[#D8E7DE]">
                      <FaCloud className="text-[#9FE870]" />
                      CO₂ Berhasil Dikurangi
                    </span>
                    <span className="text-[28px] font-semibold text-white">
                      2.340 kg
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-3 text-[14px] text-[#D8E7DE]">
                      <FaTrashAlt className="text-[#9FE870]" />
                      Sampah Terkumpul
                    </span>
                    <span className="text-[28px] font-semibold text-white">
                      1.250 kg
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-3 text-[14px] text-[#D8E7DE]">
                      <FaTree className="text-[#9FE870]" />
                      Pohon Ditanam
                    </span>
                    <span className="text-[28px] font-semibold text-white">
                      320
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
