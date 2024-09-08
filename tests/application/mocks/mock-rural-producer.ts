import { AddRuralProducer } from '@/domain/contracts/repos'

export class AddRuralProducerSpy implements AddRuralProducer {
  params: AddRuralProducer.Params
  result = {
    id_rural_producer: 1,
    statusCode: 201,
    message: 'Created successfully'
  }

  async add(params: AddRuralProducer.Params): Promise<AddRuralProducer.Result> {
    this.params = params
    return this.result
  }
}
