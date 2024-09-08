import { Controller, HttpResponse } from '@/application/contracts'
import { LoadPlantedCropsAll } from '@/domain/contracts/repos'
import { ok, noContent } from '@/application/helpers'

export class LoadPlantedCropsAllController implements Controller {
  constructor(private readonly loadPlantedCropsAll: LoadPlantedCropsAll) {}

  async handle(): Promise<HttpResponse> {
    const plantedCrops = await this.loadPlantedCropsAll.loadAll()
    return plantedCrops?.length ? ok(plantedCrops) : noContent()
  }
}
