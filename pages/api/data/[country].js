import { groupBy, kebabCase } from 'lodash'

import NFA_2018_Detailed from '@/data/NFA_2018_Detailed.csv'
import NFA_Historical from '@/data/NFA_Historical.csv'
import { setDayOfYear } from 'date-fns'

export default async function handler(req, res) {
  const { country } = req.query

  if (!country) {
    res.status(400).json({
      error: 'Missing country query parameter',
    })
    return
  }

  const countrySlug = kebabCase(country)

  const detailedData = NFA_2018_Detailed.find(
    (entry) => kebabCase(entry.Country) === countrySlug,
  )

  if (!detailedData) {
    return res.status(404).json({
      error: 'Country not found',
    })
  }

  const details = {
    name: detailedData.Country,
    hdi: detailedData.HDI,
    population_in_millions: detailedData['Population (millions)'],
    gdp_per_capita: detailedData['Per Capita GDP'],
    number_of_earths: detailedData['Number of Earths required'],
  }

  details.overshoot_day = setDayOfYear(
    new Date(),
    details.number_of_earths > 1 ? 365 / details.number_of_earths : 365,
  )

  const historicalDataByYear = groupBy(
    NFA_Historical.filter((entry) => kebabCase(entry.Country) === countrySlug),
    'Year',
  )

  const historicalData = Object.keys(historicalDataByYear).map((year) => {
    const entries = historicalDataByYear[year]

    return {
      year: parseInt(year, 10),
      types: entries.map((entry) => ({
        land_type: entry.Land_type,
        national_yield: entry.National_Yield,
        world_yield: entry.World_Yield,
        yield_factor: entry.Yield_Factor,
      })),
    }
  })

  return res.json({
    ...details,
    detailedData,
    historicalData,
  })
}
