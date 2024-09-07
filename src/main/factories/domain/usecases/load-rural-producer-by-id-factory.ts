import { LoadRuralProducerById } from '@/domain/contracts/repos'
import { DbLoadRuralProducerById } from '@/domain/usecases'
import { PgRuralProducerRepository } from '@/infra/repos/postgress'

export const makeDbLoadRuralProducerById = (): LoadRuralProducerById => {
  const pgRuralProducerRepository = new PgRuralProducerRepository()
  return new DbLoadRuralProducerById(pgRuralProducerRepository)
}
