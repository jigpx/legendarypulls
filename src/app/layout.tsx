import type { Metadata } from 'next'
import { Barlow_Semi_Condensed } from 'next/font/google'
import './globals.css'

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-barlow-semi-condensed',
})

export const metadata: Metadata = {
  title: 'Legendary Pulls - Under Construction',
  description:
    'Amazing legendary pull requests coming soon. Stay tuned for something epic!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowSemiCondensed.variable} font-sans antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
