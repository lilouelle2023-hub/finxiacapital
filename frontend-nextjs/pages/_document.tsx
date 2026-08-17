import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        {/* Netlify Forms — static detection form (required for SSG submission capture) */}
        <form name="whitepaper-download" data-netlify="true" hidden>
          <input type="text" name="firstName" />
          <input type="text" name="lastName" />
          <input type="text" name="company" />
          <input type="text" name="role" />
          <input type="email" name="email" />
          <input type="text" name="consent" />
          <input type="text" name="submittedAt" />
          <input type="text" name="language" />
        </form>
        <form name="newsletter-issue-download" data-netlify="true" hidden>
          <input type="text" name="firstName" />
          <input type="text" name="lastName" />
          <input type="text" name="company" />
          <input type="text" name="role" />
          <input type="email" name="email" />
          <input type="text" name="consent" />
          <input type="text" name="submittedAt" />
          <input type="text" name="language" />
        </form>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
