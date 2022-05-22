import '@/styles/globals.css'

import AppShell from '@/layouts/AppShell'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <AppShell>{page}</AppShell>)

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  )
}

export default MyApp
