import { RuralProducer } from '@/domain/entities'

export interface LoadRuralProducerPageable {
  loadPageable: (
    params: LoadRuralProducerPageable.Params
  ) => Promise<LoadRuralProducerPageable.Result>
}

export namespace LoadRuralProducerPageable {
  export type Params = {
    pageable: Pageable
    filter: Filter
  }

  export type Pageable = {
    pageNumber: number
    size: number
    orderBy: string
    order: string
  }

  export type Filter = {
    cpf?: string
    cnpj?: string
    name_rural_producer?: string
    name_farm?: string
    city?: string
    state?: string
  }

  export type Result = {
    items: RuralProducer[]
    orderBy: string
    order: string
    totalPages: number
    totalItems: number
  }
}
