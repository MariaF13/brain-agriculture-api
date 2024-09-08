import { DashboardTotalFarms } from '@/domain/contracts/repos'
import { Controller, HttpResponse } from '@/application/contracts'
import { noContent, serverError, ok } from '@/application/helpers'

export class DashboardTotalFarmsController implements Controller {
  constructor(private readonly loadTotalFarms: DashboardTotalFarms) {}

  async handle(): Promise<HttpResponse> {
    try {
      const totalFarmsData = await this.loadTotalFarms.loadTotalFarms()
      return totalFarmsData.totalFarms > 0 ? ok(totalFarmsData) : noContent()
    } catch (error: any) {
      return serverError(error)
    }
  }
}
