// src/app/layout.tsx
import '@/app/globals.css'

export const metadata = {
  title: 'HijauIn - 1080p Layout',
  description: 'Skibidi respect',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className=''>
        {children}
      </body>
    </html>
  )
}