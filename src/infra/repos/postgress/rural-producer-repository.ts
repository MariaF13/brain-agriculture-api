import {
  AddRuralProducer,
  LoadRuralProducerById,
  SetRuralProducer
} from '@/domain/contracts/repos'
import { PgPlantedCrops, PgRuralProducer } from './entities'
import { PgConnection } from './helpers'
import { RuralProducer } from '@/domain/entities'

export class PgRuralProducerRepository
  implements AddRuralProducer, LoadRuralProducerById, SetRuralProducer
{
  async add(data: AddRuralProducer.Params): Promise<AddRuralProducer.Result> {
    const plantedCropsData = data.planted_crops as PgPlantedCrops[]

    const pgRuralProducer = new PgRuralProducer()
    pgRuralProducer.cpf = data.cpf
    pgRuralProducer.cnpj = data.cnpj
    pgRuralProducer.name_rural_producer = data.name_rural_producer
    pgRuralProducer.name_farm = data.name_farm
    pgRuralProducer.city = data.city
    pgRuralProducer.state = data.state
    pgRuralProducer.total_area_hectares = data.total_area_hectares
    pgRuralProducer.arable_area_hectares = data.arable_area_hectares
    pgRuralProducer.vegetation_area_hectares = data.vegetation_area_hectares
    pgRuralProducer.planted_crops = plantedCropsData

    const saved = await PgConnection.getInstance()
      .connect()
      .manager.save(pgRuralProducer)

    return {
      id_rural_producer: saved.id_rural_producer,
      message: 'Criado com sucesso',
      statusCode: 201
    }
  }

  async loadById(
    data: LoadRuralProducerById.Params
  ): Promise<LoadRuralProducerById.Result> {
    const pgRuralProducerRepo = PgConnection.getInstance()
      .connect()
      .getRepository(PgRuralProducer)

    const ruralProducerPg = await pgRuralProducerRepo.findOne({
      where: {
        id_rural_producer: +data.id_rural_producer
      },
      relations: {
        planted_crops: true
      }
    })

    return ruralProducerPg !== null
      ? (ruralProducerPg as RuralProducer)
      : undefined
  }

  async set(data: SetRuralProducer.Params): Promise<SetRuralProducer.Result> {
    const ruralProducerToUpdate = data.id_rural_producer as PgRuralProducer
    const plantedCropsData = data.planted_crops as PgPlantedCrops[]

    ruralProducerToUpdate.cpf = data.cpf
    ruralProducerToUpdate.cnpj = data.cnpj
    ruralProducerToUpdate.name_rural_producer = data.name_rural_producer
    ruralProducerToUpdate.name_farm = data.name_farm
    ruralProducerToUpdate.city = data.city
    ruralProducerToUpdate.state = data.state
    ruralProducerToUpdate.total_area_hectares = data.total_area_hectares
    ruralProducerToUpdate.arable_area_hectares = data.arable_area_hectares
    ruralProducerToUpdate.vegetation_area_hectares =
      data.vegetation_area_hectares
    ruralProducerToUpdate.planted_crops = plantedCropsData

    await PgConnection.getInstance()
      .connect()
      .manager.save(ruralProducerToUpdate)

    return {
      id_rural_producer: ruralProducerToUpdate.id_rural_producer,
      message: 'Sucesso',
      statusCode: 200
    }
  }
}
