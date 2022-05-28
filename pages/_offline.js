import Button from '@/components/Button'
import Head from 'next/head'
import TransitionWrapper from '@/components/TransitionWrapper'

export default function Offline() {
  return (
    <>
      <Head>
        <title>Oh no...</title>
      </Head>
      <TransitionWrapper>
        <div className="flex flex-col w-full h-full gap-8 px-8 pt-16 pb-8 text-white bg-primary-dark">
          <h1 className="text-4xl font-black text-center uppercase">
            Oh no...
          </h1>
          <p className="text-xl font-semibold text-center">
            Looks like your offline. Check you internet connection and try
            again.
          </p>
          <div className="flex-1 mx-auto">
            <Button href="/">Try again</Button>
          </div>
          <p className="text-center text-gray-400">
            A project by Serafin Lichtenhahn<span className="mx-2">·</span>Data
            by{' '}
            <a
              href="https://www.footprintnetwork.org/"
              target="_blank"
              rel="noreferrer"
            >
              Footprint Network
            </a>
          </p>
        </div>
      </TransitionWrapper>
    </>
  )
}
