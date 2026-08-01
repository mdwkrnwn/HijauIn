import { Hero } from './component/Hero';
import Image from "next/image";
import {
  FaArrowRight,
} from "react-icons/fa6";
import { userProfiles } from "../profil/profil";
import { FeatureCard } from "./component/components";
import { MainSection } from './component/MainSection';


export default function AiAssistantPage({ userProfiles }: { userProfiles: userProfiles }) {
  return (
    <div className="flex flex-col w-full gap-6">

      {/* Hero Section */}
      <Hero />
      {/* Features Grid */}
      <div>
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-[22px] font-semibold text-[#0B0F1F]">Fitur AI</h3>

          <button className="flex items-center gap-2 text-[17px] font-semibold text-[#11773D] transition hover:gap-3">
            Lihat Semua
            <FaArrowRight className="text-sm" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-5">
          <FeatureCard
            icon="/assets/ai/scan.png"
            title="Scan Sampah"
            desc="Scan jenis sampah dan dapatkan cara pengelolaan yang tepat."
          />

          <FeatureCard
            icon="/assets/ai/analisis.png"
            title="Analisis Aktivitas"
            desc="Upload foto aktivitas hijau dan AI akan menganalisisnya."
          />

          <FeatureCard
            icon="/assets/ai/tanya.png"
            title="Tanya Green Coach"
            desc="Tanyakan seputar gaya hidup hijau dan dapatkan jawabannya."
          />

          <FeatureCard
            icon="/assets/ai/insight.png"
            title="Insight Mingguan"
            desc="AI akan merangkum kebiasaanmu dan memberi insight bermanfaat."
          />

          <FeatureCard
            icon="/assets/ai/rekomendasi.png"
            title="Rekomendasi"
            desc="Dapatkan rekomendasi aksi dan challenge yang cocok untukmu."
          />
        </div>
      </div>

      {/* Main Bottom Section */}
      <MainSection userId={userProfiles.id} />

      {/* Footer Banner */}
      <div className="flex items-center justify-between rounded-3xl border border-[#EAECF0] bg-white px-8 py-7">
        {/* Left */}
        <div className="flex w-[60%] items-center gap-6">
          <Image
            src="/assets/ai/tahukahkamu.png"
            alt="Earth"
            width={150}
            height={150}
            className="object-contain shrink-0"
          />

          <div>
            <h3 className="mb-3 text-[22px] font-semibold text-[#0B0F1F]">
              Tahukah kamu?
            </h3>

            <p className="max-w-130 text-[18px] leading-8 text-[#475467]">
              Jika semua pengguna HijauIn melakukan 1 aksi kecil setiap hari,
              kita bisa mengurangi ribuan ton CO₂ setiap tahunnya! 💚
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-10 h-24 w-px bg-[#EAECF0]" />

        {/* Right */}
        <div className="flex flex-1 items-center gap-5">
          <Image
            src="/assets/ai/da.png"
            alt="Leaf"
            width={42}
            height={42}
            className="object-contain shrink-0"
          />

          <div>
            <h4 className="text-[20px] font-semibold text-[#11773D]">
              Bersama HijauIn,
            </h4>

            <p className="mt-2 text-[18px] leading-8 text-[#475467]">
              kita ciptakan bumi yang
              <br />
              lebih baik untuk generasi mendatang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
