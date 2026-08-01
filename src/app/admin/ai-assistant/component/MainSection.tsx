"use client";

import { useState, useRef, useEffect, useTransition } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import {
  FaRecycle,
  FaBus,
  FaPaperclip,
  FaPaperPlane,
  FaCamera,
  FaArrowRight,
  FaSpinner,
} from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { MdOutlineWaterDrop } from "react-icons/md";
import { RobotChat, UserMessage, ChatSuggestion, RecItem } from "./components";
import { continueChat } from "../action";

interface Message {
  id: string;
  role: "user" | "model";
  content: string;
}

const handleComingSoon = () => {
  Swal.fire({
    icon: "info",
    title: "Coming Soon! 🚀",
    text: "Fitur Scan Sampah AI sedang dalam tahap pengembangan dan akan segera hadir.",
    confirmButtonText: "Mengerti",
    confirmButtonColor: "#11773D",
    background: "#ffffff",
    customClass: {
      popup: "rounded-3xl",
      confirmButton: "rounded-xl px-6 py-2",
    },
  });
};

export function MainSection({
  userId,
  heroMessage,
  onHeroMessageHandled,
}: {
  userId: string;
  heroMessage: string;
  onHeroMessageHandled: () => void;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!heroMessage) return;

    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    handleSendMessage(heroMessage);

    onHeroMessageHandled();
  }, [heroMessage]);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "model",
      content: "Apa yang ingin kamu ketahui hari ini tentang gaya hidup hijau?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isPending, startTransition] = useTransition();
  const chatBottomRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (textToSend?: string) => {
    const prompt = textToSend || input;
    if (!prompt.trim() || isPending) return;

    const userMsgId = Date.now().toString();
    const newUserMsg: Message = {
      id: userMsgId,
      role: "user",
      content: prompt,
    };

    // Update local state immediately with user message
    setMessages((prev) => [...prev, newUserMsg]);
    if (!textToSend) setInput("");

    // Trigger Server Action
    startTransition(async () => {
      try {
        const responseText = await continueChat(userId, prompt);
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "model",
            content: responseText,
          },
        ]);
      } catch (error) {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "model",
            content:
              "Maaf, terjadi kesalahan saat menghubungi AI. Silakan coba lagi.",
          },
        ]);
      }
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div
      ref={sectionRef}
      className="mt-15 grid grid-cols-1 gap-6 lg:grid-cols-3"
    >
      {/* Chat Interface (Span 2) */}
      <div className="flex h-[1080px] flex-col rounded-3xl border-2 border-gray-100 bg-white lg:col-span-2">
        {/* Header */}
        <div className="flex items-center justify-between rounded-t-3xl border-b border-gray-100 bg-white px-6 py-4">
          <h3 className="text-lg font-bold text-gray-700">
            Chat dengan Eco AI
          </h3>
          <button className="flex items-center gap-2 text-base font-semibold text-gray-600 transition-colors hover:text-[#11773D]">
            Riwayat Chat <FiClock className="h-5 w-5" />
          </button>
        </div>

        {/* Message Container */}
        <div className="flex-1 overflow-y-auto bg-[#FAFAFA] p-6 flex flex-col gap-6">
          {messages.map((msg) =>
            msg.role === "user" ? (
              <UserMessage key={msg.id} message={msg.content} />
            ) : (
              <RobotChat message={msg.content} key={msg.id} />
            ),
          )}

          {/* Pending Spinner Indicator */}
          {isPending && (
            <div className="flex items-center gap-3 text-gray-500 italic">
              <FaSpinner className="animate-spin text-[#11773D]" />
              <span>Eco AI sedang mengetik...</span>
            </div>
          )}

          <div ref={chatBottomRef} />

          {/* Suggested Replies */}
          {messages.length < 3 && !isPending && (
            <div className="flex flex-wrap gap-2 pl-12">
              <div onClick={() => handleSendMessage("Tips hemat air")}>
                <ChatSuggestion
                  text="Tips hemat air"
                  icon={<MdOutlineWaterDrop />}
                />
              </div>
              <div onClick={() => handleSendMessage("Ide daur ulang di rumah")}>
                <ChatSuggestion
                  text="Ide daur ulang di rumah"
                  icon={<FaRecycle />}
                />
              </div>
              <div
                onClick={() =>
                  handleSendMessage("Transportasi ramah lingkungan")
                }
              >
                <ChatSuggestion
                  text="Transportasi ramah lingkungan"
                  icon={<FaBus />}
                />
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="border-t border-[#EAECF0] p-5">
          <div className="flex h-14 overflow-hidden rounded-2xl border border-[#EAECF0] focus-within:border-[#11773D]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isPending}
              placeholder="Ketik pesan kamu..."
              className="flex-1 px-5 text-[16px] outline-none placeholder:text-[#98A2B3] disabled:bg-gray-50"
            />

            <button
              type="button"
              className="px-5 text-[#98A2B3] hover:text-gray-600"
            >
              <FaPaperclip />
            </button>

            <button
              type="button"
              onClick={() => handleSendMessage()}
              disabled={isPending || !input.trim()}
              className="flex w-15 items-center justify-center bg-[#11773D] text-white transition hover:bg-[#0e6232] disabled:opacity-50"
            >
              {isPending ? (
                <FaSpinner className="animate-spin" />
              ) : (
                <FaPaperPlane />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar Components (Span 1) */}
      <div className="flex flex-col gap-6 lg:col-span-1">
        {/* Scan Sampah Widget */}
        <div className="rounded-3xl border border-gray-100 bg-white p-6">
          <h3 className="mb-4 text-lg font-bold text-gray-800">
            Scan Sampah dengan AI
          </h3>
          <div className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-[#F8F9F5] p-6 text-center transition-colors hover:bg-gray-50">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#EEF8F0] transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/assets/ai/scansampah.png"
                alt="Scan Camera"
                width={62}
                height={62}
                className="object-contain"
              />
            </div>
            <p className="mb-6 text-base font-medium leading-relaxed text-gray-600">
              Upload foto sampah untuk mengetahui jenisnya dan cara pengelolaan
              yang tepat.
            </p>
            <button
              onClick={handleComingSoon}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#11773D] py-3 text-base font-bold text-white transition-colors hover:bg-[#0e6232]"
            >
              <FaCamera />
              Mulai Scan
            </button>
          </div>
        </div>

        {/* Recommendations List */}
        <div className="flex flex-1 flex-col rounded-3xl border border-gray-100 bg-white p-6">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-[22px] font-semibold text-[#0B0F1F]">
              Rekomendasi Untukmu
            </h3>

            <button className="flex items-center gap-2 text-[16px] font-semibold text-[#11773D]">
              Lihat Semua
              <FaArrowRight className="text-sm" />
            </button>
          </div>

          <div className="flex flex-col">
            <RecItem
              icon="/assets/tumbler.png"
              title="Bawa Tumbler Setiap Hari"
              desc="Kurangi penggunaan botol plastik sekali pakai."
              point="+20"
            />
            <RecItem
              icon="/assets/bus.png"
              title="Naik Transportasi Umum"
              desc="Kurangi emisi karbon dengan transportasi publik."
              point="+30"
            />
            <RecItem
              icon="/assets/air.png"
              title="Hemat Air Saat Mandi"
              desc="Gunakan air secukupnya untuk menghemat sumber daya."
              point="+20"
            />
            <RecItem
              icon="/assets/sampah.png"
              title="Pilah Sampah Rumah"
              desc="Pisahkan sampah organik dan anorganik di rumah."
              point="+25"
            />
          </div>

          <button className="mt-2 flex w-full items-center justify-center gap-2 text-[18px] font-semibold text-[#11773D]">
            Lihat Semua Rekomendasi
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
