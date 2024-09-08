import { adaptExpressRoute as adapt } from '@/main/adapters'
import { DASHBOARD, RURAL_PRODUCERS, TOTAL_FARMS } from '@/utils/constants'
import { Router } from 'express'
import {
  makeAddRuralProducerController,
  makeDashboardTotalFarmsController,
  makeDeleteRuralProducerController,
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
  router.delete(
    `/${RURAL_PRODUCERS + ID}`,
    adapt(makeDeleteRuralProducerController())
  )

  router.get(
    `/${DASHBOARD + TOTAL_FARMS}`,
    adapt(makeDashboardTotalFarmsController())
  )
}
