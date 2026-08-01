import ReactMarkdown from "react-markdown";
import Image from "next/image";

export function SuggestionChip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <button className="rounded-xl hover:bg-gray-50 hover:border-[#11773D] flex items-center gap-2 px-4 py-2 text-base font-semibold text-gray-700 transition-colors bg-white border border-gray-200">
      {icon} {text}
    </button>
  );
}

export function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group flex h-52.5 cursor-pointer flex-col items-center rounded-[20px] border border-[#F2F4F7] bg-[#FCFCFC] px-6 py-8 text-center transition-all">
      <Image
        src={icon}
        alt={title}
        width={58}
        height={58}
        className="mb-6 object-contain transition-transform duration-300 group-hover:scale-105"
      />

      <h4 className="text-[22px] font-semibold text-[#0B0F1F]">{title}</h4>

      <p className="mt-4 text-[16px] leading-8 text-[#667085]">{desc}</p>
    </div>
  );
}

export function ListItem({ num, text }: { num: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#11773D] text-[13px] font-semibold text-white">
        {num}
      </div>

      <p className="text-[16px] leading-7 text-[#344054]">{text}</p>
    </div>
  );
}

export function ChatSuggestion({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <button className="flex items-center gap-2 rounded-full border border-[#EAECF0] bg-white px-4 py-2 text-[14px] font-medium text-[#475467] transition hover:bg-[#F8FAFC]">
      {icon}
      {text}
    </button>
  );
}

export function RecItem({
  icon,
  title,
  desc,
  point,
}: {
  icon: string;
  title: string;
  desc: string;
  point: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#F2F4F7] py-5 last:border-b-0">
      {/* Left */}
      <div className="flex items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8FAF8]">
          <Image
            src={icon}
            alt={title}
            width={25}
            height={25}
            className="object-contain"
          />
        </div>

        <div>
          <h4 className="text-[18px] font-semibold text-[#0B0F1F]">{title}</h4>

          <p className="mt-1 max-w-90 text-[14px] leading-7 text-[#667085]">
            {desc}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="text-right">
        <div className="text-[18px] font-bold leading-none text-[#11773D]">
          {point}
        </div>

        <div className="mt-1 text-[14px] font-medium text-[#667085]">poin</div>
      </div>
    </div>
  );
}

export function UserMessage({ message }: {
  message: string
}) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[63%] rounded-[18px] bg-[#11773D] px-5 py-4 text-white">
        <p className="text-[17px] leading-8">
          {message}
        </p>
      </div>
    </div>
  );
}

export function RobotChat({ message }: { message: string }) {
  return (
    <div className="flex items-start gap-3">
      <Image src="/assets/ai/robot.png" alt="Eco AI" width={38} height={38} className="mt-1 shrink-0 object-contain" />
      <div className="max-w-[72%] rounded-[20px] bg-gray-200 px-5 py-4">

        <ReactMarkdown >
          {message}
        </ReactMarkdown>
      </div>
    </div>
  );
}
