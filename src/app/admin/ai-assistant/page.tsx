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
          <h2 className="text-[28px] font-bold text-[#101828]">Hai Dwi! 👋</h2>

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
          <h3 className="text-[22px] font-semibold text-[#101828]">Fitur AI</h3>

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
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col h-[700px]">
          <div className="rounded-t-3xl flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
            <h3 className="text-lg font-bold text-gray-800">
              Chat dengan Eco AI
            </h3>
            <button className="hover:text-primary flex items-center gap-2 text-base font-semibold text-gray-600 transition-colors">
              Riwayat Chat <FiClock className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6 bg-[#FAFAFA]">
            {/* AI Greeting */}
            <div className="flex items-start w-4/5 gap-4">
              <div className="shrink-0 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                <FaRobot className="w-6 h-6 text-gray-600" />
              </div>
              <div className="rounded-2xl p-4 bg-white border border-gray-100 rounded-tl-sm shadow-sm">
                <p className="mb-1 text-base font-bold text-gray-800">
                  Halo Dwi! 😇
                </p>
                <p className="text-base font-medium text-gray-600">
                  Apa yang ingin kamu ketahui hari ini tentang gaya hidup hijau?
                </p>
              </div>
            </div>

            {/* User Message */}
            <div className="flex items-end justify-end w-full gap-4">
              <div className="bg-primary text-white rounded-2xl rounded-tr-sm p-4 shadow-sm max-w-[80%]">
                <p className="text-base font-medium leading-relaxed">
                  Bagaimana cara mengurangi penggunaan plastik dalam kehidupan
                  sehari-hari?
                </p>
                <div className="text-primary-light mt-1 text-base font-medium text-right">
                  09.41 <FaCheckCircle className="inline w-3 h-3 ml-1" />
                </div>
              </div>
            </div>

            {/* AI Response */}
            <div className="flex items-start w-full gap-4 pr-12">
              <div className="shrink-0 flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full">
                <FaRobot className="w-6 h-6 text-gray-600" />
              </div>
              <div className="rounded-2xl w-full p-5 bg-white border border-gray-100 rounded-tl-sm shadow-sm">
                <p className="mb-4 text-base font-medium leading-relaxed text-gray-800">
                  Berikut beberapa cara yang bisa kamu lakukan untuk mengurangi
                  penggunaan plastik:
                </p>
                <div className="flex flex-col gap-3 mb-4">
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
                <p className="flex items-center gap-1 text-base font-medium text-gray-800">
                  Setiap langkah kecilmu sangat berarti untuk bumi kita! 🌱
                </p>
                <div className="mt-2 text-base font-medium text-gray-400">
                  09.41
                </div>
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

          <div className="rounded-b-3xl p-4 bg-white border-t border-gray-100">
            <div className="rounded-2xl focus-within:border-primary relative flex items-center overflow-hidden transition-colors bg-white border border-gray-200">
              <input
                type="text"
                placeholder="Ketik pesan kamu..."
                className="flex-1 px-4 py-4 text-base font-medium bg-transparent outline-none"
              />
              <button className="hover:text-gray-600 px-4 text-gray-400 transition-colors">
                <FaPaperclip className="w-5 h-5" />
              </button>
              <button className="bg-primary hover:bg-primary-dark flex items-center justify-center p-4 text-white transition-colors">
                <FaPaperPlane className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar Components (Span 1) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Scan Sampah Widget */}
          <div className="rounded-3xl p-6 bg-white border border-gray-100 shadow-sm">
            <h3 className="mb-4 text-lg font-bold text-gray-800">
              Scan Sampah dengan AI
            </h3>
            <div className="rounded-2xl bg-gray-50/50 hover:bg-gray-50 group flex flex-col items-center justify-center p-6 text-center transition-colors border-2 border-gray-200 border-dashed cursor-pointer">
              <div className="group-hover:scale-105 flex items-center justify-center w-16 h-16 mb-4 transition-transform bg-white rounded-full shadow-sm">
                <FaCamera className="text-success w-8 h-8" />
              </div>
              <p className="mb-6 text-base font-medium leading-relaxed text-gray-600">
                Upload foto sampah untuk mengetahui jenisnya dan cara
                pengelolaan yang tepat.
              </p>
              <button className="bg-primary rounded-xl hover:bg-primary-dark flex items-center justify-center w-full gap-2 py-3 text-base font-bold text-white transition-colors">
                <FaCamera /> Mulai Scan
              </button>
            </div>
          </div>

          {/* Recommendations List */}
          <div className="rounded-3xl flex-1 p-6 bg-white border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800">
                Rekomendasi Untukmu
              </h3>
              <button className="text-primary hover:underline flex items-center gap-1 text-base font-bold">
                Lihat Semua <FaChevronRight className="w-3 h-3" />
              </button>
            </div>

            <div className="flex flex-col gap-5">
              <RecItem
                icon={<MdOutlineWaterDrop className="text-success w-6 h-6" />}
                bg="bg-success/20"
                title="Bawa Tumbler Setiap Hari"
                desc="Kurangi penggunaan botol plastik sekali pakai."
                point="+20"
              />
              <RecItem
                icon={<FaBus className="w-6 h-6 text-gray-600" />}
                bg="bg-gray-100"
                title="Naik Transportasi Umum"
                desc="Kurangi emisi karbon dengan transportasi publik."
                point="+30"
              />
              <RecItem
                icon={<MdOutlineWaterDrop className="text-info w-6 h-6" />}
                bg="bg-info/20"
                title="Hemat Air Saat Mandi"
                desc="Gunakan air secukupnya untuk menghemat sumber daya."
                point="+20"
              />
              <RecItem
                icon={<FaRecycle className="text-success w-6 h-6" />}
                bg="bg-success/20"
                title="Pilah Sampah Rumah"
                desc="Pisahkan sampah organik dan anorganik di rumah."
                point="+25"
              />
            </div>

            <button className="text-primary hover:bg-gray-50 rounded-xl flex items-center justify-center w-full gap-2 py-3 mt-6 text-base font-bold transition-colors">
              Lihat Semua Rekomendasi <FaChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="rounded-3xl md:flex-row relative flex flex-col items-center justify-between gap-6 p-6 overflow-hidden bg-white border border-gray-100 shadow-sm">
        <div className="md:w-2/3 z-10 flex items-center w-full gap-6">
          <div className="shrink-0 w-24 h-24 overflow-hidden rounded-full shadow-inner">
            <Image
              src="https://picsum.photos/id/28/100/100"
              alt="Earth Graphic"
              width={96}
              height={96}
              className="mix-blend-multiply object-cover w-full h-full"
            />
          </div>
          <div>
            <h4 className="mb-1 text-lg font-bold text-gray-800">
              Tahukah kamu?
            </h4>
            <p className="text-base font-medium text-gray-600">
              Jika semua pengguna HijauIn melakukan 1 aksi kecil setiap hari,
              kita bisa mengurangi ribuan ton CO₂ setiap tahunnya! 💚
            </p>
          </div>
        </div>
        <div className="md:w-1/3 z-10 flex items-center w-full gap-3">
          <FiAward className="text-success shrink-0 w-8 h-8" />
          <div>
            <div className="text-success text-base font-bold">
              Bersama HijauIn,
            </div>
            <div className="text-base font-medium text-gray-600">
              kita ciptakan bumi yang lebih baik untuk generasi mendatang.
            </div>
          </div>
        </div>
        <div className="bg-linear-to-l from-primary-light/30 to-transparent absolute top-0 right-0 z-0 w-1/2 h-full pointer-events-none"></div>
      </div>
    </div>
  );
}

