import { RuralProducer } from '@/domain/entities'

export interface LoadRuralProducerById {
  loadById: (
    id_rural_producer: LoadRuralProducerById.Params
  ) => Promise<LoadRuralProducerById.Result>
}

export namespace LoadRuralProducerById {
  export type Params = {
    id_rural_producer: number
  }
  export type Result = undefined | RuralProducer
}
