// src/app/layout.tsx
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Poppins } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Metadata } from "next/types";
import "aos/dist/aos.css";
import AOSProvider from "@/utils/aos.provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "HijauIn",
  description: "Skibidi respect",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-background flex flex-col min-h-screen overflow-x-hidden`}
      >
        <NextTopLoader color="#0E5F35" showSpinner />
        <Navbar />
        <main className="grow w-full mx-auto mb-16">
          <AOSProvider>{children}</AOSProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
