import "../globals.css";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import Sidebar from "./components/sidebar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="antialiased min-h-screen flex bg-[#F8FAF8] text-[#1A202C] font-sans">
        <Sidebar />
        <main className="lg:ml-70 lg:p-8 flex-1 w-full p-6 overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}