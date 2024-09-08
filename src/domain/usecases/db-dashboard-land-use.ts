import { DashboardLandUse } from '@/domain/contracts/repos'

export class DbDashboardLandUse implements DashboardLandUse {
  constructor(private readonly loadLandUseRepository: DashboardLandUse) {}

  async loadLandUse(): Promise<DashboardLandUse.Result> {
    return await this.loadLandUseRepository.loadLandUse()
  }
}
