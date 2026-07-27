// src/app/layout.tsx
import '@/app/globals.css'

export const metadata = {
  title: 'HijauIn - 1080p Layout',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  )
}