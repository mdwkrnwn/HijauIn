import {
  FaBell, FaChevronDown, FaCheck, FaFire, FaChevronRight
} from "react-icons/fa6";
import {
  MdOutlineEnergySavingsLeaf, MdCloud, MdOutlineWaterDrop, MdBolt, MdPark
} from "react-icons/md";
import { FiCheckSquare, FiSquare, FiMessageCircle, FiAward } from "react-icons/fi";
import { IoIosTrendingUp } from "react-icons/io";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 mx-auto">

      {/* Header Section */}
      <header className="lg:flex-row lg:items-center rounded-3xl relative flex flex-col items-start justify-between gap-4 p-8 overflow-hidden bg-white shadow-sm">
        <div className="lg:w-1/2 z-10 w-full">
          <h1 className="mb-2 text-3xl font-extrabold">Halo, Dwi! 👋</h1>
          <h2 className="mb-2 text-xl font-bold">Selamat datang kembali!</h2>
          <p className=" text-base text-gray-600">Teruslah beraksi, karena setiap langkah kecil berdampak besar bagi bumi kita. 🌱</p>
        </div>

        <div className="lg:flex top-8 right-8 absolute z-10 items-center hidden gap-6">
          <div className="relative cursor-pointer">
            <FaBell className="w-6 h-6 text-gray-600" />
            <span className="-top-1 -right-1 bg-danger absolute flex items-center justify-center w-5 h-5 text-base font-bold text-white rounded-full">3</span>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <Image width={50} height={50} src="https://picsum.photos/id/1005/50/50" alt="Profile" className="object-cover w-10 h-10 rounded-full" />
            <div className="text-right">
              <div className="text-base font-bold">Dwi Kurniawan</div>
              <div className="text-secondary text-base">Eco Guardian</div>
            </div>
            <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
          </div>
        </div>

        {/* Abstract Header Image Integration */}
        <div className="lg:w-1/2 opacity-30 lg:opacity-100 absolute bottom-0 right-0 z-0 flex justify-end w-full h-full">
          <Image width={800} height={400} src="https://picsum.photos/id/29/800/400" alt="Nature landscape" className="mask-image-linear-gradient object-cover w-full h-full rounded-l-full" style={{ maskImage: 'linear-gradient(to right, transparent, black)' }} />
        </div>
      </header>

      {/* Analytics Row 1 */}
      <div className="md:grid-cols-2 xl:grid-cols-4 grid grid-cols-1 gap-6">

        {/* Eco Score */}
        <div className="rounded-3xl flex flex-col justify-between p-6 bg-white shadow-sm">
          <div className="flex items-start justify-between mb-4">
            <h3 className="flex items-center gap-2 text-base font-bold text-gray-700">
              Eco Score <IoIosTrendingUp className="text-success bg-success/20 w-6 h-6 p-1 rounded-full" />
            </h3>
            <div className="text-right">
              <span className="block text-base font-bold text-gray-500">Level</span>
              <span className="text-secondary text-base font-bold">Eco Guardian</span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-primary mb-1 text-5xl font-black">2.450</div>
              <div className="mb-2 text-base text-gray-500">Eco Point</div>
              <div className="text-success flex items-center gap-1 text-base font-semibold">
                ▲ 120 dari kemarin
              </div>
            </div>
            <div className="flex flex-col items-center">
              <MdOutlineEnergySavingsLeaf className="text-warning bg-warning/20 w-12 h-12 p-2 mb-2 rounded-full" />
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full w-[76%]"></div>
              </div>
              <span className="mt-1 text-base font-bold text-gray-500">760 / 1000 XP</span>
            </div>
          </div>
        </div>

        {/* Aksi Hari Ini */}
        <div className="rounded-3xl flex flex-col justify-between p-6 bg-white shadow-sm">
          <h3 className="flex items-center gap-2 mb-4 text-base font-bold text-gray-700">
            <FiCheckSquare className="text-primary w-6 h-6" /> Aksi Hari Ini
          </h3>
          <div>
            <div className="text-primary mb-2 text-4xl font-black">3 <span className="text-2xl text-gray-400">/ 5</span></div>
            <div className="mb-4 text-base font-bold text-gray-500">Selesai</div>
            <div className="w-full h-3 mb-4 bg-gray-200 rounded-full">
              <div className="bg-primary h-3 rounded-full w-[60%] relative">
                <div className="-right-2 -top-1 border-primary absolute w-5 h-5 bg-white border-2 rounded-full"></div>
              </div>
            </div>
            <p className="text-base font-medium text-gray-500">Teruskan! Kamu bisa lebih hebat lagi! 💚</p>
          </div>
        </div>

        {/* Dampak Hari Ini */}
        <div className="rounded-3xl xl:col-span-1 flex flex-col justify-between col-span-1 p-6 bg-white shadow-sm">
          <h3 className="flex items-center gap-2 mb-4 text-base font-bold text-gray-700">
            <MdOutlineEnergySavingsLeaf className="text-primary w-6 h-6" /> Dampak Hari Ini
          </h3>
          <div className="grid content-center h-full grid-cols-2 gap-4">
            <div className="text-center">
              <MdCloud className="w-8 h-8 mx-auto mb-1 text-gray-400" />
              <div className="text-base text-gray-500">CO2 Dihindari</div>
              <div className="text-primary text-base font-bold">1,2 kg</div>
            </div>
            <div className="text-center">
              <MdOutlineWaterDrop className="text-info w-8 h-8 mx-auto mb-1" />
              <div className="text-base text-gray-500">Air Dihemat</div>
              <div className="text-primary text-base font-bold">45 L</div>
            </div>
            <div className="text-center">
              <MdBolt className="text-warning w-8 h-8 mx-auto mb-1" />
              <div className="text-base text-gray-500">Energi Dihemat</div>
              <div className="text-primary text-base font-bold">2 kWh</div>
            </div>
            <div className="text-center">
              <MdPark className="text-success w-8 h-8 mx-auto mb-1" />
              <div className="text-base text-gray-500">Pohon Ditanam</div>
              <div className="text-primary text-base font-bold">1 Pohon</div>
            </div>
          </div>
        </div>

        {/* Streak */}
        <div className="rounded-3xl flex flex-col justify-between p-6 bg-white shadow-sm">
          <h3 className="flex items-center gap-2 mb-4 text-base font-bold text-gray-700">
            <FaFire className="text-warning w-6 h-6" /> Streak
          </h3>
          <div className="flex items-end justify-between">
            <div>
              <div className="text-primary mb-1 text-5xl font-black">12</div>
              <div className="mb-4 text-base font-bold text-gray-500">Hari</div>
              <p className="text-base text-gray-600">Pertahankan streak-mu!</p>
            </div>
            <FaFire className="text-success opacity-80 w-24 h-24" />
          </div>
        </div>

      </div>

      {/* Middle Row Layout */}
      <div className="lg:grid-cols-12 grid grid-cols-1 gap-6">

        {/* Progress Mingguan */}
        <div className="lg:col-span-5 rounded-3xl flex flex-col p-6 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-gray-800">Progress Mingguan</h3>
            <select className="px-3 py-2 text-base font-semibold bg-transparent border border-gray-200 rounded-lg outline-none">
              <option>Minggu Ini</option>
            </select>
          </div>
          <div className="flex items-center gap-6 mb-6">
            <span className="flex items-center gap-2 text-base font-semibold text-gray-600"><span className="bg-primary w-4 h-2 rounded-full"></span> Eco Point</span>
            <span className="flex items-center gap-2 text-base font-semibold text-gray-600"><span className="bg-success w-4 h-2 rounded-full"></span> CO2 Dihindari (kg)</span>
          </div>
          {/* Abstracting Chart visualization geometrically */}
          <div className="min-h-50 relative flex-1 pt-4 pr-2 border-b border-l border-gray-200">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polyline points="0,80 15,70 30,75 45,60 60,70 75,50 90,65" fill="none" stroke="var(--color-primary)" strokeWidth="2" />
              <polyline points="0,95 15,85 30,90 45,75 60,85 75,65 90,80" fill="none" stroke="var(--color-success)" strokeWidth="2" />
              {/* Data points mapping */}
              <circle cx="15" cy="70" r="2" fill="var(--color-primary)" />
              <circle cx="30" cy="75" r="2" fill="var(--color-primary)" />
              <circle cx="75" cy="50" r="2" fill="var(--color-primary)" />
            </svg>
            <div className="absolute -bottom-7.5 left-0 w-full flex justify-between text-base font-semibold text-gray-400">
              <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span>
            </div>
          </div>
        </div>

        {/* Misi Hari Ini */}
        <div className="lg:col-span-4 rounded-3xl flex flex-col p-6 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-gray-800">Misi Hari Ini</h3>
            <button className="text-primary text-base font-bold">Lihat Semua</button>
          </div>
          <div className="flex flex-col flex-1 gap-4">
            <div className="bg-gray-50 rounded-xl flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <FaCheck className="bg-success w-6 h-6 p-1 text-white rounded" />
                <span className="text-base font-bold text-gray-700 line-through">Bawa tumbler</span>
              </div>
              <span className="text-success text-base font-bold">+20</span>
            </div>
            <div className="bg-gray-50 rounded-xl flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <FaCheck className="bg-success w-6 h-6 p-1 text-white rounded" />
                <span className="text-base font-bold text-gray-700 line-through">Matikan lampu 1 jam</span>
              </div>
              <span className="text-success text-base font-bold">+20</span>
            </div>
            <div className="bg-gray-50 rounded-xl flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <FaCheck className="bg-success w-6 h-6 p-1 text-white rounded" />
                <span className="text-base font-bold text-gray-700 line-through">Naik transportasi umum</span>
              </div>
              <span className="text-success text-base font-bold">+30</span>
            </div>
            <div className="rounded-xl flex items-center justify-between p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <FiSquare className="w-6 h-6 text-gray-300" />
                <span className="text-base font-bold text-gray-700">Hemat air 20 liter</span>
              </div>
              <span className="text-success text-base font-bold">+20</span>
            </div>
            <div className="rounded-xl flex items-center justify-between p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <FiSquare className="w-6 h-6 text-gray-300" />
                <span className="text-base font-bold text-gray-700">Tanam tanaman</span>
              </div>
              <span className="text-success text-base font-bold">+50</span>
            </div>
          </div>
          <button className="text-primary hover:underline flex items-center justify-center w-full gap-2 mt-4 text-base font-bold">
            Lihat Semua Misi <FaChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* AI Green Coach */}
        <div className="lg:col-span-3 rounded-3xl relative flex flex-col p-6 overflow-hidden bg-white shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-gray-800">AI Green Coach</h3>
            <span className="bg-primary-light text-primary px-3 py-1 text-base font-bold rounded-full">Baru</span>
          </div>
          <div className="relative flex flex-col items-center justify-center flex-1">
            <div className="bg-gray-50 rounded-2xl relative w-full p-4 mb-4 border border-gray-100">
              <h4 className="mb-1 text-base font-bold">Halo Dwi! 👋</h4>
              <p className="text-base leading-relaxed text-gray-600">
                Kemarin kamu berhasil menghemat 1,2 kg CO2. Jika hari ini kamu naik transportasi umum lagi, kita bisa menghemat lebih banyak emisi!
              </p>
              <div className="-left-3 bottom-6 bg-gray-50 absolute w-4 h-4 rotate-45 border-b border-l border-gray-100"></div>
            </div>
            <Image width={150} height={150} src="https://picsum.photos/id/200/150/150" alt="AI Robot" className="object-cover w-32 h-32 mb-4 border-4 border-white rounded-full shadow-md" />
            <button className="bg-primary hover:bg-primary-dark rounded-xl flex items-center justify-center w-full gap-3 py-4 text-base font-bold text-white transition-colors">
              Tanya Sekarang <FiMessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Row Layout */}
      <div className="lg:grid-cols-3 grid grid-cols-1 gap-6">

        {/* Challenge Aktif */}
        <div className="rounded-3xl p-6 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-gray-800">Challenge Aktif</h3>
            <button className="text-primary flex items-center gap-1 text-base font-bold">Lihat Semua <FaChevronRight className="w-3 h-3" /></button>
          </div>
          <div className="flex items-center gap-6">
            <div className="bg-primary-light flex items-center justify-center w-24 h-24 rounded-full">
              <Image src="https://picsum.photos/id/292/80/80" alt="Bottle" className="size-20 mix-blend-multiply object-cover rounded-full" height={80} width={80} />
            </div>
            <div className="flex-1">
              <h4 className="mb-1 text-xl font-bold">30 Hari Tanpa Plastik</h4>
              <div className="mb-3 text-base font-semibold text-gray-500">Hari <span className="text-primary font-bold">12</span> / 30</div>
              <div className="w-full h-2 mb-4 bg-gray-200 rounded-full">
                <div className="bg-primary h-2 rounded-full w-[40%]"></div>
              </div>
              <div className="flex items-center gap-4 text-base font-bold text-gray-600">
                <span className="flex items-center gap-1"><FaCheck className="text-success" /> 500 Eco Point</span>
                <span className="flex items-center gap-1"><FiAward className="text-success" /> Eco Badge</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Terbaru */}
        <div className="rounded-3xl p-6 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-gray-800">Achievement Terbaru</h3>
            <button className="text-primary flex items-center gap-1 text-base font-bold">Lihat Semua <FaChevronRight className="w-3 h-3" /></button>
          </div>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="flex flex-col items-center">
              <Image width={60} height={60} src="https://picsum.photos/id/30/60/60" alt="Badge 1" className="rounded-xl object-cover w-16 h-16 mb-2" />
              <div className="text-base font-bold text-gray-800">Eco Warrior</div>
              <div className="text-success text-base font-semibold">Diperoleh</div>
            </div>
            <div className="flex flex-col items-center">
              <Image width={60} height={60} src="https://picsum.photos/id/35/60/60" alt="Badge 2" className="rounded-xl object-cover w-16 h-16 mb-2" />
              <div className="text-base font-bold text-gray-800">Plastic Free</div>
              <div className="text-success text-base font-semibold">Diperoleh</div>
            </div>
            <div className="flex flex-col items-center">
              <Image width={60} height={60} src="https://picsum.photos/id/40/60/60" alt="Badge 3" className="rounded-xl border-primary object-cover w-16 h-16 mb-2 border-2" />
              <div className="text-base font-bold text-gray-800">Water Saver</div>
              <div className="text-base font-semibold text-gray-500">80%</div>
            </div>
            <div className="flex flex-col items-center opacity-50">
              <Image width={60} height={60} src="https://picsum.photos/id/45/60/60" alt="Badge 4" className="rounded-xl grayscale object-cover w-16 h-16 mb-2" />
              <div className="text-base font-bold text-gray-800">Earth Lover</div>
              <div className="text-base font-semibold text-gray-500">40%</div>
            </div>
          </div>
        </div>

        {/* Aktivitas Terbaru */}
        <div className="rounded-3xl p-6 bg-white shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-bold text-gray-800">Aktivitas Terbaru</h3>
            <button className="text-primary flex items-center gap-1 text-base font-bold">Lihat Semua <FaChevronRight className="w-3 h-3" /></button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-primary-light rounded-xl p-3"><FiCheckSquare className="text-primary w-6 h-6" /></div>
                <div>
                  <div className="text-base font-bold text-gray-800">Membawa tumbler</div>
                  <div className="text-base text-gray-500">Hari ini • 08.30</div>
                </div>
              </div>
              <span className="text-success text-base font-bold">+20 poin</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-xl p-3 bg-gray-100"><FaCheck className="w-6 h-6 text-gray-500" /></div>
                <div>
                  <div className="text-base font-bold text-gray-800">Naik transportasi umum</div>
                  <div className="text-base text-gray-500">Hari ini • 07.45</div>
                </div>
              </div>
              <span className="text-success text-base font-bold">+30 poin</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="bg-info/20 rounded-xl p-3"><MdOutlineWaterDrop className="text-info w-6 h-6" /></div>
                <div>
                  <div className="text-base font-bold text-gray-800">Hemat air 20 liter</div>
                  <div className="text-base text-gray-500">Kemarin • 18.20</div>
                </div>
              </div>
              <span className="text-success text-base font-bold">+20 poin</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}