// Subcomponents

function SuggestionChip({ icon, text }: { icon: any; text: string }) {
  return (
    <button className="rounded-xl hover:bg-gray-50 hover:border-primary flex items-center gap-2 px-4 py-2 text-base font-semibold text-gray-700 transition-colors bg-white border border-gray-200">
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

      <h4 className="text-[22px] font-semibold text-[#101828]">{title}</h4>

      <p className="mt-4 text-[16px] leading-8 text-[#667085]">{desc}</p>
    </div>
  );
}

function ListItem({ num, text }: { num: string; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-6 h-6 rounded-full bg-success text-white flex items-center justify-center font-bold text-base shrink-0 mt-0.5">
        {num}
      </div>
      <p className="text-base font-medium leading-relaxed text-gray-800">
        {text}
      </p>
    </div>
  );
}

function ChatSuggestion({ text, icon }: { text: string; icon: any }) {
  return (
    <button className="rounded-xl hover:bg-primary hover:text-white hover:border-primary flex items-center gap-2 px-4 py-2 text-base font-semibold text-gray-600 transition-colors bg-white border border-gray-200">
      <span className="text-primary-dark">{icon}</span> {text}
    </button>
  );
}

function RecItem({
  icon,
  bg,
  title,
  desc,
  point,
}: {
  icon: any;
  bg: string;
  title: string;
  desc: string;
  point: string;
}) {
  return (
    <div className="group flex items-start justify-between gap-4 cursor-pointer">
      <div className="flex items-start flex-1 gap-4">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${bg}`}
        >
          {icon}
        </div>
        <div>
          <h4 className="group-hover:text-primary mb-1 text-base font-bold text-gray-800 transition-colors">
            {title}
          </h4>
          <p className="text-base font-medium leading-relaxed text-gray-500">
            {desc}
          </p>
        </div>
      </div>
      <div className="shrink-0 text-right">
        <div className="text-success text-lg font-black">{point}</div>
        <div className="text-base font-bold text-gray-400">poin</div>
      </div>
    </div>
  );
}
