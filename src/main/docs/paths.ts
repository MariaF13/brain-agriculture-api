import {
  CROP,
  DASHBOARD,
  LAND_USE,
  PAGEABLE,
  PLANTED_CROPS,
  RURAL_PRODUCERS,
  STATE,
  TOTAL_FARMS
} from '@/utils/constants'
import {
  dashboardFarmsByCropPath,
  dashboardFarmsByStatePath,
  dashboardLandUsePath,
  dashboardTotalFarmsPath,
  loadRuralProducerPageablePath,
  plantedCropsPath,
  ruralProducerParamsPath,
  ruralProducerPath
} from './paths/'

export default {
  [`/${RURAL_PRODUCERS}`]: ruralProducerPath,
  [`/${RURAL_PRODUCERS}/{id}`]: ruralProducerParamsPath,
  [`/${RURAL_PRODUCERS + DASHBOARD + TOTAL_FARMS}`]: dashboardTotalFarmsPath,
  [`/${RURAL_PRODUCERS + DASHBOARD + TOTAL_FARMS + STATE}`]:
    dashboardFarmsByStatePath,
  [`/${RURAL_PRODUCERS + DASHBOARD + TOTAL_FARMS + CROP}`]:
    dashboardFarmsByCropPath,
  [`/${RURAL_PRODUCERS + DASHBOARD + TOTAL_FARMS + LAND_USE}`]:
    dashboardLandUsePath,
  [`/${RURAL_PRODUCERS + PAGEABLE}`]: loadRuralProducerPageablePath,

  [`/${PLANTED_CROPS}`]: plantedCropsPath
}
