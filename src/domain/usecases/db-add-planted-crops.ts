import { AddPlantedCrops, CheckPlantedCropsByName } from '@/domain/contracts/repos'

export class DbAddPlantedCrops implements AddPlantedCrops {
    constructor(
      private readonly addPlantedCropsRepo: AddPlantedCrops,
      private readonly checkByNameRepo: CheckPlantedCropsByName
    ) {}
  
    async add(planted_cropsData: AddPlantedCrops.Params): Promise<AddPlantedCrops.Result> {
      const exists = await this.checkByNameRepo.checkByName(
        planted_cropsData.name_planted_crops
      )
      if (!exists) {
        const result = await this.addPlantedCropsRepo.add({ ...planted_cropsData })
        return {
          id_planted_crops: result.id_planted_crops,
          message: result.message,
          statusCode: result.statusCode
        }
      } else {
        return {
          id_planted_crops: 0,
          message: 'Registro já existente',
          statusCode: 406
        }
      }
    }
  }