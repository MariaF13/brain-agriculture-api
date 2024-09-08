import { Controller } from '@/application/contracts'
import { LoadPlantedCropsAllController } from '@/application/controllers'
import { makePgTransactionController } from '@/main/factories/application/decorators'
import { makeDbLoadPlantedCropsAll } from '@/main/factories/domain/usecases'

export const makeLoadPlantedCropsAllController = (): Controller => {
  const controller = new LoadPlantedCropsAllController(
    makeDbLoadPlantedCropsAll()
  )
  return makePgTransactionController(controller)
}
