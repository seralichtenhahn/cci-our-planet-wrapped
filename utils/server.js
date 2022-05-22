import * as fs from 'fs'

import { parse } from '@fast-csv/parse'

export const loadCsv = async (path) => {
  const csvStream = fs.createReadStream(path)
  const parser = parse({ headers: true })
  const csvData = []

  parser.on('data', (data) => {
    csvData.push(data)
  })

  return new Promise((resolve, reject) => {
    csvStream.pipe(parser)
    parser.on('end', () => {
      resolve(csvData)
    })
    parser.on('error', (error) => {
      reject(error)
    })
  })
}
