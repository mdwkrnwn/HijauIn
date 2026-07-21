// src/app/layout.tsx
import '@/app/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'HijauIn - 1080p Layout',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="grow w-full  mx-auto bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}