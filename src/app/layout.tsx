import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Hero from '@/components/sections/Hero';
import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';

import de from '@/locales/de.json';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kevin Poppe | Web Developer',
  description:
    'Kevin Poppe | Leidenschaftlicher Webentwickler mit Fokus auf NextJS und TypeScript. Ich erschaffe sauberen, reaktionsstarken Code und entwickle hochperformante Webanwendungen.',
  keywords: [
    'Webentwickler',
    'NextJS',
    'TypeScript',
    'responsive Design',
    'Webanwendungen',
    'Fullstack Developer',
    'Frontend Developer',
  ],
  authors: [{ name: 'Kevin Poppe' }],
  robots: 'index, follow',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://kevinpoppe.com',
    siteName: 'Kevin Poppe',
    title: 'Kevin Poppe | Web Developer',
    description:
      'Kevin Poppe | Leidenschaftlicher Webentwickler mit Fokus auf NextJS und TypeScript. Ich erschaffe sauberen, reaktionsstarken Code und entwickle hochperformante Webanwendungen.',
    images: [
      {
        url: 'https://kevinpoppe.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kevin Poppe | Web Developer',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='de'>
      <body className={inter.className}>
        <div className='min-h-screen flex flex-col justify-between'>
          <Hero lang={de['hero']} />
          <Header />

          <>{children}</>

          <Footer lang={de['socials']} />
        </div>
      </body>
    </html>
  );
}
