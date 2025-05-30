import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  weight: ['400', '500', '600', '700'],
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: true,
})

export const viewport: Viewport = {
  themeColor: '#4CAF50',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Os 5 Melhores Remédios Para Emagrecer em 2025',
  description: 'Descubra os 5 melhores remédios para emagrecer em 2025, com base em pesquisas e resultados reais.',
  metadataBase: new URL('https://melhores-emagrecedores.com.br'),
  openGraph: {
    title: 'Os 5 Melhores Remédios Para Emagrecer em 2025',
    description: 'Descubra os 5 melhores remédios para emagrecer em 2025, com base em pesquisas e resultados reais.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: 'G-RTEPB48RDY',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://cdnjs.cloudflare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="//fonts.googleapis.com"
        />
        <link
          rel="dns-prefetch"
          href="//fonts.gstatic.com"
        />
        <link
          rel="dns-prefetch"
          href="//cdnjs.cloudflare.com"
        />
        <link
          rel="dns-prefetch"
          href="//www.googletagmanager.com"
        />
      </head>
      <body className="font-inter bg-primary text-text">
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-RTEPB48RDY`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RTEPB48RDY');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 