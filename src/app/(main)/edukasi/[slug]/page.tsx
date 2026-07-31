// src/app/edukasi/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/app/data/edukasi";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaLink,
  FaLeaf,
  FaUsers,
  FaFacebookF,
  FaShoppingBag,
  FaTint,
} from "react-icons/fa";

import {
  FaBottleWater,
  FaBan,
  FaBoxOpen,
  FaBagShopping,
  FaLightbulb,
  FaPlug,
  FaSun,
} from "react-icons/fa6";

const stepIcons: Record<string, React.ReactNode[]> = {
  "kurangi-plastik-sekali-pakai": [
    <FaBottleWater key="1" />,
    <FaBan key="2" />,
    <FaShoppingBag key="3" />,
    <FaLeaf key="4" />,
    <FaBoxOpen key="5" />,
    <FaBagShopping key="6" />,
    <FaUsers key="7" />,
  ],

  "hemat-energi-di-rumah": [
    <FaLightbulb key="1" />,
    <FaPlug key="2" />,
    <FaLightbulb key="3" />,
    <FaSun key="4" />,
  ],
};

export default async function DetailEdukasi({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const steps = article.content.filter((item) => item.type === "step");
  const intro = article.content.find((item) => item.type === "paragraph");
  const qu = article.content.find((item) => item.type === "quote");
  const icons = stepIcons[article.slug] ?? [];

  const shuffle = <T,>(array: T[]) => {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
  };

  const shuffledArticles = shuffle(
    articles.filter((item) => item.id !== article.id)
  );

  const relatedArticles = shuffledArticles.slice(0, 3);
  const otherArticles = [...shuffledArticles].reverse();

  return (
    <div className="bg-gray-50 flex flex-col items-center w-full pb-24">
      {/* Header Container */}
      <div className="w-full px-16 py-12 bg-white">
        <Link
          href="/edukasi"
          className="text-[#11773D] hover:underline inline-flex items-center gap-2 mb-8 text-base font-bold"
          data-aos="fade-right"
        >
          <FaArrowLeft /> Kembali ke Edukasi
        </Link>
        <h1
          className="max-w-3xl mb-6 text-5xl font-bold leading-tight text-[#0B0F1F]"
          data-aos="fade-up"
        >
          {article.title}
        </h1>
        <div
          className="mb-10 flex items-center gap-8 text-[15px] font-medium text-[#667085]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="rounded-full bg-[#EAF5EE] px-5 py-2 text-sm font-semibold text-[#11773D]">
            {article.tag}
          </span>

          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-[18px] text-[#11773D]" />
            <span>{article.date}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="text-[18px] text-[#11773D]" />
            <span>{article.readTime}</span>
          </div>
        </div>
        <div
          className="w-full h-[550px] relative rounded-3xl overflow-hidden shadow-lg border border-gray-100"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <Image
            src={article.banner}
            alt={article.title}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="bg-gray-50 flex items-start w-full gap-12 px-16 pt-8">
        {/* Left Column */}
        <article className="w-2/3">
          <p
            className="rounded-3xl p-8 mb-12 text-xl leading-relaxed text-gray-700 bg-white"
            data-aos="fade-up"
          >
            {intro?.text}
          </p>

          <div className="relative -mt-10 mb-15">
            {/* Timeline Line */}
            <div className="absolute left-[33px] top-[34px] bottom-[34px] w-[2px] bg-[#DCEBD6]" />

            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative flex items-start gap-6"
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  {/* Titik timeline */}
                  <div className="absolute left-[30px] top-[30px] z-20 h-[8px] w-[8px] -translate-x-1/2 rounded-full bg-[#8BC34A]" />

                  {/* Icon */}
                  <div className="z-10 flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-[#EEF7E8] text-[30px] text-[#11773D]">
                    {icons[idx] ?? <FaLeaf />}
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="mb-2 text-[30px] font-semibold text-[#0B0F1F]">
                      {step.title}
                    </h3>

                    <p className="text-[18px] leading-8 text-[#667085]">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Block */}
          <div
            className="relative mb-16 overflow-hidden rounded-[24px] border border-[#E3EDD9] bg-[#F4F8F1] px-10 py-8"
            data-aos="flip-up"
          >
            <Image
              src="/assets/edukasi/leaf-left.png"
              alt="Leaf"
              width={28}
              height={28}
              className="absolute left-8 top-8"
            />
            <Image
              src="/assets/edukasi/leaf-right.png"
              alt="Leaf Decoration"
              width={55}
              height={55}
              className="absolute bottom-0 right-0 select-none"
            />

            <div className="flex items-start gap-5 pr-28">
              <div className="mt-1 h-7 w-7 shrink-0" />
              <p className="text-[22px] leading-[1.9] text-[#3B3F45]">
                {qu?.text}
              </p>
            </div>
          </div>

          {/* Artikel Lainnya */}
          <div className="mb-8" data-aos="fade-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-3xl font-bold text-[#0B0F1F]">
                Artikel Lainnya
              </h3>
              <Link
                href="/edukasi"
                className="text-[#11773D] hover:underline flex items-center gap-2 text-lg font-bold"
              >
                Lihat Semua &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {otherArticles.map((item, idx) => (
                <Link
                  key={item.id}
                  href={`/edukasi/${item.slug}`}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="group overflow-hidden rounded-[22px] border border-[#E8ECEA] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-[180px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-1 text-sm font-semibold text-[#11773D] shadow-sm">
                      {item.tag}
                    </span>
                  </div>

                  <div className="p-5">
                    <h4 className="mb-5 line-clamp-2 text-[22px] font-bold leading-[1.4] text-[#0B0F1F] transition group-hover:text-[#11773D]">
                      {item.title}
                    </h4>

                    <div className="flex items-center gap-2 text-[15px] text-[#667085]">
                      <FaClock className="text-[#11773D]" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>

        {/* Right Column - Sidebar */}
        <aside className="w-1/3 space-y-8">
          {/* Penulis Box */}
          <div
            className="overflow-hidden rounded-[24px] border border-[#E8ECEA] bg-white shadow-sm"
            data-aos="fade-left"
          >
            <div className="p-8">
              <h4 className="mb-8 text-[30px] font-semibold text-[#0B0F1F]">
                Penulis
              </h4>

              <div className="flex items-center gap-5">
                <div className="flex h-[104px] w-[104px] shrink-0 items-center justify-center rounded-full border-2 border-[#11773D] bg-[#F4F8F1]">
                  <Image
                    src="/assets/edukasi/daunteam.png"
                    alt="HijauIn"
                    width={55}
                    height={55}
                  />
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <h5 className="text-[25px] font-semibold text-[#0B0F1F]">
                      Tim HijauIn
                    </h5>
                    <FaCheckCircle className="text-[20px] text-[#11773D]" />
                  </div>

                  <p className="max-w-[280px] text-[18px] leading-9 text-[#667085]">
                    Bersama menebar inspirasi untuk hidup lebih hijau.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#EEF2F1]" />

            {/* Share */}
            <div className="p-8">
              <h4 className="mb-8 text-[30px] font-semibold text-[#0B0F1F]">
                Bagikan Artikel
              </h4>

              <div className="flex gap-6">
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-105">
                  <FaWhatsapp className="text-[28px]" />
                </button>
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:scale-105">
                  <FaFacebookF className="text-[26px]" />
                </button>
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1DA1F2] text-white transition hover:scale-105">
                  <FaTwitter className="text-[24px]" />
                </button>
                <button className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ECECEC] text-[#4B5563] transition hover:bg-[#E5E7EB]">
                  <FaLink className="text-[22px]" />
                </button>
              </div>
            </div>
          </div>

          {/* Artikel Terkait */}
          <div
            className="rounded-[24px] border border-[#E8ECEA] bg-white p-8 shadow-sm"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h4 className="mb-8 text-[26px] font-semibold text-[#0B0F1F]">
              Artikel Terkait
            </h4>

            <div className="space-y-8">
              {relatedArticles.map((item, idx) => (
                <Link
                  key={item.id}
                  href={`/edukasi/${item.slug}`}
                  className="group flex items-start gap-5"
                  data-aos="fade-left"
                  data-aos-delay={idx * 100 + 150}
                >
                  <div className="relative h-[110px] w-[150px] shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex-1 pt-1">
                    <h5 className="mb-4 line-clamp-2 text-[22px] font-semibold leading-[1.35] text-[#0B0F1F] transition group-hover:text-[#11773D]">
                      {item.title}
                    </h5>

                    <div className="flex items-center gap-2 text-[17px] text-[#667085]">
                      <FaClock className="text-[#11773D]" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar CTA */}
          <div
            className="relative overflow-hidden rounded-[24px] border border-[#E8ECEA] bg-[#F4F8F1] p-8 shadow-sm"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative z-10 flex items-center justify-between gap-6">
              <div className="max-w-[300px]">
                <h3 className="mb-5 text-[28px] font-bold leading-tight text-[#11773D]">
                  Yuk, jadi bagian dari perubahan!
                </h3>

                <p className="mb-8 text-[18px] leading-[2] text-[#667085]">
                  Setiap langkah kecil yang kamu ambil hari ini, membawa
                  perubahan besar untuk masa depan bumi.
                </p>

                <button className="inline-flex items-center gap-3 rounded-xl bg-[#11773D] px-8 py-4 text-[18px] font-semibold text-white transition hover:bg-[#0F6535]">
                  Gabung Komunitas
                  <FaUsers className="text-lg" />
                </button>
              </div>

              <div className="relative h-[300px] w-[200px] shrink-0">
                <Image
                  src="/assets/edukasi/bumi.png"
                  alt="Bumi"
                  fill
                  className="object-contain mt-10"
                />
              </div>
            </div>

            <div className="absolute -bottom-2 right-0 h-24 w-40 rounded-full bg-[#E8F3E4] blur-2xl" />
          </div>
        </aside>
      </div>
    </div>
  );
}