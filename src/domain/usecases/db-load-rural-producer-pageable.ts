import { LoadRuralProducerPageable } from '@/domain/contracts/repos'

export class DbLoadRuralProducerPageable implements LoadRuralProducerPageable {
  constructor(
    private readonly loadRuralProducerPageableRepository: LoadRuralProducerPageable
  ) {}

  async loadPageable(
    rural_producer: LoadRuralProducerPageable.Params
  ): Promise<LoadRuralProducerPageable.Result> {
    return await this.loadRuralProducerPageableRepository.loadPageable(
      rural_producer
    )
  }
}
