"use client";

import Image from "next/image";
import { FaUsers, FaCalendarAlt, FaStar, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

const activities = [
  {
    img: "/assets/beranda/bersihpantai.png",
    badge: "Bersih Bersama",
    title: "Bersih Pantai Anyer",
    peserta: "129 peserta",
    date: "12 Mei 2024",
  },
  {
    img: "/assets/beranda/tanampohon.png",
    badge: "Tanam Hijau",
    title: "Tanam Pohon Mangrove",
    peserta: "85 peserta",
    date: "10 Mei 2024",
  },
  {
    img: "/assets/beranda/workshop.png",
    badge: "Daur Ulang",
    title: "Workshop Daur Ulang",
    peserta: "96 peserta",
    date: "08 Mei 2024",
  },
];

const testimonies = [
  {
    avatar: "/assets/ava2.jpg",
    name: "Sinta Putri",
    text: '"HijauIn membantuku lebih sadar dan konsisten menjaga lingkungan setiap hari."',
  },
  {
    avatar: "/assets/ava1.jpg",
    name: "Budi Santoso",
    text: '"Challenge-nya seru dan komunitasnya positif banget!"',
  },
  {
    avatar: "/assets/ava3.jpg",
    name: "Andi Pratama",
    text: '"Fitur Eco Score bikin aku lebih termotivasi melakukan aksi ramah lingkungan setiap hari."',
  },
  {
    avatar: "/assets/ava4.jpg",
    name: "Rina Maharani",
    text: '"Komunitasnya aktif dan banyak kegiatan seru yang membuatku semakin peduli pada lingkungan."',
  },
  {
    avatar: "/assets/ava6.jpg",
    name: "Dewi Lestari",
    text: '"AI Rekomendasi sangat membantu memberikan ide sederhana untuk hidup lebih berkelanjutan."',
  },
  {
    avatar: "/assets/ava5.jpg",
    name: "Fajar Nugroho",
    text: '"Aplikasinya mudah digunakan dan challenge mingguan membuatku semakin semangat menjaga bumi."',
  },
];

export default function Testimoni() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const slides = [];

  for (let i = 0; i < testimonies.length; i += 2) {
    slides.push(testimonies.slice(i, i + 2));
  }

  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="px-4 py-12 sm:px-8 lg:px-16 lg:py-25">
      <div
        data-aos="fade-up"
        className="rounded-[30px] bg-[#F8F9F9] p-4 shadow-[0_10px_35px_rgba(0,0,0,.06)] sm:p-8"
      >
        <div className="flex flex-col gap-8 xl:flex-row">
          {/* LEFT */}
          <div data-aos="fade-right" className="w-full xl:w-[24%]">
            <h2 className="text-[clamp(1.5rem,3vw,1.75rem)] font-semibold leading-tight text-[#0B0F1F]">
              Komunitas <span className="text-[#076635]">Hijau,</span>
              <br />
              Perubahan Nyata
            </h2>

            <p className="mt-6 text-[16px] leading-8 text-[#667085]">
              Bergabung dengan ribuan orang hebat yang sudah memulai langkah
              hijau untuk bumi yang lebih baik.
            </p>

            <button
              data-aos="zoom-in"
              data-aos-delay="200"
              className="group mt-8 flex h-15 items-center gap-3 rounded-xl border border-[#B7E0C1] px-6 text-[16px] font-semibold text-[#076635] transition-all duration-300 hover:-translate-y-1 hover:bg-green-50"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EAF8EE] transition-transform duration-300 group-hover:scale-110">
                <FaUsers className="text-[20px]" />
              </div>
              Gabung Komunitas
            </button>
          </div>

          {/* CENTER */}
          <div data-aos="fade-up" data-aos-delay="150" className="w-full xl:w-[48%]">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-[22px] font-semibold">
                Kegiatan Komunitas Terbaru
              </h3>

              <button className="group flex items-center gap-2 text-[16px] font-semibold text-[#076635]">
                Lihat Semua
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {activities.map((item, index) => (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="relative h-[150px] w-full">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <span className="absolute bottom-3 left-3 rounded-full bg-[#E8F7EB] px-3 py-1 text-[11px] font-semibold text-[#076635]">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="mt-4 text-[16px] font-semibold text-[#0B0F1F]">
                    {item.title}
                  </h4>

                  <div className="mt-2 flex items-center gap-2 text-[13px] text-[#22A75D]">
                    <FaUsers />
                    {item.peserta}
                  </div>

                  <div className="mt-1 flex items-center gap-2 text-[13px] text-[#667085]">
                    <FaCalendarAlt />
                    {item.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="w-full xl:ml-10 xl:w-[28%]"
          >
            <h3 className="mb-6 text-[22px] font-semibold">Kata Mereka</h3>

            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {slides.map((group, slideIndex) => (
                  <div key={slideIndex} className="min-w-full space-y-5">
                    {group.map((item, cardIndex) => (
                      <div
                        key={item.name}
                        data-aos="fade-left"
                        data-aos-delay={cardIndex * 150}
                        className="rounded-2xl bg-[#FCFCFC] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="flex items-start gap-4">
                          <Image
                            src={item.avatar}
                            alt={item.name}
                            width={52}
                            height={52}
                            className="rounded-full"
                          />

                          <div className="flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <h4 className="text-[16px] font-semibold">
                                {item.name}
                              </h4>

                              <div className="flex text-[12px] text-[#FFC107]">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                              </div>
                            </div>

                            <p className="mt-2 text-[14px] leading-7 text-[#667085]">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="450"
              className="mt-6 flex justify-center gap-2"
            >
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-2 rounded-full transition-all ${selectedIndex === index
                      ? "w-5 bg-[#22A75D]"
                      : "w-2 bg-[#A5D6B0]"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
