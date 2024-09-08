import { adaptExpressRoute as adapt } from '@/main/adapters'
import {
  CROP,
  DASHBOARD,
  LAND_USE,
  RURAL_PRODUCERS,
  STATE,
  TOTAL_FARMS
} from '@/utils/constants'
import { Router } from 'express'
import {
  makeAddRuralProducerController,
  makeDashboardFarmsByCropController,
  makeDashboardFarmsByStateController,
  makeDashboardLandUseController,
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

  router.get(
    `/${DASHBOARD + TOTAL_FARMS + STATE}`,
    adapt(makeDashboardFarmsByStateController())
  )

  router.get(
    `/${DASHBOARD + TOTAL_FARMS + CROP}`,
    adapt(makeDashboardFarmsByCropController())
  )

  router.get(
    `/${DASHBOARD + TOTAL_FARMS + LAND_USE}`,
    adapt(makeDashboardLandUseController())
  )
}
