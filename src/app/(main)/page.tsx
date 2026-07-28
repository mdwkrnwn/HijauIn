import CTA from './(components)/CTA';
import Stats from './(components)/Stats';
import Hero from './(components)/Hero';
import Features from './(components)/Features';
import CaraKerja from './(components)/CaraKerja';
import Testimoni from './(components)/Testimoni';
import BottomCTA from './(components)/BottomCTA';

export default function Home() {
  return (
    <div className="flex bg-white flex-col w-full">
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Features Section */}
      <Features />

      {/* Call to Action Banner */}
      <CTA />

      {/* Cara Kerja Section */}
      <CaraKerja />

      {/* Komunitas & Testimoni Section */}
      <Testimoni />

      {/* Bottom CTA Banner */}
      <BottomCTA />
    </div>
  );






}