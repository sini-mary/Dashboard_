import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Sidebar from './Components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Atembo',
  description: 'Atembo dashboard',
}

export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
<Sidebar/>
     
      <body className={inter.className}>{children}       
</body>
    </html>
  )
}
