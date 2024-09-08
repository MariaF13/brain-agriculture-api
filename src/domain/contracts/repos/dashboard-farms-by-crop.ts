export interface DashboardFarmsByCrop {
  loadFarmsByCrop: () => Promise<DashboardFarmsByCrop.Result>
}

export namespace DashboardFarmsByCrop {
  export type Result = Array<{
    crop: string
    totalFarms: number
  }>
}
