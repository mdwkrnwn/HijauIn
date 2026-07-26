import Image from "next/image";
import {
  FaArrowLeft, FaCheck, FaUserPlus, FaShare,
  FaImage, FaHeart, FaRegComment, FaChevronDown
} from "react-icons/fa6";
import {
  MdOutlineEnergySavingsLeaf, MdLocationOn
} from "react-icons/md";
import { FiUsers, FiCalendar, FiMoreHorizontal } from "react-icons/fi";
import { BiCheckCircle } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function KomunitasDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col w-full gap-6">

      {/* Navigation */}
      <button className="hover:text-primary w-max flex items-center gap-3 text-base font-bold text-gray-800 transition-colors">
        <FaArrowLeft className="w-5 h-5" /> Kembali ke Komunitas
      </button>

      {/* Community Header Card */}
      <div className="rounded-3xl overflow-hidden bg-white shadow-sm">
        {/* Banner */}
        <div className="h-75 relative w-full">
          <Image
            src="https://picsum.photos/id/28/1200/400"
            alt="Community Banner"
            fill
            className="object-cover"
          />
        </div>

        {/* Profile Info Row */}
        <div className="relative px-8 pt-4 pb-8">
          <div className="lg:flex-row lg:items-end flex flex-col items-start justify-between gap-6">

            {/* Avatar & Details */}
            <div className="lg:flex-row lg:items-center lg:-mt-20 relative flex flex-col items-start gap-6 -mt-24">
              <div className="shrink-0 relative z-10 w-40 h-40 overflow-hidden bg-white border-4 border-white rounded-full shadow-sm">
                <Image
                  src="https://picsum.photos/id/111/200/200"
                  alt="Hijau Bersama Avatar"
                  width={160}
                  height={160}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="lg:mt-16 flex flex-col gap-2 mt-4">
                <h1 className="flex items-center gap-2 text-3xl font-extrabold text-gray-800">
                  Hijau Bersama <BiCheckCircle className="text-success w-6 h-6" />
                </h1>
                <div className="flex items-center gap-6 text-base font-semibold text-gray-600">
                  <span className="flex items-center gap-2"><FiUsers className="w-5 h-5" /> 12.450 Anggota</span>
                  <span className="flex items-center gap-2"><FiCalendar className="w-5 h-5" /> Bergabung sejak 12 Mar 2025</span>
                </div>
                <p className="text-base font-medium text-gray-800">Bersama menanam harapan, bersama menjaga bumi.</p>
              </div>
            </div>

            {/* Actions */}
            <div className="lg:w-auto flex items-center w-full gap-3">
              <button className="lg:flex-none bg-primary rounded-xl hover:bg-primary-dark flex items-center justify-center flex-1 gap-2 px-6 py-3 text-base font-bold text-white transition-colors">
                <FaUserPlus /> Gabung <FaCheck />
              </button>
              <button className="lg:flex-none border-primary text-primary rounded-xl hover:bg-primary-light flex items-center justify-center flex-1 gap-2 px-6 py-3 text-base font-bold transition-colors border">
                <FaUserPlus /> Undang Teman
              </button>
              <button className="rounded-xl hover:bg-gray-50 flex items-center justify-center p-3 text-gray-600 transition-colors border border-gray-200">
                <FaShare className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="lg:grid-cols-3 grid grid-cols-1 gap-6">

        {/* Left Column (Span 2) */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          {/* Main Content Card */}
          <div className="rounded-3xl flex flex-col bg-white shadow-sm">

            {/* Primary Tabs */}
            <div className="flex items-center gap-8 px-8 pt-6 overflow-x-auto border-b border-gray-100">
              <button className="whitespace-nowrap hover:text-gray-800 pb-4 text-base font-bold text-gray-500 transition-colors">Tentang</button>
              <button className="text-primary border-primary whitespace-nowrap pb-4 text-base font-bold border-b-2">Postingan</button>
              <button className="whitespace-nowrap hover:text-gray-800 pb-4 text-base font-bold text-gray-500 transition-colors">Event</button>
              <button className="whitespace-nowrap hover:text-gray-800 pb-4 text-base font-bold text-gray-500 transition-colors">Anggota</button>
              <button className="whitespace-nowrap hover:text-gray-800 pb-4 text-base font-bold text-gray-500 transition-colors">Leaderboard</button>
            </div>

            <div className="flex flex-col gap-8 p-8">
              {/* Create Post Input */}
              <div className="rounded-2xl p-5 border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <Image src="https://picsum.photos/id/1005/50/50" alt="User" width={48} height={48} className="shrink-0 object-cover w-12 h-12 rounded-full" />
                  <div className="rounded-xl bg-gray-50/50 flex-1 p-4 border border-gray-200">
                    <p className="mb-2 text-base font-bold text-gray-800">Apa aksi hijaumu hari ini?</p>
                    <textarea
                      placeholder="Tulis sesuatu..."
                      className="w-full h-12 text-base font-medium bg-transparent outline-none resize-none"
                    ></textarea>
                  </div>
                </div>
                <div className="flex items-center justify-between pl-16">
                  <div className="flex items-center gap-6">
                    <button className="hover:text-primary flex items-center gap-2 text-base font-bold text-gray-600 transition-colors">
                      <FaImage className="text-success w-5 h-5" /> Foto
                    </button>
                    <button className="hover:text-primary flex items-center gap-2 text-base font-bold text-gray-600 transition-colors">
                      <FaMapMarkerAlt className="text-info w-5 h-5" /> Lokasi
                    </button>
                    <button className="hover:text-primary flex items-center gap-2 text-base font-bold text-gray-600 transition-colors">
                      <MdOutlineEnergySavingsLeaf className="text-primary w-5 h-5" /> Aktivitas
                    </button>
                  </div>
                  <button className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-base hover:bg-primary-dark transition-colors">
                    <FaShare /> Posting
                  </button>
                </div>
              </div>

              {/* Sub Tabs */}
              <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                <div className="flex items-center gap-8">
                  <button className="text-primary border-primary pb-2 text-base font-bold border-b-2">Semua Postingan</button>
                  <button className="hover:text-gray-800 pb-2 text-base font-bold text-gray-500 transition-colors">Postingan Saya</button>
                </div>
                <button className="flex items-center gap-2 text-base font-semibold text-gray-700 bg-white border border-gray-200 rounded-lg px-3 py-1.5 mb-2">
                  Terbaru <FaChevronDown className="w-4 h-4" />
                </button>
              </div>

              {/* Feed */}
              <div className="flex flex-col gap-8">

                {/* Post 1 (Grid Images) */}
                <div className="flex flex-col gap-4 pb-8 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Image src="https://picsum.photos/id/64/50/50" alt="Sinta Ayu" width={48} height={48} className="object-cover w-12 h-12 rounded-full" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-bold text-gray-800">Sinta Ayu</h4>
                          <span className="bg-primary-light text-primary text-base px-3 py-0.5 rounded-full font-bold">Eco Warrior</span>
                        </div>
                        <div className="text-base font-medium text-gray-500">2 jam yang lalu</div>
                      </div>
                    </div>
                    <button className="hover:text-gray-600 text-gray-400"><FiMoreHorizontal className="w-6 h-6" /></button>
                  </div>
                  <p className="text-base font-medium leading-relaxed text-gray-800">
                    Hari ini kami mengadakan aksi bersih-bersih pantai di Bali bersama teman-teman komunitas! Sampah yang terkumpul sebanyak 45 kg. Yuk, terus jaga kebersihan lingkungan kita! 🌊💚
                  </p>
                  <div className="grid h-40 grid-cols-4 gap-2">
                    <div className="rounded-l-xl relative w-full h-full overflow-hidden">
                      <Image src="https://picsum.photos/id/29/400/300" alt="Cleanup 1" fill className="object-cover" />
                    </div>
                    <div className="relative w-full h-full overflow-hidden">
                      <Image src="https://picsum.photos/id/30/400/300" alt="Cleanup 2" fill className="object-cover" />
                    </div>
                    <div className="relative w-full h-full overflow-hidden">
                      <Image src="https://picsum.photos/id/31/400/300" alt="Cleanup 3" fill className="object-cover" />
                    </div>
                    <div className="rounded-r-xl group relative w-full h-full overflow-hidden cursor-pointer">
                      <Image src="https://picsum.photos/id/32/400/300" alt="Cleanup 4" fill className="object-cover" />
                      <div className="bg-black/50 absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-black text-white">+3</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 pt-2">
                    <button className="text-danger flex items-center gap-2 text-base font-bold transition-colors">
                      <FaHeart className="w-5 h-5" /> 128
                    </button>
                    <button className="hover:text-primary flex items-center gap-2 text-base font-bold text-gray-500 transition-colors">
                      <FaRegComment className="w-5 h-5" /> 24
                    </button>
                    <button className="hover:text-primary flex items-center gap-2 text-base font-bold text-gray-500 transition-colors">
                      <FaShare className="w-5 h-5" /> Bagikan
                    </button>
                  </div>
                </div>

                {/* Post 2 (Right Image) */}
                <div className="flex flex-col gap-4 pb-8 border-b border-gray-100">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Image src="https://picsum.photos/id/65/50/50" alt="Raka Pratama" width={48} height={48} className="object-cover w-12 h-12 rounded-full" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-bold text-gray-800">Raka Pratama</h4>
                          <span className="bg-primary-light text-primary text-base px-3 py-0.5 rounded-full font-bold">Eco Hero</span>
                        </div>
                        <div className="text-base font-medium text-gray-500">5 jam yang lalu</div>
                      </div>
                    </div>
                    <button className="hover:text-gray-600 text-gray-400"><FiMoreHorizontal className="w-6 h-6" /></button>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <p className="mb-4 text-base font-medium leading-relaxed text-gray-800">
                        Baru saja menanam 10 bibit mangrove di pesisir! 🌱<br />Semoga bisa tumbuh besar dan melindungi pantai kita dari abrasi.
                      </p>
                      <div className="flex items-center gap-6">
                        <button className="text-danger flex items-center gap-2 text-base font-bold transition-colors">
                          <FaHeart className="w-5 h-5" /> 96
                        </button>
                        <button className="hover:text-primary flex items-center gap-2 text-base font-bold text-gray-500 transition-colors">
                          <FaRegComment className="w-5 h-5" /> 18
                        </button>
                        <button className="hover:text-primary flex items-center gap-2 text-base font-bold text-gray-500 transition-colors">
                          <FaShare className="w-5 h-5" /> Bagikan
                        </button>
                      </div>
                    </div>
                    <div className="rounded-xl shrink-0 relative w-48 h-32 overflow-hidden">
                      <Image src="https://picsum.photos/id/35/300/200" alt="Mangrove" fill className="object-cover" />
                    </div>
                  </div>
                </div>

                {/* Post 3 (Right Image) */}
                <div className="flex flex-col gap-4 pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Image src="https://picsum.photos/id/66/50/50" alt="Nadia Putri" width={48} height={48} className="object-cover w-12 h-12 rounded-full" />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-bold text-gray-800">Nadia Putri</h4>
                          <span className="bg-primary-light text-primary text-base px-3 py-0.5 rounded-full font-bold">Eco Warrior</span>
                        </div>
                        <div className="text-base font-medium text-gray-500">1 hari yang lalu</div>
                      </div>
                    </div>
                    <button className="hover:text-gray-600 text-gray-400"><FiMoreHorizontal className="w-6 h-6" /></button>
                  </div>
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <p className="mb-4 text-base font-medium leading-relaxed text-gray-800">
                        Mengurangi penggunaan plastik sekali pakai mulai dari sekarang!<br />Bawa tumbler dan tas kain setiap hari ✅
                      </p>
                      <div className="flex items-center gap-6">
                        <button className="text-danger flex items-center gap-2 text-base font-bold transition-colors">
                          <FaHeart className="w-5 h-5" /> 210
                        </button>
                        <button className="hover:text-primary flex items-center gap-2 text-base font-bold text-gray-500 transition-colors">
                          <FaRegComment className="w-5 h-5" /> 32
                        </button>
                        <button className="hover:text-primary flex items-center gap-2 text-base font-bold text-gray-500 transition-colors">
                          <FaShare className="w-5 h-5" /> Bagikan
                        </button>
                      </div>
                    </div>
                    <div className="rounded-xl shrink-0 relative w-48 h-32 overflow-hidden">
                      <Image src="https://picsum.photos/id/36/300/200" alt="Tumbler" fill className="object-cover" />
                    </div>
                  </div>
                </div>

                <button className="text-primary hover:bg-gray-50 rounded-2xl flex items-center justify-center w-full gap-2 py-4 text-base font-bold transition-colors border border-gray-200">
                  Muat lebih banyak postingan <FaChevronDown className="w-4 h-4" />
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Span 1) - Sidebar Structure */}
        <div className="lg:col-span-1 flex flex-col gap-6">

          {/* Ringkasan Komunitas */}
          <div className="rounded-3xl p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800">Ringkasan Komunitas</h3>
              <button className="text-primary text-base font-bold">Lihat Detail</button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="mb-2 text-base font-bold text-gray-500">Komunitas Bergabung</div>
                <div className="text-success flex items-center gap-2 text-3xl font-black">
                  5 <FiUsers className="w-6 h-6" />
                </div>
              </div>
              <div>
                <div className="mb-2 text-base font-bold text-gray-500">Total Anggota</div>
                <div className="flex items-center gap-2 text-3xl font-black text-gray-800">
                  12.450 <FiUsers className="text-success w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="mb-2 text-base font-bold text-gray-800">Deskripsi</div>
              <p className="text-base font-medium leading-relaxed text-gray-600">
                Komunitas untuk berbagi tips dan aksi nyata menuju hidup yang lebih ramah lingkungan. Mari bersama wujudkan bumi yang lebih hijau! 🌱
              </p>
            </div>

            <div className="mb-6">
              <div className="mb-2 text-base font-bold text-gray-800">Kategori</div>
              <span className="bg-primary-light text-primary text-base px-4 py-1.5 rounded-full font-bold inline-block">Lingkungan</span>
            </div>

            <div>
              <div className="mb-2 text-base font-bold text-gray-800">Lokasi</div>
              <div className="flex items-center gap-2 text-base font-bold text-gray-600">
                <MdLocationOn className="w-5 h-5 text-gray-400" /> Indonesia
              </div>
            </div>
          </div>

          {/* Aktivitas Komunitas */}
          <div className="rounded-3xl p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Aktivitas Komunitas</h3>
              <button className="text-primary text-base font-bold">Lihat Detail</button>
            </div>
            <div className="text-primary flex items-center gap-2 mb-1 text-3xl font-black">
              320 <MdOutlineEnergySavingsLeaf className="w-5 h-5" />
            </div>
            <div className="mb-6 text-base font-bold text-gray-500">Aktivitas Minggu Ini</div>

            <div className="relative flex items-end justify-between h-48 gap-2 px-2 pt-4 pb-1 border-b border-l border-gray-200">
              <div className="absolute -left-7.5 bottom-1 flex flex-col justify-between h-full text-base text-gray-400 font-semibold text-right">
                <span>250</span><span>200</span><span>150</span><span>100</span><span>50</span><span>0</span>
              </div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '30%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '60%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '45%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '45%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '100%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '80%' }}></div>
              <div className="bg-success w-full rounded-t-sm" style={{ height: '45%' }}></div>
            </div>
            <div className="flex justify-between px-2 mt-3 text-base font-semibold text-gray-500">
              <span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span><span>Min</span>
            </div>
          </div>

          {/* Event Mendatang */}
          <div className="rounded-3xl p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800">Event Mendatang</h3>
              <button className="text-primary text-base font-bold">Lihat Semua</button>
            </div>
            <div className="flex flex-col gap-5">
              <EventRow
                img="https://picsum.photos/id/16/80/80" title="Aksi Tanam Pohon"
                date="25 Mei 2025" loc="Bogor, Jawa Barat" participants="125 peserta"
              />
              <EventRow
                img="https://picsum.photos/id/17/80/80" title="Bersih Pantai Bersama"
                date="8 Juni 2025" loc="Bali" participants="210 peserta"
              />
              <EventRow
                img="https://picsum.photos/id/18/80/80" title="Workshop Zero Waste"
                date="15 Juni 2025" loc="Online (Zoom)" participants="150 peserta"
              />
            </div>
          </div>

          {/* Anggota Aktif */}
          <div className="rounded-3xl flex flex-col h-full p-6 bg-white shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-800">Anggota Aktif</h3>
              <button className="text-primary text-base font-bold">Lihat Semua</button>
            </div>
            <div className="flex flex-col flex-1 gap-4">
              <ContributorRow rank={1} avatar="https://picsum.photos/id/1005/50/50" name="Dwi Kurniawan" badge="Eco Guardian" score="2.450" />
              <ContributorRow rank={2} avatar="https://picsum.photos/id/64/50/50" name="Sinta Ayu" badge="Eco Warrior" score="1.980" />
              <ContributorRow rank={3} avatar="https://picsum.photos/id/65/50/50" name="Raka Pratama" badge="Eco Hero" score="1.650" />
              <ContributorRow rank={4} avatar="https://picsum.photos/id/66/50/50" name="Nadia Putri" badge="Eco Warrior" score="1.420" />
              <ContributorRow rank={5} avatar="https://picsum.photos/id/67/50/50" name="Bagas Aditya" badge="Eco Lover" score="1.250" />
            </div>
            <button className="text-primary hover:bg-gray-50 border-primary rounded-xl flex items-center justify-center w-full py-4 mt-6 text-base font-bold transition-colors border">
              Lihat Semua Anggota
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

