import '../styles/globals.scss'
import { Inter } from 'next/font/google'
import LayoutProvider from "@/components/LayoutProvider";

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <LayoutProvider>
        {children}
      </LayoutProvider>
      </body>
    </html>
  )
}
