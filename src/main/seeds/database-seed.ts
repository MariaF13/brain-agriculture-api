import { PlantedCropsSeed } from "./planted-crops-seed"

export const dataBaseSeed = async (): Promise<void> => {
  const plantedCropsSeed = new PlantedCropsSeed()
  await plantedCropsSeed.handle()
}