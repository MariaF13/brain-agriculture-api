import { Controller } from '@/application/contracts'
import { SetRuralProducerController } from '@/application/controllers'
import { makeDbSetRuralProducer } from '../../domain/usecases'
import { makeSetRuralProducerValidation } from './set-rural-producer-validation-factory'
import { makePgTransactionController } from '../decorators/db-transaction-controller'

export const makeSetRuralProducerController = (): Controller => {
  const controller = new SetRuralProducerController(
    makeDbSetRuralProducer(),
    makeSetRuralProducerValidation()
  )
  return makePgTransactionController(controller)
}
