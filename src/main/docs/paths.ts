import {
  DASHBOARD,
  RURAL_PRODUCERS,
  STATE,
  TOTAL_FARMS
} from '@/utils/constants'
import {
  dashboardFarmsByStatePath,
  dashboardTotalFarmsPath,
  ruralProducerParamsPath,
  ruralProducerPath
} from './paths/'

export default {
  [`/${RURAL_PRODUCERS}`]: ruralProducerPath,
  [`/${RURAL_PRODUCERS}/{id}`]: ruralProducerParamsPath,
  [`/${DASHBOARD + TOTAL_FARMS}`]: dashboardTotalFarmsPath,
  [`/${DASHBOARD + TOTAL_FARMS + STATE}`]: dashboardFarmsByStatePath
}
