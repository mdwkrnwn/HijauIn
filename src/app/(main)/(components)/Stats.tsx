import { FaRecycle, FaGlobe, FaTree, FaUsers, FaBuilding } from "react-icons/fa";

export default function Stats() {
  return (
    <section className="relative z-10 px-16 py-16 mt-16">
      <div className="bg-background rounded-3xl flex items-center justify-between p-12 border border-gray-100 shadow">
        {[{
          value: "125.430 kg",
          label: "Sampah Dikelola",
          icon: <FaRecycle />
        }, {
          value: "82.340 kg",
          label: "CO2 Berhasil Dikurangi",
          icon: <FaGlobe />
        }, {
          value: "5.243",
          label: "Pohon Ditanam",
          icon: <FaTree />
        }, {
          value: "15.000+",
          label: "Pengguna Aktif",
          icon: <FaUsers />
        }, {
          value: "320+",
          label: "Komunitas Bergabung",
          icon: <FaBuilding />
        }].map((stat, idx) => <div key={idx} className="flex items-center gap-6">
          <div className="text-primary text-5xl">{stat.icon}</div>
          <div>
            <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-lg text-gray-500">{stat.label}</div>
          </div>
        </div>)}
      </div>
    </section>
  );
}