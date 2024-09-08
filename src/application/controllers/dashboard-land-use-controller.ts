import { DashboardLandUse } from '@/domain/contracts/repos'
import { Controller, HttpResponse } from '@/application/contracts'
import { noContent, serverError, ok } from '@/application/helpers'

export class DashboardLandUseController implements Controller {
  constructor(private readonly loadLandUse: DashboardLandUse) {}

  async handle(): Promise<HttpResponse> {
    try {
      const landUseData = await this.loadLandUse.loadLandUse()
      return landUseData.totalArableArea || landUseData.totalVegetationArea
        ? ok(landUseData)
        : noContent()
    } catch (error: any) {
      return serverError(error)
    }
  }
}
