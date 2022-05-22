import Link from 'next/link'
import Select from '@/components/Select'
import useCountries from '@/hooks/useCountries'
import { useState } from 'react'

export default function Start() {
  const { data } = useCountries()
  const [selectedCountry, setSelectedCountry] = useState({
    id: 0,
    name: '',
  })

  console.log(selectedCountry)

  const countries =
    data?.countries.map((country, index) => ({
      name: country.name,
      id: index,
    })) || []

  return (
    <div className="flex flex-col w-full h-full gap-6 px-8 py-8 text-white bg-primary-dark">
      <h1 className="text-6xl font-black leading-[3rem] uppercase">
        Select a Country to begin:
      </h1>
      <Select
        selected={selectedCountry}
        onChange={setSelectedCountry}
        placeholder="Select a country"
        options={countries}
      />
      <div className="flex-1">
        <Link href="/start">
          <a className="relative inline-block group focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-1.5 translate-y-1.5 bg-green-700 group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest text-white uppercase border-2 border-current group-active:text-opacity-75">
              Select
            </span>
          </a>
        </Link>
      </div>
    </div>
  )
}
