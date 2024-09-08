import { DASHBOARD, RURAL_PRODUCERS, TOTAL_FARMS } from '@/utils/constants'
import {
  dashboardTotalFarmsPath,
  ruralProducerParamsPath,
  ruralProducerPath
} from './paths/'

export default {
  [`/${RURAL_PRODUCERS}`]: ruralProducerPath,
  [`/${RURAL_PRODUCERS}/{id}`]: ruralProducerParamsPath,
  [`/${DASHBOARD + TOTAL_FARMS}`]: dashboardTotalFarmsPath
}
