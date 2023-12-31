import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo List',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className='flex flex-col min-h-screen'>
          <main className='flex-1 container max-w-screen-sm mx-auto px-1 py-5'>
          <Providers>{children}</Providers>
          </main>
          <footer className='py-5'>
            <div className='text-center text-sm'>
              Copyrigth @ All rights reserved | FKatsuya
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
