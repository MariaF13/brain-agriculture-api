import { DashboardFarmsByState } from '@/domain/contracts/repos'

export class DbDashboardFarmsByState implements DashboardFarmsByState {
  constructor(
    private readonly loadFarmsByStateRepository: DashboardFarmsByState
  ) {}

  async loadFarmsByState(): Promise<DashboardFarmsByState.Result> {
    return await this.loadFarmsByStateRepository.loadFarmsByState()
  }
}
