"use client";

import { useEffect } from "react";
import { FaTimes, FaLeaf, FaTint, FaBus, FaBolt } from "react-icons/fa";
import { useState } from "react";
import { useActivity } from "@/hooks/useActivity";
import { supabase } from "@/utils/supabase";
import { useRouter } from "next/navigation";
import { useCategory } from "@/hooks/useCategory";
import { FaBottleWater } from "react-icons/fa6";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { rewardUser } from "@/services/profile.service";
interface CreateActivityModalProps {
  open: boolean;
  onClose: () => void;
  activity: ReturnType<typeof useActivity>;
}

const colorMap = {
  green: {
    bg: "bg-green-50",
    border: "border-green-500",
    iconBg: "bg-green-600",
    iconColor: "text-white",
  },

  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-500",
    iconBg: "bg-emerald-600",
    iconColor: "text-white",
  },

  lime: {
    bg: "bg-lime-50",
    border: "border-lime-500",
    iconBg: "bg-lime-600",
    iconColor: "text-white",
  },

  blue: {
    bg: "bg-blue-50",
    border: "border-blue-500",
    iconBg: "bg-blue-600",
    iconColor: "text-white",
  },
} as const;

export default function CreateActivityModal({
  open,
  onClose,
  activity,
}: CreateActivityModalProps) {
  const { createActivity, getActivities } = activity;
  const { categories } = useCategory();
  const router = useRouter();

  const iconMap = {
    leaf: FaLeaf,
    droplet: FaTint,
    bus: FaBus,
    tumbler: FaBottleWater,
  } as const;
  const [description, setDescription] = useState("");
  const [activityDate, setActivityDate] = useState("");
  const [activityTime, setActivityTime] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  useEffect(() => {
    if (categories.length > 0 && !selectedActivity) {
      setSelectedActivity(categories[0]);
    }
  }, [categories]);
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  useEffect(() => {
    if (!selectedActivity) return;

    const defaultTitle: Record<string, string> = {
      Kebiasaan: "Membawa Tumbler",
      Penghematan: "Hemat Air 20 Liter",
      Transportasi: "Naik Transportasi Umum",
      Lingkungan: "Menanam Pohon",
    };

    setTitle(defaultTitle[selectedActivity.name] ?? "");
  }, [selectedActivity]);
  const handleSubmit = async () => {
    try {
      setLoading(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      const {
        data: { session },
      } = await supabase.auth.getSession();

      console.log(session);

      if (!user) {
        alert("Belum login");
        return;
      }

      if (!title.trim()) {
        alert("Judul aktivitas wajib diisi");
        setLoading(false);
        return;
      }

      if (!description.trim()) {
        alert("Deskripsi aktivitas wajib diisi");
        setLoading(false);
        return;
      }

      await createActivity({
        user_id: user.id,
        category_id: selectedActivity.id,

        title,

        description,
        point: selectedActivity.point,
        verification_type: "manual",
        status: "verified",
        activity_date: `${activityDate} ${activityTime}`,
        co2_saved: 0,
        water_saved: 0,
        energy_saved: 0,
      });

      await rewardUser(user.id, selectedActivity.point);
      await getActivities(user.id);
      // Reset form
      setDescription("");
      setActivityDate("");
      setActivityTime("");
      setLocation("");

      const defaultTitle: Record<string, string> = {
        Kebiasaan: "Membawa Tumbler",
        Penghematan: "Hemat Air 20 Liter",
        Transportasi: "Naik Transportasi Umum",
        Lingkungan: "Menanam Pohon",
      };

      setTitle(defaultTitle[selectedActivity.name] ?? "");

      router.refresh();

      alert("Aktivitas berhasil ditambahkan");

      onClose();
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
            w-full
            max-w-6xl
            h-[90vh]
            overflow-hidden
            rounded-[32px]
            bg-white
            shadow-2xl
            flex
            flex-col
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-gray-100 px-8 py-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Catat Aktivitas Baru
            </h2>

            <p className="mt-1 text-gray-500">
              Tambahkan aktivitas ramah lingkungan yang telah kamu lakukan.
            </p>
          </div>

          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 transition hover:bg-gray-100"
          >
            <FaTimes />
          </button>
        </div>

        {/* BODY */}
        <div className="grid flex-1 grid-cols-12 overflow-hidden">
          {/* ================= LEFT ================= */}

          <div className="col-span-4 overflow-y-auto  bg-[#F8FBF8] p-6">
            <h3 className="mb-5 text-lg font-bold">Pilih Kategori Aktivitas</h3>

            <div className="space-y-3">
              {categories.map((activity) => {
                const Icon = iconMap[activity.icon as keyof typeof iconMap];
                const color = colorMap[activity.color as keyof typeof colorMap];

                const active = selectedActivity?.id === activity.id;

                return (
                  <button
                    key={activity.id}
                    onClick={() => setSelectedActivity(activity)}
                    className={`flex w-full items-center gap-4 rounded-2xl p-4 transition ${
                      active
                        ? `${color.border} ${color.bg} border-2`
                        : "border border-gray-200 hover:border-green-500"
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl
            ${color.iconBg}
            ${color.iconColor}`}
                    >
                      {Icon && <Icon className="text-xl" />}
                    </div>

                    <div className="text-left">
                      <h4 className="font-semibold">{activity.name}</h4>

                      <p className="text-sm text-gray-500">
                        +{activity.point} Eco Point
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="col-span-8 overflow-y-auto p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold">{selectedActivity.name}</h3>
              <p className="mt-2 leading-7 text-gray-500">
                {selectedActivity.description}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Judul Aktivitas
                </label>

                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Contoh: Membawa Tumbler"
                  className="h-[56px] w-full rounded-2xl border border-gray-200 px-5 outline-none transition focus:border-[#11773D] focus:ring-4 focus:ring-green-100"
                />
              </div>
              {/* Deskripsi */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Ceritakan Aktivitasmu
                </label>

                <textarea
                  rows={5}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Contoh: Hari ini saya menanam 3 bibit mangga di halaman rumah bersama keluarga..."
                  className="w-full resize-none rounded-2xl border border-gray-200 bg-white px-5 py-4 text-[15px] outline-none transition focus:border-[#11773D] focus:ring-4 focus:ring-green-100"
                />
              </div>

              {/* Date & Time */}

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Tanggal Aktivitas
                  </label>

                  <input
                    type="date"
                    value={activityDate}
                    onChange={(e) => setActivityDate(e.target.value)}
                    className="h-[56px] w-full rounded-2xl border border-gray-200 px-4 outline-none transition focus:border-[#11773D] focus:ring-4 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Waktu Aktivitas
                  </label>

                  <input
                    type="time"
                    value={activityTime}
                    onChange={(e) => setActivityTime(e.target.value)}
                    className="h-[56px] w-full rounded-2xl border border-gray-200 px-4 outline-none transition focus:border-[#11773D] focus:ring-4 focus:ring-green-100"
                  />
                </div>
              </div>

              {/* Lokasi */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Lokasi (Opsional)
                </label>

                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Contoh: Kota Malang"
                  className="h-[56px] w-full rounded-2xl border border-gray-200 px-5 outline-none transition focus:border-[#11773D] focus:ring-4 focus:ring-green-100"
                />
              </div>

              {/* Upload Bukti */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Upload Bukti Aktivitas (Opsional)
                </label>

                <label className="flex h-[180px] cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#D7E8DC] bg-[#F8FBF8] transition hover:border-[#11773D] hover:bg-[#F2FAF4]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-4 h-12 w-12 text-[#11773D]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.7}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5V18a2 2 0 002 2h14a2 2 0 002-2v-1.5M16 8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>

                  <h4 className="font-semibold text-gray-800">Upload Foto</h4>

                  <p className="mt-1 text-sm text-gray-500">
                    Drag & Drop atau klik untuk memilih gambar
                  </p>

                  <span className="mt-3 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-[#11773D]">
                    JPG, PNG • Maks 5MB
                  </span>

                  <input type="file" accept="image/*" className="hidden" />
                </label>
              </div>

              {/* Estimasi Point */}

              <div className="rounded-3xl bg-[#F3FAF5] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-[#11773D]">
                      Estimasi Eco Point
                    </h4>

                    <p className="mt-1 text-sm text-gray-500">
                      Poin akan diverifikasi berdasarkan aktivitas yang dipilih.
                    </p>
                  </div>

                  <div className="text-right">
                    <h2 className="text-4xl font-extrabold text-[#11773D]">
                      +{selectedActivity.point}
                    </h2>

                    <p className="font-medium text-gray-500">Eco Point</p>
                  </div>
                </div>
              </div>

              {/* Footer */}

              <div className="flex items-center justify-end gap-4 pt-2">
                <button
                  type="button"
                  className="h-[56px] rounded-2xl border border-gray-200 px-8 font-semibold text-gray-600 transition hover:bg-gray-100"
                >
                  Batal
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex h-[56px] min-w-[210px] items-center justify-center gap-3 rounded-2xl bg-[#11773D] px-8 font-semibold text-white transition hover:bg-[#0E6634] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <AiOutlineLoading3Quarters className="h-5 w-5 animate-spin" />
                      <span>Menyimpan...</span>
                    </>
                  ) : (
                    "Simpan Aktivitas"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
