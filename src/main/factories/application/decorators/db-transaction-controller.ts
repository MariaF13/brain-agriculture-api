// Função para criar uma instância de DbTransactionController
// - `controller`: O controlador que será decorado com suporte a transações
// - Retorna uma nova instância de DbTransactionController, passando o controlador e a conexão do PostgreSQL

import { Controller } from '@/application/contracts'
import { DbTransactionController } from '@/application/decorators'
import { makePgConnection } from '../../infra/repos/postgres/helpers'

export const makePgTransactionController = (
  controller: Controller
): DbTransactionController => {
  return new DbTransactionController(controller, makePgConnection())
}
