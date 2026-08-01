import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { LanguageProvider } from '@/context/LanguageContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  const initialLanguage = pageProps.initialLanguage || 'fr';

  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <Head>
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="alternate" type="application/rss+xml" title="FINXIA Capital — Blog" href="https://finxiacapital.com/feed.xml" />
      </Head>
        <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
