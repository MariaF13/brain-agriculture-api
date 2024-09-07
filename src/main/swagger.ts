import './config/module-alias'
import swaggerConfig from '@/main/docs'
import fs from 'fs'
const outputFile = './swagger-output.json'

fs.writeFile(outputFile, JSON.stringify(swaggerConfig, null, 2), err => {
  if (err) {
    console.error(err)
  }
})
