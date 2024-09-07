import './config/module-alias'
import 'reflect-metadata'
import { env } from '@/main/config/env'
import { PgConnection } from '@/infra/repos/postgress/helpers'
import { API, SWAGGER } from '@/utils/constants'
import { dataBaseSeed } from './seeds'

PgConnection.getInstance()
  .connect()
  .initialize()
  .then(async () => {
    const { app } = await import('@/main/config/app')
    await dataBaseSeed()
    app.listen(env.port, () => {
      console.log(`Server running at http://localhost:${env.port}${API}`)
      console.log(`Swagger at http://localhost:${env.port}${API}${SWAGGER}`)
    })
  })
  .catch(console.error)
