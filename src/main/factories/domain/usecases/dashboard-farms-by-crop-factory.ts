import { DashboardFarmsByCrop } from '@/domain/contracts/repos'
import { DbDashboardFarmsByCrop } from '@/domain/usecases'
import { PgRuralProducerRepository } from '@/infra/repos/postgress'

export const makeDbDashboardFarmsByCrop = (): DashboardFarmsByCrop => {
  const pgRuralProducerRepository = new PgRuralProducerRepository()
  return new DbDashboardFarmsByCrop(pgRuralProducerRepository)
}
