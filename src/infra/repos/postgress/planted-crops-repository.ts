import { PgConnection } from './helpers/connection'
import { PlantedCrops } from '@/domain/entities'
import { PgPlantedCrops } from './entities'
import { AddPlantedCrops, CheckPlantedCropsByName, LoadPlantedCropsById } from '@/domain/contracts/repos'

export class PgPlantedCropsRepository implements AddPlantedCrops, CheckPlantedCropsByName, LoadPlantedCropsById {
  async add(data: AddPlantedCrops.Params): Promise<AddPlantedCrops.Result> {
    const pgPlantedCrops = new PgPlantedCrops()
    pgPlantedCrops.name_planted_crops = data.name_planted_crops

    const saved = await PgConnection.getInstance()
      .connect()
      .manager.save(pgPlantedCrops)

    return {
      id_planted_crops: saved.id_planted_crops,
      message: 'Criado com sucesso',
      statusCode: 201
    }
  }

  async checkByName(name_planted_crops: string): Promise<boolean> {
    const pgPlantedCropsRepo = PgConnection.getInstance()
      .connect()
      .getRepository(PgPlantedCrops)
    const planted_crops = await pgPlantedCropsRepo.findOne({
      where: {
        name_planted_crops
      }
    })
    return planted_crops !== null
  }

  async loadById(id: number): Promise<LoadPlantedCropsById.Result> {
    const pgPlantedCropsRepo = PgConnection.getInstance()
      .connect()
      .getRepository(PgPlantedCrops)
    const planted_cropsPg = await pgPlantedCropsRepo.findOne({
      where: {
        id_planted_crops: +id
      }
    })

    return planted_cropsPg as PlantedCrops
  }
}
