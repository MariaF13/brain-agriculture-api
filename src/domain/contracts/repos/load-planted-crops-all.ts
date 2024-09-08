import { PlantedCrops } from '@/domain/entities'

export interface LoadPlantedCropsAll {
  loadAll: () => Promise<LoadPlantedCropsAll.Result>
}

export namespace LoadPlantedCropsAll {
  export type Result = PlantedCrops[] | undefined
}
