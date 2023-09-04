import './globals.css'
import '../../HyliaSerif_WebfontKit/stylesheet.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Breath of The Wild Cookbook',
  description: 'search,store, and favorite your favorite recipes from BOTW',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-fixed'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
