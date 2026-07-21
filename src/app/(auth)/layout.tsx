// src/app/layout.tsx
import '@/app/globals.css'

export const metadata = {
  title: 'HijauIn - 1080p Layout',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 flex flex-col">
        <main className="min-h-screen bg-brand-light flex items-center justify-center p-16 grow">
          {children}
        </main>
      </body>
    </html>
  )
}