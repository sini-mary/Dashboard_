import type { Metadata } from 'next'
import { Inter, Reggae_One } from 'next/font/google'
import 'tailwindcss/tailwind.css';





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
   

<body>{children}       

     
</body>
    </html>
  )
}
