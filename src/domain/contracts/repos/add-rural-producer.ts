import { PlantedCrops } from "@/domain/entities"

export interface AddRuralProducer {
    add: (
      rural_producer: AddRuralProducer.Params
    ) => Promise<AddRuralProducer.Result>
  }
  
  export namespace AddRuralProducer {
    export type Params = {
      cpf?: string
      cnpj?: string
      name_rural_producer: string
      name_farm: string
      city: string
      state: string
      total_area_hectares: number
      arable_area_hectares: number
      vegetation_area_hectares: number
      planted_crops: PlantedCrops[] | number[]
    }
  
    export type Result = {
      id_rural_producer: number
      statusCode: number
      message: string
    }
  }
  