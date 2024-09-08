import { DashboardTotalFarms } from '@/domain/contracts/repos'

export class DbDashboardTotalFarms implements DashboardTotalFarms {
  constructor(private readonly loadTotalFarmsRepository: DashboardTotalFarms) {}

  async loadTotalFarms(): Promise<DashboardTotalFarms.Result> {
    return await this.loadTotalFarmsRepository.loadTotalFarms()
  }
}
