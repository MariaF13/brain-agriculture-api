import { LoadPlantedCropsAll } from '@/domain/contracts/repos'
import { DbLoadPlantedCropsAll } from '@/domain/usecases'
import { PgPlantedCropsRepository } from '@/infra/repos/postgress'

export const makeDbLoadPlantedCropsAll = (): LoadPlantedCropsAll => {
  const pgPlantedCropsRepository = new PgPlantedCropsRepository()
  return new DbLoadPlantedCropsAll(pgPlantedCropsRepository)
}
