// src/app/komunitas/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaUsers,
  FaLeaf,
  FaGlobe,
  FaCalendarAlt,
  FaShareAlt,
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaCommentDots,
  FaTrash,
  FaTree,
  FaClock,
} from "react-icons/fa";
import { Community } from "../page";

export default function DetailKomunitas({
  community,
}: {
  community: Community;
}) {
  return (
    <div className="bg-gray-50 flex flex-col items-center w-full">
      <div className="w-full px-16 py-12">
        <Link
          data-aos="fade-right"
          data-aos-duration="500"
          href="/komunitas"
          className="text-[#11773D] hover:underline inline-flex items-center gap-2 mb-8 text-base font-bold"
        >
          <FaArrowLeft /> Kembali ke Komunitas
        </Link>

        {/* Main Banner Card */}
        <div
          data-aos='fade-right'
          data-aos-duration='800'
          className="bg-white rounded-[3rem] p-10 flex gap-10   items-stretch">
          {/* Left Side */}
          <div className="flex flex-col justify-between w-1/2 py-6">
            <div>
              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-green-100 bg-[#EEF6EE]">
                <Image
                  src="/assets/komunitas/det.png"
                  alt={community.name}
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>
              <h1 className="mb-4 text-6xl font-bold text-[#0B0F1F]">
                {community.name} <FaLeaf className="text-[#11773D] inline" />
              </h1>
              <div className="flex items-center gap-3 mb-8 text-xl font-medium text-gray-600">
                <FaMapMarkerAlt className="text-[#11773D]" /> {community.city}
              </div>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                {community.caption}
              </p>
              <div className="flex flex-wrap gap-3 mb-12">
                {community.tags.map((e, idx) => (
                  <span
                    key={idx}
                    className="bg-[#11773D]-light/50 text-[#11773D] border-[#11773D]-light px-4 py-2 text-base font-medium border rounded-full"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <button className="bg-[#11773D] rounded-xl hover:bg-green-700 flex items-center gap-3 px-8 py-4 text-lg font-bold text-white transition">
                Gabung Komunitas <FaUsers />
              </button>
              <button className="rounded-xl hover:bg-gray-50 flex items-center gap-3 px-8 py-4 text-lg font-bold text-gray-700 transition bg-white border-2 border-gray-200">
                Bagikan <FaShareAlt />
              </button>
            </div>
          </div>
          {/* Right Side */}
          <div
            data-aos='fade-left'
            data-aos-duration='800'
            className="w-1/2 relative rounded-4xl overflow-hidden">
            <Image
              src={community.image}
              alt="Community Activity"
              fill
              className="object-cover"
            />
            <div className="bottom-6 right-6 rounded-2xl absolute flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-lg">
              <div className="flex -space-x-4">
                <div className="relative w-12 h-12 overflow-hidden border-2 border-white rounded-full">
                  <Image src="/assets/ava1.jpg" alt="u1" fill />
                </div>
                <div className="relative w-12 h-12 overflow-hidden border-2 border-white rounded-full">
                  <Image src="/assets/ava2.jpg" alt="u2" fill />
                </div>
                <div className="relative w-12 h-12 overflow-hidden border-2 border-white rounded-full">
                  <Image src="/assets/ava3.jpg" alt="u3" fill />
                </div>
              </div>
              <div>
                <div className="text-xl font-bold leading-tight text-[#0B0F1F]">
                  {community.member_count}+
                </div>
                <div className="text-base text-gray-500">Anggota Aktif</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="rounded-3xl flex justify-between p-10  bg-white border border-gray-100 shadow-sm">
          {[
            { icon: <FaUsers />, val: "15.000+", lbl: "Komunitas Aktif" },
            { icon: <FaLeaf />, val: "125.430+", lbl: "Aksi Hijau Tercatat" },
            { icon: <FaGlobe />, val: "320+", lbl: "Kota di Indonesia" },
            {
              icon: <FaCalendarAlt />,
              val: "5.243",
              lbl: "Kegiatan Telah Dilakukan",
            },
          ].map((stat, idx) => (
            <div data-aos='fade-up' data-aos-duration="800" data-aos-delay={idx * 150} key={idx} className="flex items-center gap-5">
              <div className="text-[#11773D] text-5xl">{stat.icon}</div>
              <div>
                <div className="text-2xl font-bold text-[#0B0F1F]">
                  {stat.val}
                </div>
                <div className="text-base font-medium text-gray-500">
                  {stat.lbl}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex w-full gap-10 px-16">
        {/* Left Column */}
        <div className="w-2/3 space-y-10">
          {/* Tentang Komunitas */}
          <div
            data-aos='zoom-in-right'
            data-aos-duration='800'
            className="rounded-3xl p-10 bg-white">
            <h2 className="mb-6 text-3xl font-bold text-[#0B0F1F]">
              Tentang Komunitas <FaLeaf className="text-[#11773D] inline" />
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-gray-600">
              {community.name} adalah {community.caption}
            </p>
            <div className="bg-gray-50 rounded-2xl grid grid-cols-4 gap-6 p-6 border border-gray-100">
              <div>
                <div className="text-[#11773D] flex items-center gap-2 mb-2 font-bold">
                  <FaCalendarAlt /> Didirikan
                </div>
                <div className="text-base font-medium text-gray-800">
                  {new Date(community.created_at).toLocaleString("id-ID", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </div>
              </div>
              <div>
                <div className="text-[#11773D] flex items-center gap-2 mb-2 font-bold">
                  <FaUsers /> Tipe Komunitas
                </div>
                <div className="text-base font-medium text-gray-800">
                  {community.tags[0]}
                </div>
              </div>
              <div>
                <div className="text-[#11773D] flex items-center gap-2 mb-2 font-bold">
                  <FaMapMarkerAlt /> Lokasi
                </div>
                <div className="text-base font-medium text-gray-800">
                  {community.city}
                </div>
              </div>
              <div>
                <div className="text-[#11773D] flex items-center gap-2 mb-2 font-bold">
                  <FaGlobe /> Bahasa
                </div>
                <div className="text-base font-medium text-gray-800">
                  Indonesia
                </div>
              </div>
            </div>
          </div>

          {/* Kegiatan Terbaru */}
          <div
            data-aos='zoom-in-right'
            data-aos-duration='800'
            className="-mt-10 rounded-[28px] border border-[#E9EDF3] bg-white p-8 shadow-[0_4px_20px_rgba(16,24,40,0.04)]">
            <h2 className="mb-6 flex items-center gap-2 text-[30px] font-bold text-[#101828]">
              Kegiatan Terbaru
              <FaLeaf className="text-[#11773D] text-lg" />
            </h2>

            <div className="divide-y divide-[#EAECF0]">
              {[
                {
                  date: "25 MEI",
                  title: "Aksi Tanam 1000 Pohon di Bukit Hijau",
                  loc: "Bogor, Jawa Barat",
                  time: "07.00 - 12.00 WIB",
                  img: "/assets/komunitas/aksi.png",
                  p: "+128",
                },
                {
                  date: "01 JUN",
                  title: "Beach Clean Up Pantai Kuta",
                  loc: "Bali, Bali",
                  time: "06.30 - 10.30 WITA",
                  img: "/assets/komunitas/beach.png",
                  p: "+86",
                },
                {
                  date: "08 JUN",
                  title: "Workshop Eco Living Zero Waste",
                  loc: "Bandung, Jawa Barat",
                  time: "09.00 - 13.00 WIB",
                  img: "/assets/komunitas/workshop.png",
                  p: "+64",
                },
                {
                  date: "15 JUN",
                  title: "Gowes Hijau Keliling Kota",
                  loc: "Yogyakarta, DI Yogyakarta",
                  time: "06.00 - 09.00 WIB",
                  img: "/assets/komunitas/bike.png",
                  p: "+97",
                },
              ].map((act, idx) => (
                <div
                  key={idx}
                  className="group flex items-center gap-5 py-5 transition hover:bg-[#FAFCFA]"
                >
                  {/* Thumbnail */}
                  <div className="relative h-[82px] w-[170px] flex-shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={act.img}
                      alt={act.title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute left-2 top-2 rounded-lg bg-[#11773D] px-3 py-2 text-center text-white shadow-md">
                      <p className="text-lg font-bold leading-none">
                        {act.date.split(" ")[0]}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold uppercase leading-none">
                        {act.date.split(" ")[1]}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-3 flex items-center gap-2 text-[20px] font-bold text-[#101828]">
                      {act.title}
                      <FaLeaf className="text-sm text-[#11773D]" />
                    </h3>

                    <div className="space-y-2 text-[15px] font-medium text-[#667085]">
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-[#11773D]" />
                        {act.loc}
                      </div>

                      <div className="flex items-center gap-2">
                        <FaClock className="text-[#11773D]" />
                        {act.time}
                      </div>
                    </div>
                  </div>

                  {/* Participants */}
                  <div className="flex items-center gap-4 pl-4">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((num) => (
                        <div
                          key={num}
                          className="relative h-8 w-8 overflow-hidden rounded-full border-2 border-white"
                        >
                          <Image
                            src={`/assets/ava${num}.jpg`}
                            alt={`Avatar ${num}`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    <span className="text-[15px] font-semibold text-[#667085]">
                      {act.p} peserta
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-7 flex w-full items-center justify-center gap-2 text-[18px] font-bold text-[#11773D] transition hover:gap-3">
              Lihat Semua Kegiatan
              <span className="text-xl">→</span>
            </button>
          </div>
          {/* Galeri Kegiatan */}
          <div
            data-aos='zoom-in-right'
            data-aos-duration='800'
            className="rounded-3xl p-10 bg-white border border-gray-100 shadow-sm">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-3xl font-semibold text-[#0B0F1F]">
                Galeri Kegiatan <FaLeaf className="text-[#11773D] inline" />
              </h2>
              <button className="text-[#11773D] hover:underline flex items-center gap-2 text-lg font-bold">
                Lihat Semua Galeri &rarr;
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="relative h-32 w-full overflow-hidden rounded-xl shadow-sm transition hover:opacity-80 cursor-pointer">
                <Image
                  src="/assets/komunitas/thumb-green.png"
                  alt="Kegiatan Tanam Pohon"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-32 w-full overflow-hidden rounded-xl shadow-sm transition hover:opacity-80 cursor-pointer">
                <Image
                  src="/assets/komunitas/beach.png"
                  alt="Beach Clean Up"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-32 w-full overflow-hidden rounded-xl shadow-sm transition hover:opacity-80 cursor-pointer">
                <Image
                  src="/assets/komunitas/workshop.png"
                  alt="Workshop Zero Waste"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-32 w-full overflow-hidden rounded-xl shadow-sm transition hover:opacity-80 cursor-pointer">
                <Image
                  src="/assets/komunitas/goes.png"
                  alt="Gowes Hijau"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom CTA Banner */}
        </div>

        {/* Right Column (Sidebar) */}
        <div className="w-1/3 space-y-8">
          {/* Informasi Kontak */}
          <div
            data-aos='zoom-in-left'
            data-aos-duration='800'
            className="rounded-3xl border border-[#E9EDF3] bg-white p-8">
            <h3 className="mb-8 text-[30px] font-bold text-[#101828]">
              Informasi Kontak
            </h3>

            <div className="space-y-7">
              <div className="flex items-center gap-5">
                <FaEnvelope className="text-[22px] text-[#11773D]" />
                <span className="text-[17px] font-medium text-[#667085]">
                  greencampus@hijauin.id
                </span>
              </div>

              <div className="flex items-center gap-5">
                <FaPhone className="text-[22px] text-[#11773D]" />
                <span className="text-[17px] font-medium text-[#667085]">
                  +62 812-3456-7890
                </span>
              </div>

              <div className="flex items-center gap-5">
                <FaInstagram className="text-[22px] text-[#11773D]" />
                <span className="text-[17px] font-medium text-[#667085]">
                  @greencampus.id
                </span>
              </div>
            </div>
          </div>

          {/* Koordinator */}
          <div
            data-aos='zoom-in-left'
            data-aos-duration='800'
            className="rounded-3xl p-8 bg-white shadow-sm">
            <h3 className="mb-6 text-2xl font-bold text-[#0B0F1F]">
              Koordinator
            </h3>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-16 h-16 overflow-hidden rounded-full shadow-sm">
                <Image
                  src="/assets/ava1.jpg"
                  alt="Coordinator"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-[#0B0F1F]">
                  Rina Lestari
                </div>
                <div className="text-base text-gray-500">Koordinator Utama</div>
              </div>
            </div>
            <button className="bg-[#EEF4ED]-light text-[#11773D] rounded-xl hover:bg-green-100 flex items-center justify-center w-full gap-3 py-4 text-lg font-bold transition border border-green-200">
              <FaCommentDots /> Kirim Pesan
            </button>
          </div>

          {/* Fokus Kami */}
          <div
            data-aos='zoom-in-left'
            data-aos-duration='800'
            className="rounded-3xl p-8 bg-white border border-gray-100 shadow-sm">
            <h3 className="mb-6 text-2xl font-bold text-[#0B0F1F]">
              Fokus Kami
            </h3>
            <ul className="space-y-6 text-lg font-medium text-gray-700">
              <li className="flex items-center gap-4">
                <div className="bg-[#11773D]-light text-[#11773D] flex items-center justify-center w-10 h-10 text-xl rounded-lg">
                  <FaLeaf />
                </div>{" "}
                Aksi Hijau
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-[#11773D]-light text-[#11773D] flex items-center justify-center w-10 h-10 text-xl rounded-lg">
                  <FaGlobe />
                </div>{" "}
                Edukasi Lingkungan
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-[#11773D]-light text-[#11773D] flex items-center justify-center w-10 h-10 text-xl rounded-lg">
                  <FaTrash />
                </div>{" "}
                Pengelolaan Sampah
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-[#11773D]-light text-[#11773D] flex items-center justify-center w-10 h-10 text-xl rounded-lg">
                  <FaTree />
                </div>{" "}
                Penghijauan Kampus
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        data-aos='fade-up'
        data-aos-duration='500'
        data-aos-anchor-placement="top-bottom"
        className="w-full px-10">
        <div className="relative mt-16 flex items-center justify-between overflow-hidden rounded-[28px] border border-[#E8F2EA] bg-[#F5FAF6] px-12 py-6 shadow-[0_4px_20px_rgba(16,24,40,0.04)]">
          {/* Left */}
          <div className="flex items-center gap-8">
            <div className="relative h-[120px] w-[120px] flex-shrink-0">
              <Image
                src="/assets/komunitas/cta.png"
                alt="Sprout"
                fill
                className="object-contain"
              />
            </div>

            <div>
              <h2 className="text-[24px] font-bold leading-tight text-[#101828]">
                Gabung bersama{" "}
                <span className="text-[#11773D]">Green Campus</span>
              </h2>

              <p className="mt-2 text-[15px] font-medium text-[#667085]">
                Bersama kita wujudkan kampus hijau, bersih, dan berkelanjutan.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="flex h-[54px] items-center gap-2 rounded-[14px] bg-[#11773D] px-8 text-[16px] font-semibold text-white transition hover:bg-[#0D6433]">
            Gabung Komunitas
            <FaUsers className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
