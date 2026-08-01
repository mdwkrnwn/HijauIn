"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import { FaPaperPlane, FaArrowRight } from "react-icons/fa";
import { SuggestionChip } from "./components";
export function Hero({ onSend }: { onSend: (text: string) => void }) {
  const [input, setInput] = useState("");
  const send = () => {
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };
  const sendSuggestion = (text: string) => {
    onSend(text);
  };
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#EAECF0] bg-linear-to-r from-white via-[#FCFEFC] to-[#F2F9F3] px-8 py-7">
      {/* Robot */}
      <div className="absolute right-0 top-0 h-full w-[48%]">
        <Image
          src="/assets/ai/main.png"
          alt="Eco AI"
          fill
          className="object-contain object-right"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[58%]">
        <h2 className="text-[28px] font-bold text-[#0B0F1F]">Hai Budi! 👋</h2>

        <p className="mt-3 max-w-105 text-[17px] leading-8 text-[#667085]">
          Aku Eco AI, siap membantumu
          <br />
          menjadi pribadi yang lebih peduli
          <br />
          pada bumi.
        </p>

        {/* Search */}
        <div className="relative mt-8">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                send();
              }
            }}
            placeholder="Tanyakan apa saja tentang gaya hidup hijau..."
            className="h-14 w-full rounded-2xl border border-[#EAECF0] bg-white pl-6 pr-16 text-[16px] text-[#344054] outline-none placeholder:text-[#98A2B3]"
          />

          <button
            onClick={send}
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#11773D] transition hover:bg-[#0D6433]"
          >
            <FaPaperPlane className="text-sm text-white" />
          </button>
        </div>

        {/* Suggestion */}
        <div className="mt-5 flex flex-wrap gap-3">
          <SuggestionChip
            onClick={() => sendSuggestion("Cara mengurangi sampah plastik")}
            icon={
              <Image
                src="/assets/edukasi/daur.png"
                alt=""
                width={16}
                height={16}
              />
            }
            text="Cara mengurangi sampah plastik"
          />

          <SuggestionChip
            onClick={() => sendSuggestion("Tips hemat energi di rumah")}
            icon={
              <Image src="/assets/petir.png" alt="" width={16} height={16} />
            }
            text="Tips hemat energi di rumah"
          />

          <SuggestionChip
            onClick={() => sendSuggestion("Manfaat naik sepeda")}
            icon={
              <Image
                src="/assets/dashboard-komunitas/bike.png"
                alt=""
                width={16}
                height={16}
              />
            }
            text="Manfaat naik sepeda"
          />

          <SuggestionChip
            onClick={() =>
              sendSuggestion("Berikan rekomendasi gaya hidup hijau lainnya")
            }
            icon={<FaArrowRight className="text-xs text-[#11773D]" />}
            text="Lainnya"
          />
        </div>
      </div>
    </div>
  );
}
