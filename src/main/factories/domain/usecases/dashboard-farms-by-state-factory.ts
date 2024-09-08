import { DashboardFarmsByState } from '@/domain/contracts/repos'
import { DbDashboardFarmsByState } from '@/domain/usecases'
import { PgRuralProducerRepository } from '@/infra/repos/postgress'

export const makeDbDashboardFarmsByState = (): DashboardFarmsByState => {
  const pgRuralProducerRepository = new PgRuralProducerRepository()
  return new DbDashboardFarmsByState(pgRuralProducerRepository)
}
