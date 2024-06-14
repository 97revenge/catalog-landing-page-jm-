import type { Metadata } from 'next'

import { Inter, Sora } from 'next/font/google'
import './globals.css'
import { keywords } from '@/lib/keywords'
import { AI } from '@/actions'

const inter = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Catálogo de Produtos | JM Luz e Arte',

  metadataBase: new URL('https://catalogojmluzearte.vercel.app/'),
  keywords: keywords,
  icons: '/favicon.ico',
  openGraph: {
    emails: 'dageltubos@gmail.com',
    type: 'website',
    locale: 'pt_BR',

    images: [
      {
        url: 'https://github.com/97revenge/jsdom-trial/assets/80254945/28fc654d-a943-440d-ba40-f65786dc02b2',
        width: 830,
        height: 630,
        alt: 'Counpon Image for new clientes',
      },
    ],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <AI>
        <body className={inter.className}>{children}</body>
      </AI>
    </html>
  )
}
