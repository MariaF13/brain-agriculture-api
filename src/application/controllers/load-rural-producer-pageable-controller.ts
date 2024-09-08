import { Controller, HttpResponse, Validation } from '@/application/contracts'
import { LoadRuralProducerPageable } from 'domain/contracts/repos'
import {
  ok,
  noContent,
  badRequest,
  createObjectByFields
} from '@/application/helpers'

export class LoadRuralProducerPageableController implements Controller {
  constructor(
    private readonly loadRuralProducerPageable: LoadRuralProducerPageable,
    private readonly validation: Validation
  ) {}

  async handle(
    request: LoadRuralProducerPageableController.Request
  ): Promise<HttpResponse> {
    const error = this.validation.validate(request)

    if (error) {
      return badRequest(error)
    }

    const filter =
      createObjectByFields<LoadRuralProducerPageableController.FilterProducers>(
        request,
        false,
        {
          cpf: '',
          cnpj: '',
          name_rural_producer: '',
          name_farm: '',
          city: '',
          state: ''
        }
      )

    const pageable =
      createObjectByFields<LoadRuralProducerPageableController.Pageable>(
        request,
        true,
        {
          pageNumber: 1,
          size: 10,
          orderBy: 'id_rural_producer',
          order: 'DESC'
        }
      )

    const ruralProducers = await this.loadRuralProducerPageable.loadPageable({
      pageable,
      filter
    })
    return ruralProducers ? ok(ruralProducers) : noContent()
  }
}

export namespace LoadRuralProducerPageableController {
  export type Request = Pageable & FilterProducers
  export type Pageable = {
    pageNumber: number
    size: number
    orderBy: string
    order: string
  }

  export type FilterProducers = {
    cpf?: string
    cnpj?: string
    name_rural_producer?: string
    name_farm?: string
    city?: string
    state?: string
  }
}
