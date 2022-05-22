import * as path from 'path'

import { loadCsv } from '@/utils/server'

export default async function handler(req, res) {
  const basePath = path.join(__dirname, `../../../../data`)
  const allDetailedData = await loadCsv(`${basePath}/NFA_2018_Detailed.csv`)

  const countries = allDetailedData.map((entry) => ({
    name: entry.Country,
    region: entry.Region,
  }))

  return res.json({
    countries,
  })
}
