import Hero from './components/Hero';
import FiturUnggulan from './components/FiturUnggulan';
import { FiturUnggulanDetail } from './components/FiturUnggulanDetail';
import { Impact } from './components/Impact';
import BottomCTA from '../(components)/BottomCTA';

export default function Features() {
  return (
    <div className="w-full bg-white flex flex-col ">

      {/* ===== HERO / HEADER ===== */}
      <Hero />

      {/* ===== GRID FEATURES ===== */}
      <FiturUnggulan />

      {/* ===== DETAILED FEATURES ===== */}
      <FiturUnggulanDetail />

      {/* ===== DAMPAK BULANAN ===== */}
      <Impact />

      {/* ===== BOTTOM CTA ===== */}
      <BottomCTA />
    </div>
  );
}