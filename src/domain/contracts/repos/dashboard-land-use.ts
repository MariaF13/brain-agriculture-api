export interface DashboardLandUse {
  loadLandUse: () => Promise<DashboardLandUse.Result>
}

export namespace DashboardLandUse {
  export type Result = {
    totalArableArea: number
    totalVegetationArea: number
  }
}
