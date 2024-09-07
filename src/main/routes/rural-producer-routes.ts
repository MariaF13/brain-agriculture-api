import { adaptExpressRoute as adapt } from '@/main/adapters'
import { RURAL_PRODUCERS } from '@/utils/constants'
import { Router } from 'express'
import { makeAddRuralProducerController } from '@/main/factories/application/controllers'

export default (router: Router): void => {
  // Rota para adicionar uma nova categoria de equipamento
  router.post(
    `/${RURAL_PRODUCERS}`,
    adapt(makeAddRuralProducerController())
  )
}
