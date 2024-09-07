import { Controller, Validation, HttpResponse } from '@/application/contracts'
import { AddRuralProducer } from '@/domain/contracts/repos'
import {
  badRequest,
  created,
  notAcceptable,
  serverError
} from '../helpers/http-helper'

export class AddRuralProducerController implements Controller {
  constructor(
    private readonly addRuralProducer: AddRuralProducer,
    private readonly validation: Validation
  ) {}

  async handle(
    request: AddRuralProducerController.Request
  ): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }

      const {
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

      const result = await this.addRuralProducer.add({
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

      if (result.statusCode === 201) return created(result)
      else return notAcceptable(result.message)
    } catch (error: any) {
      return serverError(error)
    }
  }
}

export namespace AddRuralProducerController {
  export type Request = {
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
