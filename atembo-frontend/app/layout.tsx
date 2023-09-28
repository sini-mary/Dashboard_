import type { Metadata } from 'next'
import { Inter, Reggae_One } from 'next/font/google'



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
   

     
      <body className={inter.className}>{children}       
</body>
    </html>
  )
}
