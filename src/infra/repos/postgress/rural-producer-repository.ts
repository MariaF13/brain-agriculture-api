import {
  AddRuralProducer,
  DashboardFarmsByCrop,
  DashboardFarmsByState,
  DashboardLandUse,
  DashboardTotalFarms,
  DeleteRuralProducer,
  LoadRuralProducerById,
  LoadRuralProducerPageable,
  SetRuralProducer
} from '@/domain/contracts/repos'
import { PgPlantedCrops, PgRuralProducer } from './entities'
import { PgConnection } from './helpers'
import { RuralProducer } from '@/domain/entities'

export class PgRuralProducerRepository
  implements
    AddRuralProducer,
    LoadRuralProducerById,
    SetRuralProducer,
    DeleteRuralProducer,
    DashboardTotalFarms,
    DashboardFarmsByState,
    DashboardFarmsByCrop,
    DashboardLandUse,
    LoadRuralProducerPageable
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
    pgRuralProducer.created_at = new Date()

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
    ruralProducerToUpdate.updated_at = new Date()

    await PgConnection.getInstance()
      .connect()
      .manager.save(ruralProducerToUpdate)

    return {
      id_rural_producer: ruralProducerToUpdate.id_rural_producer,
      message: 'Sucesso',
      statusCode: 200
    }
  }

  async delete(
    data: DeleteRuralProducer.Params
  ): Promise<DeleteRuralProducer.Result> {
    const pgRuralProducerRepo = PgConnection.getInstance()
      .connect()
      .getRepository(PgRuralProducer)

    const ruralProducerToDelete = await pgRuralProducerRepo.findOne({
      where: { id_rural_producer: +data.id_rural_producer },
      relations: {
        planted_crops: true
      }
    })

    if (ruralProducerToDelete) {
      await pgRuralProducerRepo.remove(ruralProducerToDelete)

      return {
        id_rural_producer: +data.id_rural_producer,
        message: 'Produtor excluído com sucesso',
        statusCode: 200
      }
    } else {
      return {
        id_rural_producer: 0,
        message: 'Produtor não encontrado',
        statusCode: 406
      }
    }
  }

  async loadTotalFarms(): Promise<DashboardTotalFarms.Result> {
    const repository = PgConnection.getInstance()
      .connect()
      .getRepository(PgRuralProducer)

    const result = await repository
      .createQueryBuilder('rural_producer')
      .select('COUNT(*)', 'totalFarms')
      .addSelect('SUM(rural_producer.total_area_hectares)', 'totalAreaHectares')
      .getRawOne()

    return {
      totalFarms: parseInt(result.totalFarms, 10),
      totalAreaHectares: parseFloat(result.totalAreaHectares)
    }
  }

  async loadFarmsByState(): Promise<DashboardFarmsByState.Result> {
    const repository = PgConnection.getInstance()
      .connect()
      .getRepository(PgRuralProducer)

    const results = await repository
      .createQueryBuilder('rural_producer')
      .select('rural_producer.state', 'state')
      .addSelect('COUNT(*)', 'totalFarms')
      .groupBy('rural_producer.state')
      .getRawMany()

    return results.map(result => ({
      state: result.state,
      totalFarms: parseInt(result.totalFarms, 10)
    }))
  }

  async loadFarmsByCrop(): Promise<DashboardFarmsByCrop.Result> {
    const repository = PgConnection.getInstance()
      .connect()
      .getRepository(PgRuralProducer)

    const results = await repository
      .createQueryBuilder('rural_producer')
      .innerJoin('rural_producer.planted_crops', 'planted_crops')
      .select('planted_crops.name_planted_crops', 'crop')
      .addSelect(
        'COUNT(DISTINCT rural_producer.id_rural_producer)',
        'totalFarms'
      )
      .groupBy('planted_crops.name_planted_crops')
      .getRawMany()

    return results.map(result => ({
      crop: result.crop,
      totalFarms: parseInt(result.totalFarms, 10)
    }))
  }

  async loadLandUse(): Promise<DashboardLandUse.Result> {
    const repository = PgConnection.getInstance()
      .connect()
      .getRepository(PgRuralProducer)

    const result = await repository
      .createQueryBuilder('rural_producer')
      .select('SUM(rural_producer.arable_area_hectares)', 'totalArableArea')
      .addSelect(
        'SUM(rural_producer.vegetation_area_hectares)',
        'totalVegetationArea'
      )
      .getRawOne()

    return {
      totalArableArea: parseFloat(result.totalArableArea),
      totalVegetationArea: parseFloat(result.totalVegetationArea)
    }
  }

  async loadPageable(
    params: LoadRuralProducerPageable.Params
  ): Promise<LoadRuralProducerPageable.Result> {
    const { pageable, filter } = params
    const pgRuralProducerRepo = PgConnection.getInstance()
      .connect()
      .getRepository(PgRuralProducer)

    const query = pgRuralProducerRepo
      .createQueryBuilder(AliasPageableEnum.RURAL_PRODUCER)
      .leftJoinAndSelect(
        `${AliasPageableEnum.RURAL_PRODUCER}.planted_crops`,
        AliasPageableEnum.PLANTED_CROPS
      )

    type QueryFilters = Record<string, string | undefined>

    const queryFilters: QueryFilters = {
      cpf: `${AliasPageableEnum.RURAL_PRODUCER}.cpf ilike '%' || :cpf || '%'`,
      cnpj: `${AliasPageableEnum.RURAL_PRODUCER}.cnpj ilike '%' || :cnpj || '%'`,
      name_rural_producer: `${AliasPageableEnum.RURAL_PRODUCER}.name_rural_producer ilike '%' || :name_rural_producer || '%'`,
      name_farm: `${AliasPageableEnum.RURAL_PRODUCER}.name_farm ilike '%' || :name_farm || '%'`,
      city: `${AliasPageableEnum.RURAL_PRODUCER}.city ilike '%' || :city || '%'`,
      state: `${AliasPageableEnum.RURAL_PRODUCER}.state ilike '%' || :state || '%'`
    }

    if (Object.keys(filter).length > 0) {
      for (const a of Object.keys(filter)) {
        if (queryFilters[a] !== undefined) {
          query.andWhere(queryFilters[a], filter)
        }
      }
    }

    const totalItems = await query.getCount()
    const totalPages = Math.ceil(totalItems / pageable.size)

    const results = await query
      .orderBy(
        `${AliasPageableEnum.RURAL_PRODUCER}.${pageable.orderBy}`,
        pageable.order === 'ASC' ? 'ASC' : 'DESC'
      )
      .skip((pageable.pageNumber - 1) * pageable.size)
      .take(pageable.size)
      .getMany()

    return {
      items: results,
      orderBy: pageable.orderBy,
      order: pageable.order,
      totalItems,
      totalPages
    }
  }
}

export enum AliasPageableEnum {
  PLANTED_CROPS = 'planted_crops',
  RURAL_PRODUCER = 'rural_producer'
}
