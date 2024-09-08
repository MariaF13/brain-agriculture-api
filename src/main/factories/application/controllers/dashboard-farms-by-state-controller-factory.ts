import { Controller } from '@/application/contracts'
import { DashboardFarmsByStateController } from '@/application/controllers'
import { makeDbDashboardFarmsByState } from '@/main/factories/domain/usecases'
import { makePgTransactionController } from '@/main/factories/application/decorators'

export const makeDashboardFarmsByStateController = (): Controller => {
  const controller = new DashboardFarmsByStateController(
    makeDbDashboardFarmsByState()
  )
  return makePgTransactionController(controller)
}
