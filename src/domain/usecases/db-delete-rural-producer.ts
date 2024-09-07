import { DeleteRuralProducer } from '@/domain/contracts/repos'

export class DbDeleteRuralProducer implements DeleteRuralProducer {
  constructor(
    private readonly deleteRuralProducerRepository: DeleteRuralProducer
  ) {}

  async delete(
    rural_producer: DeleteRuralProducer.Params
  ): Promise<DeleteRuralProducer.Result> {
    return await this.deleteRuralProducerRepository.delete(rural_producer)
  }
}
