import Image from "next/image";
import { FaArrowRight, FaLeaf } from "react-icons/fa";

export default function CTA() {
  const features = [
    {
      src: "/assets/beranda/ai-rekomendasi2.png",
      title: "AI Rekomendasi",
      desc: (
        <>
          Rekomendasi aksi
          <br />
          hijau yang personal
          <br />
          dari AI.
        </>
      ),
    },
    {
      src: "/assets/beranda/eco-score2.png",
      title: "Eco Score",
      desc: (
        <>
          Pantau skor
          <br />
          keberlanjutan dan
          <br />
          perkembangan aksimu.
        </>
      ),
    },
    {
      src: "/assets/beranda/catataksi2.png",
      title: "Catat Aksi Harian",
      desc: (
        <>
          Catat aksi ramah
          <br />
          lingkungan dengan
          <br />
          mudah setiap hari.
        </>
      ),
    },
    {
      src: "/assets/beranda/person2.png",
      title: "Challenge & Misi",
      desc: (
        <>
          Ikuti tantangan seru
          <br />
          dan raih badge
          <br />
          menarik.
        </>
      ),
    },
  ];

  return (
    <section data-aos="fade-up" className="px-4 py-9 sm:px-8 lg:px-16">
      <div className="relative overflow-hidden rounded-4xl bg-[#F1F6EA] p-6 sm:p-8 lg:p-16">
        {/* ================= ORNAMENT ================= */}

        <Image
          src="/assets/beranda/daunbesar.png"
          alt=""
          width={300}
          height={300}
          className="pointer-events-none absolute -right-20 -bottom-10 z-0 animate-float"
        />

        <Image
          src="/assets/beranda/daunkecil.png"
          alt=""
          width={250}
          height={250}
          className="pointer-events-none absolute -bottom-15 left-73.75 z-0 opacity-90 animate-float"
        />

        <Image
          src="/assets/beranda/daunkecil.png"
          alt=""
          width={100}
          height={100}
          className="pointer-events-none absolute left-110 top-5 rotate-12 opacity-80 animate-float"
        />

        <Image
          src="/assets/beranda/daunkecil.png"
          alt=""
          width={28}
          height={28}
          className="pointer-events-none absolute right-6 top-8 opacity-70 animate-float"
        />

        {/* ================= CONTENT ================= */}

        <div className="relative z-10 flex flex-col gap-8 xl:flex-row xl:items-center">
          {/* LEFT */}
          <div className="w-full xl:w-[38%]">
            <FaLeaf
              data-aos="fade-right"
              data-aos-duration="700"
              className="mb-6 text-sm text-[#076635]"
            />

            <h2
              data-aos="fade-up"
              data-aos-delay="150"
              className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.18] text-[#0B0F1F]"
            >
              Punya Teman Pintar
              <br />
              Untuk Hidup <span className="text-[#076635]">Lebih Hijau</span>
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-8 text-[clamp(1rem,1.5vw,1.125rem)] leading-8 text-[#667085] sm:leading-9"
            >
              AI Green Coach siap membantumu memahami dampak
              <br />
              dari setiap aksi dan memberikan rekomendasi
              <br />
              personal agar hidupmu semakin berdampak.
            </p>

            <button
              data-aos="zoom-in"
              data-aos-delay="450"
              className="group relative mt-10 inline-flex h-12.5 items-center overflow-hidden rounded-full bg-[linear-gradient(90deg,#076635_0%,#0A6F39_48%,#086735_100%)] pl-8 pr-2.5 text-[17px] font-medium tracking-[0.01em] text-white shadow-[0_10px_22px_rgba(7,102,53,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(7,102,53,0.25)]"
            >
              <span className="absolute inset-x-0 top-0 h-px bg-white/25" />

              <span className="relative z-10">Coba Sekarang</span>

              <span className="relative z-10 ml-3 flex h-7.5 w-7.5 items-center justify-center rounded-full bg-white transition-transform duration-300 group-hover:translate-x-1">
                <FaArrowRight className="text-[13px] text-[#076635]" />
              </span>
            </button>
          </div>

          {/* RIGHT */}
          <div
            data-aos="fade-left"
            data-aos-duration="900"
            className="relative z-10 w-full overflow-hidden rounded-[28px] border border-white/40 bg-white/30 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur-md xl:w-[60%]"
          >
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {features.map((feature, idx) => (
                <div
                  key={feature.title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                  className="group flex min-h-[280px] flex-col items-center justify-start rounded-2xl border border-[#EEF2EE] bg-white/80 px-5 py-8 text-center"
                >
                  <Image
                    src={feature.src}
                    alt={feature.title}
                    width={180}
                    height={180}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />

                  <h3 className="mt-4 text-[20px] font-semibold text-[#0B0F1F]">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-8 text-[#667085]">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}