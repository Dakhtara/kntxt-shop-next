import Image from 'next/image'
import './globals.css'
import { Inter } from 'next/font/google'
import ShoppingCartIcon from '@/components/icons/ShoppingCart'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FAKE KNTXT Shop',
  description: 'Recreation of the KNTXT Shop',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black/90 text-white"}>
          <header className="container flex items-center justify-between mx-auto">
            <Image src={"/kntxt-logo-white.png"} alt="KNTXT Logo" width={220} height={360} />
            <span>Search bar</span>
            <div className="flex gap-8">
              <span>Products</span>
              <div className="flex items-center gap-2">Cart <ShoppingCartIcon width={16} height={16} /></div>
            </div>
          </header>
        {children}
      </body>
    </html>
  )
}
