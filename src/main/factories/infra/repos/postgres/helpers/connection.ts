import { PgConnection } from "@/infra/repos/postgress/helpers"

export const makePgConnection = (): PgConnection => {
  return PgConnection.getInstance()
}
