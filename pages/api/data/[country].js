import { groupBy, kebabCase } from 'lodash'

import { getApiData } from '@/utils/server'
import { setDayOfYear } from 'date-fns'

export default async function handler(req, res) {
  try {
    const { country } = req.query

    if (!country) {
      res.status(400).json({
        error: 'Missing country query parameter',
      })
      return
    }

    const countries = await getApiData('/v1/countries')

    const countryId = parseInt(
      countries.find((c) => kebabCase(c.countryName) === country)
        ?.countryCode ?? 0,
      10,
    )

    if (!countryId) {
      return res.status(404).json({
        error: 'Country not found',
      })
    }

    const countryData = await getApiData(`/v1/data/${countryId}`)

    const { HDI, GDP, Population, Earths, ...countryDataByType } = groupBy(
      countryData,
      'record',
    )

    const details = {
      id: countryId,
      slug: country,
      name: countryData.at(-1).countryName,
      hdi: HDI.at(-1).value,
      population: Population.at(-1).value,
      gdp_per_capita: GDP.at(-1).value,
      number_of_earths: Earths.at(-1).value,
    }

    details.overshoot_day = setDayOfYear(
      new Date(),
      details.number_of_earths > 1 ? 365 / details.number_of_earths : 365,
    )

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
