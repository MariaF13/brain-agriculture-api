import { Controller, HttpResponse } from '@/application/contracts'
import { DeleteRuralProducer } from '@/domain/contracts/repos'
import { notAcceptable, ok, serverError } from '../helpers'

export class DeleteRuralProducerController implements Controller {
  constructor(private readonly deleteRuralProducer: DeleteRuralProducer) {}

  async handle(
    request: DeleteRuralProducerController.Request
  ): Promise<HttpResponse> {
    try {
      const result = await this.deleteRuralProducer.delete({
        id_rural_producer: request.id
      })
      if (result.statusCode === 200) return ok(result)
      else return notAcceptable(result.message)
    } catch (error: any) {
      return serverError(error)
    }
  }
}

export namespace DeleteRuralProducerController {
  export type Request = {
    id: number
  }
}
