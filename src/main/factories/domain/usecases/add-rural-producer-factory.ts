// Fábrica que cria uma instância de `DbAddRuralProducer`.
// - Instancia o repositório `PgRuralProducerRepository` para interagir com o banco de dados PostgreSQL.
// - Retorna uma instância de `DbAddRuralProducer`, passando o repositório como dependência.

import { AddRuralProducer } from '@/domain/contracts/repos'
import { DbAddRuralProducer } from '@/domain/usecases'
import { PgPlantedCropsRepository, PgRuralProducerRepository } from '@/infra/repos/postgress'

export const makeDbAddRuralProducer = (): AddRuralProducer => {
  const pgRuralProducerRepository = new PgRuralProducerRepository()
  const pgPlantedCropsRepository = new PgPlantedCropsRepository()
  return new DbAddRuralProducer(
    pgRuralProducerRepository,
    pgPlantedCropsRepository
  )
}
