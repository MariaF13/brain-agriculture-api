import { DashboardFarmsByCrop } from '@/domain/contracts/repos'
import { Controller, HttpResponse } from '@/application/contracts'
import { noContent, serverError, ok } from '@/application/helpers'

export class DashboardFarmsByCropController implements Controller {
  constructor(private readonly loadFarmsByCrop: DashboardFarmsByCrop) {}

  async handle(): Promise<HttpResponse> {
    try {
      const farmsByCropData = await this.loadFarmsByCrop.loadFarmsByCrop()

      // Verifica se o array de resultados não está vazio
      return farmsByCropData.length > 0 ? ok(farmsByCropData) : noContent()
    } catch (error: any) {
      return serverError(error)
    }
  }
}
