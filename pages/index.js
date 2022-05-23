import Button from '@/components/Button'
import Image from 'next/image'
import TransitionWrapper from '@/components/TransitionWrapper'

export default function Home() {
  return (
    <TransitionWrapper>
      <div className="flex flex-col w-full h-full gap-6 px-8 py-8 text-white bg-primary-dark">
        <div className="relative max-w-xl aspect-square">
          <Image
            priority
            src="/images/earth.svg"
            alt="Our planet"
            layout="fill"
          />
        </div>
        <h1 className="text-4xl font-black text-center uppercase">
          Our Planet Wrapped
        </h1>
        <div className="flex-1 mx-auto">
          <Button href="/start">Get Started</Button>
        </div>
        <p className="text-center text-gray-400">
          A project by Serafin Lichtenhahn<span className="mx-2">·</span>Data by{' '}
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
  )
}
