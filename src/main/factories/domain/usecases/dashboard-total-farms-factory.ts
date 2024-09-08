import { DashboardTotalFarms } from '@/domain/contracts/repos'
import { DbDashboardTotalFarms } from '@/domain/usecases'
import { PgRuralProducerRepository } from '@/infra/repos/postgress'

export const makeDbDashboardTotalFarms = (): DashboardTotalFarms => {
  const pgRuralProducerRepository = new PgRuralProducerRepository()
  return new DbDashboardTotalFarms(pgRuralProducerRepository)
}
