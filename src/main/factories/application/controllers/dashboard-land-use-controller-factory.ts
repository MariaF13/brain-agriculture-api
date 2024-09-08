import { Controller } from '@/application/contracts'
import { DashboardLandUseController } from '@/application/controllers'
import { makeDbDashboardLandUse } from '@/main/factories/domain/usecases'
import { makePgTransactionController } from '@/main/factories/application/decorators'

export const makeDashboardLandUseController = (): Controller => {
  const controller = new DashboardLandUseController(makeDbDashboardLandUse())
  return makePgTransactionController(controller)
}
