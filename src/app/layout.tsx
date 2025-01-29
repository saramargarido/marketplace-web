import type { Metadata } from 'next'
import { DM_Sans as DmSans, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const dmsans = DmSans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | Marketplace',
    default: 'Marketplace',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${poppins.variable} ${dmsans.variable}`}>
      <body className="bg-background">{children}</body>
    </html>
  )
}
