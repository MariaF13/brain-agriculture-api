import { makePgTransactionController } from '@/main/factories/application/decorators'
import { Controller } from '@/application/contracts'
import { DeleteRuralProducerController } from '@/application/controllers'
import { makeDbDeleteRuralProducer } from '@/main/factories/domain/usecases'

export const makeDeleteRuralProducerController = (): Controller => {
  const controller = new DeleteRuralProducerController(
    makeDbDeleteRuralProducer()
  )
  return makePgTransactionController(controller)
}
