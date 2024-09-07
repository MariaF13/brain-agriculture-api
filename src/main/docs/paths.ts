import { RURAL_PRODUCERS } from '@/utils/constants'
import { ruralProducerParamsPath, ruralProducerPath } from './paths/'

export default {
  [`/${RURAL_PRODUCERS}`]: ruralProducerPath,
  [`/${RURAL_PRODUCERS}/{id}`]: ruralProducerParamsPath
}
