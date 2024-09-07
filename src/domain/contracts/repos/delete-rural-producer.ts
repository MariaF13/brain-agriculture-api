export interface DeleteRuralProducer {
  delete: (
    params: DeleteRuralProducer.Params
  ) => Promise<DeleteRuralProducer.Result>
}

export namespace DeleteRuralProducer {
  export type Params = {
    id_rural_producer: number
  }
  export type Result = {
    id_rural_producer: number
    statusCode: number
    message: string
  }
}
