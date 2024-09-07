export interface AddPlantedCrops {
    add: (
      planted_crops: AddPlantedCrops.Params
    ) => Promise<AddPlantedCrops.Result>
  }
  
  export namespace AddPlantedCrops {
    export type Params = {
       name_planted_crops: string
    }
    export type Result = {
      id_planted_crops: number
      statusCode: number
      message: string
    }
  }
  