import { LoadRuralProducerById } from '@/domain/contracts/repos'

export class DbLoadRuralProducerById implements LoadRuralProducerById {
  constructor(
    private readonly loadRuralProducerByIdRepository: LoadRuralProducerById
  ) {}

  async loadById(
    ruralProducer: LoadRuralProducerById.Params
  ): Promise<LoadRuralProducerById.Result> {
    return await this.loadRuralProducerByIdRepository.loadById(ruralProducer)
  }
}
