import { SetRuralProducer } from '@/domain/contracts/repos'
import { DbSetRuralProducer } from '@/domain/usecases'
import {
  PgPlantedCropsRepository,
  PgRuralProducerRepository
} from '@/infra/repos/postgress'

export const makeDbSetRuralProducer = (): SetRuralProducer => {
  const pgRuralProducerRepository = new PgRuralProducerRepository()
  const pgPlantedCropsRepository = new PgPlantedCropsRepository()
  return new DbSetRuralProducer(
    pgRuralProducerRepository,
    pgPlantedCropsRepository,
    pgRuralProducerRepository
  )
}