function EventRow({ img, title, date, loc, participants }: { img: string, title: string, date: string, loc: string, participants: string }) {
  return (
    <div className="group flex items-center gap-4 cursor-pointer">
      <div className="rounded-xl shrink-0 relative w-20 h-20 overflow-hidden">
        <Image src={img} alt={title} fill className="group-hover:scale-105 object-cover transition-transform" />
      </div>
      <div>
        <div className="group-hover:text-primary mb-2 text-base font-bold text-gray-800 transition-colors">{title}</div>
        <div className="flex flex-col gap-1 text-base font-semibold text-gray-500">
          <span className="flex items-center gap-2"><FiCalendar className="w-4 h-4" /> {date}</span>
          <span className="flex items-center gap-2"><MdLocationOn className="w-4 h-4" /> {loc}</span>
          <span className="flex items-center gap-2"><FiUsers className="text-success w-4 h-4" /> <span className="text-gray-800">{participants}</span></span>
        </div>
      </div>
    </div>
  );
}

function ContributorRow({ rank, avatar, name, badge, score }: { rank: number, avatar: string, name: string, badge: string, score: string }) {
  const rankColors = ["bg-warning text-white", "bg-gray-300 text-gray-700", "bg-orange-400 text-white"];
  const badgeClass = rank <= 3 ? rankColors[rank - 1] : "bg-gray-100 text-gray-600 border border-gray-200";

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-base shrink-0 ${badgeClass}`}>
          {rank}
        </div>
        <Image src={avatar} alt={name} width={40} height={40} className="shrink-0 object-cover w-10 h-10 rounded-full" />
        <div>
          <div className="text-base font-bold text-gray-800">{name}</div>
          <div className="text-success text-base font-semibold">{badge}</div>
        </div>
      </div>
      <div className="flex items-center gap-1 text-base font-bold text-gray-800">
        {score} <MdOutlineEnergySavingsLeaf className="text-success" />
      </div>
    </div>
  );
}