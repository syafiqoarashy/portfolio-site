import { Inter } from 'next/font/google'
import './globals.css'
import {Metadata} from "next";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Syafiqo Portfolio',
  description: 'The digital portfolio of Syafiqo Arashy Octaviano.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
