import { getApiData } from '@/utils/server'
import { groupBy } from 'lodash'

export default async function handler(req, res) {
  try {
    const earthData = await getApiData(`/v1/data/5001`)

    const { GDP, Population, Earths, ...countryDataByType } = groupBy(
      earthData,
      'record',
    )

    const details = {
      name: 'world',
      population: Population.at(-1).value,
      number_of_earths: Earths.at(-1).value,
    }

    const historical = {
      number_of_earths: Earths.map((d) => ({
        year: d.year,
        value: d.value,
      })),
    }

    return res.json({
      ...details,
      historical,
    })
  } catch (err) {
    console.log(err)

    return res.status(500).json({
      error: 'Something went wrong',
    })
  }
}
