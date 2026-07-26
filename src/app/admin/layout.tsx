import "../globals.css";
import { ReactNode } from "react";
import Sidebar from "./components/sidebar";

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