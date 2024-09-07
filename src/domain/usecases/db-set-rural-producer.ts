import {
  LoadPlantedCropsById,
  LoadRuralProducerById,
  SetRuralProducer
} from '../contracts/repos'
import { PlantedCrops } from '../entities'

export class DbSetRuralProducer implements SetRuralProducer {
  constructor(
    private readonly setRuralProducerRepo: SetRuralProducer,
    private readonly loadPlantedCropsByIdRepo: LoadPlantedCropsById,
    private readonly loadRuralProducerById: LoadRuralProducerById
  ) {}

  async set(params: SetRuralProducer.Params): Promise<SetRuralProducer.Result> {
    const ruralProducerData = await this.loadRuralProducerById.loadById({
      id_rural_producer: params.id_rural_producer as number
    })

    if (!ruralProducerData)
      return {
        id_rural_producer: 0,
        message: 'Produtor não encontrado',
        statusCode: 406
      }

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
    const { id_rural_producer, planted_crops, ...rest } = params
    const result = await this.setRuralProducerRepo.set({
      id_rural_producer: ruralProducerData,
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
