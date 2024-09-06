import './config/module-alias'
import 'reflect-metadata'
import { env } from '@/main/config/env'
import { PgConnection } from '@/infra/repos/postgress/helpers'
import { API } from '@/utils/constants'

PgConnection.getInstance()
  .connect()
  .initialize()
  .then(async () => {
    const { app } = await import('@/main/config/app')
    app.listen(env.port, () => {
      console.log(`Server running at http://localhost:${env.port}${API}`)
    })
  })
  .catch(console.error)
