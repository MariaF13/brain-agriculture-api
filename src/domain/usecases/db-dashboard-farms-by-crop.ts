import { DashboardFarmsByCrop } from '@/domain/contracts/repos'

export class DbDashboardFarmsByCrop implements DashboardFarmsByCrop {
  constructor(
    private readonly loadFarmsByCropRepository: DashboardFarmsByCrop
  ) {}

  async loadFarmsByCrop(): Promise<DashboardFarmsByCrop.Result> {
    return await this.loadFarmsByCropRepository.loadFarmsByCrop()
  }
}
