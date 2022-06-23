import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00092C" />
          <meta name="msapplication-TileColor" content="#00092C" />
          <meta name="theme-color" content="#00092C" />
          <link rel="manifest" href="/manifest.json" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Our Planet Wrapped" />
          <meta
            property="og:description"
            content=" A data story about the ecological footprint using data of the Global Footprint Network."
          />
          <meta property="og:site_name" content="Our Planet Wrapped" />
          <meta
            property="og:url"
            content="https://our-planet-wrapped.netlify.app/"
          />
          <meta
            property="og:image"
            content="https://our-planet-wrapped.netlify.app/images/og_image.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://our-planet-wrapped.netlify.app/images/og_image.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
