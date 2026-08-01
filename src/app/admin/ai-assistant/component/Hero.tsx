import React from "react";
import Image from "next/image";
import { FaPaperPlane, FaArrowRight } from "react-icons/fa";
import { SuggestionChip } from "./components";
export function Hero({ }) {
  return <div className="relative overflow-hidden rounded-3xl border border-[#EAECF0] bg-linear-to-r from-white via-[#FCFEFC] to-[#F2F9F3] px-8 py-7">
    {
      /* Robot */
    }
    <div className="absolute right-0 top-0 h-full w-[48%]">
      <Image src="/assets/ai/main.png" alt="Eco AI" fill className="object-contain object-right" priority />
    </div>

    {
      /* Content */
    }
    <div className="relative z-10 max-w-[58%]">
      <h2 className="text-[28px] font-bold text-[#0B0F1F]">Hai Dwi! 👋</h2>

      <p className="mt-3 max-w-105 text-[17px] leading-8 text-[#667085]">
        Aku Eco AI, siap membantumu
        <br />
        menjadi pribadi yang lebih peduli
        <br />
        pada bumi.
      </p>

      {
        /* Search */
      }
      <div className="relative mt-8">
        <input type="text" placeholder="Tanyakan apa saja tentang gaya hidup hijau..." className="h-14 w-full rounded-2xl border border-[#EAECF0] bg-white pl-6 pr-16 text-[16px] text-[#344054] outline-none placeholder:text-[#98A2B3]" />

        <button className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#11773D] transition hover:bg-[#0D6433]">
          <FaPaperPlane className="text-sm text-white" />
        </button>
      </div>

      {
        /* Suggestion */
      }
      <div className="mt-5 flex flex-wrap gap-3">
        <SuggestionChip icon={<Image src="/assets/ai/recycle.png" alt="" width={16} height={16} />} text="Cara mengurangi sampah plastik" />

        <SuggestionChip icon={<Image src="/assets/ai/energy.png" alt="" width={16} height={16} />} text="Tips hemat energi di rumah" />

        <SuggestionChip icon={<Image src="/assets/ai/bike.png" alt="" width={16} height={16} />} text="Manfaat naik sepeda" />

        <SuggestionChip icon={<FaArrowRight className="text-[#11773D] text-xs" />} text="Lainnya" />
      </div>
    </div>
  </div>;
}
