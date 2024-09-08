import { LoadRuralProducerPageable } from '@/domain/contracts/repos'
import { DbLoadRuralProducerPageable } from '@/domain/usecases'
import { PgRuralProducerRepository } from '@/infra/repos/postgress'

export const makeDbLoadRuralProducerPageable =
  (): LoadRuralProducerPageable => {
    const pgRuralProducerRepository = new PgRuralProducerRepository()
    return new DbLoadRuralProducerPageable(pgRuralProducerRepository)
  }
