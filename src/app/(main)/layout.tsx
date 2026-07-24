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
      <body className="bg-background flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="grow bg-background w-full mx-auto mb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}