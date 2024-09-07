import { PlantedCrops } from "./planted-crops"

export class RuralProducer {
    id_rural_producer: number
    cpf?: string
    cnpj?: string
    name_rural_producer: string
    name_farm: string
    city: string
    state: string
    total_area_hectares: number
    arable_area_hectares: number
    vegetation_area_hectares: number
    planted_crops: PlantedCrops[] | number
}