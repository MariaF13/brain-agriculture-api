export interface DashboardFarmsByState {
  loadFarmsByState: () => Promise<DashboardFarmsByState.Result>
}

export namespace DashboardFarmsByState {
  export type Result = Array<{
    state: string
    totalFarms: number
  }>
}
