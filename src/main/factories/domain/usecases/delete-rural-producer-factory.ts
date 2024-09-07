import { DeleteRuralProducer } from '@/domain/contracts/repos'
import { DbDeleteRuralProducer } from '@/domain/usecases/db-delete-rural-producer'
import { PgRuralProducerRepository } from '@/infra/repos/postgress'

export const makeDbDeleteRuralProducer = (): DeleteRuralProducer => {
  const pgRuralProducerRepository = new PgRuralProducerRepository()
  return new DbDeleteRuralProducer(pgRuralProducerRepository)
}
