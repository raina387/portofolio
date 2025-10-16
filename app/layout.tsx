import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Raina Jay ENHYP - Portofolio Resmi',
  description: 'Website portofolio resmi untuk Jay dari ENHYPEN - Artis K-pop & Performer',
  keywords: 'Jay, ENHYPEN, K-pop, artis Korea, portofolio, musik, pertunjukan, Raina Yulia Farani',
  authors: [{ name: 'Raina Yulia Farani' }],
  openGraph: {
    title: 'Raina Jay ENHYP - Portofolio Resmi',
    description: 'Website portofolio resmi untuk Jay dari ENHYPEN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
