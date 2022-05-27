import Loader from '@/components/Loader'
import React from 'react'
import SlideNavigation from '@/components/SlideNavigation'
import TransitionWrapper from '@/components/TransitionWrapper'
import useCountry from '@/hooks/useCountry'

export default function Facts() {
  const { data } = useCountry()

  if (!data) {
    return <Loader />
  }

  const { name, population, gdp_per_capita, hdi } = data

  return (
    <>
      <SlideNavigation currentPage={3} />
      <TransitionWrapper>
        <div className="flex flex-col w-full h-full gap-6 px-8 py-12 text-white bg-primary-dark">
          <h2 className="text-4xl font-black uppercase">About {name}:</h2>
          <div>
            <ul className="pl-4 space-y-4 list-disc">
              <li>
                <p className="text-xl font-bold uppercase">
                  About{' '}
                  {new Intl.NumberFormat('en-GB', {
                    maximumSignificantDigits: 3,
                  }).format(population)}{' '}
                  people live here
                </p>
              </li>
              <li>
                <p className="text-xl font-bold uppercase">
                  The GDP per capita is{' '}
                  {new Intl.NumberFormat('en-GB', {
                    style: 'currency',
                    currency: 'USD',
                    useGrouping: true,
                  }).format(gdp_per_capita)}
                </p>
              </li>
              <li>
                <p className="text-xl font-bold uppercase">
                  The Human Development Index is {}
                  {new Intl.NumberFormat('en-GB', {
                    maximumSignificantDigits: 2,
                  }).format(hdi)}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </TransitionWrapper>
    </>
  )
}
