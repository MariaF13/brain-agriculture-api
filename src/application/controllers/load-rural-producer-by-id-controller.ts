import { LoadRuralProducerById } from '@/domain/contracts/repos'
import { Controller, HttpResponse } from '@/application/contracts'
import { noContent, serverError, ok } from '@/application/helpers'

export class LoadRuralProducerByIdController implements Controller {
  constructor(private readonly loadRuralProducerById: LoadRuralProducerById) {}

  async handle(
    request: LoadRuralProducerByIdController.Request
  ): Promise<HttpResponse> {
    try {
      const ruralProducer = await this.loadRuralProducerById.loadById({
        id_rural_producer: request.id
      })
      return ruralProducer ? ok(ruralProducer) : noContent()
    } catch (error: any) {
      return serverError(error)
    }
  }
}

export namespace LoadRuralProducerByIdController {
  export type Request = {
    id: number
  }
}
