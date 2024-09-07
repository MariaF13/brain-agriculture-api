import { AddPlantedCrops } from '@/domain/contracts/repos'
import { DbAddPlantedCrops } from '@/domain/usecases'
import { PgPlantedCropsRepository } from '@/infra/repos/postgress'

export const makeDbAddPlantedCrops = (): AddPlantedCrops => {
  const pgPlantedCropsRepository = new PgPlantedCropsRepository()
  return new DbAddPlantedCrops(
    pgPlantedCropsRepository,
    pgPlantedCropsRepository
  )
}
