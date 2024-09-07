export interface CheckPlantedCropsByName {
  checkByName: (
    name_planted_crops: string
  ) => Promise<CheckPlantedCropsByName.Result>
}

export namespace CheckPlantedCropsByName {
  export type Result = boolean
}
