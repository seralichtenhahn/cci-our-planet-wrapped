import '@/styles/globals.css'

import { AnimatePresence } from 'framer-motion'
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
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        {getLayout(<Component {...pageProps} />)}
      </AnimatePresence>
    </>
  )
}

export default MyApp
