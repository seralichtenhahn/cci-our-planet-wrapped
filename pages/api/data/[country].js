import * as path from 'path'

import { groupBy } from 'lodash'
import { loadCsv } from '@/utils/server'

export default async function handler(req, res) {
  const { country } = req.query

  if (!country) {
    res.status(400).json({
      error: 'Missing country query parameter',
    })
    return
  }

  const basePath = path.join(__dirname, `../../../../../data`)

  const allHistoricalData = await loadCsv(`${basePath}/NFA_Historical.csv`)
  const allDetailedData = await loadCsv(`${basePath}/NFA_2018_Detailed.csv`)

  const detailedData = allDetailedData.find(
    (entry) => entry.Country.toLowerCase() === country.toLowerCase(),
  )

  const historicalDataByYear = groupBy(
    allHistoricalData.filter(
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
        national_yield: parseFloat(entry.National_Yield),
        world_yield: parseFloat(entry.World_Yield),
        yield_factor: parseFloat(entry.Yield_Factor),
      })),
    }
  })

  return res.json({
    country,
    detailedData,
    historicalData,
  })
}
