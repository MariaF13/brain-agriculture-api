import { DashboardFarmsByState } from '@/domain/contracts/repos'
import { Controller, HttpResponse } from '@/application/contracts'
import { noContent, serverError, ok } from '@/application/helpers'

export class DashboardFarmsByStateController implements Controller {
  constructor(private readonly loadFarmsByState: DashboardFarmsByState) {}

  async handle(): Promise<HttpResponse> {
    try {
      const farmsByStateData = await this.loadFarmsByState.loadFarmsByState()

      // Verifica se o array de resultados não está vazio
      return farmsByStateData.length > 0 ? ok(farmsByStateData) : noContent()
    } catch (error: any) {
      return serverError(error)
    }
  }
}
