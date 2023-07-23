
import { Header } from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Finlandica} from 'next/font/google'
import Footer from '@/components/Footer'
import Cart from '@/components/Cart'
import { Providers } from '@/components/Providers'

const finlandica = Finlandica({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next-sushi',
}

export default function RootLayout({ children }:{
  children:React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={finlandica.className}>  
        <Providers>
          <Header><Cart></Cart></Header> 
            {children}
          <Footer/>
        </Providers> 
      </body>

    </html>
  )
}
