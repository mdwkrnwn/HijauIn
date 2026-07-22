import Image from "next/image";
import { FaLeaf } from "react-icons/fa";

export default function Features() {
  return (
    <section className="px-16 text-center">
      <h2 className="mb-4 text-4xl font-bold">Fitur Unggulan <span className="text-primary">HijauIn</span></h2>
      <p className="mb-16 text-xl text-gray-500">Semua yang kamu butuhkan untuk hidup lebih hijau dalam satu platform.</p>

      <div className="grid grid-cols-6 gap-8">
        {[{
          src: "/assets/beranda/catataksi.png",
          title: "Catat Aksi Harian",
          desc: "Catat berbagai aksi hijau seperti hemat energi, pilih sampah, dan transportasi ramah lingkungan."
        }, {
          src: "/assets/beranda/eco-score2.png",
          title: "Eco Score",
          desc: "Dapatkan poin dari setiap aksi dan peta skor eco-score-mu secara real-time."
        }, {
          src: "/assets/beranda/ai-rekomendasi.png",
          title: "AI Rekomendasi",
          desc: "Dapatkan rekomendasi aksi hijau yang personal dan sesuai dengan kebiasaannya."
        }, {
          src: "/assets/beranda/challange.png",
          title: "Challenge & Misi",
          desc: "Ikuti tantangan seni dan selesaikan misi untuk kumpulkan poin dan hadiah menarik."
        }, {
          src: "/assets/beranda/komunitas.png",
          title: "Komunitas Aktif",
          desc: "Bergabung dengan komunitas peduli bumi dan berbagi pengalaman hijau bersama"
        }, {
          src: "/assets/beranda/report.png",
          title: "Laporan Dampak",
          desc: "Lihat laporan dampak positif dari setiap aksi yang kamu lakukan."
        }].map((feature, idx) =>
          <div key={idx} className="rounded-3xl bg-background flex flex-col gap-6 p-8 text-center transition border-2 border-gray-200 shadow">
            {feature.src.length != 0 ?
              <Image src={feature.src} alt={feature.title} width={1536} height={1024} />
              : <FaLeaf />
            }
            <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
            <p className="text-xl text-gray-600">{feature.desc}</p>
          </div>
        )}
      </div>
    </section>);
}