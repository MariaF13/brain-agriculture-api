import { PlantedCrops } from '@/domain/entities'

export interface LoadPlantedCropsById {
  loadById: (id_planted_crops: number) => Promise<LoadPlantedCropsById.Result>
}

export namespace LoadPlantedCropsById {
  export type Result = undefined | PlantedCrops
}
