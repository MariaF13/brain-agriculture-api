import { Controller } from '@/application/contracts'
import { DashboardFarmsByCropController } from '@/application/controllers'
import { makeDbDashboardFarmsByCrop } from '@/main/factories/domain/usecases'
import { makePgTransactionController } from '@/main/factories/application/decorators'

export const makeDashboardFarmsByCropController = (): Controller => {
  const controller = new DashboardFarmsByCropController(
    makeDbDashboardFarmsByCrop()
  )
  return makePgTransactionController(controller)
}
