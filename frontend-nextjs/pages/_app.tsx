import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { LanguageProvider } from '@/context/LanguageContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
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
