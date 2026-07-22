import Image from 'next/image'
import { FaLeaf } from 'react-icons/fa'

function CTA() {
  return (
    <section className="px-16 py-24">
      <div className="bg-[#f9fbd8] rounded-[3rem] p-16 flex items-center justify-between gap-6">
        <div className="w-1/3 space-y-8">
          <h2 className="text-5xl font-bold leading-tight text-gray-900">
            Punya Teman Pintar Untuk Hidup <span className="text-primary">Lebih Hijau</span>
          </h2>
          <p className='text-xl leading-loose'>
            AJ Green Coach siap membantumu memahami dampak dari setiap aksi dan memberikan rekomendasi personal agar hidupmu semakin berdampak
          </p>
          <button className="bg-primary hover:bg-green-700 px-10 py-5 text-xl font-bold text-white rounded-full">
            Coba Sekarang
          </button>
        </div>
        <div className='bg-white/50 rounded-xl grid w-2/3 grid-cols-4 p-4'>
          {[{
            src: "/assets/beranda/catataksi.png",
            title: "Catat Aksi Harian",
            desc: "Catat aksi ramah lingkungan dengan setiap hari."
          }, {
            src: "/assets/beranda/eco-score2.png",
            title: "Eco Score",
            desc: "Pantau skor keberlanjutan dan perkembangan aksimu."
          }, {
            src: "/assets/beranda/ai-rekomendasi.png",
            title: "AI Rekomendasi",
            desc: "Rekomendasi aksi hijau yang personal dari AI."
          }, {
            src: "/assets/beranda/challange.png",
            title: "Challenge & Misi",
            desc: "Ikuti tantangan seru dan raih badge menarik."
          }].map((feature, idx) =>
            <div key={idx} className="rounded-3xl flex flex-col gap-6 px-8 text-center">
              {feature.src.length != 0 ?
                <Image src={feature.src} alt={feature.title} width={1536} height={1024} />
                : <FaLeaf />
              }
              <h3 className="mb-4 text-2xl font-bold">{feature.title}</h3>
              <p className="text-xl text-gray-600">{feature.desc}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CTA