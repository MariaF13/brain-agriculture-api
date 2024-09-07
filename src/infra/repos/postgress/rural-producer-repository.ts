import { AddRuralProducer } from "@/domain/contracts/repos";
import { PgPlantedCrops, PgRuralProducer } from "./entities";
import { PgConnection } from "./helpers";

export class PgRuralProducerRepository implements AddRuralProducer {
    async add( data: AddRuralProducer.Params ): Promise<AddRuralProducer.Result> {
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
} 
