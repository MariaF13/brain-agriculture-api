// Interface para gerenciamento de transações no banco de dados.
// - `openTransaction`: Inicia uma nova transação.
// - `closeTransaction`: Fecha a transação, independentemente do resultado.
// - `commit`: Confirma as alterações feitas na transação.
// - `rollback`: Desfaz as alterações feitas na transação em caso de erro.

export interface DbTransaction {
  openTransaction: () => Promise<void>
  closeTransaction: () => Promise<void>
  commit: () => Promise<void>
  rollback: () => Promise<void>
}
