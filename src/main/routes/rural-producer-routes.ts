import { adaptExpressRoute as adapt } from '@/main/adapters'
import { RURAL_PRODUCERS } from '@/utils/constants'
import { Router } from 'express'
import {
  makeAddRuralProducerController,
  makeLoadRuralProducerByIdController,
  makeSetRuralProducerController
} from '@/main/factories/application/controllers'
import { ID } from '@/utils/constants-params'

export default (router: Router): void => {
  router.post(`/${RURAL_PRODUCERS}`, adapt(makeAddRuralProducerController()))
  router.put(
    `/${RURAL_PRODUCERS + ID}`,
    adapt(makeSetRuralProducerController())
  )
  router.get(
    `/${RURAL_PRODUCERS + ID}`,
    adapt(makeLoadRuralProducerByIdController())
  )
}
