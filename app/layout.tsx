import type { Metadata } from 'next'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const runtime = 'edge'

export const metadata: Metadata = {
  metadataBase: new URL('https://definecore.agency'),
  title: {
    default: 'DefineCore',
    template: '%s | DefineCore',
  },
  description: 'DefineCore is a tech-powered growth studio helping US businesses build their digital presence — from high-performance websites to precision ad campaigns and data-driven analytics.',
  keywords: ['growth studio', 'website development', 'Google Ads', 'Meta Ads', 'GA4 analytics', 'social media', 'US small business', 'digital marketing', 'tech agency'],
  authors: [{ name: 'DefineCore' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://definecore.agency',
    siteName: 'DefineCore',
    title: 'DefineCore - Tech-Powered Growth Agency',
    description: 'Tech-powered growth studio helping US businesses dominate online — websites, ads, analytics, and social media.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'DefineCore — Tech-Powered Growth Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DefineCore — Where Technology Meets Growth',
    description: 'Tech-powered growth studio for US businesses.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://googleapis.com" rel="stylesheet" />
      </head>
      <body className="bg-brand-off-white text-brand-black antialiased min-h-screen">
        <Navbar />
        <main id="main-content" className="pt-[60px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
