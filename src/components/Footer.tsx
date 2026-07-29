// src/components/Footer.tsx

import Image from "next/image";
import {
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaFacebook,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#00462E] text-white">
      <div className="px-16 pt-8 pb-6">
        <div className="flex items-start justify-between">
          {/* Left */}
          <div className="w-[27%]">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/icon.png"
                alt="HijauIn"
                width={88}
                height={88}
              />

              <div>
                <h2 className="text-[30px] font-bold leading-none">
                  Hijau<span className="text-[#67A02E]">In</span>
                </h2>

                <p className="mt-1 text-[10px] text-[#CBE8D4]">
                  Satu Langkah Hijau Setiap Hari
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-[260px] text-[13px] leading-7 text-[#D8EEE0]">
              Platform digital untuk membangun kebiasaan ramah lingkungan,
              memantau dampak, dan berkontribusi nyata untuk bumi.
            </p>

            <div className="mt-6 flex items-center gap-5 text-[15px] text-white/90">
              <FaInstagram className="cursor-pointer transition hover:text-white" />
              <FaTiktok className="cursor-pointer transition hover:text-white" />
              <FaYoutube className="cursor-pointer transition hover:text-white" />
              <FaFacebook className="cursor-pointer transition hover:text-white" />
            </div>
          </div>

          {/* Jelajahi */}
          <div>
            <h3 className="mb-4 text-[15px] font-semibold">Jelajahi</h3>

            <ul className="space-y-2 text-[13px] leading-6 text-[#D8EEE0]">
              <li>Beranda</li>
              <li>Fitur</li>
              <li>Cara Kerja</li>
              <li>Edukasi</li>
              <li>Komunitas</li>
              <li>Tentang Kami</li>
            </ul>
          </div>

          {/* Bantuan */}
          <div>
            <h3 className="mb-4 text-[15px] font-semibold">Bantuan</h3>

            <ul className="space-y-2 text-[13px] leading-6 text-[#D8EEE0]">
              <li>FAQ</li>
              <li>Pusat Bantuan</li>
              <li>Kebijakan Privasi</li>
              <li>Syarat & Ketentuan</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>

          {/* Komunitas */}
          <div>
            <h3 className="mb-4 text-[15px] font-semibold">Komunitas</h3>

            <ul className="space-y-2 text-[13px] leading-6 text-[#D8EEE0]">
              <li>Event</li>
              <li>Volunteer</li>
              <li>Partner</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="w-[210px]">
            <h3 className="mb-4 text-[15px] font-semibold">Kontak</h3>

            <div className="space-y-3 text-[13px] text-[#D8EEE0]">
              <div className="flex items-start gap-3">
                <FaEnvelope className="mt-1 text-[11px]" />
                <span>hello@hijauin.com</span>
              </div>

              <div className="flex items-start gap-3">
                <FaPhoneAlt className="mt-1 text-[11px]" />
                <span>0812-3456-7890</span>
              </div>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[11px]" />

                <span>
                  Jl. Hijau No. 123,
                  <br />
                  Jakarta, Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6  pt-4">
          <p className="flex items-center justify-center gap-2 text-[12px] text-[#D8EEE0]">
            © 2026 HijauIn. All rights reserved.
            <span className="text-[#9BE36B]">🍃</span>
          </p>
        </div>
      </div>

      {/* Ornament kanan */}
      <Image
        src="/assets/beranda/d.png"
        alt=""
        width={350}
        height={350}
        className="pointer-events-none absolute -bottom-10 -right-15 select-none opacity-30"
      />
    </footer>
  );
}
