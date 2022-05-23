import Button from '@/components/Button'
import Link from 'next/link'
import Select from '@/components/Select'
import TransitionWrapper from '@/components/TransitionWrapper'
import useCountries from '@/hooks/useCountries'
import { useState } from 'react'

export default function Start() {
  const { data } = useCountries()
  const [selectedCountry, setSelectedCountry] = useState({
    id: '',
    name: '',
  })

  const countries = data?.countries || []

  return (
    <TransitionWrapper>
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
          <Button
            disabled={!selectedCountry.id}
            href={`/slides/${selectedCountry.id}`}
          >
            Select
          </Button>
        </div>
      </div>
    </TransitionWrapper>
  )
}
