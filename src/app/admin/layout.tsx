import "../globals.css";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import Sidebar from "./components/sidebar";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next/types";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'HijauIn',
  description: 'Skibidi respect',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased min-h-screen flex bg-[#F8FAF8] text-[#1A202C] font-sans">
        <NextTopLoader color="#0E5F35" showSpinner />
        <Sidebar />
        <main className="lg:ml-70 lg:p-8 flex-1 w-full p-6 overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}