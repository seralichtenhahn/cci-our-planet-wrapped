import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full gap-6 px-8 py-8 text-white bg-primary-dark">
      <div className="relative max-w-xl aspect-square">
        <Image src="/images/earth.svg" alt="Our planet" layout="fill" />
      </div>
      <h1 className="text-4xl font-black text-center uppercase">
        Our Planet Wrapped
      </h1>
      <div className="flex-1 mx-auto">
        <Link href="/start">
          <a className="relative inline-block group focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-green-700 group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-white uppercase border-2 border-current group-active:text-opacity-75">
              Get Started
            </span>
          </a>
        </Link>
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
  )
}
