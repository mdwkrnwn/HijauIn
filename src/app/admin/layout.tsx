import "../globals.css";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import Sidebar from "./components/sidebar";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "HijauIn",
  description: "Selamatkan Bumi!",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`${poppins.className} min-h-screen flex bg-[#F8FAF8] text-[#1A202C] antialiased`}
      >
        <NextTopLoader color="#0E5F35" showSpinner />
        <Sidebar />
        <main className="lg:ml-70 flex-1 w-full overflow-x-hidden p-6 lg:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}