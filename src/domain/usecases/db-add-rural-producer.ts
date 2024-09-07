import {
  AddRuralProducer,
  LoadPlantedCropsById
} from '@/domain/contracts/repos'
import { PlantedCrops } from '../entities'

export class DbAddRuralProducer implements AddRuralProducer {
  constructor(
    private readonly addRuralProducerRepo: AddRuralProducer,
    private readonly loadPlantedCropsByIdRepo: LoadPlantedCropsById
  ) {}

  async add(params: AddRuralProducer.Params): Promise<AddRuralProducer.Result> {
    const plantedCropsData = [] as PlantedCrops[]
    if (params.planted_crops) {
      for (const id of params.planted_crops as number[]) {
        const planted_cropsData = await this.loadPlantedCropsByIdRepo.loadById(
          id
        )

        if (!planted_cropsData)
          return {
            id_rural_producer: 0,
            message: `Cultura de plantio de código ${id} inválido ou não encontrado`,
            statusCode: 406
          }
        plantedCropsData.push(planted_cropsData)
      }
    }

    const { planted_crops, ...rest } = params

    const result = await this.addRuralProducerRepo.add({
      planted_crops: plantedCropsData,
      ...rest
    })

    return {
      id_rural_producer: result.id_rural_producer,
      message: result.message,
      statusCode: result.statusCode
    }
  }
}
