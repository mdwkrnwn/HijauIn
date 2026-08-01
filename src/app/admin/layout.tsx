import "../globals.css";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import Sidebar from "./components/sidebar";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next";
import Header from "./components/Header";
import { getSession } from "./components/action";
import { redirect } from "next/navigation";

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

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { user: userData } = await getSession();
  if (!userData) {
    redirect("/login")
  }

  return (
    <html lang="id">
      <body
        className={`${poppins.className} min-h-screen grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] bg-[#F8FAF8] text-[#1A202C] antialiased`}
      >
        <NextTopLoader color="#0E5F35" showSpinner />
        <Sidebar />
        <Header />
        <main className="flex-1 w-full z-10 overflow-x-hidden p-6 lg:p-8 pt-0!">
          {children}
        </main>
      </body>
    </html>
  );
}