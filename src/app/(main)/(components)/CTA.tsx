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
    <section className="px-16 py-9">
      <div className="relative overflow-hidden rounded-[32px] bg-[#F1F6EA] p-16">
        {/* ================= ORNAMENT ================= */}

        {/* Daun besar kanan */}
        <Image
          src="/assets/beranda/daunbesar.png"
          alt=""
          width={300}
          height={300}
          className="pointer-events-none absolute -right-20 -bottom-10 z-0"
        />

        {/* Daun kiri bawah */}
        <Image
          src="/assets/beranda/daunkecil.png"
          alt=""
          width={250}
          height={250}
          className="pointer-events-none absolute -bottom-15 left-[295px]  z-0 opacity-90"
        />

        {/* Daun atas tengah */}
        <Image
          src="/assets/beranda/daunkecil.png"
          alt=""
          width={100}
          height={100}
          className="pointer-events-none absolute left-[440px] top-5 rotate-12 opacity-80"
        />

        {/* Daun kecil kanan atas */}
        <Image
          src="/assets/beranda/daunkecil.png"
          alt=""
          width={28}
          height={28}
          className="pointer-events-none absolute right-6 top-8 opacity-70"
        />

        {/* ================= CONTENT ================= */}

        <div className="relative z-10 flex items-center justify-between gap-8">
          {/* LEFT */}
          <div className="w-[38%]">
            <FaLeaf className="mb-6 text-sm text-[#076635]" />

            <h2 className="text-[40px] font-semibold leading-[1.18] text-[#0B0F1F]">
              Punya Teman Pintar
              <br />
              Untuk Hidup <span className="text-[#076635]">Lebih Hijau</span>
            </h2>

            <p className="mt-8 text-[18px] leading-9 text-[#667085]">
              AI Green Coach siap membantumu memahami dampak
              <br />
              dari setiap aksi dan memberikan rekomendasi
              <br />
              personal agar hidupmu semakin berdampak.
            </p>

            <button
              className="
              group
              relative
              mt-10
              inline-flex
              h-[50px]
              items-center
              overflow-hidden
              rounded-full
              bg-[linear-gradient(90deg,#076635_0%,#0A6F39_48%,#086735_100%)]
              pl-8
              pr-[10px]
              text-[17px]
              font-medium
              tracking-[0.01em]
              text-white
              shadow-[0_10px_22px_rgba(7,102,53,0.18)]
              transition-all
              duration-300
              hover:brightness-[1.03]
            "
            >
              {/* highlight */}
              <span className="absolute inset-x-0 top-0 h-[1px] bg-white/25" />

              <span className="relative z-10">Coba Sekarang</span>

              <span className="relative z-10 ml-3 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white">
                <FaArrowRight className="text-[13px] text-[#076635]" />
              </span>
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative z-10 w-[60%] overflow-hidden rounded-[28px] border border-white/40 bg-white/30 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <div className="grid grid-cols-4">
              {features.map((feature, idx) => (
                <div
                  key={feature.title}
                  className={`flex min-h-[300px] flex-col items-center justify-start px-7 py-10 text-center ${
                    idx !== features.length - 1
                      ? "border-r border-[#EEF2EE]"
                      : ""
                  }`}
                >
                  <Image
                    src={feature.src}
                    alt={feature.title}
                    width={180}
                    height={180}
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
