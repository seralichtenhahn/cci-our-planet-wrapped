import * as path from 'path'

import NFA_2018_Detailed from '@/data/NFA_2018_Detailed.csv'

export default async function handler(req, res) {
  const countries = NFA_2018_Detailed.map((entry) => ({
    name: entry.Country,
    region: entry.Region,
  }))

  return res.json({
    countries,
  })
}
