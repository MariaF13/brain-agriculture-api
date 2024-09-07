import { SetRuralProducer } from '@/domain/contracts/repos'
import { Controller, HttpResponse, Validation } from '@/application/contracts'
import { badRequest, ok, serverError } from '@/application/helpers'

export class SetRuralProducerController implements Controller {
  constructor(
    private readonly setRuralProducer: SetRuralProducer,
    private readonly validation: Validation
  ) {}

  async handle(
    request: SetRuralProducerController.Request
  ): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }

      const {
        id,
        cpf,
        cnpj,
        name_rural_producer,
        name_farm,
        city,
        state,
        total_area_hectares,
        arable_area_hectares,
        vegetation_area_hectares,
        planted_crops
      } = request

      const result = await this.setRuralProducer.set({
        id_rural_producer: +id,
        cpf,
        cnpj,
        name_rural_producer,
        name_farm,
        city,
        state,
        total_area_hectares,
        arable_area_hectares,
        vegetation_area_hectares,
        planted_crops
      })
      return ok(result)
    } catch (error: any) {
      return serverError(error)
    }
  }
}

export namespace SetRuralProducerController {
  export type Request = {
    id: number
    cpf?: string
    cnpj?: string
    name_rural_producer: string
    name_farm: string
    city: string
    state: string
    total_area_hectares: number
    arable_area_hectares: number
    vegetation_area_hectares: number
    planted_crops: number[]
  }
}
