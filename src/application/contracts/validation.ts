// Interface para validação de entrada.
// - O método `validate` recebe um `input` e retorna:
//   - `Error` em caso de falha na validação.
//   - `undefined` se a validação for bem-sucedida.

export interface Validation {
  validate: (input: any) => Error | undefined
}
