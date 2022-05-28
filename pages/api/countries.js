import { getApiData } from '@/utils/server'
import { kebabCase } from 'lodash'

export default async function handler(req, res) {
  try {
    const response = await getApiData('/v1/countries')

    const countries = response
      .filter((country) => country.isoa2)
      .sort((a, b) => a.countryName.localeCompare(b.countryName))
      .map((country) => ({
        name: country.countryName,
        id: kebabCase(country.countryName),
      }))

    return res.json({
      countries,
    })
  } catch (err) {
    console.log(err)

    return res.status(500).json({
      error: 'Something went wrong',
    })
  }
}
