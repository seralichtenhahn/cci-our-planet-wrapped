import NFA_2018_Detailed from '@/data/NFA_2018_Detailed.csv'
import NFA_Historical from '@/data/NFA_Historical.csv'
import { groupBy } from 'lodash'

export default async function handler(req, res) {
  const { country } = req.query

  if (!country) {
    res.status(400).json({
      error: 'Missing country query parameter',
    })
    return
  }

  const detailedData = NFA_2018_Detailed.find(
    (entry) => entry.Country.toLowerCase() === country.toLowerCase(),
  )

  const historicalDataByYear = groupBy(
    NFA_Historical.filter(
      (entry) => entry.Country.toLowerCase() === country.toLowerCase(),
    ),
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
    country,
    detailedData,
    historicalData,
  })
}
