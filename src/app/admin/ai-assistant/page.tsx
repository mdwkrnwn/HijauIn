import Image from "next/image";
import {
  FaPaperPlane,
  FaPaperclip,
  FaChevronRight,
  FaCamera,
  FaLeaf,
  FaArrowRight,
  FaRecycle,
  FaBell,
  FaChevronDown,
  FaBus,
  FaRobot,
} from "react-icons/fa6";
import { MdOutlineEnergySavingsLeaf, MdOutlineWaterDrop } from "react-icons/md";
import { FiClock, FiMessageSquare, FiBarChart2, FiAward } from "react-icons/fi";
import { GiSparkles } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";

export default function AiAssistantPage() {
  return (
    <div className="flex flex-col w-full -mt-5 gap-6">
      {/* Header */}
      <header className="lg:flex-row lg:items-center rounded-3xl relative flex flex-col items-start justify-between gap-4 p-8 overflow-hidden ">
        <div className="lg:w-1/2 z-10 w-full">
          <h1 className="mb-2 text-3xl font-bold">AI Assistant</h1>
          <p className=" text-base text-gray-600">
            Asisten cerdasmu untuk hidup lebih hijau setiap hari.
          </p>
        </div>

        <div className="lg:flex top-8 right-8 absolute z-10 items-center hidden gap-6">
          <div className="relative cursor-pointer">
            <FaBell className="w-6 h-6 text-gray-600" />
            <span className="-top-1 -right-1 bg-danger absolute flex items-center justify-center w-5 h-5 text-base font-bold text-white rounded-full">
              3
            </span>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <Image
              width={50}
              height={50}
              src="https://picsum.photos/id/1005/50/50"
              alt="Profile"
              className="object-cover w-10 h-10 rounded-full"
            />
            <div className="text-right">
              <div className="text-base font-bold">Dwi Kurniawan</div>
              <div className="text-secondary text-base">Eco Guardian</div>
            </div>
            <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-[24px] border border-[#EAECF0] bg-gradient-to-r from-white via-[#FCFEFC] to-[#F2F9F3] px-8 py-7">
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
          <h2 className="text-[28px] font-bold text-[#0B0F1F]">Hai Dwi! 👋</h2>

          <p className="mt-3 max-w-[420px] text-[17px] leading-8 text-[#667085]">
            Aku Eco AI, siap membantumu
            <br />
            menjadi pribadi yang lebih peduli
            <br />
            pada bumi.
          </p>

          {/* Search */}
          <div className="relative mt-8">
            <input
              type="text"
              placeholder="Tanyakan apa saja tentang gaya hidup hijau..."
              className="h-[56px] w-full rounded-2xl border border-[#EAECF0] bg-white pl-6 pr-16 text-[16px] text-[#344054] outline-none placeholder:text-[#98A2B3]"
            />

            <button className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#11773D] transition hover:bg-[#0D6433]">
              <FaPaperPlane className="text-sm text-white" />
            </button>
          </div>

          {/* Suggestion */}
          <div className="mt-5 flex flex-wrap gap-3">
            <SuggestionChip
              icon={
                <Image
                  src="/assets/ai/recycle.png"
                  alt=""
                  width={16}
                  height={16}
                />
              }
              text="Cara mengurangi sampah plastik"
            />

            <SuggestionChip
              icon={
                <Image
                  src="/assets/ai/energy.png"
                  alt=""
                  width={16}
                  height={16}
                />
              }
              text="Tips hemat energi di rumah"
            />

            <SuggestionChip
              icon={
                <Image
                  src="/assets/ai/bike.png"
                  alt=""
                  width={16}
                  height={16}
                />
              }
              text="Manfaat naik sepeda"
            />

            <SuggestionChip
              icon={<FaArrowRight className="text-[#11773D] text-xs" />}
              text="Lainnya"
            />
          </div>
        </div>
      </div>
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
      <div className="lg:grid-cols-3 grid mt-15 grid-cols-1 gap-6">
        {/* Chat Interface (Span 2) */}
        <div className="lg:col-span-2 bg-white rounded-3xl  border border-gray-100 flex flex-col h-[1065px]">
          <div className="rounded-t-3xl flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-800">
              Chat dengan Eco AI
            </h3>
            <button className="hover:text-[#11773D] flex items-center gap-2 text-base font-semibold text-gray-600 transition-colors">
              Riwayat Chat <FiClock className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 bg-[#FAFAFA]">
            {/* AI Greeting */}
            <div className="flex items-start gap-3">
              <Image
                src="/assets/ai/robot.png"
                alt="Eco AI"
                width={38}
                height={38}
                className="mt-1 shrink-0 object-contain"
              />

              <div className="max-w-[72%] rounded-[20px] bg-[#F8FAFC] px-5 py-4">
                <h4 className="mb-2 text-[17px] font-semibold text-[#344054]">
                  Halo Dwi! 😊
                </h4>

                <p className="text-[17px] leading-8 text-[#475467]">
                  Apa yang ingin kamu ketahui hari ini tentang
                  <br />
                  gaya hidup hijau?
                </p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex justify-end">
              <div className="max-w-[63%] rounded-[18px] bg-[#11773D] px-5 py-4 text-white">
                <p className="text-[17px] leading-8">
                  Bagaimana cara mengurangi penggunaan plastik dalam kehidupan
                  sehari-hari?
                </p>

                <div className="mt-3 flex items-center justify-end gap-1 text-[13px] text-[#D2F0DB]">
                  <span>09.41</span>
                  <FaCheckCircle className="text-[11px]" />
                </div>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex items-start gap-3">
              <Image
                src="/assets/ai/robot.png"
                alt="Eco AI"
                width={38}
                height={38}
                className="mt-1 shrink-0 object-contain"
              />

              <div className="max-w-[82%] rounded-[20px] bg-[#F8FAFC] px-5 py-5">
                <p className="mb-5 text-[17px] leading-8 text-[#344054]">
                  Berikut beberapa cara yang bisa kamu lakukan untuk mengurangi
                  penggunaan plastik:
                </p>

                <div className="space-y-4">
                  <ListItem
                    num="1"
                    text="Bawa tumbler dan botol minum sendiri."
                  />
                  <ListItem num="2" text="Gunakan tas belanja kain." />
                  <ListItem
                    num="3"
                    text="Pilih produk dengan kemasan ramah lingkungan."
                  />
                  <ListItem
                    num="4"
                    text="Hindari sedotan plastik, gunakan stainless steel."
                  />
                  <ListItem
                    num="5"
                    text="Daur ulang plastik yang sudah digunakan."
                  />
                </div>

                <p className="mt-6 text-[17px] text-[#344054]">
                  Setiap langkah kecilmu sangat berarti untuk bumi kita! 🌱
                </p>

                <span className="mt-4 block text-[13px] text-[#98A2B3]">
                  09.41
                </span>
              </div>
            </div>

            {/* Suggested Replies */}
            <div className="pl-14 flex flex-wrap gap-2">
              <ChatSuggestion
                text="Tips hemat air"
                icon={<MdOutlineWaterDrop />}
              />
              <ChatSuggestion
                text="Ide daur ulang di rumah"
                icon={<FaRecycle />}
              />
              <ChatSuggestion
                text="Transportasi ramah lingkungan"
                icon={<FaBus />}
              />
            </div>
          </div>

          <div className="border-t border-[#EAECF0] p-5">
            <div className="flex h-[58px] overflow-hidden rounded-2xl border border-[#EAECF0]">
              <input
                type="text"
                placeholder="Ketik pesan kamu..."
                className="flex-1 px-5 text-[16px] outline-none placeholder:text-[#98A2B3]"
              />

              <button className="px-5 text-[#98A2B3]">
                <FaPaperclip />
              </button>

              <button className="flex w-[60px] items-center justify-center bg-[#11773D] text-white">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar Components (Span 1) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Scan Sampah Widget */}
          <div className="rounded-3xl p-6 bg-white border border-gray-100 ">
            <h3 className="mb-4 text-lg font-bold text-gray-800">
              Scan Sampah dengan AI
            </h3>
            <div className="rounded-2xl bg-[#F8F9F5] hover:bg-gray-50 group flex flex-col items-center justify-center p-6 text-center transition-colors border-2 border-gray-200 border-dashed cursor-pointer">
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
                Upload foto sampah untuk mengetahui jenisnya dan cara
                pengelolaan yang tepat.
              </p>
              <button className="bg-[#11773D] rounded-xl hover:bg-[#11773D]-dark flex items-center justify-center w-full gap-2 py-3 text-base font-bold text-white transition-colors">
                <FaCamera /> Mulai Scan
              </button>
            </div>
          </div>

          {/* Recommendations List */}
          <div className="rounded-3xl flex-1 p-6 bg-white border border-gray-100 ">
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

      {/* Footer Banner */}
      <div className="flex items-center justify-between rounded-[24px] border border-[#EAECF0] bg-white px-8 py-7">
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

            <p className="max-w-[520px] text-[18px] leading-8 text-[#475467]">
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

// Subcomponents

function SuggestionChip({ icon, text }: { icon: any; text: string }) {
  return (
    <button className="rounded-xl hover:bg-gray-50 hover:border-[#11773D] flex items-center gap-2 px-4 py-2 text-base font-semibold text-gray-700 transition-colors bg-white border border-gray-200">
      {icon} {text}
    </button>
  );
}

function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group flex h-[210px] cursor-pointer flex-col items-center rounded-[20px] border border-[#F2F4F7] bg-[#FCFCFC] px-6 py-8 text-center transition-all">
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

function ListItem({ num, text }: { num: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#11773D] text-[13px] font-semibold text-white">
        {num}
      </div>

      <p className="text-[16px] leading-7 text-[#344054]">{text}</p>
    </div>
  );
}

function ChatSuggestion({
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

function RecItem({
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

          <p className="mt-1 max-w-[360px] text-[14px] leading-7 text-[#667085]">
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
