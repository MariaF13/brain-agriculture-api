import { makeDbAddPlantedCrops } from '@/main/factories/domain/usecases'

export class PlantedCropsSeed {
  async handle(): Promise<void> {
    const addPlantedCrops = makeDbAddPlantedCrops()

    await addPlantedCrops.add({
      name_planted_crops: 'Soja'
    })
    await addPlantedCrops.add({
      name_planted_crops: 'Milho'
    })
    await addPlantedCrops.add({
      name_planted_crops: 'Algodão'
    })
    await addPlantedCrops.add({
      name_planted_crops: 'Café'
    })
    await addPlantedCrops.add({
      name_planted_crops: 'Cana de Açucar'
    })
  }
}
