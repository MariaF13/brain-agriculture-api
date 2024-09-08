import { LoadPlantedCropsAll } from '@/domain/contracts/repos'

export class DbLoadPlantedCropsAll implements LoadPlantedCropsAll {
  constructor(
    private readonly loadPlantedCropsAllRepository: LoadPlantedCropsAll
  ) {}

  async loadAll(): Promise<LoadPlantedCropsAll.Result> {
    return await this.loadPlantedCropsAllRepository.loadAll()
  }
}
