import '@/styles/globals.css'

import AppShell from '@/layouts/AppShell'

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <AppShell>{page}</AppShell>)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
