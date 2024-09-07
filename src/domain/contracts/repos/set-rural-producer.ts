import { PlantedCrops, RuralProducer } from '@/domain/entities'

export interface SetRuralProducer {
  set: (
    ruralProducer: SetRuralProducer.Params
  ) => Promise<SetRuralProducer.Result>
}

export namespace SetRuralProducer {
  export type Params = {
    id_rural_producer: number | RuralProducer
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
