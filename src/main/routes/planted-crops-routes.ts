import { adaptExpressRoute as adapt } from '@/main/adapters'
import { PLANTED_CROPS } from '@/utils/constants'
import { Router } from 'express'
import { makeLoadPlantedCropsAllController } from '@/main/factories/application/controllers'

export default (router: Router): void => {
  router.get(`/${PLANTED_CROPS}`, adapt(makeLoadPlantedCropsAllController()))
}
