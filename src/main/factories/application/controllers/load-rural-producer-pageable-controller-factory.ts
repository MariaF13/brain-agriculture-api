import { Controller } from '@/application/contracts'
import { makeDbLoadRuralProducerPageable } from '@/main/factories/domain/usecases'
import { makePgTransactionController } from '@/main/factories/application/decorators'
import { LoadRuralProducerPageableController } from '@/application/controllers'
import { makeLoadRuralProducerPageableValidation } from '@/main/factories/application/controllers'

export const makeLoadRuralProducerPageableController = (): Controller => {
  const controller = new LoadRuralProducerPageableController(
    makeDbLoadRuralProducerPageable(),
    makeLoadRuralProducerPageableValidation()
  )
  return makePgTransactionController(controller)
}
