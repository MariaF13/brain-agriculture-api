import { Controller } from '@/application/contracts'
import { DashboardTotalFarmsController } from '@/application/controllers'
import { makeDbDashboardTotalFarms } from '@/main/factories/domain/usecases'
import { makePgTransactionController } from '@/main/factories/application/decorators'

export const makeDashboardTotalFarmsController = (): Controller => {
  const controller = new DashboardTotalFarmsController(
    makeDbDashboardTotalFarms()
  )
  return makePgTransactionController(controller)
}
