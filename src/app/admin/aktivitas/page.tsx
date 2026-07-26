import {
  FaChevronDown, FaChevronRight, FaPlus, FaBus, FaLightbulb, FaTrash
} from "react-icons/fa6";
import {
  MdOutlineWaterDrop, MdOutlineEnergySavingsLeaf, MdCloud, MdBolt, MdPark, MdFilterList, MdDateRange
} from "react-icons/md";
import { FiCoffee, FiActivity } from "react-icons/fi";
import Image from "next/image";

export default function AktivitasPage() {
  return (
    <div className="flex flex-col gap-6 mx-auto">

      {/* Header Section */}
      <header className=" rounded-3xl relative flex items-center justify-between p-8 overflow-hidden bg-white shadow-sm">
        <div className="lg:w-1/2 relative z-10 w-full">
          <h1 className="flex items-center gap-2 mb-2 text-3xl font-extrabold">
            Aktivitas <MdOutlineEnergySavingsLeaf className="text-primary" />
          </h1>
          <p className=" text-base font-medium text-gray-600">
            Catat dan lihat semua aksi hijau yang kamu lakukan.
          </p>
        </div>
        <div className="lg:w-2/3 opacity-40 lg:opacity-100 absolute top-0 right-0 z-0 flex justify-end w-full h-full">
          <Image
            src="https://picsum.photos/id/11/800/300"
            alt="Eco City Landscape"
            className="mask-image-linear-gradient object-cover w-full h-full"
            style={{ maskImage: 'linear-gradient(to right, transparent, black)' }}
            width={800}
            height={300}
          />
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="lg:grid-cols-3 grid grid-cols-1 gap-6">

        {/* Left Column (Span 2) */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Catat Aksi Hijau */}
          <div className=" rounded-3xl lg:flex-row flex flex-col items-center justify-between gap-6 p-6 bg-white shadow-sm">
            <div className="lg:w-2/3 w-full">
              <h2 className="mb-3 text-2xl font-bold text-gray-800">Catat Aksi Hijau</h2>
              <p className="mb-6 text-base font-medium leading-relaxed text-gray-600">
                Mulai catat aksi kecilmu hari ini dan dapatkan poin serta dampak positif!
              </p>
              <button className="bg-primary hover:bg-primary-dark rounded-xl lg:w-auto flex items-center justify-center w-full gap-2 px-6 py-3 text-base font-bold text-white transition-colors">
                <FaPlus className="w-5 h-5" /> Catat Aksi
              </button>
            </div>
            <div className="lg:w-1/3 lg:justify-end flex justify-center w-full">
              <Image
                width={200}
                height={200}
                src="https://picsum.photos/id/1/200/200"
                alt="Clipboard Illustration"
                className="rounded-2xl mix-blend-multiply object-cover w-40 h-40"
              />
            </div>
          </div>

          {/* Riwayat Aktivitas */}
          <div className=" rounded-3xl flex flex-col flex-1 p-6 bg-white shadow-sm">
            <div className="lg:flex-row lg:items-center flex flex-col items-start justify-between gap-4 mb-6">
              <h3 className="text-xl font-bold text-gray-800">Riwayat Aktivitas</h3>
              <div className="lg:w-auto flex items-center w-full gap-3">
                <button className="lg:flex-none rounded-xl flex items-center justify-between flex-1 gap-2 px-4 py-2 text-base font-semibold text-gray-700 bg-white border border-gray-200">
                  <MdFilterList className="w-5 h-5 text-gray-500" /> Semua Kategori <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                </button>
                <button className="lg:flex-none rounded-xl flex items-center justify-between flex-1 gap-2 px-4 py-2 text-base font-semibold text-gray-700 bg-white border border-gray-200">
                  <MdDateRange className="w-5 h-5 text-gray-500" /> Pilih Tanggal <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-6 mb-6 overflow-x-auto border-b border-gray-100">
              <button className="text-primary border-primary whitespace-nowrap pb-3 text-base font-bold border-b-2">Semua</button>
              <button className="whitespace-nowrap hover:text-gray-700 pb-3 text-base font-bold text-gray-500">Hari Ini</button>
              <button className="whitespace-nowrap hover:text-gray-700 pb-3 text-base font-bold text-gray-500">Minggu Ini</button>
              <button className="whitespace-nowrap hover:text-gray-700 pb-3 text-base font-bold text-gray-500">Bulan Ini</button>
            </div>

            {/* List Hari Ini */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-base font-bold text-gray-700">Hari Ini • 17 Mei 2025</span>
                <span className="flex items-center gap-1 text-base font-bold text-gray-700">Total: 120 poin <MdOutlineEnergySavingsLeaf className="text-primary" /></span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl hover:shadow-md group flex items-center justify-between p-4 transition-shadow border border-gray-100 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-light rounded-xl p-4"><FiCoffee className="text-primary w-6 h-6" /></div>
                    <div>
                      <div className="mb-1 text-base font-bold text-gray-800">Membawa tumbler</div>
                      <div className="text-base text-gray-500">08.30 WIB</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="bg-primary-light text-primary md:block hidden px-4 py-1 text-base font-semibold rounded-full">Kebiasaan</span>
                    <div className="text-right">
                      <div className="text-success text-base font-bold">+20</div>
                      <div className="text-base text-gray-500">poin</div>
                    </div>
                    <FaChevronRight className="group-hover:text-primary w-5 h-5 text-gray-300 transition-colors" />
                  </div>
                </div>

                <div className="rounded-2xl hover:shadow-md group flex items-center justify-between p-4 transition-shadow border border-gray-100 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl p-4 bg-gray-100"><FaBus className="w-6 h-6 text-gray-600" /></div>
                    <div>
                      <div className="mb-1 text-base font-bold text-gray-800">Naik transportasi umum</div>
                      <div className="text-base text-gray-500">07.45 WIB</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="bg-info/20 text-info md:block hidden px-4 py-1 text-base font-semibold rounded-full">Transportasi</span>
                    <div className="text-right">
                      <div className="text-success text-base font-bold">+30</div>
                      <div className="text-base text-gray-500">poin</div>
                    </div>
                    <FaChevronRight className="group-hover:text-primary w-5 h-5 text-gray-300 transition-colors" />
                  </div>
                </div>

                <div className="rounded-2xl hover:shadow-md group flex items-center justify-between p-4 transition-shadow border border-gray-100 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="bg-info/20 rounded-xl p-4"><MdOutlineWaterDrop className="text-info w-6 h-6" /></div>
                    <div>
                      <div className="mb-1 text-base font-bold text-gray-800">Hemat air 20 liter</div>
                      <div className="text-base text-gray-500">18.20 WIB</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="bg-info/20 text-info md:block hidden px-4 py-1 text-base font-semibold rounded-full">Penghematan</span>
                    <div className="text-right">
                      <div className="text-success text-base font-bold">+20</div>
                      <div className="text-base text-gray-500">poin</div>
                    </div>
                    <FaChevronRight className="group-hover:text-primary w-5 h-5 text-gray-300 transition-colors" />
                  </div>
                </div>

                <div className="rounded-2xl hover:shadow-md group flex items-center justify-between p-4 transition-shadow border border-gray-100 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="bg-warning/20 rounded-xl p-4"><FaLightbulb className="text-warning w-6 h-6" /></div>
                    <div>
                      <div className="mb-1 text-base font-bold text-gray-800">Matikan lampu 1 jam</div>
                      <div className="text-base text-gray-500">21.00 WIB</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="bg-info/20 text-info md:block hidden px-4 py-1 text-base font-semibold rounded-full">Penghematan</span>
                    <div className="text-right">
                      <div className="text-success text-base font-bold">+20</div>
                      <div className="text-base text-gray-500">poin</div>
                    </div>
                    <FaChevronRight className="group-hover:text-primary w-5 h-5 text-gray-300 transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* List Kemarin */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-base font-bold text-gray-700">Kemarin • 16 Mei 2025</span>
                <span className="flex items-center gap-1 text-base font-bold text-gray-700">Total: 70 poin <MdOutlineEnergySavingsLeaf className="text-primary" /></span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl hover:shadow-md group flex items-center justify-between p-4 transition-shadow border border-gray-100 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="bg-success/20 rounded-xl p-4"><FaTrash className="text-success w-6 h-6" /></div>
                    <div>
                      <div className="mb-1 text-base font-bold text-gray-800">Pilah sampah</div>
                      <div className="text-base text-gray-500">16.10 WIB</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="bg-success/20 text-success md:block hidden px-4 py-1 text-base font-semibold rounded-full">Lingkungan</span>
                    <div className="text-right">
                      <div className="text-success text-base font-bold">+25</div>
                      <div className="text-base text-gray-500">poin</div>
                    </div>
                    <FaChevronRight className="group-hover:text-primary w-5 h-5 text-gray-300 transition-colors" />
                  </div>
                </div>

                <div className="rounded-2xl hover:shadow-md group flex items-center justify-between p-4 transition-shadow border border-gray-100 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="bg-success/20 rounded-xl p-4"><MdPark className="text-success w-6 h-6" /></div>
                    <div>
                      <div className="mb-1 text-base font-bold text-gray-800">Menanam pohon</div>
                      <div className="text-base text-gray-500">10.45 WIB</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="bg-success/20 text-success md:block hidden px-4 py-1 text-base font-semibold rounded-full">Lingkungan</span>
                    <div className="text-right">
                      <div className="text-success text-base font-bold">+45</div>
                      <div className="text-base text-gray-500">poin</div>
                    </div>
                    <FaChevronRight className="group-hover:text-primary w-5 h-5 text-gray-300 transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            <button className="text-primary hover:underline rounded-2xl flex items-center justify-center w-full gap-2 py-4 text-base font-bold border border-gray-200">
              Muat Lebih Banyak <FaChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column (Span 1) */}
        <div className="lg:col-span-1 flex flex-col gap-6">

          {/* Ringkasan Aktivitas */}
          <div className=" rounded-3xl p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800">Ringkasan Aktivitas</h3>
              <select className="px-3 py-2 text-base font-semibold bg-transparent border border-gray-200 rounded-lg outline-none">
                <option>Hari Ini</option>
              </select>
            </div>

            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="mb-2 text-base font-bold text-gray-500">Total Poin</div>
                <div className="text-primary flex items-center gap-2 text-4xl font-black">
                  120 <MdOutlineEnergySavingsLeaf className="w-6 h-6" />
                </div>
                <div className="mt-2 text-base font-medium text-gray-500">Dari 3 aksi</div>
              </div>
              <div className="w-28 h-28 relative flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-gray-100" />
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="251.2" strokeDashoffset="100.48" className="text-primary" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-black text-gray-800">60%</span>
                  <MdOutlineEnergySavingsLeaf className="text-primary w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="mb-6 text-base font-bold text-center text-gray-500">dari target harian</div>

            <div>
              <div className="flex justify-between mb-2 text-base font-bold text-gray-700">
                <span>Target Harian</span>
                <span>200 poin</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div className="bg-primary h-3 rounded-full w-[60%]"></div>
              </div>
            </div>
          </div>

          {/* Insight Minggu Ini */}
          <div className=" rounded-3xl p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800">Insight Minggu Ini</h3>
              <button className="text-primary text-base font-bold">Lihat Detail</button>
            </div>
            <div className="lg:flex-row flex flex-col items-center gap-4 mb-8">
              <div className="flex-1">
                <p className="mb-2 text-base font-bold leading-tight text-gray-800">Kamu telah menghemat</p>
                <p className="text-primary mb-2 text-2xl font-black">2,3 kg CO₂</p>
                <p className="text-base font-medium text-gray-600">Pertahankan konsistensimu untuk bumi yang lebih baik.</p>
              </div>
              <Image height={100} width={100} src="https://picsum.photos/id/2/100/100" alt="Earth Avatar" className="object-cover w-24 h-24 rounded-full" />
            </div>

            <div className="grid grid-cols-4 gap-2 pt-6 border-t border-gray-100">
              <div className="text-center">
                <MdCloud className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <div className="mb-1 text-base leading-tight text-gray-500">CO₂ Dihindari</div>
                <div className="text-primary text-base font-bold">2,3 kg</div>
              </div>
              <div className="text-center">
                <MdOutlineWaterDrop className="text-info w-8 h-8 mx-auto mb-2" />
                <div className="mb-1 text-base leading-tight text-gray-500">Air Dihemat</div>
                <div className="text-primary text-base font-bold">120 L</div>
              </div>
              <div className="text-center">
                <MdBolt className="text-warning w-8 h-8 mx-auto mb-2" />
                <div className="mb-1 text-base leading-tight text-gray-500">Energi Dihemat</div>
                <div className="text-primary text-base font-bold">8 kWh</div>
              </div>
              <div className="text-center">
                <MdPark className="text-success w-8 h-8 mx-auto mb-2" />
                <div className="mb-1 text-base leading-tight text-gray-500">Pohon Ditanam</div>
                <div className="text-primary text-base font-bold">3 Pohon</div>
              </div>
            </div>
          </div>

          {/* Kategori Aktivitas */}
          <div className=" rounded-3xl p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800">Kategori Aktivitas</h3>
              <button className="text-primary text-base font-bold">Lihat Semua</button>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="bg-primary-light rounded-xl p-3"><FiActivity className="text-primary w-6 h-6" /></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-2 text-base font-bold text-gray-800">
                    <span>Kebiasaan</span>
                    <span>5 aksi</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full">
                    <div className="bg-primary h-2 rounded-full w-[80%]"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl p-3 bg-gray-100"><FaBus className="w-6 h-6 text-gray-500" /></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-2 text-base font-bold text-gray-800">
                    <span>Transportasi</span>
                    <span>3 aksi</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full">
                    <div className="bg-gray-500 h-2 rounded-full w-[50%]"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-info/20 rounded-xl p-3"><MdOutlineWaterDrop className="text-info w-6 h-6" /></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-2 text-base font-bold text-gray-800">
                    <span>Penghematan</span>
                    <span>4 aksi</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full">
                    <div className="bg-info h-2 rounded-full w-[65%]"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-success/20 rounded-xl p-3"><MdPark className="text-success w-6 h-6" /></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-2 text-base font-bold text-gray-800">
                    <span>Lingkungan</span>
                    <span>2 aksi</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full">
                    <div className="bg-success h-2 rounded-full w-[35%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}