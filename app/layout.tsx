import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://nexusdigital.agency'),
  title: {
    default: 'Nexus Digital — Digital Marketing Agency for US Businesses',
    template: '%s | Nexus Digital',
  },
  description: 'Nexus Digital helps US-based offline businesses build a powerful online presence. Website development, Google Ads, Meta Ads, GA4 analytics, and social media management.',
  keywords: ['digital marketing agency', 'website development', 'Google Ads', 'Meta Ads', 'GA4 analytics', 'social media management', 'US small business'],
  authors: [{ name: 'Nexus Digital' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexusdigital.agency',
    siteName: 'Nexus Digital',
    title: 'Nexus Digital — Digital Marketing Agency for US Businesses',
    description: 'We help US-based offline businesses build a powerful online presence through websites, paid ads, analytics, and social media.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nexus Digital — Digital Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus Digital — Digital Marketing Agency',
    description: 'We help US-based offline businesses get online and grow.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-brand-off-white text-brand-black antialiased">
        <Navbar />
        <main id="main-content" className="pt-[73px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
