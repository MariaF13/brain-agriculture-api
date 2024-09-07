import { Controller } from '@/application/contracts'
import { AddRuralProducerController } from '@/application/controllers'
import { makeDbAddRuralProducer } from '../../domain/usecases'
import { makeAddRuralProducerValidation } from './add-rural-producer-validation-factory'
import { makePgTransactionController } from '../decorators/db-transaction-controller'

export const makeAddRuralProducerController = (): Controller => {
  const controller = new AddRuralProducerController(
    makeDbAddRuralProducer(),
    makeAddRuralProducerValidation()
  )
  return makePgTransactionController(controller)
}
