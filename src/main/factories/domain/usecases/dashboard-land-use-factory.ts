import { DashboardLandUse } from '@/domain/contracts/repos'
import { DbDashboardLandUse } from '@/domain/usecases'
import { PgRuralProducerRepository } from '@/infra/repos/postgress'

export const makeDbDashboardLandUse = (): DashboardLandUse => {
  const pgRuralProducerRepository = new PgRuralProducerRepository()
  return new DbDashboardLandUse(pgRuralProducerRepository)
}
