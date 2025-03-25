import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import cn from 'classnames';
import { QueryProvider } from '@/api/providers';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'FlashCards App',
  description: 'FlashCards App'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <QueryProvider>
        <body
          className={cn([
            geistSans.variable,
            geistMono.variable,
            'antialiased',
            'flex',
            'flex-col'
          ])}>
          <main className="flex-auto min-h-full bg-white px-4 py-4">
            {children}
          </main>
        </body>
      </QueryProvider>
    </html>
  );
}
