export interface DashboardTotalFarms {
  loadTotalFarms: () => Promise<DashboardTotalFarms.Result>
}

export namespace DashboardTotalFarms {
  export type Result = {
    totalFarms: number
    totalAreaHectares: number
  }
}
