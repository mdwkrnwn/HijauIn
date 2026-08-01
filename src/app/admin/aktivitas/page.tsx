import {
  FaChevronDown,
  FaChevronRight,
  FaPlus,
  FaBus,
  FaLightbulb,
  FaBell,
  FaTrash,
} from "react-icons/fa6";
import {
  MdOutlineWaterDrop,
  MdOutlineEnergySavingsLeaf,
  MdCloud,
  MdBolt,
  MdPark,
  MdFilterList,
  MdDateRange,
} from "react-icons/md";
import { FiCoffee, FiActivity } from "react-icons/fi";
import Image from "next/image";

export default function AktivitasPage() {
  return (
    <div className="flex flex-col gap-6 mx-auto -mt-5">
      {/* Header Section */}
      <header className="lg:flex-row lg:items-center rounded-3xl relative flex flex-col items-start justify-between gap-4 p-8 overflow-hidden ">
        <div className="lg:w-1/2 z-10 w-full">
          <h1 className="mb-2 text-3xl font-bold">Aktivitas</h1>
          <p className=" text-base text-gray-600">
            Catat dan lihat semua aksi hijau yang kamu lakukan.
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

        {/* Abstract Header Image Integration */}
        <div className="lg:w-1/2 absolute  right-60 z-0 flex justify-end w-full h-full">
          <Image
            width={800}
            height={400}
            src="/assets/aktivitas/m.png"
            alt="Nature landscape"
            className="object-cover w-full h-full rounded-l-full"
          />
        </div>
      </header>

      {/* Main Grid Layout */}
      <div className="lg:grid-cols-3 grid -mt-10 z-100 grid-cols-1 gap-6">
        {/* Left Column (Span 2) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Catat Aksi Hijau */}
          <div className="flex flex-col items-center justify-between gap-8 rounded-[24px] bg-gradient-to-r from-[#FFFFFF] via-[#F8FCF9] to-[#EEF8F0] px-8 py-7 shadow-sm lg:flex-row">
            {/* Left */}
            <div className="w-full lg:w-[42%]">
              <h2 className="text-[32px] font-bold text-[#101828]">
                Catat Aksi Hijau
              </h2>

              <p className="mt-5 text-[18px] font-medium leading-9 text-[#667085]">
                Mulai catat aksi kecilmu hari ini dan
                <br />
                dapatkan poin serta dampak positif!
              </p>

              <button className="mt-8 flex h-[56px] w-[190px] items-center justify-center gap-3 rounded-[14px] bg-[#11773D] text-[18px] font-semibold text-white transition hover:bg-[#0D6433]">
                <FaPlus className="text-[18px]" />
                Catat Aksi
              </button>
            </div>

            {/* Right */}
            <div className="flex w-full justify-end lg:w-[58%]">
              <Image
                src="/assets/aktivitas/catat.png"
                alt="Clipboard Illustration"
                width={420}
                height={280}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Riwayat Aktivitas */}
          <div className=" rounded-3xl flex flex-col flex-1 p-6 bg-white shadow-sm">
            <div className="lg:flex-row lg:items-center flex flex-col items-start justify-between gap-4 mb-6">
              <h3 className="text-xl font-bold text-[#0B0F1F]">
                Riwayat Aktivitas
              </h3>
              <div className="lg:w-auto flex items-center w-full gap-3">
                <button className="lg:flex-none rounded-xl flex items-center justify-between flex-1 gap-2 px-4 py-2 text-base font-semibold text-gray-700 bg-white border border-gray-200">
                  <MdFilterList className="w-5 h-5 text-gray-500" /> Semua
                  Kategori{" "}
                  <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                </button>
                <button className="lg:flex-none rounded-xl flex items-center justify-between flex-1 gap-2 px-4 py-2 text-base font-semibold text-gray-700 bg-white border border-gray-200">
                  <MdDateRange className="w-5 h-5 text-gray-500" /> Pilih
                  Tanggal{" "}
                  <FaChevronDown className="w-4 h-4 ml-2 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-6 mb-6 overflow-x-auto border-b border-gray-100">
              <button className="text-[#11773D] border-[#11773D] whitespace-nowrap pb-3 text-base font-bold border-b-2">
                Semua
              </button>
              <button className="whitespace-nowrap hover:text-gray-700 pb-3 text-base font-bold text-gray-500">
                Hari Ini
              </button>
              <button className="whitespace-nowrap hover:text-gray-700 pb-3 text-base font-bold text-gray-500">
                Minggu Ini
              </button>
              <button className="whitespace-nowrap hover:text-gray-700 pb-3 text-base font-bold text-gray-500">
                Bulan Ini
              </button>
            </div>

            {/* List Hari Ini */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-base font-bold text-gray-700">
                  Hari Ini • 17 Mei 2025
                </span>
                <span className="flex items-center gap-1 text-base font-bold text-gray-700">
                  Total: 120 poin{" "}
                  <MdOutlineEnergySavingsLeaf className="text-[#11773D]" />
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl hover:shadow-md group flex items-center justify-between p-4 transition-shadow border border-gray-100 cursor-pointer">
                  <div className="flex items-center justify-between py-4">
                    {/* Left */}
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF8F0]">
                        <Image
                          src="/assets/tumbler.png"
                          alt="Tumbler"
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>

                      {/* Title */}
                      <div className="flex items-center gap-5">
                        <div>
                          <h4 className="text-[18px] font-semibold text-[#344054] leading-none">
                            Membawa tumbler
                          </h4>

                          <p className="mt-2 text-[15px] font-medium text-[#667085]">
                            08.30 WIB
                          </p>
                        </div>

                        {/* Badge */}
                        <span className="rounded-full bg-[#EEF8F0] px-3 py-1 text-[13px] font-semibold text-[#11773D]">
                          Kebiasaan
                        </span>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center ml-118 gap-8">
                      <div className="text-right leading-none">
                        <p className="text-[20px] font-semibold text-[#11773D]">
                          +20
                        </p>

                        <p className="mt-1 text-[14px] font-medium text-[#667085]">
                          poin
                        </p>
                      </div>

                      <FaChevronRight className="text-[15px] text-[#98A2B3]" />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl hover:shadow-md group flex items-center justify-between p-4 transition-shadow border border-gray-100 cursor-pointer">
                  <div className="flex items-center justify-between py-2">
                    {/* Left */}
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF8F0]">
                        <Image
                          src="/assets/bus.png"
                          alt="Tumbler"
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>

                      {/* Title */}
                      <div className="flex items-center gap-5 w-[500px]">
                        <div>
                          <h4 className="text-[18px] font-semibold text-[#344054] leading-none">
                            Naik Transportasi Umum
                          </h4>

                          <p className="mt-2 text-[15px] font-medium text-[#667085]">
                            08.30 WIB
                          </p>
                        </div>

                        {/* Badge */}
                        <span className="rounded-full bg-[#EEF8F0] px-3 py-1 text-[13px] font-semibold text-[#11773D]">
                          Transportasi
                        </span>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center ml-66 gap-8">
                      <div className="text-right leading-none">
                        <p className="text-[20px] font-semibold text-[#11773D]">
                          +20
                        </p>

                        <p className="mt-1 text-[14px] font-medium text-[#667085]">
                          poin
                        </p>
                      </div>

                      <FaChevronRight className="text-[15px] text-[#98A2B3]" />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl hover:shadow-md group flex items-center justify-between p-4 transition-shadow border border-gray-100 cursor-pointer">
                  <div className="flex items-center justify-between py-2">
                    {/* Left */}
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#]">
                        <Image
                          src="/assets/air.png"
                          alt="Tumbler"
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>

                      {/* Title */}
                      <div className="flex w-[500px] items-center gap-5">
                        <div>
                          <h4 className="text-[18px] font-semibold text-[#344054] leading-none">
                            Hemat air 20 Liter
                          </h4>

                          <p className="mt-2 text-[15px] font-medium text-[#667085]">
                            08.30 WIB
                          </p>
                        </div>

                        {/* Badge */}
                        <span className="rounded-full bg-[#F1F9FC] px-3 py-1 text-[13px] font-semibold text-[#286FBD]">
                          Penghematan
                        </span>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center ml-66 gap-8">
                      <div className="text-right leading-none">
                        <p className="text-[20px] font-semibold text-[#11773D]">
                          +20
                        </p>

                        <p className="mt-1 text-[14px] font-medium text-[#667085]">
                          poin
                        </p>
                      </div>

                      <FaChevronRight className="text-[15px] text-[#98A2B3]" />
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl hover:shadow-md group flex items-center justify-between p-4 transition-shadow border border-gray-100 cursor-pointer">
                  <div className="flex items-center justify-between py-2">
                    {/* Left */}
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#]">
                        <Image
                          src="/assets/lampu.png"
                          alt="Tumbler"
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>

                      {/* Title */}
                      <div className="flex w-[500px] items-center gap-5">
                        <div>
                          <h4 className="text-[18px] font-semibold text-[#344054] leading-none">
                            Matikan Lampu 1 Jam
                          </h4>

                          <p className="mt-2 text-[15px] font-medium text-[#667085]">
                            08.30 WIB
                          </p>
                        </div>

                        {/* Badge */}
                        <span className="rounded-full bg-[#F1F9FC] px-3 py-1 text-[13px] font-semibold text-[#286FBD]">
                          Penghematan
                        </span>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center ml-66 gap-8">
                      <div className="text-right leading-none">
                        <p className="text-[20px] font-semibold text-[#11773D]">
                          +20
                        </p>

                        <p className="mt-1 text-[14px] font-medium text-[#667085]">
                          poin
                        </p>
                      </div>

                      <FaChevronRight className="text-[15px] text-[#98A2B3]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* List Kemarin */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-base font-bold text-gray-700">
                  Kemarin • 16 Mei 2025
                </span>
                <span className="flex items-center gap-1 text-base font-bold text-gray-700">
                  Total: 70 poin{" "}
                  <MdOutlineEnergySavingsLeaf className="text-[#11773D]" />
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl hover:shadow-md group flex items-center justify-between p-4 transition-shadow border border-gray-100 cursor-pointer">
                  <div className="flex items-center justify-between py-2">
                    {/* Left */}
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#]">
                        <Image
                          src="/assets/sampah.png"
                          alt="Tumbler"
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>

                      {/* Title */}
                      <div className="flex w-[500px] items-center gap-5">
                        <div>
                          <h4 className="text-[18px] font-semibold text-[#344054] leading-none">
                            Pilah Sampah
                          </h4>

                          <p className="mt-2 text-[15px] font-medium text-[#667085]">
                            08.30 WIB
                          </p>
                        </div>

                        {/* Badge */}
                        <span className="rounded-full bg-[#EEF8F0] px-3 py-1 text-[13px] font-semibold text-[#11773D]">
                          Lingkungan
                        </span>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center ml-66 gap-8">
                      <div className="text-right leading-none">
                        <p className="text-[20px] font-semibold text-[#11773D]">
                          +20
                        </p>

                        <p className="mt-1 text-[14px] font-medium text-[#667085]">
                          poin
                        </p>
                      </div>

                      <FaChevronRight className="text-[15px] text-[#98A2B3]" />
                    </div>
                  </div>
                </div>
                <div className="rounded-2xl hover:shadow-md group flex items-center justify-between p-4 transition-shadow border border-gray-100 cursor-pointer">
                   <div className="flex items-center justify-between py-2">
                    {/* Left */}
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#]">
                        <Image
                          src="/assets/menanampohon.png"
                          alt="Tumbler"
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>

                      {/* Title */}
                      <div className="flex w-[500px] items-center gap-5">
                        <div>
                          <h4 className="text-[18px] font-semibold text-[#344054] leading-none">
                            Menanam Pohon
                          </h4>

                          <p className="mt-2 text-[15px] font-medium text-[#667085]">
                            08.30 WIB
                          </p>
                        </div>

                        {/* Badge */}
                        <span className="rounded-full bg-[#EEF8F0] px-3 py-1 text-[13px] font-semibold text-[#11773D]">
                          Lingkungan
                        </span>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center ml-66 gap-8">
                      <div className="text-right leading-none">
                        <p className="text-[20px] font-semibold text-[#11773D]">
                          +20
                        </p>

                        <p className="mt-1 text-[14px] font-medium text-[#667085]">
                          poin
                        </p>
                      </div>

                      <FaChevronRight className="text-[15px] text-[#98A2B3]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button className="text-[#11773D] hover:underline rounded-2xl flex items-center justify-center w-full gap-2 py-4 text-base font-bold border border-gray-200">
              Muat Lebih Banyak <FaChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column (Span 1) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          {/* Ringkasan Aktivitas */}
          <div className="rounded-[24px] bg-white p-7 shadow-sm">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-[22px] font-semibold text-[#101828]">
                Ringkasan Aktivitas
              </h3>

              <select className="rounded-xl border border-[#EAECF0] bg-white px-6 py-2 text-[15px] font-semibold text-[#344054] outline-none">
                <option>Hari Ini</option>
              </select>
            </div>

            {/* Summary */}
            <div className="mb-8 flex items-center justify-between">
              {/* Left */}
              <div className="pr-8">
                <p className="text-[16px] font-semibold text-[#667085]">
                  Total Poin
                </p>

                <div className="mt-4 flex items-center gap-2">
                  <h2 className="text-[52px] font-bold leading-none text-[#11773D]">
                    120
                  </h2>

                  <MdOutlineEnergySavingsLeaf className="text-[28px] text-[#11773D]" />
                </div>

                <p className="mt-5 text-[16px] font-medium text-[#667085]">
                  Dari 3 aksi
                </p>
              </div>

              {/* Divider */}
              <div className="h-[120px] w-px bg-[#EAECF0]" />

              {/* Circle */}
              <div className="flex flex-col items-center pl-8">
                <div className="relative h-[120px] w-[120px]">
                  <svg
                    className="-rotate-90"
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="48"
                      stroke="#E6EFE8"
                      strokeWidth="10"
                      fill="none"
                    />

                    <circle
                      cx="60"
                      cy="60"
                      r="48"
                      stroke="#11773D"
                      strokeWidth="10"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray="301.6"
                      strokeDashoffset="120.6"
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[30px] font-bold text-[#11773D]">
                      60%
                    </span>

                    <MdOutlineEnergySavingsLeaf className="mt-1 text-[20px] text-[#11773D]" />
                  </div>
                </div>

                <p className="mt-4 text-center text-[16px] font-semibold text-[#667085]">
                  dari target harian
                </p>
              </div>
            </div>

            {/* Target */}
            <div className="rounded-2xl bg-[#F7FBF8] p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[16px] font-semibold text-[#344054]">
                  Target Harian
                </span>

                <span className="text-[16px] font-semibold text-[#344054]">
                  200 poin
                </span>
              </div>

              <div className="h-[10px] overflow-hidden rounded-full bg-[#DCE7DE]">
                <div
                  className="h-full rounded-full bg-[#11773D]"
                  style={{ width: "60%" }}
                />
              </div>
            </div>
          </div>

          {/* Insight Minggu Ini */}
          <div className="rounded-[24px] bg-white p-7 shadow-sm">
            {/* Header */}
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-[22px] font-semibold text-[#101828]">
                Insight Minggu Ini
              </h3>

              <button className="text-[16px] font-semibold text-[#11773D]">
                Lihat Detail
              </button>
            </div>

            {/* Top */}
            <div className="mb-8 flex items-center justify-between gap-6">
              <div className="flex-1">
                <p className="text-[18px] font-semibold leading-8 text-[#344054]">
                  Kamu telah menghemat
                </p>

                <h2 className="mt-2 text-[42px] font-bold leading-none text-[#11773D]">
                  2,3 kg CO₂
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#667085]">
                  Pertahankan konsistensimu
                  <br />
                  untuk bumi yang lebih baik.
                </p>
              </div>

              <Image
                src="/assets/aktivitas/bumi.png"
                alt="Earth"
                width={135}
                height={135}
                className="object-contain"
              />
            </div>

            {/* Bottom Stats */}
            <div className="rounded-[20px] bg-[#F7FBF8] px-5 py-6">
              <div className="grid -ml-8 grid-cols-4">
                {/* CO2 */}
                <div className="flex flex-col w-[190px] -ml-7 mt-8 items-center  px-4">
                  <Image
                    src="/assets/co2.png"
                    alt="CO2"
                    width={60}
                    height={60}
                    className="mb-4 object-contain"
                  />

                  <p className="text-[14px] font-medium text-[#667085]">
                    CO₂ Dihindari
                  </p>

                  <p className="mt-3 text-[20px] font-bold text-[#11773D]">
                    1,2 kg
                  </p>
                </div>

                {/* Air */}
                <div className="flex flex-col items-center w-[190px] mt-3  -ml-8 px-4">
                  <Image
                    src="/assets/air.png"
                    alt="Air"
                    width={38}
                    height={38}
                    className="mb-5 object-contain"
                  />

                  <p className="text-[14px] font-medium text-[#667085]">
                    Air Dihemat
                  </p>

                  <p className="mt-3 text-[20px] font-bold text-[#11773D]">
                    45 L
                  </p>
                </div>

                {/* Energi */}
                <div className="flex -ml-8 flex-col w-[190px] mt-3 items-center  px-4">
                  <Image
                    src="/assets/dashboard/petir.png"
                    alt="Energi"
                    width={38}
                    height={38}
                    className="mb-4 object-contain"
                  />

                  <p className="text-[14px] font-medium text-[#667085]">
                    Energi Dihemat
                  </p>

                  <p className="mt-3 text-[20px] font-bold text-[#11773D]">
                    2 kWh
                  </p>
                </div>

                {/* Pohon */}
                <div className="flex flex-col w-[190px] -ml-5 items-center px-4">
                  <Image
                    src="/assets/pohon.png"
                    alt="Pohon"
                    width={60}
                    height={60}
                    className="mb-4 object-contain"
                  />

                  <p className="text-[14px] font-medium text-[#667085]">
                    Pohon Ditanam
                  </p>

                  <p className="mt-3 text-[20px] font-bold text-[#11773D]">
                    1 Pohon
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kategori Aktivitas */}
          <div className="rounded-[24px] bg-white p-7 shadow-sm">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-[22px] font-semibold text-[#101828]">
                Kategori Aktivitas
              </h3>

              <button className="text-[17px] font-semibold text-[#11773D]">
                Lihat Semua
              </button>
            </div>

            <div className="space-y-7">
              {/* Kebiasaan */}
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF8F0]">
                  <Image
                    src="/assets/tumbler.png"
                    alt="Tumbler"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>

                <div className="w-[160px]">
                  <p className="text-[18px] font-semibold text-[#344054]">
                    Kebiasaan
                  </p>
                </div>

                <div className="flex-1">
                  <div className="h-[12px] overflow-hidden rounded-full bg-[#E4ECE5]">
                    <div
                      className="h-full rounded-full bg-[#11773D]"
                      style={{ width: "60%" }}
                    />
                  </div>
                </div>

                <span className="w-[70px] text-right text-[18px] font-semibold text-[#667085]">
                  5 aksi
                </span>
              </div>

              {/* Transportasi */}
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF8F0]">
                  <Image
                    src="/assets/bus.png"
                    alt="Bus"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>

                <div className="w-[160px]">
                  <p className="text-[18px] font-semibold text-[#344054]">
                    Transportasi
                  </p>
                </div>

                <div className="flex-1">
                  <div className="h-[12px] overflow-hidden rounded-full bg-[#E4ECE5]">
                    <div
                      className="h-full rounded-full bg-[#11773D]"
                      style={{ width: "50%" }}
                    />
                  </div>
                </div>

                <span className="w-[70px] text-right text-[18px] font-semibold text-[#667085]">
                  3 aksi
                </span>
              </div>

              {/* Penghematan */}
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF8F0]">
                  <Image
                    src="/assets/air.png"
                    alt="Water"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>

                <div className="w-[160px]">
                  <p className="text-[18px] font-semibold text-[#344054]">
                    Penghematan
                  </p>
                </div>

                <div className="flex-1">
                  <div className="h-[12px] overflow-hidden rounded-full bg-[#E4ECE5]">
                    <div
                      className="h-full rounded-full bg-[#11773D]"
                      style={{ width: "65%" }}
                    />
                  </div>
                </div>

                <span className="w-[70px] text-right text-[18px] font-semibold text-[#667085]">
                  4 aksi
                </span>
              </div>

              {/* Lingkungan */}
              <div className="flex items-center gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EEF8F0]">
                  <Image
                    src="/assets/daun.png"
                    alt="Leaf"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </div>

                <div className="w-[160px]">
                  <p className="text-[18px] font-semibold text-[#344054]">
                    Lingkungan
                  </p>
                </div>

                <div className="flex-1">
                  <div className="h-[12px] overflow-hidden rounded-full bg-[#E4ECE5]">
                    <div
                      className="h-full rounded-full bg-[#11773D]"
                      style={{ width: "55%" }}
                    />
                  </div>
                </div>

                <span className="w-[70px] text-right text-[18px] font-semibold text-[#667085]">
                  2 aksi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
