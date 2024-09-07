import { Controller } from '@/application/contracts'
import { LoadRuralProducerByIdController } from '@/application/controllers'
import { makeDbLoadRuralProducerById } from '@/main/factories/domain/usecases'
import { makePgTransactionController } from '@/main/factories/application/decorators'

export const makeLoadRuralProducerByIdController = (): Controller => {
  const controller = new LoadRuralProducerByIdController(
    makeDbLoadRuralProducerById()
  )
  return makePgTransactionController(controller)
}
