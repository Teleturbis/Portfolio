import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kevin Poppe | Web Developer',
  description:
    'Kevin Poppe | Leidenschaftlicher Webentwickler mit Fokus auf NextJS und TypeScript. Ich erschaffe sauberen, reaktionsstarken Code und entwickle hochperformante Webanwendungen.',
  keywords: [
    'Webentwicklung',
    'NextJS',
    'TypeScript',
    'Clean Code',
    'responsive Design',
    'Webanwendungen',
    'Programmierer',
    'Fullstack Developer',
    'Frontend Developer',
    'Website erstellen',
  ],
  authors: [{ name: 'Kevin Poppe' }],

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
